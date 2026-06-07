"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Heart, Clipboard, Trash2, ShieldCheck, Sparkles } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface Jar {
  id: string;
  name: string;
  description: string;
  code: string;
  pillCount: number;
  createdAt: string;
}

export default function JarsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [jars, setJars] = useState<Jar[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user logged in
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }

    // Load Jars
    const savedJars = JSON.parse(localStorage.getItem(`jars_${user.email}`) || "[]");

    // Seed default jars if empty
    if (savedJars.length === 0) {
      const defaultJars = [
        {
          id: "1",
          name: "Lọ kỉ niệm 1 năm yêu nhau 💖",
          description: "Nơi chứa đựng 365 lời ngọt ngào dành tặng em mỗi sáng.",
          code: "LOVE-365D",
          pillCount: 22,
          createdAt: "2026-05-20",
        },
        {
          id: "2",
          name: "Những điều muốn nói lúc giận dỗi 🥺",
          description: "Khi nào tụi mình cãi nhau thì hãy bốc một viên thuốc ngọt ngào này nha.",
          code: "HEAL-4YOU",
          pillCount: 8,
          createdAt: "2026-06-01",
        }
      ];
      localStorage.setItem(`jars_${user.email}`, JSON.stringify(defaultJars));
      setJars(defaultJars);
    } else {
      setJars(savedJars);
    }
    setLoading(false);
  }, [authLoading, user]);

  const handleCopyLink = (code: string, id: string) => {
    const link = `${window.location.origin}/share/${code}`;
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDeleteJar = (id: string) => {
    if (!user) return;
    if (confirm("Bạn có chắc chắn muốn xóa chiếc lọ này và tất cả lời nhắn bên trong?")) {
      const updated = jars.filter((j) => j.id !== id);
      setJars(updated);
      localStorage.setItem(`jars_${user.email}`, JSON.stringify(updated));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-pink-light">
        <div className="text-center">
          <Sparkles className="w-8 h-8 text-brand-pink animate-spin mx-auto mb-4" />
          <p className="text-gray-500 font-medium text-sm">Đang tải chiếc lọ của bạn...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <main className="flex-1 py-16 px-6 max-w-6xl mx-auto w-full relative">
        {/* Decorative lights */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-brand-pink/10 blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-brand-peach/15 blur-3xl -z-10" />

        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-brand-pink/10 pb-8 mb-12">
          <div>
            <span className="text-xs font-semibold text-brand-pink-dark px-2.5 py-1 bg-brand-pink/10 rounded-full">
              Khu vườn tình yêu
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              Xin chào, <span className="text-brand-pink-dark">{user?.name}</span> 👋
            </h1>
            <p className="text-sm text-gray-500 mt-1">Quản lý những chiếc lọ phép chứa đựng ngàn tâm tư của bạn</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/jars/create"
              className="flex items-center gap-2 px-5 py-3 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold rounded-full shadow-md shadow-brand-pink/20 transition duration-300"
            >
              <Plus className="w-4 h-4" />
              <span>Tạo chiếc lọ mới</span>
            </Link>
          </div>
        </div>

        {/* Jars Grid List */}
        {jars.length === 0 ? (
          <div className="text-center py-20 bg-white/30 backdrop-blur-md rounded-3xl border border-white/60 p-8">
            <div className="w-16 h-16 rounded-full bg-brand-pink/15 flex items-center justify-center mx-auto mb-6 text-brand-pink-dark">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Chưa có chiếc lọ nào</h3>
            <p className="text-gray-500 mt-2 max-w-sm mx-auto text-sm">
              Hãy tạo chiếc lọ đầu tiên của bạn để gửi lời nhắn ngọt ngào cho người ấy ngay hôm nay!
            </p>
            <Link
              href="/jars/create"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-pink hover:bg-brand-pink-dark text-white font-semibold rounded-full mt-6 shadow-md transition duration-300"
            >
              <Plus className="w-4 h-4" />
              <span>Tạo chiếc lọ đầu tiên</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jars.map((jar) => (
              <div
                key={jar.id}
                className="bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-[28px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-pink-dark bg-brand-pink/10 px-2.5 py-1 rounded-full">
                      🔑 {jar.code}
                    </span>
                    <span className="text-[10px] text-gray-400 font-typewriter">
                      {jar.createdAt}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{jar.name}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    {jar.description}
                  </p>
                </div>

                <div className="border-t border-brand-pink/10 pt-4 mt-4">
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="text-gray-500">Số lượng lời nhắn:</span>
                    <span className="font-bold text-brand-pink-dark">{jar.pillCount} viên thuốc</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopyLink(jar.code, jar.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white/70 hover:bg-brand-pink/10 border border-brand-pink/15 text-brand-pink-dark text-xs font-semibold rounded-full transition duration-200"
                    >
                      {copiedId === jar.id ? (
                        <>
                          <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                          <span className="text-green-600">Đã sao chép!</span>
                        </>
                      ) : (
                        <>
                          <Clipboard className="w-3.5 h-3.5" />
                          <span>Lấy mã chia sẻ</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleDeleteJar(jar.id)}
                      className="p-2 bg-white/70 hover:bg-red-50 border border-red-200 text-red-500 hover:text-red-700 rounded-full transition duration-200"
                      title="Xóa chiếc lọ"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
