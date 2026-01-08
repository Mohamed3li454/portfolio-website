import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpaceBackground from "@/components/SpaceBackground";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mohamed Ali | Flutter Developer",
  description:
    "I build scalable and beautiful mobile applications. Flutter Developer portfolio showcasing cross-platform mobile development expertise.",
  keywords: ["Flutter", "Mobile Development", "iOS", "Android", "Cross-platform", "Mohamed Ali"],
  authors: [{ name: "Mohamed Ali" }],
  openGraph: {
    title: "Mohamed Ali | Flutter Developer",
    description: "I build scalable and beautiful mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white relative`}
      >
        <SpaceBackground />
        <CustomCursor />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
