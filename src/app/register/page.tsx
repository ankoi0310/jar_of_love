"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Heart, CheckSquare } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Vui lòng điền đầy đủ tất cả các trường.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Xác nhận mật khẩu không khớp.");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: { data: { name: formData.name } },
    });

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess("Đăng ký thành công! Đang chuyển đến trang đăng nhập...");
    router.push("/login");
  };

  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col justify-center items-center py-16 px-6 relative overflow-hidden">
        {/* Decorative background light */}
        <div className="absolute top-10 right-1/3 w-96 h-96 rounded-full bg-brand-pink/10 blur-3xl -z-10" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-brand-peach/15 blur-3xl -z-10" />

        <div className="w-full max-w-md bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-[32px] shadow-sm relative">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-brand-pink/10 rounded-2xl mb-4 text-brand-pink-dark">
              <Heart className="w-8 h-8 fill-brand-pink text-brand-pink-dark" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Bắt đầu hành trình</h1>
            <p className="text-sm text-gray-500 mt-1">Đăng ký tài khoản để bắt đầu gửi đi ngàn yêu thương</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-xs text-center font-medium">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-2xl text-xs text-center font-medium">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Tên hiển thị
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ví dụ: Anh yêu, Em bé"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white/70 border border-brand-pink/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition duration-300"
                />
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="love@example.com"
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

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white/70 border border-brand-pink/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition duration-300"
                />
                <CheckSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold rounded-full shadow-lg shadow-brand-pink/20 transition duration-300 transform active:scale-98"
            >
              Đăng ký tài khoản
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-brand-pink/10 text-center">
            <span className="text-xs text-gray-500">Đã có tài khoản? </span>
            <Link href="/login" className="text-xs font-bold text-brand-pink-dark hover:underline">
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
