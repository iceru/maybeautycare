import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"], variable: '--font-urban' });
export const metadata: Metadata = {
  title: "May Beauty Care",
  description: "May Beauty Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
