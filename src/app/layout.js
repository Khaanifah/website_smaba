import "./globals.css";
import { Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "SMA Negeri 1 Bawang",
  description: "Website profil SMA Negeri 1 Bawang, Banjarnegara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${lato.variable} font-sans flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}