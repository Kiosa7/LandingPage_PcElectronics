import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us" // Added new minimalist why choose us section
import TestimonialsSection from "@/components/testimonials-section"
import ClientLogos from "@/components/client-logos"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs /> {/* Added new section with 3 key benefits: rapidez, seguridad, soporte */}
      <TestimonialsSection />
      <ClientLogos />
      <ContactForm />
      <Footer />
    </main>
  )
}
