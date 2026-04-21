import Header from "../components/Header";
import Hero from "../components/Hero";
import HotTopics from "../components/HotTopics";
import AboutFirm from "../components/AboutFirm";
import Insights from "../components/Insights";

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <HotTopics />
      <AboutFirm />
      <Insights />
    </div>
  );
}
