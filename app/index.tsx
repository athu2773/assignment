import type { NextPage } from "next";
import FrameComponent from "../components/FrameComponent";
import Slider1 from "../components/Slider1";
import FrameComponent2 from "../components/FrameComponent2";
import About from "../components/About";
import FrameComponent1 from "../components/FrameComponent1";

const Index: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end pt-num-0! pb-16.75! pl-num-0! pr-num-0! box-border gap-6 leading-[normal] tracking-[normal]">
      <section className="w-482.75 flex flex-col items-start pt-num-0! pb-num-0! pl-num-0! pr-num-0! box-border max-w-[101%] shrink-0">
        <FrameComponent />
        <Slider1 />
      </section>
      <FrameComponent2 />
      <div className="w-93.5num-498 relative rounded-num-20 bg-darkslateblue hidden max-w-full shrink-0" />
      <main className="w-457.75 flex items-start justify-end pt-num-0! pb-num-0! pl-num-1! pr-num-1! box-border max-w-full shrink-0">
        <div className="flex flex-col items-end gap-27 max-w-full shrink-0 mq900:gap-[27px] mq1300:gap-[54px]">
          <About />
          <FrameComponent1 />
        </div>
      </main>
    </div>
  );
};

export default Index;
