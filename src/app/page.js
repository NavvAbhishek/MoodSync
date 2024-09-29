import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <HomePage/>
      <Footer/>
    </main>
  );
};

export default page;
