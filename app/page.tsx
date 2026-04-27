import { Hero } from "@/components/sections/home/Hero";
import { Features } from "@/components/sections/home/Features";
import { Services } from "@/components/sections/home/Services";
import { Stats } from "@/components/sections/home/Stats";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTA } from "@/components/sections/home/CTA";
import { WellArchitectedReview } from "@/components/sections/home/WellArchitectedReview";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <WellArchitectedReview />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
}
