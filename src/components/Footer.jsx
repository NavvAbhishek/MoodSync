import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <p className="bg-red-100 h-20 flex items-center justify-center font-lilitaOne">
        Design and develop by{" "}
        <Link
          className="text-purple"
          href="https://www.linkedin.com/in/navabhishek/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Navindu Abhishek
        </Link>{" "}
        with 💙
      </p>
    </footer>
  );
};

export default Footer;
