"use client"; // Marks this as a Client Component

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/TEAMPLATE.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-md ">
      <nav className="flex items-center justify-between p-6">
        {/* Logo */}
        <button className="p-0 border-none bg-transparent active:opacity-80">
          <Image
            className="w-32 sm:w-40 md:w-48 lg:w-56"
            src={Logo}
            alt="Appstore"
            priority
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl p-6 flex flex-col transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center pb-4 mt-1">
          {/* Menu Heading */}
          <h3 className="text-black text-2xl font-semibold">Menu</h3>

          {/* Close Button */}
          <button
            className="text-black text-3xl font-bold focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start gap-4 pb-4">
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
