import { CheckCircle, Cpu, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: "Ahorra tiempo y reduce errores",
    description: "Automatización completa que elimina procesos manuales y minimiza errores humanos en tu facturación.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    title: "Compatible con todas las plataformas",
    description:
      "API REST universal que se integra perfectamente con cualquier sistema existente, sin importar la tecnología.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Soporte técnico 24/7",
    description:
      "Equipo especializado disponible las 24 horas para resolver cualquier consulta o inconveniente técnico.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Integración rápida y segura vía API REST",
    description: "Implementación en minutos con documentación completa y protocolos de seguridad de nivel empresarial.",
  },
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir <span className="gradient-text">PcElectronics</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las ventajas que hacen de nuestro sistema la mejor opción para tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para optimizar tu facturación?</h3>
            <p className="text-blue-100 mb-6 text-lg">Únete a más de 500 empresas que ya confían en PcElectronics</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Solicita tu Demo Gratis
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contáctanos Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
