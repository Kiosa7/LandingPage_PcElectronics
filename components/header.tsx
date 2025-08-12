import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">PcElectronics</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-gray-600 hover:text-blue-600 transition-colors">
              Beneficios
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">Demo Gratis</Button>
        </div>
      </div>
    </header>
  )
}
