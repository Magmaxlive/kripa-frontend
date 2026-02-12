import { Geist, Geist_Mono,Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import { ThemeProvider } from "@/components/themes/Theme-provider";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import WhatsApp from "@/components/common/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700","800"], 
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "Kripa Financial Solutions",
  description: "Your Trusted Financial Advisers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} antialiased`}>
        
            <Header/>
            {children}
            <WhatsApp/>
            <ScrollToTop/>
            <Footer/>
      </body>
    </html>
  );
}
