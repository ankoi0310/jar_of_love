"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Sparkles, Heart, Plus, Trash2, Key } from "lucide-react";

export default function CreateJarPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [messages, setMessages] = useState<string[]>([""]);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (!user) {
      router.push("/login");
      return;
    }
    setCurrentUser(user);

    // Auto generate code
    const generatedCode = "LOVE-" + Math.floor(1000 + Math.random() * 9000);
    setCode(generatedCode);
  }, []);

  const handleAddMessageField = () => {
    if (messages.length >= 50) {
      alert("Bạn chỉ có thể tạo tối đa 50 lời nhắn cho một chiếc lọ.");
      return;
    }
    setMessages([...messages, ""]);
  };

  const handleRemoveMessageField = (index: number) => {
    if (messages.length === 1) return;
    const updated = [...messages];
    updated.splice(index, 1);
    setMessages(updated);
  };

  const handleMessageChange = (index: number, val: string) => {
    const updated = [...messages];
    updated[index] = val;
    setMessages(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Vui lòng điền tên chiếc lọ.");
      return;
    }

    if (!code.trim()) {
      setError("Vui lòng nhập mã bảo mật chia sẻ.");
      return;
    }

    const filteredMessages = messages.filter((msg) => msg.trim() !== "");
    if (filteredMessages.length === 0) {
      setError("Vui lòng nhập ít nhất 1 lời nhắn.");
      return;
    }

    // Save to user jars list in localStorage
    const savedJars = JSON.parse(localStorage.getItem(`jars_${currentUser.email}`) || "[]");
    
    // Check if code exists
    const codeExists = savedJars.some((j: any) => j.code.toLowerCase() === code.trim().toLowerCase());
    if (codeExists) {
      setError("Mã bảo mật này đã được sử dụng trong danh sách chiếc lọ của bạn.");
      return;
    }

    const newJar = {
      id: Date.now().toString(),
      name: name.trim(),
      description: description.trim() || "Chiếc lọ chứa đựng tình yêu thương.",
      code: code.trim().toUpperCase(),
      pillCount: filteredMessages.length,
      createdAt: new Date().toISOString().split("T")[0],
    };

    savedJars.push(newJar);
    localStorage.setItem(`jars_${currentUser.email}`, JSON.stringify(savedJars));

    // Save actual notes separately if needed (simulated)
    localStorage.setItem(`notes_${newJar.code}`, JSON.stringify(filteredMessages));

    router.push("/jars");
  };

  return (
    <>
      <Navigation />
      <main className="flex-1 py-16 px-6 max-w-3xl mx-auto w-full relative">
        {/* Soft decorative background circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-pink/10 blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-peach/15 blur-3xl -z-10" />

        {/* Back link */}
        <Link
          href="/jars"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-pink-dark transition mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Quay lại trang quản lý</span>
        </Link>

        {/* Form Container */}
        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 md:p-10 rounded-[32px] shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-brand-pink/15 flex items-center justify-center text-brand-pink-dark">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tạo chiếc lọ mới</h1>
              <p className="text-xs text-gray-500 mt-1">Gửi ngàn tâm tư ngọt ngào vào trong lọ thủy tinh</p>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs text-center font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Jar Name */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Tên chiếc lọ <span className="text-brand-pink-dark">*</span>
              </label>
              <input
                type="text"
                placeholder="Ví dụ: Lọ ngọt ngào của tụi mình"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/70 border border-brand-pink/15 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition duration-300"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Mô tả chiếc lọ (Không bắt buộc)
              </label>
              <textarea
                placeholder="Nói ngắn gọn về lý do tạo chiếc lọ này..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 bg-white/70 border border-brand-pink/15 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition duration-300 resize-none"
              />
            </div>

            {/* Secret Code */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-brand-pink-dark" />
                <span>Mã bảo mật chia sẻ *</span>
              </label>
              <input
                type="text"
                placeholder="Ví dụ: LOVE-2026"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-3 bg-white/70 border border-brand-pink/15 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition duration-300 font-typewriter uppercase"
                required
              />
              <p className="text-[10px] text-gray-400 mt-1 ml-1">
                Mã định danh duy nhất để người ấy có thể kết nối vào chiếc lọ.
              </p>
            </div>

            {/* Message Notes List */}
            <div className="border-t border-brand-pink/10 pt-6">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 ml-1 flex items-center justify-between">
                <span>Soạn những viên thuốc tình yêu ({messages.length})</span>
                <span className="text-[10px] text-gray-400 normal-case font-normal">Tối đa 50 viên</span>
              </label>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {messages.map((msg, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <span className="text-xs text-gray-400 font-typewriter w-6 text-right">#{idx + 1}</span>
                    <input
                      type="text"
                      placeholder="Viết một lời yêu thương..."
                      value={msg}
                      onChange={(e) => handleMessageChange(idx, e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-white/60 border border-brand-pink/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveMessageField(idx)}
                      disabled={messages.length === 1}
                      className="p-2 bg-white/60 hover:bg-red-50 text-gray-400 hover:text-red-500 border border-gray-200 rounded-xl transition duration-200 disabled:opacity-40"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleAddMessageField}
                className="mt-4 flex items-center gap-1.5 px-4 py-2 bg-white/80 hover:bg-brand-pink-light border border-brand-pink/15 text-brand-pink-dark text-xs font-semibold rounded-full shadow-sm transition duration-200"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Thêm viên thuốc</span>
              </button>
            </div>

            <button
              type="submit"
              className="w-full mt-8 py-4 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold rounded-full shadow-lg shadow-brand-pink/20 transition duration-300 transform active:scale-98 flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Khởi tạo chiếc lọ phép màu</span>
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
