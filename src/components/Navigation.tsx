"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { user, loading, signOut } = useAuth();

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
        </nav>

        {/* Action Button */}
        {loading ? null : user ? (
          <div className="relative inline-block text-left">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center gap-1 px-4 py-2 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold text-sm rounded-full shadow-md shadow-brand-pink/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {user.email?.split('@')[0] || 'User'}
              <ChevronDown className="w-4 h-4" />
            </button>
            {open && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/jars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Quản lý lọ tình yêu
                  </Link>
                  <button
                    onClick={signOut}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Đăng xuất
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="px-5 py-2 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold text-sm rounded-full shadow-md shadow-brand-pink/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Đăng nhập
          </Link>
        )}

      </div>
    </header>
  );
}
