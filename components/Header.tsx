"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="flex items-center justify-between px-[76px] py-6">
        {/* Logo */}
        <div className="-mt-6">
          <Image
            src="/demo-demo-icon-139882881-1@2x.png"
            alt="Demo Logo"
            width={89}
            height={89}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-12">
          <a href="#" className="text-[16px] font-bold text-[#333] font-[family-name:var(--font-source-sans)] tracking-wide hover:text-[#00338d] transition-colors">
            WHO WE SERVE
          </a>
          <a href="#" className="text-[16px] font-bold text-[#333] font-[family-name:var(--font-source-sans)] tracking-wide hover:text-[#00338d] transition-colors">
            SOLUTIONS
          </a>
          <a href="#" className="text-[16px] font-bold text-[#333] font-[family-name:var(--font-source-sans)] tracking-wide hover:text-[#00338d] transition-colors">
            RESOURCES
          </a>
          <a href="#" className="text-[16px] font-bold text-[#333] font-[family-name:var(--font-source-sans)] tracking-wide hover:text-[#00338d] transition-colors">
            ABOUT US
          </a>
          <a href="#" className="text-[16px] font-bold text-[#333] font-[family-name:var(--font-source-sans)] tracking-wide hover:text-[#00338d] transition-colors">
            CONTACT US
          </a>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-7">
          {/* Search Icon */}
          <button className="p-0 bg-transparent border-none cursor-pointer">
            <Image
              src="/search-svgrepo-com-2.svg"
              alt="Search"
              width={31}
              height={31}
            />
          </button>

          {/* IND Dropdown */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[16px] font-bold text-[#333] font-[family-name:var(--font-source-sans)]">IND</span>
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6.5 7L12 1" stroke="#333" strokeWidth="2"/>
            </svg>
          </div>

          {/* Language Dropdown */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[16px] font-bold text-[#333] font-[family-name:var(--font-source-sans)]">ENGLISH</span>
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6.5 7L12 1" stroke="#333" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
