"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Show navbar on scroll up or when at top
        if (window.scrollY < lastScrollY || window.scrollY < 10) {
          setVisible(true);
        } else {
          setVisible(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        group hover:translate-y-0 hover:opacity-100`}
      onMouseEnter={() => setVisible(true)}
    >
      <div className="bg-white backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-2 py-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/42_Logo.jpg"
                alt="42 Logo"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
              <a href="#" className="text-xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
                STARTUP CLUB
              </a>
            </div>
            <div className="flex items-center">
              <button className="text-white bg-[#1B3B5D] hover:bg-white hover:text-[#1B3B5D] text-sm font-medium py-2 px-6 border border-[#1B3B5D] hover:border-[#1B3B5D] transition-all duration-200 mr-4">
                Apply Now
              </button>
              <button className="text-white bg-[#1B3B5D] hover:bg-white hover:text-[#1B3B5D] text-sm font-medium py-2 px-6 border border-[#1B3B5D] hover:border-[#1B3B5D] transition-all duration-200">
                Investors Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
