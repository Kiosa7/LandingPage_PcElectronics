import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import ServicesSection from "@/components/services-section" // Added new services section import
import TestimonialsSection from "@/components/testimonials-section"
import ClientLogos from "@/components/client-logos"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection /> {/* Added services section between benefits and testimonials */}
      <TestimonialsSection />
      <ClientLogos />
      <ContactForm />
      <Footer />
    </main>
  )
}
