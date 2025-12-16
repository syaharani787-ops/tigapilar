import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Trees, Building, Lightbulb, Droplets, Car, Shield, CheckCircle, ArrowRight, Star } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Trees,
      title: "Landscape & Taman",
      description: "Desain dan pembuatan taman landscape modern yang memukau dengan berbagai jenis tanaman hias dan elemen dekoratif.",
      features: [
        "Desain taman minimalis dan modern",
        "Pemilihan tanaman yang sesuai",
        "Sistem irigasi otomatis",
        "Perawatan taman berkala"
      ],
      price: "Mulai dari Rp 50.000/m²"
    },
    {
      icon: Building,
      title: "Fasade Bangunan",
      description: "Transformasi eksterior bangunan dengan desain fasade modern dan material berkualitas tinggi.",
      features: [
        "Desain fasade custom",
        "Material premium (marmer, granit, wood)",
        "Lighting arsitektur",
        "Finishing berkualitas tinggi"
      ],
      price: "Mulai dari Rp 1.500.000/m²"
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Sistem pencahayaan eksterior yang estetis dan fungsional untuk menciptakan suasana yang menawan.",
      features: [
        "Landscape lighting",
        "Architectural lighting",
        "Smart lighting system",
        "Energy efficient LED"
      ],
      price: "Mulai dari Rp 25.000.000"
    },
    {
      icon: Droplets,
      title: "Water Features",
      description: "Elemen air seperti air mancur, kolam hias, dan waterfall untuk menambah kesegaran dan keindahan.",
      features: [
        "Air mancur modern",
        "Kolam hias dengan ikan koi",
        "Waterfall design",
        "Sistem filtrasi otomatis"
      ],
      price: "Mulai dari Rp 75.000.000"
    },
    {
      icon: Car,
      title: "Carport & Garasi",
      description: "Desain carport dan garasi yang fungsional dengan material berkualitas dan tahan lama.",
      features: [
        "Canopy kaca dan polikarbonat",
        "Flooring berkualitas",
        "Sistem drainase baik",
        "Lighting dan keamanan"
      ],
      price: "Mulai dari Rp 35.000.000"
    },
    {
      icon: Shield,
      title: "Pagar & Gerbang",
      description: "Desain pagar dan gerbang yang aman, estetis, dan sesuai dengan gaya arsitektur bangunan.",
      features: [
        "Pagar minimalis modern",
        "Automatic gate system",
        "Material besi, stainless, kayu",
        "Security integration"
      ],
      price: "Mulai dari Rp 20.000.000"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Layanan <span className="text-emerald-600">Dekorasi Eksterior</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              PT TIGA PILAR NUSAINA menyediakan berbagai layanan dekorasi eksterior berkualitas premium untuk memenuhi kebutuhan properti Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                    <service.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-emerald-600 font-bold text-lg">{service.price}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                      Konsultasi Gratis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses yang transparan dan terstruktur untuk hasil terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultasi", desc: "Diskusi kebutuhan dan visi Anda" },
              { step: "02", title: "Desain", desc: "Pembuatan desain konsep dan 3D" },
              { step: "03", title: "Produksi", desc: "Implementasi dengan tim profesional" },
              { step: "04", title: "Finishing", desc: "Quality check dan handover" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-emerald-600">PT TIGA PILAR NUSAINA</span>?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Bergaransi 5 Tahun",
                    desc: "Setiap pekerjaan kami dilindungi garansi panjang untuk keamanan dan kenyamanan Anda."
                  },
                  {
                    title: "Material Premium",
                    desc: "Hanya menggunakan material berkualitas tinggi dari supplier terpercaya."
                  },
                  {
                    title: "Tim Profesional",
                    desc: "Didukung oleh tenaga ahli berpengalaman lebih dari 10 tahun."
                  },
                  {
                    title: "Harga Kompetitif",
                    desc: "Penawaran harga terbaik dengan kualitas premium yang sepadan."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Quote</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Layanan yang Dibutuhkan</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>Pilih Layanan</option>
                      {services.map((service, index) => (
                        <option key={index}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    Kirim Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Untuk Transformasi Eksterior Anda?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek dekorasi eksterior Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="tel:085353876138" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              085353876138
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}