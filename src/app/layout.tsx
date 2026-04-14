import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Stronger Idea Design",
  description: "A Stronger Idea Design is a senior UX and product design studio helping organizations research, design, and scale digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
