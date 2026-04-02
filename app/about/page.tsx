"use client";

import { AboutHero } from "@/components/sections/about/AboutHero";
import { OurStory } from "@/components/sections/about/OurStory";
import { OurValues } from "@/components/sections/about/OurValues";
import { Achievements } from "@/components/sections/about/Achievements";
import { OurTeam } from "@/components/sections/about/OurTeam";
import { OurVision } from "@/components/sections/about/OurVision";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <OurStory />
      <OurValues />
      <Achievements />
      <OurTeam />
      <OurVision />
    </div>
  );
}
