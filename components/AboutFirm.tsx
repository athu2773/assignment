"use client";

import Image from "next/image";

export default function AboutFirm() {
  return (
    <section className="w-full bg-white py-[20px] px-[60px] overflow-hidden">
      <div className="flex gap-8">
        {/* Left Side - Content */}
        <div className="flex-1 flex gap-8">
          {/* About Firm Label */}
          <div className="flex-shrink-0">
            <div className="bg-[#eee] rounded-[16px] px-5 pt-[80px] pb-5 w-[160px]">
              <h3 className="text-[18px] font-semibold text-black font-[family-name:var(--font-playfair)] leading-tight">
                ABOUT<br />
                FIRM
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col max-w-[420px]">
            <h3 className="text-[18px] font-normal text-[#333] font-[family-name:var(--font-playfair)] mb-2">
              HLS Global Group
            </h3>
            
            <p className="text-[12px] text-[#333] font-[family-name:var(--font-poppins)] leading-[1.6] text-justify mb-6">
              is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
            </p>

            {/* Stats Section */}
            <div className="mt-2">
              {/* Top Stats Row */}
              <div className="flex gap-16 mb-3">
                <div className="flex flex-col">
                  <h2 className="text-[28px] font-semibold text-[#333] font-[family-name:var(--font-playfair)]">
                    250+
                  </h2>
                  <p className="text-[12px] text-[#333] font-[family-name:var(--font-poppins)]">
                    Professional Staff<br />
                    Members Globally
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[28px] font-semibold text-[#333] font-[family-name:var(--font-playfair)]">
                    1000+
                  </h2>
                  <p className="text-[12px] text-[#333] font-[family-name:var(--font-poppins)]">
                    Clients in the HLS<br />
                    Global Network
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-[280px] h-[2px] bg-[#00338d] mb-3" />

              {/* Bottom Stats Row */}
              <div className="flex gap-16">
                <div className="flex flex-col">
                  <h2 className="text-[28px] font-semibold text-[#333] font-[family-name:var(--font-playfair)]">
                    35+
                  </h2>
                  <p className="text-[12px] text-[#333] font-[family-name:var(--font-poppins)]">
                    Years of Experience<br />
                    Connecting Japan<br />
                    and the World
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[28px] font-semibold text-[#333] font-[family-name:var(--font-playfair)]">
                    15+
                  </h2>
                  <p className="text-[12px] text-[#333] font-[family-name:var(--font-poppins)]">
                    Countries Covered<br />
                    With Our Alliance<br />
                    Network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Location and Image */}
        <div className="flex flex-col gap-4 flex-shrink-0">
          {/* Location Button */}
          <div className="bg-[#ff7300] rounded-[16px] px-4 py-2 flex items-center justify-between w-[280px] self-end">
            <span className="text-[10px] font-semibold text-black uppercase tracking-wide font-[family-name:var(--font-poppins)]">
              We are located
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-semibold text-black font-[family-name:var(--font-poppins)]">
                INDIA
              </span>
              <svg width="10" height="6" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6.5 7L12 1" stroke="#000" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Building Image */}
          <div className="w-[480px] h-[380px] rounded-[20px] overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-tXr1VRi7KifjWFvpGlEcU7GBBjgFwS.png"
              alt="Office Building"
              width={480}
              height={380}
              className="object-cover object-right w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
