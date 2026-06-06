"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function QuoteSection() {
  return (
    <section id="quotes" className="py-24 bg-transparent relative overflow-hidden">
      {/* Visual background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-pink/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative px-6 py-12 md:py-16 bg-white/30 backdrop-blur-md border border-white/60 rounded-[40px] shadow-sm flex flex-col items-center justify-center"
        >
          <div className="absolute -top-6 bg-brand-pink text-white p-3 rounded-full shadow-md">
            <Heart className="w-6 h-6 fill-white" />
          </div>

          <p className="text-3xl md:text-4xl text-brand-pink-dark font-medium leading-relaxed font-caveat max-w-2xl mx-auto">
            "Yêu xa không còn là khoảng cách khi mỗi sáng thức dậy, em biết có một viên thuốc ngọt ngào đang chờ mình trong lọ."
          </p>

          <span className="mt-6 text-sm font-semibold tracking-wide uppercase text-gray-500">
            — Một người dùng giấu tên
          </span>
        </motion.div>
      </div>
    </section>
  );
}
