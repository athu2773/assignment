"use client";

const topics = [
  {
    title: "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
  },
  {
    title: "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
  },
  {
    title: "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
  },
  {
    title: "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025",
  },
];

export default function HotTopics() {
  return (
    <section className="w-full px-[90px] py-[40px] bg-white">
      <div className="flex items-start gap-8">
        {/* Hot Topics Badge */}
        <div className="flex-shrink-0 pt-[39px]">
          <div 
            className="rounded-md px-[23px] py-[16px] inline-block"
            style={{
              background: "linear-gradient(90deg, #ff7300 0%, #ff9a44 100%)",
            }}
          >
            <span className="text-[12px] font-semibold text-[#1b1b1b] uppercase tracking-wide font-[family-name:var(--font-poppins)]">
              HOT TOPICS
            </span>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="flex-1 flex gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="flex-1 flex flex-col max-w-[274px]">
              {/* Blue top line */}
              <div className="w-full h-[2.4px] bg-[#00338d] rounded-full mb-[8.5px]" />
              
              {/* Topic Title */}
              <p className="text-[16px] text-[#333] font-[family-name:var(--font-poppins)] leading-[1.4] mb-8 min-h-[66px]">
                {topic.title}
              </p>
              
              {/* Arrow Link */}
              <div className="mt-auto">
                <svg width="33" height="9" viewBox="0 0 33 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:translate-x-1 transition-transform">
                  <path d="M0 4.5H31M31 4.5L27 1M31 4.5L27 8" stroke="#1b1b1b" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
