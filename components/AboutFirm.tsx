"use client";

import Image from "next/image";

export default function AboutFirm() {
  return (
    <section className="w-full bg-white py-[24px] px-[70px] overflow-hidden">
      <div className="flex gap-[42px]">
        {/* Left Side - Content with Map Background */}
        <div 
          className="flex-1 pt-[131px] pb-[252px] pr-[128px] pl-[80px] relative"
          style={{
            backgroundImage: "url('/map-with-white-grey-1@2x.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex gap-[70px]">
            {/* About Firm Label */}
            <div className="pt-6 flex-shrink-0">
              <div className="bg-[#eee] rounded-[20px] px-[25px] pt-[120px] pb-[26px] w-[224px]">
                <h3 className="text-[24px] font-semibold text-black font-[family-name:var(--font-playfair)]">
                  ABOUT<br />
                  FIRM
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-[9px]">
              <h3 className="text-[24px] font-normal text-[#333] font-[family-name:var(--font-playfair)]">
                HLS Global Group
              </h3>
              
              <p className="text-[16px] text-[#333] font-[family-name:var(--font-poppins)] leading-[1.5] text-justify max-w-[520px]">
                is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-[55px] ml-[304px] max-w-[567px]">
            {/* Top Stats Row */}
            <div className="flex gap-[128px] mb-[14px]">
              <div className="flex flex-col gap-[2px]">
                <h2 className="text-[36px] font-semibold text-[#333] font-[family-name:var(--font-playfair)]">
                  250+
                </h2>
                <p className="text-[16px] text-[#333] font-[family-name:var(--font-poppins)] w-[165px]">
                  Professional Staff<br />
                  Members Globally
                </p>
              </div>
              <div className="flex flex-col gap-[2px]">
                <h2 className="text-[36px] font-semibold text-[#333] font-[family-name:var(--font-playfair)]">
                  1000+
                </h2>
                <p className="text-[16px] text-[#333] font-[family-name:var(--font-poppins)] w-[165px]">
                  Clients in the HLS Global Network
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[514px] h-[2px] bg-[#00338d] mb-[17px]" />

            {/* Bottom Stats Row */}
            <div className="flex gap-[128px]">
              <div className="flex flex-col gap-[2px]">
                <h2 className="text-[36px] font-semibold text-[#333] font-[family-name:var(--font-playfair)]">
                  35+
                </h2>
                <p className="text-[16px] text-[#333] font-[family-name:var(--font-poppins)] w-[165px]">
                  Years of Experience Connecting Japan and the World
                </p>
              </div>
              <div className="flex flex-col gap-[2px]">
                <h2 className="text-[36px] font-semibold text-[#333] font-[family-name:var(--font-playfair)]">
                  15+
                </h2>
                <p className="text-[16px] text-[#333] font-[family-name:var(--font-poppins)] w-[165px]">
                  Countries Covered With Our Alliance Network
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Location and Image */}
        <div className="flex flex-col gap-[24px] flex-shrink-0">
          {/* Location Button */}
          <div className="bg-[#ff7300] rounded-[20px] px-[19px] py-[9px] flex items-center justify-between w-[332px]">
            <span className="text-[12px] font-semibold text-black uppercase tracking-wide font-[family-name:var(--font-poppins)]">
              We are located
            </span>
            <div className="flex items-center gap-[19px]">
              <span className="text-[15px] font-semibold text-black font-[family-name:var(--font-poppins)]">
                INDIA
              </span>
              <svg width="13" height="8" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6.5 7L12 1" stroke="#000" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Building Image */}
          <div className="w-[712px] h-[569px] rounded-[25px] overflow-hidden">
            <Image
              src="/Rectangle-123@2x.png"
              alt="Office Building"
              width={712}
              height={569}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
