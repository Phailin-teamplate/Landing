"use client";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contactus() {
  const googleMapsLink = "https://maps.app.goo.gl/SXU2vX1mmW5pdTGX9";

  const whatsappNumber = "+85620 98270483"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${2098270483}`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "IT Center, Lao Youth Union";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset after 1.5 seconds
    });
  };
  return (
    <div className="flex flex-col items-center text-center mt-12 md:mt-16 px-0 md:px-0 w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Let's Stay Connected
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl">
        Stay in touch with us! We'd love to hear from you and assist you with
        any inquiries.
      </p>

      <div className="flex flex-col items-center justify-center w-full p-6">
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-10">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-2 w-full">
              <Input
                type="text"
                placeholder="Enter your Name"
                className="w-full h-14 p-3 border rounded-lg shadow-sm"
              />
              <Input
                type="email"
                placeholder="Enter your Email"
                className="w-full h-14 p-3 border rounded-lg shadow-sm"
              />
              <Input
                type="text"
                placeholder="Company (Optional)"
                className="w-full h-14 p-3 border rounded-lg shadow-sm"
              />
              <Input
                type="tel"
                placeholder="Enter your Phone Number"
                className="w-full h-14 p-3 border rounded-lg shadow-sm"
              />
            </div>
            <Textarea
              placeholder="Type your message here."
              className="mt-6 w-full h-32 p-3 border rounded-lg shadow-sm"
            />
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 space-y-1">
            <div className="p-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl mt-1" />
              <div className="flex flex-col items-start justify-center w-full">
                <h3 className="font-semibold text-lg">Location</h3>
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm">IT Center, Lao Youth Union</p>

                  {/* Navigate Button */}
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <HiOutlineExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md flex items-center gap-4">
              <FaEnvelope className="text-2xl" />
              <div className="flex flex-col items-start justify-center w-full">
                <h3 className="font-semibold text-lg">Email</h3>
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm">contact@teamplate.dev</p>
                  {/* Copy Button with Tooltip */}
                  <div className="relative">
                    <button
                      onClick={handleCopy}
                      className="text-white hover:text-gray-300"
                    >
                      <ClipboardCopy className="w-4 h-4" />
                    </button>

                    {/* Small Alert Tooltip */}
                    {copied && (
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] px-3 py-2 rounded-md shadow-lg">
                        Copied!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md flex items-center gap-4">
              <FaPhone className="text-2xl" />
              <div className="flex flex-col items-start justify-center w-full">
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm">+85620 98270483</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4 max-w-3xl">
        By clicking the contact us button, you agree to our{" "}
        <span className="text-blue-600 underline cursor-pointer">
          terms and policy
        </span>
        .
      </p>
      <Button className="mt-6 px-10 py-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all font-bold text-lg">
        Contact Us
      </Button>
    </div>
  );
}
