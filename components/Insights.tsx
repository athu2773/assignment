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
    <section className="w-full bg-white px-[60px] pb-[40px]">
      <div className="flex gap-10">
        {/* Left Side - Stats and Insights List */}
        <div className="flex gap-6">
          {/* Label and Stats */}
          <div className="flex flex-col gap-4">
            {/* Label */}
            <div className="bg-[#eee] rounded-[16px] px-4 pt-[70px] pb-5 w-[160px]">
              <h3 className="text-[16px] font-semibold text-black font-[family-name:var(--font-playfair)] leading-tight">
                INSPIRATION &<br />
                INSIGHTS
              </h3>
            </div>
          </div>

          {/* Stats with Map Background + Insights List */}
          <div className="flex gap-8">
            {/* Stats Section with Map */}
            <div 
              className="w-[200px] py-4 flex flex-col gap-4"
              style={{
                backgroundImage: "url('/map-with-white-grey-1@2x.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col">
                <h2 className="text-[28px] font-semibold text-[#333] font-[family-name:var(--font-playfair)]">
                  35+
                </h2>
                <p className="text-[11px] text-[#333] font-[family-name:var(--font-poppins)]">
                  Years of Experience<br />
                  Connecting Japan<br />
                  and the World
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[28px] font-semibold text-[#333] font-[family-name:var(--font-playfair)]">
                  15+
                </h2>
                <p className="text-[11px] text-[#333] font-[family-name:var(--font-poppins)]">
                  Countries Covered<br />
                  With Our Alliance<br />
                  Network
                </p>
              </div>
            </div>

            {/* Insights List */}
            <div className="flex flex-col gap-4 max-w-[340px]">
              {insightItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <h4 className={`text-[13px] font-semibold font-[family-name:var(--font-poppins)] ${item.isActive ? 'text-[#00338d]' : 'text-black'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-[11px] font-[family-name:var(--font-poppins)] leading-[1.4] ${item.isActive ? 'text-[#00338d]' : 'text-[#333]'}`}>
                    {item.description}
                  </p>
                  <div className={`w-full h-[1.5px] mt-1 ${item.isActive ? 'bg-[#00338d]' : 'bg-[#d9d9d9]'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image Cards */}
        <div className="flex gap-4 ml-auto">
          {/* Pre-Market Card - Large */}
          <div className="relative w-[260px] h-[360px] rounded-[16px] overflow-hidden flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-SVgDymOjIUuJr3YTxhGc3MbFR3u2a7.png"
              alt="Pre-Market"
              fill
              className="object-cover object-[75%_center]"
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(12,27,54,0.85) 100%)",
              }}
            />
            {/* Content */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-[14px] font-semibold text-white font-[family-name:var(--font-poppins)]">
                Pre-Market
              </p>
              <p className="text-[10px] text-white/90 font-[family-name:var(--font-poppins)] leading-tight">
                Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets
              </p>
            </div>
          </div>

          {/* Operations Card - Narrow */}
          <div className="relative w-[100px] h-[360px] rounded-[16px] overflow-hidden flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-SVgDymOjIUuJr3YTxhGc3MbFR3u2a7.png"
              alt="Operations"
              fill
              className="object-cover object-[85%_center]"
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(12,27,54,0.85) 100%)",
              }}
            />
            {/* Content - Rotated */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <p 
                className="text-[14px] text-white font-semibold font-[family-name:var(--font-poppins)] whitespace-nowrap"
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
          <div className="relative w-[100px] h-[360px] rounded-[16px] overflow-hidden flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-SVgDymOjIUuJr3YTxhGc3MbFR3u2a7.png"
              alt="Growth & Expansion"
              fill
              className="object-cover object-[95%_center]"
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(12,27,54,0.85) 100%)",
              }}
            />
            {/* Content - Rotated */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <p 
                className="text-[14px] text-white font-semibold font-[family-name:var(--font-poppins)] leading-tight"
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
