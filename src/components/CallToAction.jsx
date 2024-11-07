"use client";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CallToAction = () => {
  const { logout, currentUser } = useAuth();
  const pathname = usePathname();

  if (currentUser && pathname === "/") {
    return (
      <Link href="/dashboard">
        <button className="purpleBtn">Dashboard</button>
      </Link>
    );
  }

  if (!currentUser && pathname === "/") {
    return (
      <Link href="/dashboard">
        <button className="purpleBtn">Login</button>
      </Link>
    );
  }

  if (currentUser && pathname === "/dashboard") {
    return (
      <button className="purpleBtn" clickHandler={logout}>
        Log Out
      </button>
    );
  }
};

export default CallToAction;
