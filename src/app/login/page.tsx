"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail, Heart, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email || !formData.password) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    if (data.session) {
      // Store user info locally if needed
      localStorage.setItem("currentUser", JSON.stringify(data.session.user));
      setSuccess("Đăng nhập thành công! Đang chuyển hướng...");
      setTimeout(() => {
        router.push("/jars");
      }, 1200);
    }
  };


  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col justify-center items-center py-16 px-6 relative overflow-hidden">
        {/* Soft background light */}
        <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-brand-pink/15 blur-3xl -z-10" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-brand-peach/20 blur-3xl -z-10" />

        <div className="w-full max-w-md bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-[32px] shadow-sm relative">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-brand-pink/10 rounded-2xl mb-4 text-brand-pink-dark">
              <Heart className="w-8 h-8 fill-brand-pink text-brand-pink-dark animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Mở lọ tình yêu</h1>
            <p className="text-sm text-gray-500 mt-1">Đăng nhập để quản lý và xem những chiếc lọ của bạn</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-xs text-center font-medium">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-2xl text-xs text-center font-medium flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4 fill-green-500 text-green-600" />
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white/70 border border-brand-pink/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition duration-300"
                />
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white/70 border border-brand-pink/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition duration-300"
                />
                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-xs font-semibold text-brand-pink-dark hover:underline">
                Quên mật khẩu?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold rounded-full shadow-lg shadow-brand-pink/20 transition duration-300 transform active:scale-98"
            >
              Đăng nhập
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-brand-pink/10 text-center">
            <span className="text-xs text-gray-500">Chưa có tài khoản? </span>
            <Link href="/register" className="text-xs font-bold text-brand-pink-dark hover:underline">
              Đăng ký ngay
            </Link>
          </div>

          <div className="mt-4 text-center">
            <span className="text-[10px] text-gray-400 font-typewriter">
              Tài khoản dùng thử: demo@love.com | mk: 123456
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
