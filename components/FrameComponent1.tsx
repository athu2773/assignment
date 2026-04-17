import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex items-start justify-end pt-num-0! pb-num-0! pl-22.75! pr-21.5! box-border max-w-full mq900:pl-num-22! mq900:pr-[21px]! mq900:box-border mq1300:pl-num-45! mq1300:pr-[43px]! mq1300:box-border ${className}`}
    >
      <div className="flex-1 flex items-start gap-41.75 max-w-full mq900:gap-[42px] mq1300:gap-[83px] mq1650:flex-wrap mq450:gap-[21px]">
        <section className="flex-1 flex items-start gap-17 min-w-140 max-w-full text-left text-num-24 text-black font-poppins mq900:gap-[34px] mq900:flex-wrap mq900:min-w-full mq450:gap-[17px]">
          <div className="rounded-num-20 bg-whitesmoke-100 flex items-start pt-30.75! pb-num-23! pl-num-23! pr-num-23! box-border min-w-56 mq900:flex-1">
            <div className="h-54.5 w-56 relative rounded-num-20 bg-whitesmoke-100 hidden shrink-0" />
            <h3 className="m-0! w-43.75 relative text-[length:inherit] font-semibold font-[inherit] inline-block z-1 shrink-0 mq450:text-num-19">{`INSPIRATION & <br/>INSIGHTS`}</h3>
          </div>
          <div className="flex-1 flex flex-col items-start pt-num-1! pb-num-0! pl-num-0! pr-num-0! box-border min-w-92.5 max-w-full text-num-16 mq900:min-w-full">
            <div className="self-stretch flex flex-col items-end gap-8.25 max-w-full mq900:gap-4">
              <div className="self-stretch flex flex-col items-start gap-1 text-midnightblue">
                <div className="relative font-semibold">Pre-market Entry</div>
                <div className="relative text-num-14">
                  Pre-market entry means trading securities before regular
                  market hours to react to overnight news, with lower liquidity
                  and wider spreads.
                </div>
                <div className="self-stretch h-0.5 relative bg-midnightblue" />
              </div>
              <div className="self-stretch flex flex-col items-start gap-0.75">
                <div className="flex items-start pt-num-0! pb-num-0! pl-num-2! pr-num-2!">
                  <div className="relative font-semibold">Market Entry</div>
                </div>
                <div className="self-stretch flex items-start pt-num-0! pb-num-0! pl-num-2! pr-num-0! text-num-14">
                  <div className="relative">
                    Research demand, assess competition, choose mode, localize
                    offering, comply regulations, price strategically, partner
                    locally, iterate learning.
                  </div>
                </div>
                <div className="self-stretch h-0.5 relative bg-silver" />
              </div>
              <div className="self-stretch flex flex-col items-start gap-1.5">
                <div className="self-stretch flex flex-col items-start gap-0.5">
                  <div className="relative font-semibold">Operations</div>
                  <div className="relative text-num-14">
                    Planning, organizing, and managing processes to efficiently
                    produce goods or services, ensuring quality,
                    cost-effectiveness, and customer satisfaction.
                  </div>
                </div>
                <div className="self-stretch h-0.5 relative bg-silver" />
              </div>
              <div className="self-stretch flex flex-col items-start gap-[8.1px] max-w-full">
                <div className="self-stretch flex items-start pt-num-0! pb-num-0! pl-num-2! pr-num-0! box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start max-w-full">
                    <div className="relative font-semibold">{`Growth & Expansion`}</div>
                    <div className="relative text-num-14 z-1 mt-[-1.8px]!">
                      Increasing business size, market reach, revenue, and
                      resources to achieve long-term sustainability and
                      competitive advantage.
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-0.5 relative bg-silver" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start pt-num-7! pb-num-0! pl-num-0! pr-num-0! box-border min-w-178.75 max-w-full text-left text-num-20 text-white font-poppins mq1300:min-w-full mq1650:flex-1">
          <div className="self-stretch flex items-start gap-[31.5px] max-w-full mq900:gap-4 mq900:flex-wrap">
            <div className="flex-1 flex items-end pt-7! pb-7! pl-8.75! pr-8.75! box-border relative isolate min-w-60.75 max-w-full">
              <div className="h-full w-full absolute !!m-[0 important] top-0 right-0 bottom-0 left-0 shrink-0">
                <Image
                  className="absolute h-full w-full top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full object-cover"
                  width={374}
                  height={498}
                  sizes="100vw"
                  alt=""
                  src="/Mask-group3@2x.png"
                />
                <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-num-20 [background:linear-gradient(180deg,rgba(0,0,0,0),rgba(12,27,54,0.79)_90%)] z-1" />
              </div>
              <div className="h-22.75 w-66 relative inline-block shrink-0 z-2">
                <span className="font-semibold">Pre-Market</span>
                <span className="text-num-14">
                  <span className="text-num-16">&nbsp;</span>
                  <span>
                    Evaluating Supply Chain Readiness Before Committing Capital
                    in Emerging Markets
                  </span>
                </span>
              </div>
            </div>
            <div className="h-num-498 w-34.75 flex items-start pt-87.25! pb-7! pl-13! pr-13! box-border relative isolate mq450:pt-[227px]! mq450:pb-5! mq450:box-border">
              <div className="h-full w-full absolute !!m-[0 important] top-0 right-0 bottom-0 left-0 shrink-0">
                <Image
                  className="absolute h-full w-full top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full object-cover"
                  width={139}
                  height={498}
                  sizes="100vw"
                  alt=""
                  src="/Mask-group@2x.png"
                />
                <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-num-20 [background:linear-gradient(180deg,rgba(0,0,0,0),rgba(12,27,54,0.79)_90%)] z-1" />
              </div>
              <div className="relative font-semibold transform-[rotate(-90deg)] z-2 shrink-0 mq450:text-num-16">
                Operations
              </div>
            </div>
            <div className="h-num-498 w-34.75 flex items-start pt-87! pb-7.25! pl-12.5! pr-9.75! box-border relative isolate mq450:pt-[226px]! mq450:pb-5! mq450:box-border">
              <div className="h-full w-full absolute !!m-[0 important] top-0 right-0 bottom-0 left-0 shrink-0">
                <Image
                  className="absolute h-full w-full top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full object-cover"
                  width={139}
                  height={498}
                  sizes="100vw"
                  alt=""
                  src="/Mask-group2@2x.png"
                />
                <div className="absolute h-full w-full top-0 right-px bottom-0 left-0 rounded-num-20 [background:linear-gradient(180deg,rgba(0,0,0,0),rgba(12,27,54,0.79)_90%)] z-1" />
              </div>
              <div className="h-12.5 w-30.25 relative leading-5 font-semibold inline-block shrink-0 transform-[rotate(-90deg)] z-2 mq450:text-num-16 mq450:leading-4">{`Growth & Expansion`}</div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default FrameComponent1;
