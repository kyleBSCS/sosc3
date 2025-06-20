import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";

const ancizarSerif = Parkinsans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ancizarSerif.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
