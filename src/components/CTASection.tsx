"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section id="download" className="py-24 bg-gradient-to-b from-transparent to-brand-pink/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-48 h-48 rounded-full bg-brand-pink/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-brand-peach/20 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-pink-dark/10 text-brand-pink-dark mb-6">
            <Sparkles className="w-3.5 h-3.5 fill-brand-pink-dark" />
            <span>Sẵn sàng kết nối</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hãy để lọ thuốc của bạn <br />
            luôn đầy ắp lời yêu thương ngay hôm nay.
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-xl">
            Tải xuống ứng dụng miễn phí trên iOS và Android để bắt đầu xây dựng thế giới bí mật của riêng hai bạn.
          </p>

          {/* Badges Container */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl shadow-lg transition duration-300 w-52 text-left"
            >
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,21.97 9.09,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
              </svg>
              <div>
                <p className="text-[10px] uppercase font-semibold text-gray-400">Download on the</p>
                <p className="text-sm font-bold -mt-0.5">App Store</p>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl shadow-lg transition duration-300 w-52 text-left"
            >
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                <path d="M3,5.27V18.73L16.55,12L3,5.27M17.87,11.33L19.5,12.16L17.87,13L16.58,12L17.87,11.33M3,3.15L17.46,10.37L15,11.59L3,3.15M3,20.85L15,12.41L17.46,13.63L3,20.85Z" />
              </svg>
              <div>
                <p className="text-[10px] uppercase font-semibold text-gray-400">Get it on</p>
                <p className="text-sm font-bold -mt-0.5">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
