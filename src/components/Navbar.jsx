import Link from "next/link";
import CallToAction from "./CallToAction";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <div className="relative flex h-16 items-center justify-between px-6 sm:px-12 md:px-16">
      <div>
        <Link href="/">
          <p className="textGradient font-lilitaOne text-2xl">Mood Sync</p>
        </Link>
      </div>
      <div className="flex gap-2">
        <CallToAction />
      </div>
    </div>
  );
};

export default Navbar;
