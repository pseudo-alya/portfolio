import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { personalData } from "@/utils/data/personalData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${personalData.name} | Portfolio`,
  description: personalData.description,
  keywords: [
    "Alya Al Diqqi",
    "Computer Science",
    "Software Engineer",
    "Machine Learning",
    "Portfolio",
    "AUS",
  ],
  authors: [{ name: personalData.name }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer position="bottom-right" theme="dark" />
        <Navbar />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[75rem] xl:max-w-[85rem] 2xl:max-w-[100rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
