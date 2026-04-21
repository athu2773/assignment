"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] bg-[#00338d] overflow-hidden">
      {/* Background Image with Diagonal Clip */}
      <div className="absolute top-0 right-0 w-[65%] h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-P3LQ5PiWbMPLIygwDjRqISPkITtw4o.png"
          alt="Office workspace"
          fill
          className="object-cover object-right-top"
          style={{
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Blue diagonal overlay at bottom */}
      <div 
        className="absolute bottom-0 right-0 w-[50%] h-[180px] bg-[#00338d]"
        style={{
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-[80px] pt-[100px]">
        {/* Subtitle */}
        <p className="text-[11px] font-bold text-[#b8b3b3] uppercase tracking-wider font-[family-name:var(--font-source-sans)] mb-4">
          Accountants and Global Business Advisors
        </p>

        {/* Main Heading */}
        <h1 className="text-[48px] leading-[52px] font-bold text-white font-[family-name:var(--font-playfair)] mb-2">
          EMPOWERED<br />
          WORKPLACES
        </h1>

        {/* Orange underline */}
        <div className="w-[300px] h-[3px] bg-[#ff7300] mb-4" />

        {/* Description */}
        <p className="text-[13px] text-white/90 font-light font-[family-name:var(--font-poppins)] max-w-[340px] leading-relaxed mb-8">
          by fostering inclusivity, encouraging growth, promoting collaboration, valuing diversity, supporting innovation, and building trust for shared success.
        </p>

        {/* CTA Button */}
        <button className="flex items-center gap-3 bg-[#ff7300] rounded-md px-6 py-3 cursor-pointer border-none">
          <svg width="28" height="8" viewBox="0 0 33 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.5H31M31 4.5L27 1M31 4.5L27 8" stroke="#1b1b1b" strokeWidth="1.5"/>
          </svg>
          <span className="text-[11px] font-semibold text-[#1b1b1b] uppercase tracking-wide">
            LETS CONNECT
          </span>
        </button>
      </div>

      {/* Bottom Left Text */}
      <div className="absolute bottom-[50px] left-[80px] z-10">
        <p className="text-[11px] text-white uppercase font-semibold tracking-wide font-[family-name:var(--font-poppins)]">
          Accounting, Taxation, & Business Advisory between India, Japan, and the World
        </p>
      </div>

      {/* Bottom Right - Team Avatars and Stats */}
      <div className="absolute bottom-[40px] right-[60px] z-10 flex items-center gap-3">
        {/* Avatars */}
        <div className="flex items-center">
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden border-2 border-white relative z-[5] bg-gray-300">
            <Image
              src="/Ellipse-7@2x.png"
              alt="Team member"
              width={44}
              height={44}
              className="object-cover"
            />
          </div>
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden border-2 border-white -ml-4 relative z-[4] bg-gray-300">
            <Image
              src="/Ellipse-9@2x.png"
              alt="Team member"
              width={44}
              height={44}
              className="object-cover"
            />
          </div>
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden border-2 border-white -ml-4 relative z-[3] bg-gray-300">
            <Image
              src="/Ellipse-10@2x.png"
              alt="Team member"
              width={44}
              height={44}
              className="object-cover"
            />
          </div>
          <div className="w-[44px] h-[44px] rounded-full bg-[#ff7300] border-[3px] border-[#ff7300] -ml-4 relative z-[6] flex items-center justify-center ring-2 ring-white">
            <span className="text-[9px] text-white uppercase font-semibold">MORE</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col ml-2">
          <span className="text-[24px] text-white font-semibold leading-tight">250 +</span>
          <span className="text-[9px] text-white/80 leading-tight">Enjoy Working<br />with us</span>
        </div>
      </div>
    </section>
  );
}
