import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const InterFont = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "MediQueue",
    template: "%s | MediQueue",
  },
  description: "Find and book the best tutors with MediQueue.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${InterFont.className} h-full antialiased`}
    >
      <body>
          <NavBar />
          {children}
          <Footer />
          <ToastContainer position="bottom-right" autoClose={3000} />
      </body>
    </html>
  );
}
