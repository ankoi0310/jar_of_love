"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { Heart, Sparkles } from "lucide-react";

interface PillData {
  body: Matter.Body;
  color: string;
  faceType: number;
}

const LOVE_MESSAGES = [
  "Hôm nay anh nhớ em nhiều hơn hôm qua một chút. 💕",
  "Em là điều ngọt ngào nhất trong cuộc sống của anh. 🌸",
  "Cảm ơn vì đã luôn ở bên cạnh và lắng nghe anh. 🥰",
  "Gửi đến em một chiếc ôm thật ấm áp từ xa. 🤗",
  "Nụ cười của em là động lực lớn nhất của anh mỗi ngày. ✨",
  "Mỗi ngày có em đều là một ngày đặc biệt. 💖",
  "Anh yêu em nhiều hơn cả những ngôi sao trên bầu trời. 🌟",
  "Hãy ăn uống đầy đủ và giữ gìn sức khỏe nhé, cục cưng! 🍜",
  "Khoảng cách chỉ là thử thách, tình yêu của chúng ta mới là mãi mãi. 💑",
  "Chỉ cần nghĩ về em là anh lại mỉm cười một mình. 😊",
  "Chúc em một ngày tràn ngập niềm vui và may mắn! ☀️",
  "Yêu thương này gửi trọn vào lọ phép màu gửi đến em. 🎁",
  "Em chính là món quà tuyệt vời nhất mà anh có được. 💝"
];

export default function LoveJarPhysics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const pillsRef = useRef<PillData[]>([]);
  const [stats, setStats] = useState({ count: 22 });
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  // Add a pill to the world
  const spawnPill = (world: Matter.World, x: number, y: number) => {
    const colors = [
      "#F48FB1", // Brand Pink
      "#FFE0B2", // Peach
      "#F8BBD0", // Soft pink
      "#FF8A80", // Accent Red/Orange
      "#FFD54F", // Warm Amber
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const width = 46;
    const height = 22;

    const pill = Matter.Bodies.rectangle(x, y, width, height, {
      restitution: 0.55,
      friction: 0.1,
      angle: Math.random() * Math.PI * 2,
      chamfer: { radius: height / 2 - 1 }, // Perfect capsule shape
      label: "pill",
    });

    Matter.Composite.add(world, pill);
    pillsRef.current.push({
      body: pill,
      color: randomColor,
      faceType: Math.floor(Math.random() * 4), // Different cute faces
    });
  };

  const handleAddPill = () => {
    if (!engineRef.current) return;
    const world = engineRef.current.world;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Spawn near the top center
    const x = canvas.width / 2 + (Math.random() * 60 - 30);
    const y = 80;
    spawnPill(world, x, y);
    setStats({ count: pillsRef.current.length });
  };

  const handleShake = () => {
    if (pillsRef.current.length === 0) return;

    // Shake all pills inside the jar
    pillsRef.current.forEach((pill) => {
      Matter.Body.applyForce(
        pill.body,
        pill.body.position,
        {
          x: (Math.random() - 0.5) * 0.1,
          y: -Math.random() * 0.15 - 0.08,
        }
      );
    });

    // Pick a random pill to pop and show message
    const randomIndex = Math.floor(Math.random() * pillsRef.current.length);
    const chosenPill = pillsRef.current[randomIndex];
    const randomMsg = LOVE_MESSAGES[Math.floor(Math.random() * LOVE_MESSAGES.length)];

    setTimeout(() => {
      if (engineRef.current) {
        // Remove the selected pill from the physics engine
        Matter.Composite.remove(engineRef.current.world, chosenPill.body);
      }
      // Remove it from the local list so it doesn't render
      pillsRef.current.splice(randomIndex, 1);
      setStats({ count: pillsRef.current.length });

      // Trigger the message popup modal
      setActiveMessage(randomMsg);
    }, 450); // Small delay to sync with physical shake force
  };

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Set initial canvas size
    const width = container.clientWidth;
    const height = 450;
    canvas.width = width;
    canvas.height = height;

    // Setup Engine & World
    const engine = Matter.Engine.create({
      gravity: { y: 0.9 },
    });
    engineRef.current = engine;
    const world = engine.world;

    // Create Jar Walls matching the visual glass jar contour
    const wallThickness = 40;
    const jarBottomY = height - 30;
    const jarLeftX = 40;
    const jarRightX = width - 40;

    // Bottom boundary
    const bottomWall = Matter.Bodies.rectangle(
      width / 2,
      jarBottomY + wallThickness / 2,
      width,
      wallThickness,
      { isStatic: true, friction: 0.3 }
    );

    // Left curved boundary logic (multiple segments to make it round/bottle shaped)
    const leftWall = Matter.Bodies.rectangle(
      jarLeftX - wallThickness / 2,
      height / 2 + 20,
      wallThickness,
      height,
      { isStatic: true, friction: 0.3 }
    );

    // Right curved boundary logic
    const rightWall = Matter.Bodies.rectangle(
      jarRightX + wallThickness / 2,
      height / 2 + 20,
      wallThickness,
      height,
      { isStatic: true, friction: 0.3 }
    );

    // Top bottleneck boundaries (narrower opening at top)
    const leftShoulder = Matter.Bodies.rectangle(
      jarLeftX + 20,
      120,
      100,
      20,
      { isStatic: true, angle: Math.PI / 6, friction: 0.3 }
    );

    const rightShoulder = Matter.Bodies.rectangle(
      jarRightX - 20,
      120,
      100,
      20,
      { isStatic: true, angle: -Math.PI / 6, friction: 0.3 }
    );

    // Cork/Lid boundary at the top (directly blocks any pills from escaping the neck)
    const corkWall = Matter.Bodies.rectangle(
      width / 2,
      50,
      110,
      20,
      { isStatic: true, friction: 0.3 }
    );

    // Add boundaries to world
    Matter.Composite.add(world, [
      bottomWall,
      leftWall,
      rightWall,
      leftShoulder,
      rightShoulder,
      corkWall,
    ]);

    // Pre-populate with sweet pills
    pillsRef.current = [];
    const initialPillCount = 22;
    for (let i = 0; i < initialPillCount; i++) {
      const px = jarLeftX + 50 + Math.random() * (jarRightX - jarLeftX - 100);
      const py = 120 + Math.random() * 200;
      spawnPill(world, px, py);
    }
    setStats({ count: initialPillCount });

    // Mouse control
    const mouse = Matter.Mouse.create(canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Matter.Composite.add(world, mouseConstraint);

    // Custom Canvas Render Loop
    const ctx = canvas.getContext("2d");
    let animationId: number;

    const renderLoop = () => {
      if (!ctx || !canvas) return;

      // Update engine
      Matter.Engine.update(engine, 16.666);

      // Clear fully
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Jar Glass Details (Visuals inside Canvas)
      ctx.save();
      // Draw jar neck & cork
      ctx.fillStyle = "#D7CCC8"; // Soft brown for cork
      ctx.beginPath();
      ctx.roundRect(canvas.width / 2 - 40, 25, 80, 20, 4);
      ctx.fill();

      ctx.fillStyle = "#A1887F"; // Cork top shading
      ctx.fillRect(canvas.width / 2 - 38, 25, 76, 5);

      // Jar opening glass lip
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(canvas.width / 2 - 55, 45, 110, 15, 6);
      ctx.stroke();
      ctx.restore();

      // 2. Draw Pills
      pillsRef.current.forEach((pill) => {
        const { position, angle } = pill.body;
        const width = 46;
        const height = 22;
        const radius = height / 2;

        ctx.save();
        ctx.translate(position.x, position.y);
        ctx.rotate(angle);

        // Pill shadow
        ctx.shadowColor = "rgba(180, 100, 110, 0.15)";
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 4;

        // Draw pill container path
        ctx.beginPath();
        ctx.arc(-width / 2 + radius, 0, radius, Math.PI / 2, -Math.PI / 2); // left arc
        ctx.lineTo(width / 2 - radius, -radius);
        ctx.arc(width / 2 - radius, 0, radius, -Math.PI / 2, Math.PI / 2); // right arc
        ctx.lineTo(-width / 2 + radius, radius);
        ctx.closePath();

        // Clip & Fill Left half (Colored)
        ctx.save();
        ctx.beginPath();
        ctx.rect(-width / 2 - 2, -radius - 2, width / 2 + 2, height + 4);
        ctx.clip();
        ctx.fillStyle = pill.color;
        // Re-draw and fill shape within clip
        ctx.beginPath();
        ctx.arc(-width / 2 + radius, 0, radius, Math.PI / 2, -Math.PI / 2);
        ctx.lineTo(0, -radius);
        ctx.lineTo(0, radius);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Clip & Fill Right half (White/Cream)
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, -radius - 2, width / 2 + 2, height + 4);
        ctx.clip();
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.moveTo(0, -radius);
        ctx.lineTo(width / 2 - radius, -radius);
        ctx.arc(width / 2 - radius, 0, radius, -Math.PI / 2, Math.PI / 2);
        ctx.lineTo(0, radius);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Draw middle line separator
        ctx.shadowColor = "transparent"; // turn off shadow
        ctx.strokeStyle = "rgba(0, 0, 0, 0.06)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -radius + 1);
        ctx.lineTo(0, radius - 1);
        ctx.stroke();

        // Highlight/Gloss Overlay
        ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
        ctx.beginPath();
        ctx.ellipse(-width / 4, -radius + 4, width / 6, 2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw capsule cute features
        ctx.fillStyle = "rgba(60, 40, 50, 0.7)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (pill.faceType === 0) {
          // Heart pill
          ctx.fillStyle = "#FF4081";
          ctx.font = "8px Arial";
          ctx.fillText("♥", width / 4, 0);
        } else if (pill.faceType === 1) {
          // Cute smiley face
          ctx.font = "bold 8px Arial";
          ctx.fillText("◡‿◡", width / 4, -1);
        } else if (pill.faceType === 2) {
          // Wink face
          ctx.font = "bold 8px Arial";
          ctx.fillText("•‿<", width / 4, -1);
        } else {
          // Love text
          ctx.fillStyle = "rgba(230, 80, 120, 0.9)";
          ctx.font = "bold 7px Quicksand, sans-serif";
          ctx.fillText("Love", width / 4, 0);
        }

        ctx.restore();
      });

      animationId = requestAnimationFrame(renderLoop);
    };

    // Run custom loop
    renderLoop();

    // Handle resize
    const handleResize = () => {
      if (!container || !canvas) return;
      const w = container.clientWidth;
      canvas.width = w;

      // Reposition static walls
      Matter.Body.setPosition(bottomWall, { x: w / 2, y: jarBottomY + wallThickness / 2 });
      Matter.Body.setPosition(leftWall, { x: jarLeftX - wallThickness / 2, y: height / 2 + 20 });
      Matter.Body.setPosition(rightWall, { x: w - jarLeftX + wallThickness / 2, y: height / 2 + 20 });
      Matter.Body.setPosition(leftShoulder, { x: jarLeftX + 20, y: 120 });
      Matter.Body.setPosition(rightShoulder, { x: w - jarLeftX - 20, y: 120 });
      Matter.Body.setPosition(corkWall, { x: w / 2, y: 50 });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      Matter.Composite.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none">
      {/* 3D Glass Jar effect frame using HTML/CSS overlay */}
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full h-[450px] bg-white/30 backdrop-blur-[6px] border border-white/50 shadow-[0_25px_60px_-15px_rgba(244,143,177,0.3)] rounded-[60px_60px_45px_45px] flex flex-col justify-end before:absolute before:inset-0 before:bg-linear-to-tr before:from-transparent before:via-white/10 before:to-white/30 before:pointer-events-none after:absolute after:inset-y-0 after:left-4 after:w-8 after:bg-linear-to-r after:from-white/20 after:to-transparent after:pointer-events-none"
      >
        <canvas ref={canvasRef} className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing" />

        {/* Jar reflection highlighted line right */}
        <div className="absolute top-[120px] right-6 bottom-10 w-2.5 bg-white/25 rounded-full pointer-events-none z-20 blur-[1px]" />
      </div>

      {/* Floating Buttons to Interact with the jar */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <button
          onClick={handleAddPill}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/80 hover:bg-brand-pink-light border border-brand-pink/20 text-brand-pink-dark font-medium rounded-full shadow-md transition duration-300 transform active:scale-95 text-sm"
        >
          <Heart className="w-4 h-4 fill-brand-pink" />
          <span>Thêm lời nhắn ({stats.count})</span>
        </button>

        <button
          onClick={handleShake}
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-pink text-white hover:bg-brand-pink-dark font-medium rounded-full shadow-md transition duration-300 transform active:scale-95 text-sm"
        >
          <Sparkles className="w-4 h-4 fill-white" />
          <span>Lắc lọ phép</span>
        </button>
      </div>

      {/* Message Modal Overlay */}
      {activeMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
          <div className="bg-white/90 backdrop-blur-md border border-brand-pink/20 max-w-sm w-full p-8 rounded-3xl shadow-2xl text-center transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-pink/15 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 fill-brand-pink text-brand-pink-dark animate-pulse" />
            </div>

            <h4 className="text-xs font-bold tracking-wider text-brand-pink-dark uppercase mb-3">
              Thông điệp yêu thương
            </h4>

            <p className="text-2xl text-gray-800 font-medium leading-relaxed font-caveat min-h-[60px] flex items-center justify-center">
              "{activeMessage}"
            </p>

            <button
              onClick={() => setActiveMessage(null)}
              className="mt-8 w-full py-3 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold rounded-full shadow-md shadow-brand-pink/25 transition duration-300 active:scale-95"
            >
              Nhận lấy yêu thương
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
