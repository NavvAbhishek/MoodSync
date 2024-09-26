import { Poppins, Lilita_One } from "next/font/google";
import "./globals.css";

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
      <body className={`${lilitaOne.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
