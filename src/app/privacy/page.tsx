"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShieldCheck, Eye, Lock, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="flex-1 py-16 px-6 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-brand-pink/10 blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-brand-peach/15 blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-pink-dark transition mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại Trang chủ</span>
          </Link>

          {/* Glassmorphic Container */}
          <div className="bg-white/50 backdrop-blur-md border border-white/70 p-8 md:p-12 rounded-[32px] shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-pink/10 flex items-center justify-center text-brand-pink-dark">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Chính Sách Bảo Mật</h1>
                <p className="text-xs text-gray-400 mt-1">Cập nhật lần cuối: 6 tháng 6, 2026</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Chào mừng bạn đến với <strong>Jar of Love</strong>. Chúng tôi hiểu rằng những lời nhắn nhủ, kỉ niệm và tâm tư gửi gắm trong chiếc lọ tình yêu là những dữ liệu cực kỳ nhạy cảm và thiêng liêng đối với hai bạn. Chính sách này mô tả cách chúng tôi bảo vệ và xử lý thông tin cá nhân của bạn.
            </p>

            <div className="space-y-8 text-gray-700">
              {/* Section 1 */}
              <section>
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-5 h-5 text-brand-pink-dark" />
                  <h2 className="text-xl font-bold text-gray-900">1. Thông tin chúng tôi thu thập</h2>
                </div>
                <p className="leading-relaxed">
                  Để vận hành ứng dụng một cách tối ưu và đồng bộ hóa tin nhắn giữa hai thiết bị, Jar of Love thu thập các thông tin sau:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1.5 text-sm">
                  <li><strong>Thông tin tài khoản:</strong> Tên hiển thị (Nickname) tự chọn và mã định danh ngẫu nhiên do hệ thống tạo ra.</li>
                  <li><strong>Nội dung lời nhắn:</strong> Các viên thuốc tình yêu (Pill Notes) được mã hóa để lưu giữ lời nhắn của bạn.</li>
                  <li><strong>Thông tin thiết bị:</strong> Loại thiết bị, hệ điều hành để tối ưu hóa hiệu năng và hiển thị giao diện vật lý.</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-5 h-5 text-brand-pink-dark" />
                  <h2 className="text-xl font-bold text-gray-900">2. Mã hóa & Bảo mật dữ liệu</h2>
                </div>
                <p className="leading-relaxed text-sm">
                  Chúng tôi đặt tính riêng tư lên hàng đầu:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1.5 text-sm">
                  <li><strong>Mã hóa đầu cuối:</strong> Mọi lời nhắn bạn viết trong chiếc lọ đều được mã hóa trên đường truyền. Không ai ngoài người sở hữu mã liên kết chiếc lọ có thể giải mã và đọc được các tin nhắn này.</li>
                  <li><strong>Không quảng cáo & Không bán dữ liệu:</strong> Jar of Love cam kết không chia sẻ, bán hay cung cấp thông tin cá nhân hoặc nội dung lời nhắn của bạn cho bất kỳ bên thứ ba nào.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-5 h-5 text-brand-pink-dark" />
                  <h2 className="text-xl font-bold text-gray-900">3. Quyền hạn của người dùng</h2>
                </div>
                <p className="leading-relaxed text-sm">
                  Bạn có toàn quyền kiểm soát dữ liệu tình yêu của mình bất cứ lúc nào:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1.5 text-sm">
                  <li><strong>Xóa chiếc lọ:</strong> Khi bạn chọn xóa chiếc lọ từ phía bạn, toàn bộ tin nhắn và mã kết nối sẽ được xóa vĩnh viễn khỏi máy chủ của chúng tôi.</li>
                  <li><strong>Ngắt liên kết:</strong> Bạn có thể hủy mã liên kết để ngắt quyền truy cập của thiết bị đối tác bất kỳ lúc nào.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="pt-6 border-t border-brand-pink/10">
                <h2 className="text-lg font-bold text-gray-900 mb-2">4. Liên hệ hỗ trợ</h2>
                <p className="text-sm leading-relaxed">
                  Nếu bạn có bất kỳ thắc mắc nào về quyền riêng tư hoặc muốn yêu cầu xóa toàn bộ dữ liệu, vui lòng liên hệ với chúng tôi qua địa chỉ email hỗ trợ: <a href="mailto:support@jaroflove.app" className="text-brand-pink-dark underline">support@jaroflove.app</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
