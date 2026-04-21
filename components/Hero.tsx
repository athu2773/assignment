"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[898px] bg-[#00338d] overflow-hidden -mt-2">
      {/* Background Image with Diagonal Clip */}
      <div className="absolute top-0 right-0 w-[70%] h-full">
        <Image
          src="/Mask-group1@2x.png"
          alt="Office workspace"
          fill
          className="object-cover"
          style={{
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Blue diagonal overlay at bottom */}
      <div 
        className="absolute bottom-0 right-0 w-[55%] h-[250px] bg-[#00338d]"
        style={{
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-[100px] pt-[268px]">
        {/* Subtitle */}
        <p className="text-[16px] font-bold text-[#b8b3b3] uppercase tracking-wide font-[family-name:var(--font-source-sans)] mb-5 pl-2">
          Accountants and Global Business Advisors
        </p>

        {/* Main Heading */}
        <h1 className="text-[64px] leading-[60px] font-bold text-white font-[family-name:var(--font-playfair)] mb-2">
          EMPOWERED<br />
          WORKPLACES
        </h1>

        {/* Orange underline */}
        <div className="w-[442px] h-[4.5px] bg-[#d9d9d9] ml-1 mb-5" />

        {/* Description */}
        <p className="text-[16px] text-white font-light font-[family-name:var(--font-poppins)] max-w-[400px] leading-relaxed pl-2 mb-[73px]">
          by fostering inclusivity, encouraging growth, promoting collaboration, valuing diversity, supporting innovation, and building trust for shared success.
        </p>

        {/* CTA Button */}
        <div className="pl-4">
          <button className="relative flex items-center gap-4 bg-[#ff7300] rounded-md px-[45px] py-[16px] cursor-pointer border-none group">
            <svg width="33" height="9" viewBox="0 0 33 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4.5H31M31 4.5L27 1M31 4.5L27 8" stroke="#1b1b1b" strokeWidth="1.5"/>
            </svg>
            <span className="text-[12px] font-semibold text-[#1b1b1b] uppercase">
              LETS CONNECT
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Left Text */}
      <div className="absolute bottom-[76px] left-[100px] z-10">
        <p className="text-[14px] text-white uppercase font-semibold tracking-wide font-[family-name:var(--font-poppins)]">
          Accounting, Taxation, & Business Advisory between India, Japan, and the World
        </p>
      </div>

      {/* Bottom Right - Team Avatars and Stats */}
      <div className="absolute bottom-[76px] right-[70px] z-10 flex items-end gap-4">
        {/* Avatars */}
        <div className="flex items-center">
          <div className="w-[64px] h-[64px] rounded-full overflow-hidden border-2 border-white relative z-[5]">
            <Image
              src="/Ellipse-7@2x.png"
              alt="Team member"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="w-[64px] h-[64px] rounded-full overflow-hidden border-2 border-white -ml-[37px] relative z-[4]">
            <Image
              src="/Ellipse-9@2x.png"
              alt="Team member"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="w-[64px] h-[64px] rounded-full overflow-hidden border-2 border-white -ml-[37px] relative z-[3]">
            <Image
              src="/Ellipse-10@2x.png"
              alt="Team member"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="w-[64px] h-[64px] rounded-full bg-[#ff7300] border-2 border-white -ml-[37px] relative z-[6] flex items-center justify-center">
            <span className="text-[12px] text-white uppercase font-semibold">MORE</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col">
          <span className="text-[32px] text-white uppercase font-semibold leading-[40px]">250 +</span>
          <span className="text-[10px] text-white leading-[12px]">Enjoy Working with us</span>
        </div>
      </div>
    </section>
  );
}
