import { Poppins, Lilita_One } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "./head";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lilitaOne",
});

export const metadata = {
  title: "Mood Sync",
  description: "Save your daily mood!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CustomProvider theme="light">
        <Head />
        <AuthProvider>
          <body
            className={`${lilitaOne.variable} ${poppins.variable} w-full max-w-[1000px] mx-auto min-h-screen flex flex-col antialiased`}
          >
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </body>
        </AuthProvider>
      </CustomProvider>
    </html>
  );
}
