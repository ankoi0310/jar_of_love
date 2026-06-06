"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-sm border-t border-brand-pink/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Brand */}
        <div className="flex items-center gap-2 font-bold text-brand-pink-dark">
          <img src="/logo.png" alt="Jar of Love Logo" className="w-6 h-6 object-contain rounded-md" />
          <span>Jar of Love</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 font-medium">
          <Link href="/" className="hover:text-brand-pink-dark transition">Trang chủ</Link>
          <Link href="/privacy" className="hover:text-brand-pink-dark transition">Chính sách bảo mật</Link>
          <a href="#" className="hover:text-brand-pink-dark transition">Hỗ trợ</a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} Jar of Love. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
