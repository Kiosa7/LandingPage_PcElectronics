import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Clock } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="gradient-bg text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Transforma tu facturación con <span className="text-blue-200">PcElectronics</span>
              <br />
              <span className="text-2xl lg:text-4xl font-semibold">Simple, Rápido y Seguro</span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Automatiza tus procesos con nuestro sistema y API REST confiable y fácil de integrar
            </p>

            {/* Quick Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">Integración rápida</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Clock className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium">Soporte 24/7</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Solicita tu Demo Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Contáctanos Ahora
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm">API REST Conectada</span>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-xs font-mono text-blue-100">{"POST /api/v1/invoices"}</div>
                  <div className="text-xs text-blue-200 mt-2">
                    {'{ "status": "success", "invoice_id": "INV-2024-001" }'}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Facturas procesadas hoy:</span>
                  <span className="font-bold text-2xl">1,247</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
