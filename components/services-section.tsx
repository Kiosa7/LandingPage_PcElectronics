import { FileText, Shield, Stamp, Plug, Inbox } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Emite Facturas",
      description: "Facturas y recibos CFDI desde el portal web",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Validación de CFDI",
      description: "Verifica cualquier comprobante fiscal",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: Stamp,
      title: "Timbrado CFDI",
      description: "Timbrado de facturas, nómina y retenciones",
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Plug,
      title: "Interfaz de Timbrado",
      description: "Conecta tu sistema o ERP",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Inbox,
      title: "Buzón CFDI",
      description: "Recibe y valida facturas de proveedores",
      gradient: "from-emerald-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Nuestras Soluciones</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para tu facturación electrónica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
