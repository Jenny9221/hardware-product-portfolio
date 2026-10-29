import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jenny Huang | Selected Works",
  description: "Jenny Huang 的产品、体验与交互设计作品集。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
