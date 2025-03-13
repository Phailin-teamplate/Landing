import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/TEAMPLATE.png";

export default function Navbar() {
  return (
    <div className="w-full h-auto sticky top-0 z-50 bg-white drop-shadow-sm">
      <nav className="flex items-center justify-between p-6">
        {/* Logo */}
        <button className="p-0 border-none bg-transparent active:opacity-80">
          <Image
            className="w-32 sm:w-40 md:w-48 lg:w-56" // Set responsive widths for different breakpoints
            src={Logo}
            alt="Appstore"
            layout="intrinsic"
            quality={100}
          />
        </button>
        {/* Navbar Links (Desktop) */}
        <div className="flex gap-6">
          <Link href="/" className="hover:underline">
            About
          </Link>
          <Link href="/" className="hover:underline">
            Services
          </Link>
          <Link href="/" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

