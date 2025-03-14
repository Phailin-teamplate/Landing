import React from "react";
import { cn } from "@/src/lib/utils";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={cn("bg-gray-800 text-white py-8 px-4")}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-8 md:gap-12">
        {/* Left Section */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
          <h3 className="text-xl font-semibold">Teamplate</h3>
          <p className="text-sm">&copy; 2025 All Rights Reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-lg">
              <FaXTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-lg">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-lg">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Section (Links) */}
        <div className="flex sm:grid-cols-1 md:grid-cols-3 md:gap-16 gap-6 text-center md:text-left">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg mb-2">Useful Links</h4>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">About</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg mb-2">Terms</h4>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">TOS</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Refund Policy</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg mb-2">Support & Help</h4>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Open Support Ticket</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
