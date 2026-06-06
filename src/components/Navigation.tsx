"use client";

import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 bg-white/40 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-brand-pink-dark">
          <img src="/logo.png" alt="Jar of Love Logo" className="w-8 h-8 object-contain rounded-lg" />
          <span className="font-semibold tracking-wide">Jar of Love</span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/#why" className="hover:text-brand-pink-dark transition">Hành trình</Link>
          <Link href="/#how-it-works" className="hover:text-brand-pink-dark transition">Cách hoạt động</Link>
          <Link href="/#features" className="hover:text-brand-pink-dark transition">Tính năng</Link>
          <Link href="/jars" className="hover:text-brand-pink-dark transition font-semibold text-brand-pink-dark">Chiếc lọ của bạn</Link>
        </nav>

        {/* Action Button */}
        <Link
          href="/login"
          className="px-5 py-2 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold text-sm rounded-full shadow-md shadow-brand-pink/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Đăng nhập
        </Link>
      </div>
    </header>
  );
}
