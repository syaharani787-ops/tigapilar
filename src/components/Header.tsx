'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
              <img src="/logo.svg" alt="PT TIGA PILAR NUSAINA" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PT TIGA PILAR NUSAINA</h1>
              <p className="text-xs text-emerald-600 font-medium">Exterior Decoration Specialist</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Beranda
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Tentang Kami
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Layanan
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Kontak
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:085353876138" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700">
              <Phone className="w-4 h-4" />
              <span className="font-medium">085353876138</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Layanan
              </Link>
              <Link 
                href="/portfolio" 
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
              <div className="pt-3 border-t">
                <a href="tel:085353876138" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 py-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">085353876138</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}