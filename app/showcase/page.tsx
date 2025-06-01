"use client"

import { useState } from "react"
import HeroSection from "./components/hero-section"
import FilterCategoriesSection from "./components/filter-categories-section"
import ProjectsGridSection from "./components/projects-grid-section"
import ProcessOverviewSection from "./components/process-overview-section"
import CtaSection from "./components/cta-section"
import { projects, projectCategories } from "@/data/projects"

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("全部")

  const filteredProjects = activeCategory === "全部" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <HeroSection />
      <FilterCategoriesSection 
        categories={projectCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProjectsGridSection projects={filteredProjects} />
      <ProcessOverviewSection />
      <CtaSection />
    </div>
  )
}
