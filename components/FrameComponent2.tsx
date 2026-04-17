import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start justify-end pt-num-0! pb-[65.7px]! pl-22.5! pr-21.75! box-border max-w-full shrink-0 text-left text-num-16 text-darkslategray font-poppins mq900:pl-num-22! mq900:pr-[21px]! mq900:box-border mq1300:pl-num-45! mq1300:pr-[43px]! mq1300:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end gap-[38.9px] max-w-full mq900:gap-[19px]">
        <div className="self-stretch flex items-start justify-end pt-num-0! pb-num-0! pl-num-0! pr-num-2! box-border max-w-full">
          <div className="w-435.25 flex items-end justify-between gap-5 max-w-full mq1650:flex-wrap mq1650:gap-5">
            <div className="w-51.5 flex flex-col items-start justify-end pt-num-0! pb-9.75! pl-num-0! pr-num-0! box-border text-num-12 text-gray">
              <div className="self-stretch h-12.25 relative">
                <Image
                  className="absolute top-0 left-0 rounded-md w-full h-full"
                  width={206}
                  height={49}
                  sizes="100vw"
                  alt=""
                  src="/Rectangle-89.svg"
                />
                <div className="absolute top-4 left-5.75 font-semibold inline-block min-w-18 z-1">
                  HOT TOPICS
                </div>
              </div>
            </div>
            <div className="w-76.75 flex flex-col items-start pt-num-0! pb-num-0! pl-num-0! pr-8.25! box-border gap-[8.5px]">
              <div className="self-stretch h-num-2.4 relative rounded-num-30 bg-midnightblue shrink-0" />
              <div className="relative shrink-0">
                Parliament Introduces Income Tax Bill to Reshape India’s Direct
                Tax Landscape
              </div>
            </div>
            <div className="w-76.5 flex flex-col items-start justify-end pt-num-0! pb-6! pl-num-0! pr-8! box-border">
              <div className="self-stretch flex flex-col items-start gap-[8.5px]">
                <div className="self-stretch h-num-2.4 relative rounded-num-30 bg-midnightblue shrink-0" />
                <div className="relative shrink-0">
                  Indian Export Earnings at Risk as U.S. Tariffs Double to 50%
                </div>
              </div>
            </div>
            <div className="w-74 flex flex-col items-start pt-num-0! pb-num-0! pl-num-0! pr-num-22! box-border gap-[8.5px]">
              <div className="self-stretch h-num-2.4 relative rounded-num-30 bg-midnightblue shrink-0" />
              <div className="relative shrink-0">
                India Eases Select BIS Norms While Tightening Overall Standards
                Enforcement
              </div>
            </div>
            <div className="w-68.5 flex flex-col items-start gap-[8.5px]">
              <div className="self-stretch h-num-2.4 relative rounded-num-30 bg-midnightblue shrink-0" />
              <div className="relative shrink-0">
                India Modernizes Maritime Law with Carriage of Goods by Sea
                Bill, 2025
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1211.1px] flex items-start justify-between gap-5 max-w-full mq450:flex-wrap mq450:justify-center">
          <div className="flex flex-col items-start pt-num-0! pb-num-0! pl-num-0! pr-num-6!">
            <Image
              className="w-full h-num-9.4 relative"
              width={33}
              height={9.4}
              sizes="100vw"
              alt=""
              src="/Group-66.svg"
            />
          </div>
          <div className="flex flex-col items-start pt-num-0! pb-num-0! pl-num-0! pr-num-4!">
            <Image
              className="w-full h-num-9.4 relative"
              loading="lazy"
              width={33}
              height={9.4}
              sizes="100vw"
              alt=""
              src="/Group-66.svg"
            />
          </div>
          <Image
            className="h-num-9.4 w-8.25 relative"
            loading="lazy"
            width={33}
            height={9.4}
            sizes="100vw"
            alt=""
            src="/Group-66.svg"
          />
          <Image
            className="h-num-9.4 w-8.25 relative"
            loading="lazy"
            width={33}
            height={9.4}
            sizes="100vw"
            alt=""
            src="/Group-66.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
