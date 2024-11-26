"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="bg-white backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-2 py-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/42_Logo.jpg"
                  alt="42 Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </Link>
              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
                STARTUP CLUB
              </Link>
            </div>
            <div className="flex items-center">
              <button className="text-white bg-[#1B3B5D] hover:bg-white hover:text-[#1B3B5D] text-base font-medium py-2 px-6 border border-[#1B3B5D] hover:border-[#1B3B5D] transition-all duration-200 mr-4">
                Apply Now
              </button>
              <button className="text-white bg-[#1B3B5D] hover:bg-white hover:text-[#1B3B5D] text-base font-medium py-2 px-6 border border-[#1B3B5D] hover:border-[#1B3B5D] transition-all duration-200">
                Investors Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
