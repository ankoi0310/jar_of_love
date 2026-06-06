"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquareOff, HeartHandshake, Sparkles } from "lucide-react";

export default function WhySection() {
  return (
    <section id="why" className="py-20 bg-white/60 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink-dark px-3 py-1 bg-brand-pink/10 rounded-full">
            Tại sao lại là Jar of Love?
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Hơn cả một ứng dụng nhắn tin, đó là một hành trình cảm xúc.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch mt-8">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col p-8 bg-neutral-50/50 border border-neutral-100 rounded-3xl text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center mb-6">
              <MessageSquareOff className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vấn đề: Tin nhắn dễ trôi và lãng quên</h3>
            <p className="text-gray-600 leading-relaxed">
              Những cuộc trò chuyện hằng ngày thường ngập tràn các tin nhắn thông báo, công việc hoặc lời nói ngắn ngủi dễ bị trôi đi. Theo thời gian, những lời quan tâm chân thành biến mất trong lịch sử trò chuyện dài dặc mà ít khi nào ta tìm đọc lại.
            </p>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col p-8 bg-brand-pink/5 border border-brand-pink/10 rounded-3xl text-left relative overflow-hidden"
          >
            {/* Soft decorative background shape */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/10 rounded-full blur-xl" />

            <div className="w-12 h-12 rounded-2xl bg-brand-pink/20 text-brand-pink-dark flex items-center justify-center mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-pink-dark mb-4">Giải pháp: Trở thành viên thuốc tình yêu</h3>
            <p className="text-gray-600 leading-relaxed">
              Với Jar of Love, mỗi tin nhắn trở thành một "viên thuốc tình yêu" vật lý. Người thương của bạn sẽ cảm nhận được sự hồi hộp như đang mở một hộp quà thực sự mỗi khi chạm vào chiếc lọ, biến thói quen nhắn tin đơn điệu thành một khoảnh khắc kỳ diệu.
            </p>
          </motion.div>
        </div>

        {/* Emphasized quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-8 bg-gradient-to-r from-brand-pink/10 to-brand-peach/10 rounded-3xl max-w-3xl mx-auto border border-white/40 flex flex-col items-center"
        >
          <Sparkles className="w-6 h-6 text-brand-pink-dark mb-3 animate-pulse" />
          <p className="text-lg md:text-xl font-medium text-gray-800 italic font-caveat">
            "Thay thế những tin nhắn khô khan bằng một trải nghiệm mở quà mỗi ngày."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
