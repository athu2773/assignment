import type { NextPage } from "next";
import Image from "next/image";

export type AboutType = {
  className?: string;
};

const About: NextPage<AboutType> = ({ className = "" }) => {
  return (
    <div
      className={`w-480 h-172 bg-white overflow-hidden shrink-0 flex items-start pt-[24.1px]! pb-9! pl-17.5! pr-17.5! box-border gap-[41.5px] mq900:h-auto mq900:gap-[21px] mq900:pb-5! mq900:box-border mq1300:pt-5! mq1300:pb-num-23! mq1300:pl-[35px]! mq1300:pr-[35px]! mq1300:box-border ${className}`}
    >
      <div className="mt-[-133.6px]! w-[1009.5px] flex flex-col items-end pt-[131.5px]! pb-63! pl-5! pr-32! box-border gap-13.75 bg-[url('/map-with-white-grey-1@2x.png')] bg-cover bg-no-repeat bg-top max-w-[calc(100%-753px)] shrink-0 mq900:gap-[27px] mq900:pt-[55px]! mq900:pr-8! mq900:pb-[107px]! mq900:box-border mq1300:pt-[85px]! mq1300:pr-16! mq1300:pb-[164px]! mq1300:box-border mq1650:hidden mq1650:max-w-full">
        <Image
          className="w-[1009.5px] relative max-h-full object-cover hidden max-w-full shrink-0"
          width={1009.5}
          height={1009.5}
          sizes="100vw"
          alt=""
          src="/map-with-white-grey-1@2x.png"
        />
        <section className="self-stretch flex items-start gap-17.5 max-w-full shrink-0 text-left text-num-24 text-black font-poppins mq900:gap-[35px] mq900:flex-wrap mq450:gap-[17px]">
          <div className="flex flex-col items-start pt-num-6! pb-num-0! pl-num-0! pr-num-0! box-border min-w-56 mq900:flex-1">
            <div className="self-stretch rounded-num-20 bg-whitesmoke-100 flex items-start pt-30! pb-6.5! pl-6.25! pr-6.25! z-1">
              <div className="h-54.5 w-56 relative rounded-num-20 bg-whitesmoke-100 hidden shrink-0" />
              <h3 className="m-0! relative text-[length:inherit] font-semibold font-playfair z-2 shrink-0 mq450:text-num-19">
                ABOUT <br />
                FIRM
              </h3>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-2.25 min-w-92.25 max-w-full text-justify text-darkslategray mq900:min-w-full">
            <h3 className="m-0! w-99.75 h-11.5 relative text-[length:inherit] font-normal font-[inherit] inline-block shrink-0 max-w-full z-1 mq450:text-num-19">
              HLS Global Group <br />
              <br />
            </h3>
            <div className="h-60 relative text-num-16 inline-block shrink-0 z-1">
              is an international accounting and business advisory firm with a
              focus on providing superior services in the areas of accounting,
              tax, audit, advisory, and consulting. Founded in 1990, we pride
              ourselves in delivering the highest levels of quality and customer
              service while remaining cost-effective. We have grown to more than
              250 professionals serving clients in the United States, Japan,
              Mexico, India, Germany, and UAE. While catering to the business
              requirements of Japanese subsidiaries operating in the United
              States, Mexico, India, Germany, and UAE, we also provide
              comprehensive solutions to non-Japanese multinational companies
              operating in Japan.
            </div>
          </div>
        </section>
        <section className="w-141.75 h-69 flex flex-col items-start gap-4.25 max-w-full shrink-0 text-left text-num-36 text-darkslategray font-poppins">
          <div className="w-128.5 flex flex-col items-start pt-num-0! pb-3.5! pl-num-0! pr-num-0! box-border gap-0.5 max-w-full">
            <div className="w-118 flex items-start justify-between gap-5 max-w-full mq450:flex-wrap mq450:gap-5">
              <h1 className="m-0! relative text-[length:inherit] font-semibold font-playfair z-1 mq900:text-num-29 mq450:text-num-22">
                250+
                <br />
              </h1>
              <h2 className="m-0! w-30.75 relative text-[length:inherit] font-semibold font-playfair inline-block shrink-0 z-1 mq900:text-num-29 mq450:text-num-22">
                1000+
                <br />
              </h2>
            </div>
            <div className="self-stretch flex items-start justify-between gap-5 text-num-16 mq900:flex-wrap mq900:gap-5">
              <div className="w-num-165 relative inline-block shrink-0 z-1">
                Professional Staff <br />
                Members Globally
              </div>
              <div className="w-num-165 relative inline-block shrink-0 z-1">
                Clients in the HLS Global Network
              </div>
            </div>
          </div>
          <div className="self-stretch h-0.5 relative bg-midnightblue z-1" />
          <div className="w-128.5 flex flex-col items-start gap-0.5 max-w-full">
            <div className="w-118 flex items-start justify-between gap-5 max-w-full mq450:flex-wrap mq450:gap-5">
              <h2 className="m-0! w-24.5 relative text-[length:inherit] font-semibold font-playfair inline-block shrink-0 z-1 mq900:text-num-29 mq450:text-num-22">
                35+
                <br />
              </h2>
              <h2 className="m-0! w-30.75 relative text-[length:inherit] font-semibold font-playfair inline-block shrink-0 z-1 mq900:text-num-29 mq450:text-num-22">
                15+
                <br />
              </h2>
            </div>
            <div className="self-stretch flex items-start justify-between gap-5 text-num-16 mq900:flex-wrap mq900:gap-5">
              <div className="w-num-165 relative inline-block shrink-0 z-1">
                Years of Experience Connecting Japan and the World
              </div>
              <div className="w-num-165 relative inline-block shrink-0 z-1">
                Countries Covered With Our Alliance Network
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col items-end gap-[23.9px] max-w-[calc(100%-1051px)] shrink-0 text-left text-num-12 text-black font-poppins mq1650:hidden mq1650:max-w-full">
        <div className="w-[331.8px] rounded-num-20 bg-darkorange flex items-start justify-between pt-[8.7px]! pb-[7.6px]! pl-4.75! pr-4! box-border gap-5 max-w-full mq450:flex-wrap mq450:gap-5">
          <div className="h-8.75 w-[331.8px] relative rounded-num-20 bg-darkorange hidden max-w-full shrink-0" />
          <div className="relative leading-4.5 uppercase font-semibold z-1 shrink-0">
            We are located
          </div>
          <div className="flex items-start gap-4.75 shrink-0 text-[15px]">
            <div className="relative leading-4.5 font-semibold shrink-0 z-1">
              INDIA
            </div>
            <div className="flex flex-col items-start pt-num-6! pb-num-0! pl-num-0! pr-num-0!">
              <Image
                className="w-full h-[7.6px] relative shrink-0 z-1"
                width={13.3}
                height={7.6}
                sizes="100vw"
                alt=""
                src="/Vector.svg"
              />
            </div>
          </div>
        </div>
        <Image
          className="self-stretch h-142.25 relative rounded-[25px] max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          width={712}
          height={569}
          sizes="100vw"
          alt=""
          src="/Rectangle-123@2x.png"
        />
      </section>
    </div>
  );
};

export default About;
