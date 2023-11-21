import Image from "next/image";
import Hero from "./Components/Hero";
import FeatureSection from "./Components/FeatureSection";
import VersionSection from "./Components/VersionSection";
import AboutSection from "./Components/AboutSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <div>
        <VersionSection />

        <div className="text-center pb-10">
          <Link
            className="inline-block font-bold text-white hover:bg-slate-500 bg-slate-800 py-2 px-8 rounded-full"
            href={"/"}
          >
            View more
          </Link>
        </div>
      </div>
      <AboutSection />
    </>
  );
}
