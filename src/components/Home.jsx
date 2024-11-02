import Link from "next/link";
import React from "react";


const HomePage = () => {
  return (
    <div className="relative isolate px-6 lg:px-8">
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[1rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div> */}
      <div className="mx-auto max-w-2xl py-14 sm:py-28">
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
