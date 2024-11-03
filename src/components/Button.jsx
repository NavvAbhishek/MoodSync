import React from "react";

const Button = (props) => {
  const { text, dark, full, clickHandler } = props;
  return (
    <button
      onClick={clickHandler}
      className={
        "text-lg border-purple rounded-full overflow-hidden duration-200 border-2 border-solid font-lilitaOne " +
        (dark ? "text-white bg-purple" : " text-purple bg-yellow ") +
        (full ? "grid place-items-center w-full" : "")
      }
    >
      <p className="px-6 sm:px-10 whitespace-nowrap py-2">{text}</p>
    </button>
  );
};

export default Button;
