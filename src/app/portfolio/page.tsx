import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Eye, Calendar, MapPin, Filter, Search, ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Villa Modern Garden",
      category: "Landscape",
      location: "Balikpapan",
      date: "2024",
      image: "/api/placeholder/600/400",
      description: "Taman landscape modern dengan desain minimalis untuk villa mewah di Balikpapan.",
      features: ["Taman minimalis", "Kolam hias", "Lighting landscape", "Irigasi otomatis"]
    },
    {
      id: 2,
      title: "Kantor Fasade Premium",
      category: "Fasade",
      location: "Samarinda",
      date: "2024",
      image: "/api/placeholder/600/400",
      description: "Transformasi fasade bangunan kantor dengan material premium dan desain modern.",
      features: ["Marmer cladding", "Glass facade", "Architectural lighting", "Metal works"]
    },
    {
      id: 3,
      title: "Resort Water Features",
      category: "Water Features",
      location: "Bontang",
      date: "2023",
      image: "/api/placeholder/600/400",
      description: "Elemen air mewah untuk resort dengan air mancur dan kolam hias yang memukau.",
      features: ["Air mancur dancing", "Kolam koi", "Waterfall", "Sistem filtrasi"]
    },
    {
      id: 4,
      title: "Rumah Tropical Garden",
      category: "Landscape",
      location: "Balikpapan",
      date: "2023",
      image: "/api/placeholder/600/400",
      description: "Taman tropis dengan berbagai tanaman eksotis dan elemen alami.",
      features: ["Taman tropis", "Gazebo", "Jalan setapak", "Tanaman eksotis"]
    },
    {
      id: 5,
      title: "Commercial Lighting",
      category: "Lighting",
      location: "Samarinda",
      date: "2023",
      image: "/api/placeholder/600/400",
      description: "Sistem pencahayaan komersial yang modern dan energy efficient.",
      features: ["LED lighting", "Smart control", "Architectural lighting", "Security lighting"]
    },
    {
      id: 6,
      title: "Luxury Carport",
      category: "Carport",
      location: "Balikpapan",
      date: "2023",
      image: "/api/placeholder/600/400",
      description: "Carport mewah dengan kanopi kaca dan sistem drainase modern.",
      features: ["Canopy kaca", "Flooring premium", "Drainase modern", "Lighting design"]
    },
    {
      id: 7,
      title: "Minimalist Pagar",
      category: "Pagar",
      location: "Bontang",
      date: "2023",
      image: "/api/placeholder/600/400",
      description: "Desain pagar minimalis modern dengan automatic gate system.",
      features: ["Minimalis design", "Automatic gate", "Material stainless", "Security system"]
    },
    {
      id: 8,
      title: "Rooftop Garden",
      category: "Landscape",
      location: "Samarinda",
      date: "2022",
      image: "/api/placeholder/600/400",
      description: "Taman atap dengan desain urban garden yang fungsional dan estetis.",
      features: ["Rooftop garden", "Urban farming", "Relaxation area", "City view"]
    }
  ]

  const categories = ["Semua", "Landscape", "Fasade", "Lighting", "Water Features", "Carport", "Pagar"]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Portfolio <span className="text-emerald-600">Proyek Kami</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Lihat berbagai proyek dekorasi eksterior yang telah kami kerjakan dengan kualitas premium dan kepuasan klien.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-gray-600">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-gray-600">Klien Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
                <div className="text-gray-600">Kota Dilayani</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
                <div className="text-gray-600">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari proyek..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-2">🏡</div>
                      <div className="text-sm font-medium">{project.category}</div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-emerald-600 p-3 rounded-full hover:bg-emerald-50 transition-colors">
                      <Eye className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1">
                      <span>Detail</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proyek Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Karya terbaik kami yang mendapatkan apresiasi tinggi dari klien
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-200 to-teal-300 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">🏆</div>
                  <div className="text-2xl font-bold">Villa Modern Garden</div>
                  <div className="text-lg mt-2">Best Landscape Design 2024</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Proyek Terbaik Tahun Ini
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Villa Modern Garden - Balikpapan
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Proyek transformasi taman seluas 2.000 m² untuk villa mewah di Balikpapan. 
                Menggabungkan desain landscape modern dengan elemen air dan pencahayaan yang memukau.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">2.000 m²</div>
                  <div className="text-gray-600">Luas Area</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">6 Bulan</div>
                  <div className="text-gray-600">Durasi Pengerjaan</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">15+</div>
                  <div className="text-gray-600">Jenis Tanaman</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">100%</div>
                  <div className="text-gray-600">Kepuasan Klien</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Lihat Case Study
                </button>
                <button className="flex-1 border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                  Konsultasi Serupa
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Klien Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimoni dari klien yang telah puas dengan layanan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                position: "CEO PT. Maju Bersama",
                project: "Kantor Fasade Premium",
                content: "Hasil kerja PT TIGA PILAR NUSAINA sangat memuaskan. Fasade kantor kami terlihat sangat modern dan profesional. Tim yang sangat ahli dan profesional."
              },
              {
                name: "Siti Nurhaliza",
                position: "Homeowner",
                project: "Villa Modern Garden",
                content: "Taman impian saya menjadi kenyataan. Desainnya sangat bagus, perawatannya mudah, dan hasilnya melebihi ekspektasi. Highly recommended!"
              },
              {
                name: "Ahmad Wijaya",
                position: "General Manager Resort",
                project: "Resort Water Features",
                content: "Water features yang dibuat sangat memukau dan menjadi daya tarik utama resort kami. Kualitas material dan pengerjaan sangat baik."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-emerald-600 text-sm">{testimonial.position}</div>
                  <div className="text-gray-500 text-sm">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ingin Menjadi Proyek Selanjutnya?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Mari diskusikan proyek dekorasi eksterior impian Anda dengan tim profesional kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Mulai Proyek Anda
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="tel:085353876138" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}