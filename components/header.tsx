import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {" "}
          {/* increased header height for better logo visibility */}
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-row space-x-3 items-center">
              {" "}
              {/* improved spacing */}
              <Image
                src="/images/pcelectronics-logo.png"
                alt="PcElectronics Logo"
                width={60}
                height={60}
                className="w-15 h-15 object-contain" // increased logo size from 40px to 60px
              />
              <div className="flex flex-col">
                {" "}
                {/* added company name next to logo */}
                <span className="text-2xl font-bold text-blue-600">PcElectronics</span>
                <span className="text-xs text-cyan-500 font-medium">Facturación Electrónica</span>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-gray-600 hover:text-blue-600 transition-colors">
              {" "}
              {/* updated hover color to match logo */}
              Beneficios
            </a>
            <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors">
              Servicios
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>
          {/* CTA Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
            {" "}
            {/* updated button colors to match logo palette */}
            Demo Gratis
          </Button>
        </div>
      </div>
    </header>
  )
}
