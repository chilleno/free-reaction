import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Script from 'next/script';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reaction Free",
  description: "Reaction Free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.youtube.com/iframe_api"
      />
    
      <body className={inter.className}>{children}</body>

      <Script
        src="/app.js" />
    </html>
  );
}
