import type { NextPage } from "next";
import Image from "next/image";

export type Slider1Type = {
  className?: string;
};

const Slider1: NextPage<Slider1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-224.5 bg-midnightblue overflow-hidden shrink-0 flex items-start pt-num-2! pb-59.25! pl-25! pr-num-1! box-border gap-[8.3px] max-w-full z-1 -mt-2! relative text-left text-num-20 text-black font-poppins mq900:pl-6.25! mq900:pb-25! mq900:box-border mq1300:pl-12.5! mq1300:pb-38.5! mq1300:box-border mq450:h-auto ${className}`}
    >
      <Image
        className="h-[897.8px] w-[1340.7px] relative hidden max-w-full shrink-0"
        width={1340.7}
        height={897.8}
        sizes="100vw"
        alt=""
        src="/Intersect.svg"
      />
      <div className="h-224.5 w-480 relative bg-midnightblue hidden max-w-full shrink-0" />
      <div className="h-9.25 w-[173.3px] relative hidden shrink-0">
        <div className="absolute top-[-0.1px] left-0 rounded-num-30 bg-whitesmoke-200 w-full h-full" />
        <Image
          className="absolute h-[17.57%] w-[13.21%] top-[41.08%] right-[13.56%] bottom-[41.35%] left-[73.23%] max-w-full overflow-hidden max-h-full"
          width={22.9}
          height={6.5}
          sizes="100vw"
          alt=""
          src="/Group-651.svg"
        />
        <Image
          className="absolute h-[17.57%] w-[13.21%] top-[41.08%] right-[71.32%] bottom-[41.35%] left-[15.46%] max-w-full overflow-hidden max-h-full object-contain"
          width={22.9}
          height={6.5}
          sizes="100vw"
          alt=""
          src="/Group-652.svg"
        />
        <div className="absolute top-[3.7px] left-[72.3px] uppercase font-semibold inline-block min-w-10 mq450:text-num-16">
          1 / 4
        </div>
      </div>
      <section className="flex flex-col items-start pt-67! pb-num-0! pl-num-0! pr-num-0! box-border max-w-[calc(100%-1349px)] shrink-0 text-left text-num-16 text-white font-poppins mq900:hidden mq900:pt-num-2! mq900:box-border mq1650:max-w-full">
        <div className="self-stretch flex flex-col items-start gap-18.25 max-w-full mq900:gap-9">
          <div className="self-stretch flex flex-col items-start gap-5 max-w-full">
            <div className="flex items-start pt-num-0! pb-num-0! pl-num-2! pr-num-2! box-border max-w-full text-darkgray font-source-sans-pro">
              <b className="relative uppercase z-1">
                Accountants and Global Business Advisors
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start pt-num-0! pb-num-7! pl-num-0! pr-num-23! box-border gap-[5.5px] max-w-full text-[64px]">
              <h1 className="m-0! w-114.75 relative text-[length:inherit] leading-15 font-bold font-playfair inline-block max-w-full z-1 mq900:text-[51px] mq900:leading-[48px] mq450:text-[38px] mq450:leading-9">
                EMPOWERED <br />
                WORKPLACES
              </h1>
              <div className="w-[442.5px] h-1.125 flex items-start pt-num-0! pb-num-0! pl-num-1! pr-num-1! box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-gainsboro max-w-full z-1" />
              </div>
            </div>
            <div className="self-stretch flex items-start pt-num-0! pb-num-0! pl-num-2! pr-num-0!">
              <div className="relative font-light z-1">
                by fostering inclusivity, encouraging growth, promoting
                collaboration, valuing diversity, supporting innovation, and
                building trust for shared success.
              </div>
            </div>
          </div>
          <div className="w-53.5 flex items-start pt-num-0! pb-num-0! pl-num-4! pr-num-4! box-border text-num-12 text-gray">
            <div className="flex-1 flex items-start justify-end pt-4! pb-3.75! pl-num-45! pr-num-45! relative isolate">
              <div className="relative font-semibold z-2 shrink-0">
                LETS CONNECT
              </div>
              <div className="h-full w-full absolute !!m-[0 important] top-0 right-0 bottom-0 left-0 shrink-0">
                <Image
                  className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-md max-w-full overflow-hidden max-h-full z-1"
                  width={206}
                  height={49}
                  sizes="100vw"
                  alt=""
                  src="/Rectangle-89.svg"
                />
                <Image
                  className="absolute top-[19.6px] left-[21.2px] w-[33.2px] h-num-9.4 z-2"
                  loading="lazy"
                  width={33.2}
                  height={9.4}
                  sizes="100vw"
                  alt=""
                  src="/Group-69.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex-1 flex items-end justify-end flex-wrap content-end pt-19! pb-[75.7px]! pl-17.5! pr-17.5! box-border relative isolate gap-[15.2px] min-h-224.5 max-w-[calc(100%-490px)] shrink-0 text-num-14 text-white mq900:max-w-full mq1650:hidden mq450:!pl-5 mq450:!pr-5 mq450:box-border">
        <div className="w-151 absolute !!m-[0 important] bottom-[75.8px] left-[-489.3px] uppercase font-semibold inline-block z-1 shrink-0">{`Accounting, Taxation, & Business Advisory between India, Japan, and the World`}</div>
        <Image
          className="h-full w-full absolute !!m-[0 important] top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full object-cover z-2 shrink-0"
          width={1340.7}
          height={897.8}
          sizes="100vw"
          alt=""
          src="/Mask-group1@2x.png"
        />
        <div className="w-[155.5px] flex flex-col items-start pt-num-2! pb-num-0! pl-num-0! pr-num-0! box-border shrink-0 text-num-12">
          <div className="self-stretch flex items-end">
            <div className="flex flex-col items-start pt-num-0! pb-num-0! pl-num-0! pr-0.75!">
              <Image
                className="w-full h-num-64.1 relative rounded-num-50 object-cover shrink-0 z-3"
                width={64.1}
                height={64.1}
                sizes="100vw"
                alt=""
                src="/Ellipse-7@2x.png"
              />
            </div>
            <div className="flex flex-col items-start pt-num-0! pb-num-0! pl-num-0! pr-num-7! ml-[-37.4px]!">
              <Image
                className="w-full h-num-64.1 relative rounded-num-50 object-cover shrink-0 z-4"
                width={64.1}
                height={64.1}
                sizes="100vw"
                alt=""
                src="/Ellipse-9@2x.png"
              />
            </div>
            <Image
              className="h-num-64.1 w-[64.1px] relative rounded-num-50 object-cover shrink-0 z-5 ml-[-37.4px]!"
              loading="lazy"
              width={64.1}
              height={64.1}
              sizes="100vw"
              alt=""
              src="/Ellipse-10@2x.png"
            />
            <div className="h-num-64.1 flex-1 relative shrink-0 ml-[-37.4px]!">
              <div className="absolute top-0 left-0 rounded-num-50 bg-darkorange border-white border-solid border-0 box-border w-full h-full z-6" />
              <div className="absolute top-[24.2px] left-[15.5px] leading-[15.2px] uppercase font-semibold inline-block min-w-[37.9px] z-7">
                MORE
              </div>
            </div>
          </div>
        </div>
        <div className="w-[104.5px] flex flex-col items-start shrink-0 text-[32px]">
          <div className="self-stretch flex items-start pt-num-0! pb-num-0! pl-num-0! pr-num-0!">
            <h2 className="mb-[-1.9px]! m-0! flex-1 relative text-[length:inherit] leading-[40.6px] uppercase font-semibold font-[inherit] shrink-0 z-4 mq900:text-[26px] mq900:leading-8 mq450:text-num-16 mq450:leading-6">
              250 +
            </h2>
          </div>
          <div className="w-21.75 relative text-[10px] leading-3 inline-block shrink-0 z-3">
            Enjoy Working with us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
