export default function ClientLogos() {
  const clients = [
    "TechSolutions",
    "Innovate Corp",
    "Digital Ventures",
    "CloudTech",
    "DataFlow",
    "SmartBiz",
    "NextGen",
    "ProSystems",
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Empresas que confían en PcElectronics</h3>
          <p className="text-gray-600">Más de 500 empresas ya optimizaron su facturación con nosotros</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">{client.substring(0, 2).toUpperCase()}</span>
                </div>
                <div className="text-xs font-medium text-gray-700">{client}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Empresas activas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-gray-600">Facturas procesadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Tiempo de actividad</div>
          </div>
        </div>
      </div>
    </section>
  )
}
