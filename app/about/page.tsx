import HeroSection from "./components/hero-section"
import MyStorySection from "./components/my-story-section"
import MissionVisionSection from "./components/mission-vision-section"
import AiTeamSection from "./components/ai-team-section"
import ValuesSection from "./components/values-section"
import PersonalBackgroundSection from "./components/personal-background-section"
import CtaSection from "./components/cta-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <HeroSection />
      <MyStorySection />
      <MissionVisionSection />
      <AiTeamSection />
      <ValuesSection />
      <PersonalBackgroundSection />
      <CtaSection />
    </div>
  )
}
