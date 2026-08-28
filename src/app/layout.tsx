import type { Metadata } from "next";
import { Arvo, Work_Sans } from "next/font/google";
import "./globals.css";

const arvo = Arvo({
  variable: "--font-arvo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tommy Knight Coaching | Online Running Coach",
  description:
    "Personal online running coaching from Tommy Knight — training plans, race strategy and accountability built around your goals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${arvo.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream font-sans text-navy">
        {children}
      </body>
    </html>
  );
}
