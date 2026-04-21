"use client";

import Image from "next/image";

const insightItems = [
  {
    title: "Pre-market Entry",
    description: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
    isActive: true,
  },
  {
    title: "Market Entry",
    description: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
    isActive: false,
  },
  {
    title: "Operations",
    description: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
    isActive: false,
  },
  {
    title: "Growth & Expansion",
    description: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
    isActive: false,
  },
];

export default function Insights() {
  return (
    <section className="w-full bg-white px-[91px] pb-[67px]">
      <div className="flex gap-[167px]">
        {/* Left Side - Insights List */}
        <div className="flex gap-[68px]">
          {/* Label */}
          <div className="flex-shrink-0">
            <div className="bg-[#eee] rounded-[20px] px-[23px] pt-[123px] pb-[92px] w-[224px]">
              <h3 className="text-[24px] font-semibold text-black font-[family-name:var(--font-playfair)] w-[175px]">
                INSPIRATION &<br />
                INSIGHTS
              </h3>
            </div>
          </div>

          {/* Insights List */}
          <div className="flex flex-col gap-[33px] pt-[4px] max-w-[500px]">
            {insightItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-[4px]">
                <h4 className={`text-[16px] font-semibold font-[family-name:var(--font-poppins)] ${item.isActive ? 'text-[#00338d]' : 'text-black'}`}>
                  {item.title}
                </h4>
                <p className={`text-[14px] font-[family-name:var(--font-poppins)] leading-[1.4] ${item.isActive ? 'text-[#00338d]' : 'text-black'}`}>
                  {item.description}
                </p>
                <div className={`w-full h-[2px] mt-[4px] ${item.isActive ? 'bg-[#00338d]' : 'bg-[#bababa]'}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image Cards */}
        <div className="flex gap-[31.5px] pt-[28px]">
          {/* Pre-Market Card - Large */}
          <div className="relative w-[374px] h-[498px] rounded-[20px] overflow-hidden flex-shrink-0">
            <Image
              src="/Mask-group3@2x.png"
              alt="Pre-Market"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(12,27,54,0.79) 90%)",
              }}
            />
            {/* Content */}
            <div className="absolute bottom-7 left-[35px] right-[35px]">
              <p className="text-[20px] text-white font-[family-name:var(--font-poppins)]">
                <span className="font-semibold">Pre-Market</span>
                <span className="text-[14px]"> Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets</span>
              </p>
            </div>
          </div>

          {/* Operations Card - Narrow */}
          <div className="relative w-[139px] h-[498px] rounded-[20px] overflow-hidden flex-shrink-0">
            <Image
              src="/Mask-group@2x.png"
              alt="Operations"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(12,27,54,0.79) 90%)",
              }}
            />
            {/* Content - Rotated */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
              <p 
                className="text-[20px] text-white font-semibold font-[family-name:var(--font-poppins)] whitespace-nowrap"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Operations
              </p>
            </div>
          </div>

          {/* Growth & Expansion Card - Narrow */}
          <div className="relative w-[139px] h-[498px] rounded-[20px] overflow-hidden flex-shrink-0">
            <Image
              src="/Mask-group2@2x.png"
              alt="Growth & Expansion"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(12,27,54,0.79) 90%)",
              }}
            />
            {/* Content - Rotated */}
            <div className="absolute bottom-[29px] left-1/2 -translate-x-1/2">
              <p 
                className="text-[20px] text-white font-semibold font-[family-name:var(--font-poppins)] leading-[20px]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Growth &<br />Expansion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
