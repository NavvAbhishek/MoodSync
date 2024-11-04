"use client";
import React, { useState } from "react";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { register, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  console.log(data);
  const [isRegister, setIsRegister] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);

  const handleSubmit = async () => {
    if (!data.email || !data.password || data.password.length < 6) {
      return;
    }

    setAuthenticating(true);

    try {
      if (isRegister) {
        console.log("Logging a axisting user");
        await login(data.email, data.password);
      } else {
        console.log("Registering a new user");
        await register(data.email, data.password);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setAuthenticating(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className="text-4xl font-lilitaOne">
        {isRegister ? "Log in" : "Register"}
      </h3>
      <p>You&apos;re one step away!</p>
      <input
        type="text"
        value={data.email}
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            email: e.target.value,
          }))
        }
        placeholder="email"
        className="w-full max-w-[400px] max-auto px-4 py-2 sm:py-3 border-2 rounded-full outline-none border-solid border-purple duration-200 focus:border-magenta hover:border-magenta"
      />
      <input
        type="password"
        value={data.password}
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            password: e.target.value,
          }))
        }
        placeholder="password"
        className="w-full max-w-[400px] max-auto px-4 py-2 sm:py-3 border-2 rounded-full outline-none border-solid border-purple duration-200 focus:border-magenta hover:border-magenta"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? "Submitting" : "Submit"}
          full
        />
      </div>
      <p>
        {isRegister ? "Don't have an account?" : "Have an account?"}{" "}
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-purple font-semibold cursor-pointer"
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default Login;
