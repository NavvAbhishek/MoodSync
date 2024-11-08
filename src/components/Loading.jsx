import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <i className="fa-solid fa-spinner animate-spin text-4xl sm:text-5xl"></i>
    </div>
  );
};

export default Loading;
