import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    company: "TechSolutions S.A.",
    role: "Directora Financiera",
    content:
      "PcElectronics transformó completamente nuestro proceso de facturación. La integración fue súper rápida y el soporte técnico es excepcional.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    company: "Innovate Corp",
    role: "CTO",
    content:
      "La API REST es increíblemente fácil de usar. En menos de una semana teníamos todo funcionando perfectamente con nuestro sistema existente.",
    rating: 5,
  },
  {
    name: "Ana Rodríguez",
    company: "Digital Ventures",
    role: "Gerente de Operaciones",
    content:
      "Hemos reducido los errores de facturación en un 95% y ahorramos más de 20 horas semanales. Una inversión que se paga sola.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-gray-600">Testimonios reales de empresas que ya transformaron su facturación</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm font-medium text-blue-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
