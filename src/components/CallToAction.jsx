"use client";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
const CallToAction = () => {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser ? (
        <Link href="/dashboard">
          <button className="purpleBtn">Dashboard</button>
        </Link>
      ) : (
        <Link href="/dashboard">
          <button className="purpleBtn">Login</button>
        </Link>
      )}
    </>
  );
};

export default CallToAction;
