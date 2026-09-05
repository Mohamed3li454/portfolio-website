import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SpaceBackground from "@/components/SpaceBackground";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mohamed Ali | Flutter Developer",
  description:
    "I build scalable and performance optimized mobile applications. Flutter Developer portfolio showcasing cross-platform mobile development expertise.",
  keywords: ["Flutter", "Mobile Development", "iOS", "Android", "Cross-platform", "Mohamed Ali"],
  authors: [{ name: "Mohamed Ali" }],
  openGraph: {
    title: "Mohamed Ali | Flutter Developer",
    description: "I build scalable and performance optimized mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark relative" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased bg-[#0a0a0a] text-white relative`}
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
