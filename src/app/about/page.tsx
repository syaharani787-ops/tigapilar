import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Users, Award, Target, Heart, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-emerald-600">PT TIGA PILAR NUSAINA</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Spesialis dekorasi eksterior terpercaya yang menghadirkan keindahan dan fungsionalitas untuk setiap properti Anda sejak tahun 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Passion for Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transformasi Ruang Eksterior Menjadi Karya Seni
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PT TIGA PILAR NUSAINA didirikan dengan visi untuk mengubah tampilan eksterior properti menjadi sesuatu yang luar biasa. 
                  Dengan pengalaman lebih dari satu dekade, kami telah melayani ratusan klien dengan berbagai kebutuhan dekorasi eksterior.
                </p>
                <p>
                  Nama "Tiga Pilar" mencerminkan tiga nilai utama kami: <strong>Kualitas</strong>, <strong>Inovasi</strong>, dan <strong>Kepuasan Klien</strong>. 
                  Ketiga pilar ini menjadi fondasi dalam setiap proyek yang kami kerjakan.
                </p>
                <p>
                  Kami percaya bahwa eksterior yang indah tidak hanya meningkatkan nilai estetika, tetapi juga memberikan pengalaman yang menyenangkan bagi penghuninya.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                      <div className="text-gray-600 text-sm">Proyek Selesai</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">14</div>
                      <div className="text-gray-600 text-sm">Tahun Pengalaman</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                      <div className="text-gray-600 text-sm">Tim Profesional</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
                      <div className="text-gray-600 text-sm">Klien Puas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Perusahaan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tiga pilar fundamental yang menjadi dasar setiap keputusan dan tindakan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kualitas</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami hanya menggunakan material terbaik dan standar kerja tertinggi untuk setiap proyek. 
                Kualitas adalah komitmen yang tidak bisa dinegosiasikan.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inovasi</h3>
              <p className="text-gray-600 leading-relaxed">
                Selalu mengikuti tren terkini dan teknologi terbaru dalam industri dekorasi eksterior untuk memberikan solusi yang kreatif dan modern.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kepuasan Klien</h3>
              <p className="text-gray-600 leading-relaxed">
                Kepuasan klien adalah prioritas utama kami. Kami berkomitmen untuk memberikan layanan terbaik dan hasil yang melampaui ekspektasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Didukung oleh para ahli berpengalaman di bidang dekorasi eksterior
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ir. Ahmad Wijaya",
                position: "Direktur Utama",
                experience: "15+ tahun",
                expertise: "Landscape Architecture"
              },
              {
                name: "Siti Nurhaliza, S.T.",
                position: "Head Designer",
                experience: "10+ tahun", 
                expertise: "Exterior Design"
              },
              {
                name: "Budi Santoso, S.T.",
                position: "Project Manager",
                experience: "12+ tahun",
                expertise: "Construction Management"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-100">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                <p className="text-emerald-600 font-medium text-center mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm text-center mb-1">{member.experience} pengalaman</p>
                <p className="text-gray-500 text-sm text-center italic">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi perusahaan dekorasi eksterior terdepan di Indonesia yang menghadirkan solusi inovatif, 
                berkualitas tinggi, dan berkelanjutan untuk setiap properti dengan tetap menjaga keharmonisan dengan alam.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Memberikan layanan dekorasi eksterior berkualitas premium dengan harga kompetitif</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Menggunakan material ramah lingkungan dan teknologi terkini</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Membangun hubungan jangka panjang dengan klien melalui kepercayaan dan kepuasan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Mengembangkan tim profesional yang berkompeten dan berintegritas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mari Wujudkan Eksterior Impian Anda
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis dan temukan solusi dekorasi eksterior terbaik untuk properti Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/portfolio" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Lihat Portfolio Kami
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}