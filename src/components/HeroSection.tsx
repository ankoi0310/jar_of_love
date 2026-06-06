"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import LoveJarPhysics from "./LoveJarPhysics";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 px-6">
      {/* Background soft light circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-brand-pink/15 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-peach/25 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-pink/10 text-brand-pink-dark mb-6 border border-brand-pink/10">
              💝 Hộp quà tinh thần cho hai người
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Gói trọn yêu thương <br />
              vào từng{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink-dark to-brand-pink">
                viên thuốc số
              </span>
              .
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Đừng để những lời nhắn chân thành trôi đi trong dòng tin nhắn cũ.
              Hãy tạo một chiếc lọ phép màu, nơi mỗi tâm tư là một món quà đang
              chờ được mở.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold rounded-full shadow-lg shadow-brand-pink/30 flex items-center justify-center gap-2 transition duration-300 transform hover:-translate-y-0.5"
            >
              <span>Bắt đầu tạo Lọ tình yêu</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#download"
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-white/80 border border-brand-pink/30 text-brand-pink-dark font-semibold rounded-full shadow-sm flex items-center justify-center gap-2 transition duration-300 transform hover:-translate-y-0.5"
            >
              <Smartphone className="w-5 h-5" />
              <span>Tải app miễn phí</span>
            </a>
          </motion.div>

          {/* Social Proof Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-4 border-t border-brand-pink/10 pt-8"
          >
            <div className="flex -space-x-3">
              <span className="w-9 h-9 rounded-full bg-brand-pink border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
                A
              </span>
              <span className="w-9 h-9 rounded-full bg-brand-peach border-2 border-white flex items-center justify-center text-gray-700 text-xs font-bold shadow-sm">
                M
              </span>
              <span className="w-9 h-9 rounded-full bg-pink-300 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
                T
              </span>
            </div>
            <div className="text-left text-xs text-gray-500">
              <p className="font-semibold text-gray-700">
                “Mở quà mỗi ngày, thay thế các tin nhắn khô khan.”
              </p>
              <p>Tham gia cùng hàng ngàn cặp đôi gắn kết hạnh phúc.</p>
            </div>
          </motion.div>
        </div>

        {/* Right Interactive Jar Column */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <LoveJarPhysics />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
