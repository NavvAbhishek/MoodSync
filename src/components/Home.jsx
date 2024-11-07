import Link from "next/link";
import React from "react";


const HomePage = () => {
  return (
    <div className="px-6 lg:px-8 h-[calc(100vh-144px)] flex justify-center items-center">
      <div className="mx-auto max-w-2xl py-14 sm:py-28 ">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-balance text-4xl font-lilitaOne font-bold tracking-tight text-gray-900 sm:text-6xl">
            Sync Your <span className="textGradient">Emotions</span> Every Day
          </h1>
          <p className="mt-6 leading-8 text-purple">
            Your mood matters. With <span className="textGradient font-lilitaOne text-lg">MoodSync</span> track your emotional journey day
            by day, reflect on patterns, and take control of your emotional
            health.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/dashboard" className="purpleBtn">
              Get started
            </Link>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
