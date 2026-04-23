import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Image-2 AI",
  description: "Advanced AI image generation model interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
