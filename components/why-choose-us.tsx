import { Zap, Shield, Headphones } from "lucide-react"

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Zap,
      title: "Rapidez",
      description: "Integración en minutos, no en días. Comienza a facturar al instante.",
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Cumplimiento total con el SAT. Tus datos protegidos con encriptación de nivel bancario.",
    },
    {
      icon: Headphones,
      title: "Soporte",
      description: "Atención personalizada 24/7. Nuestro equipo técnico siempre disponible.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">¿Por qué elegirnos?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">La confianza de miles de empresas nos respalda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
