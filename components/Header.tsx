"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-[60px] py-4">
        {/* Logo */}
        <div className="-mt-2">
          <Image
            src="/demo-demo-icon-139882881-1@2x.png"
            alt="Demo Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a href="#" className="text-[12px] font-bold text-[#333] font-[family-name:var(--font-source-sans)] tracking-wide hover:text-[#00338d] transition-colors">
            WHO WE SERVE
          </a>
          <a href="#" className="text-[12px] font-bold text-[#333] font-[family-name:var(--font-source-sans)] tracking-wide hover:text-[#00338d] transition-colors">
            SOLUTIONS
          </a>
          <a href="#" className="text-[12px] font-bold text-[#333] font-[family-name:var(--font-source-sans)] tracking-wide hover:text-[#00338d] transition-colors">
            RESOURCES
          </a>
          <a href="#" className="text-[12px] font-bold text-[#333] font-[family-name:var(--font-source-sans)] tracking-wide hover:text-[#00338d] transition-colors">
            ABOUT US
          </a>
          <a href="#" className="text-[12px] font-bold text-[#333] font-[family-name:var(--font-source-sans)] tracking-wide hover:text-[#00338d] transition-colors">
            CONTACT US
          </a>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-5">
          {/* Search Icon */}
          <button className="p-0 bg-transparent border-none cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="#333" strokeWidth="2"/>
              <path d="M16 16L20 20" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* IND Dropdown */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-[12px] font-bold text-[#333] font-[family-name:var(--font-source-sans)]">IND</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="#333" strokeWidth="1.5"/>
            </svg>
          </div>

          {/* Language Dropdown */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-[12px] font-bold text-[#333] font-[family-name:var(--font-source-sans)]">ENGLISH</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="#333" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
