"use client";

import Image from "next/image";
import Link from "next/link";

export default function StartupNavbar() {
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
              <Link href="/" className="text-gray-900 hover:text-gray-600 text-base font-medium transition-colors mr-4">
                Home
              </Link>
              <Link href="/startup-dashboard" className="text-gray-900 hover:text-blue-600 text-base font-medium transition-colors mr-4">
                Startups Dashboard
              </Link>
              <Link href="/investor-dashboard" className="text-gray-900 hover:text-blue-600 text-base font-medium transition-colors mr-4">
                Investors Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
