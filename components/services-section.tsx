import { FileText, Shield, Stamp, Link, Users, Inbox } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Emite Facturas",
      description: "Facturas y recibos CFDI desde el portal web",
    },
    {
      icon: Shield,
      title: "Validación de CFDI",
      description: "Verifica cualquier comprobante fiscal",
    },
    {
      icon: Stamp,
      title: "Timbrado CFDI",
      description: "Timbrado de facturas, nómina y retenciones",
    },
    {
      icon: Link,
      title: "Interfaz de Timbrado",
      description: "Conecta tu sistema o ERP",
    },
    {
      icon: Users,
      title: "Kiosko CFDI",
      description: "Autofacturación para tus clientes",
    },
    {
      icon: Inbox,
      title: "Buzón CFDI",
      description: "Recibe y valida facturas de proveedores",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Destacados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones completas de facturación electrónica para todas tus necesidades empresariales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Conoce Todos Nuestros Servicios
          </button>
        </div>
      </div>
    </section>
  )
}
