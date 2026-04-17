import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex items-start pt-num-0! pb-num-0! pl-num-6! pr-num-0! box-border top-0 z-99 sticky max-w-full ${className}`}
    >
      <header className="flex-1 bg-white overflow-hidden flex items-start pt-6! pb-num-0! pl-19! pr-19! box-border gap-15 max-w-full text-center text-num-16 text-darkslategray font-source-sans-pro mq900:gap-[15px] mq1300:gap-[30px] mq1300:pl-9.5! mq1300:pr-9.5! mq1300:box-border">
        <Image
          className="w-46.75 relative max-h-full object-cover hidden shrink-0"
          width={187}
          height={51.6}
          sizes="100vw"
          alt=""
          src="/HLS-india-white-logo-1@2x.png"
        />
        <div className="-mt-6.25! flex flex-col items-start max-w-full shrink-0">
          <Image
            className="w-full relative max-h-full h-auto object-cover"
            width={89}
            height={89}
            sizes="100vw"
            alt=""
            src="/demo-demo-icon-139882881-1@2x.png"
          />
        </div>
        <div className="w-171 flex flex-col items-start pt-num-4! pb-num-0! pl-num-0! pr-num-0! box-border max-w-full shrink-0 mq1300:w-0 mq1650:hidden">
          <b className="self-stretch relative whitespace-pre-wrap shrink-0 mq1300:hidden">{`WHO WE SERVE          SOLUTIONS           RESOURCES          ABOUT US          CONTACT US         `}</b>
        </div>
        <div className="w-[233.1px] flex items-start gap-[27.7px] shrink-0">
          <div className="flex flex-col items-start pt-num-0! pb-num-0! pl-num-0! pr-2.5!">
            <Image
              className="w-full h-7.75 relative"
              width={31}
              height={31}
              sizes="100vw"
              alt=""
              src="/search-svgrepo-com-2.svg"
            />
          </div>
          <div className="flex flex-col items-start pt-[4.5px]! pb-num-0! pl-num-0! pr-num-0!">
            <div className="flex items-start gap-2.75">
              <b className="relative shrink-0">IND</b>
              <div className="flex flex-col items-start pt-[7.3px]! pb-num-0! pl-num-0! pr-num-0!">
                <Image
                  className="w-full h-[8.6px] relative shrink-0"
                  width={13.3}
                  height={8.6}
                  sizes="100vw"
                  alt=""
                  src="/Vector.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start pt-[4.5px]! pb-num-0! pl-num-0! pr-num-0!">
            <div className="self-stretch h-5 relative">
              <b className="absolute top-0 left-0 inline-block min-w-15.75">
                ENGLISH
              </b>
              <Image
                className="absolute top-[6.3px] left-[72.6px] w-[13.3px] h-[8.6px]"
                width={13.3}
                height={8.6}
                sizes="100vw"
                alt=""
                src="/Vector.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent;
