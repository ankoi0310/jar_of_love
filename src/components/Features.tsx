"use client";

import { motion } from "framer-motion";
import { MessageCircleHeart, HelpCircle, EyeOff, History } from "lucide-react";

export default function Features() {
  const mainFeatures = [
    {
      icon: <MessageCircleHeart className="w-7 h-7 text-brand-pink-dark" />,
      title: "Digital Pill Notes",
      desc: "Thay đổi hoàn toàn thói quen gửi tin nhắn. Lời chúc của bạn được đóng gói thành từng viên thuốc nhỏ xinh xắn với phong cách đồ họa ngọt ngào.",
    },
    {
      icon: <HelpCircle className="w-7 h-7 text-brand-pink-dark" />,
      title: "Real-time Physics Animation",
      desc: "Hệ thống mô phỏng vật lý chân thực. Bạn có thể chạm, kéo hoặc xóc nhẹ để cảm nhận những viên thuốc chuyển động va chạm và xếp chồng lên nhau.",
    },
    {
      icon: <EyeOff className="w-7 h-7 text-brand-pink-dark" />,
      title: "Private Sharing",
      desc: "Kết nối 1-1 cực kỳ bảo mật và riêng tư. Chỉ bạn và người ấy sở hữu mã khóa mới có thể cùng tham gia thế giới chứa đầy lời ngọt ngào.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white/40 backdrop-blur-sm relative overflow-hidden">
      {/* Soft light decorative shapes */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-pink/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink-dark px-3 py-1 bg-brand-pink/10 rounded-full">
            Các tính năng nổi bật
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Chăm chút từng lát cắt cảm xúc
          </h2>
          <p className="mt-4 text-gray-600">
            Được thiết kế để giữ ngọn lửa tình cảm luôn bền chặt với trải nghiệm độc đáo, tinh tế và cực kỳ ấm áp.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/50 backdrop-blur-md border border-white/70 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-pink/10 flex items-center justify-center mb-6">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Extra Feature highlighting - History archive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-linear-to-tr from-brand-pink/10 via-white/50 to-brand-peach/10 border border-white/60 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-brand-pink/20 flex items-center justify-center shrink-0 shadow-sm">
              <History className="w-5 h-5 text-brand-pink-dark" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Lịch sử Yêu Thương</h3>
              <p className="text-gray-600 text-sm mt-1 max-w-xl">
                Không tin nhắn nào bị bỏ lỡ. Mọi viên thuốc đã bóc sẽ được tự động lưu trữ trong cuốn sổ nhật ký để cả hai có thể mở ra đọc lại bất cứ lúc nào.
              </p>
            </div>
          </div>
          <div className="text-sm font-semibold text-brand-pink-dark bg-white/80 border border-brand-pink/20 px-5 py-2.5 rounded-full shrink-0 shadow-sm">
            Lưu giữ trọn vẹn kỉ niệm 📖
          </div>
        </motion.div>
      </div>
    </section>
  );
}
