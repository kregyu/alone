import HeroSection from "./components/hero-section"
import ContactFormInfoSection from "./components/contact-form-info-section"
import FaqSection from "./components/faq-section"
import CtaSection from "./components/cta-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <HeroSection />
      <ContactFormInfoSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}
