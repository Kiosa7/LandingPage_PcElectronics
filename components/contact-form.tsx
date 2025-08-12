"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("¡Gracias por tu interés! Te contactaremos pronto.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Listo para llevar tu facturación al <span className="gradient-text">siguiente nivel</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contáctanos hoy y comienza a ahorrar tiempo y dinero con PcElectronics.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">contacto@pcelectronics.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Teléfono</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Oficina</div>
                  <div className="text-gray-600">Ciudad de México, México</div>
                </div>
              </div>
            </div>

            {/* Benefits reminder */}
            <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-3">¿Por qué actuar ahora?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Demo gratuita sin compromiso</li>
                <li>✓ Implementación en menos de 48 horas</li>
                <li>✓ Soporte técnico incluido el primer mes</li>
                <li>✓ Integración garantizada o te devolvemos tu dinero</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu Demo Gratis</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email corporativo *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="tu@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa *
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos sobre tu proyecto
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Describe brevemente tus necesidades de facturación..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                Solicitar Demo Gratis
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo para programar tu demo
                personalizada.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
