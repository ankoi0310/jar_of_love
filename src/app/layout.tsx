import type { Metadata } from "next";
import { Quicksand, Caveat, Courier_Prime } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jar of Love - Gói trọn yêu thương vào từng viên thuốc số",
  description: "Đừng để những lời nhắn chân thành trôi đi trong dòng tin nhắn cũ. Hãy tạo một chiếc lọ phép màu, nơi mỗi tâm tư là một món quà đang chờ được mở.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Jar of Love - Gói trọn yêu thương vào từng viên thuốc số",
    description: "Đừng để những lời nhắn chân thành trôi đi trong dòng tin nhắn cũ. Hãy tạo một chiếc lọ phép màu, nơi mỗi tâm tư là một món quà đang chờ được mở.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Jar of Love",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${quicksand.variable} ${caveat.variable} ${courierPrime.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FFF1F1] text-gray-800">
        {children}
      </body>
    </html>
  );
}
