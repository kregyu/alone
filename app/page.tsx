"use client"

import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import PainSolutionsSection from "@/components/sections/pain-solutions-section"
import MvpShowcaseTeaser from "@/components/sections/mvp-showcase-teaser"
import CoursePreview from "@/components/sections/course-preview"
import Testimonials from "@/components/sections/testimonials"
import ResourcesTeaser from "@/components/sections/resources-teaser"
import FinalCta from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <HeroSection />
      <AboutSection />
      <PainSolutionsSection />
      <MvpShowcaseTeaser />
      <CoursePreview />
      <Testimonials />
      <ResourcesTeaser />
      <FinalCta />
    </div>
  )
}
