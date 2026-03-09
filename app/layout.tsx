import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SlaterBilt",
  description: "Performance builds, honest reviews, and real ownership content."
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
