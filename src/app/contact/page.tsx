'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Users, Award } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          })
        }, 3000)
      } else {
        alert(data.error || 'Terjadi kesalahan saat mengirim pesan')
      }
    } catch (error) {
      alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    'Landscape & Taman',
    'Fasade Bangunan',
    'Lighting Design',
    'Water Features',
    'Carport & Garasi',
    'Pagar & Gerbang'
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hubungi <span className="text-emerald-600">PT TIGA PILAR NUSAINA</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Siap untuk transformasi eksterior impian Anda? Hubungi kami hari ini untuk konsultasi gratis dan penawaran terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-100 text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Telepon</h3>
              <a href="tel:085353876138" className="text-emerald-600 font-bold text-lg hover:text-emerald-700 transition-colors">
                085353876138
              </a>
              <p className="text-gray-600 mt-2">Senin - Sabtu, 08:00 - 17:00</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-100 text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
              <a href="mailto:info@tigapilarnusaina.com" className="text-emerald-600 font-bold text-lg hover:text-emerald-700 transition-colors">
                info@tigapilarnusaina.com
              </a>
              <p className="text-gray-600 mt-2">Respon dalam 24 jam</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-100 text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alamat</h3>
              <p className="text-gray-700 font-medium">
                JALAN MULAWARMAN GG.SETIA<br />
                Lamaru, Balikpapan Timur<br />
                Balikpapan, Kalimantan Timur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Pesan Terkirim!</h3>
                    <p className="text-green-700">
                      Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda dalam 24 jam.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telepon *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="0812-3456-7890"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Layanan yang Dibutuhkan
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Pilih Layanan</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ceritakan detail proyek yang Anda inginkan..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Map & Info */}
            <div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                <div className="aspect-video bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-xl font-bold">Lokasi Kami</div>
                    <div className="text-sm mt-2">Balikpapan, Kalimantan Timur</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Jam Operasional</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">Senin - Jumat</span>
                    </div>
                    <span className="font-medium text-gray-900">08:00 - 17:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">Sabtu</span>
                    </div>
                    <span className="font-medium text-gray-900">08:00 - 15:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-500">Minggu</span>
                    </div>
                    <span className="text-gray-500">Tutup</span>
                  </div>
                </div>
                
                <div className="border-t mt-6 pt-6">
                  <h4 className="font-bold text-gray-900 mb-4">Layanan Darurat</h4>
                  <p className="text-gray-600 mb-4">
                    Untuk kebutuhan darurat atau konsultasi cepat, hubungi kami di nomor telepon yang tersedia.
                  </p>
                  <a href="tel:085353876138" className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    <Phone className="w-5 h-5 mr-2" />
                    Darurat: 085353876138
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Hubungi <span className="text-emerald-600">PT TIGA PILAR NUSAINA</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dapatkan solusi dekorasi eksterior terbaik dengan layanan profesional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Konsultasi Gratis</h3>
              <p className="text-gray-600">
                Diskusikan kebutuhan dan visi Anda dengan tim ahli kami secara gratis tanpa biaya tersembunyi.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tim Responsif</h3>
              <p className="text-gray-600">
                Tim kami siap merespon pertanyaan dan kebutuhan Anda dengan cepat dan profesional.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hasil Terjamin</h3>
              <p className="text-gray-600">
                Hasil kerja berkualitas dengan garansi hingga 5 tahun untuk kepuasan dan ketenangan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Untuk Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim profesional PT TIGA PILAR NUSAINA siap membantu mewujudkan eksterior impian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:085353876138" 
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Hubungi Sekarang
            </a>
            <a 
              href="/portfolio" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}