import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <p className="h-20 text-xl text-center font-lilitaOne">
        Design and develop by
        <span>&nbsp;</span>
        <span>
          <Link
            className="text-purple"
            href="https://www.linkedin.com/in/navabhishek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navindu Abhishek
          </Link>
        </span>
        <span>&nbsp;</span>
        with 💙
      </p>
    </footer>
  );
};

export default Footer;
