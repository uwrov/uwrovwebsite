import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium-web",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UWROV – UW Underwater Robotics Team",
    template: "%s | UWROV",
  },
  description:
    "University of Washington's interdisciplinary underwater robotics club. We design, build, and compete with ROVs at the MATE World Championship.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={titilliumWeb.variable}>
      <body className="bg-black text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}