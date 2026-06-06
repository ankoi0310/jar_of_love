"use client";

import React from "react";
import { motion } from "framer-motion";
import { Edit3, Share2, Gift } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Edit3 className="w-6 h-6 text-brand-pink-dark" />,
      title: "Bước 1: Tạo lọ & Soạn lời nhắn",
      desc: "Đặt tên cho chiếc lọ đặc biệt của bạn và viết những lời nhắn nhủ, yêu thương hoặc kỷ niệm ngọt ngào (lên đến 50 lời nhắn cho mỗi chiếc lọ).",
    },
    {
      icon: <Share2 className="w-6 h-6 text-brand-pink-dark" />,
      title: "Bước 2: Gửi mã bí mật",
      desc: "Chia sẻ mã code bảo mật hoặc đường liên kết duy nhất cho người ấy. Chiếc lọ sẽ được đồng bộ ngay tức thì trên thiết bị của hai bạn.",
    },
    {
      icon: <Gift className="w-6 h-6 text-brand-pink-dark" />,
      title: "Bước 3: Mở quà & Kết nối",
      desc: "Mỗi khi nhớ bạn, người ấy chỉ cần mở app, xóc nhẹ chiếc lọ và rút ngẫu nhiên một viên thuốc chứa lời nhắn tình yêu của bạn để đọc.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink-dark px-3 py-1 bg-brand-pink/10 rounded-full">
            3 bước đơn giản
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Khởi đầu chiếc lọ tình yêu của hai bạn
          </h2>
          <p className="mt-4 text-gray-600">
            Chỉ mất chưa đầy 2 phút để tạo ra một món quà tinh thần lưu giữ mãi theo thời gian.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Step counter */}
              <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-brand-pink text-white font-bold text-sm flex items-center justify-center shadow-md border-2 border-white">
                {idx + 1}
              </div>

              {/* Icon container */}
              <div className="w-14 h-14 rounded-2xl bg-brand-pink/10 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
