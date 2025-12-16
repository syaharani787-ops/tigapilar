import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Eye, Lock, User, Database, AlertCircle } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              PT TIGA PILAR NUSAINA berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
            </p>
            <p className="text-gray-500 mt-4">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengantar</h2>
              <p className="text-gray-700 leading-relaxed">
                Di PT TIGA PILAR NUSAINA, kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.
              </p>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-8 h-8 text-emerald-600 mr-3" />
                Pengumpulan Data Pribadi
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data yang Kami Kumpulkan</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3">•</span>
                    <div>
                      <strong>Informasi Identitas:</strong> Nama lengkap, alamat email, nomor telepon, alamat rumah/kantor
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3">•</span>
                    <div>
                      <strong>Informasi Kontak:</strong> Detail kontak untuk komunikasi mengenai layanan kami
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3">•</span>
                    <div>
                      <strong>Informasi Proyek:</strong> Detail tentang kebutuhan dekorasi eksterior Anda
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3">•</span>
                    <div>
                      <strong>Informasi Teknis:</strong> Data penggunaan website dan preferensi layanan
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cara Kami Mengumpulkan Data</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Formulir kontak dan konsultasi di website</li>
                  <li>• Komunikasi langsung (telepon, email, WhatsApp)</li>
                  <li>• Pertemuan konsultasi di lokasi proyek</li>
                  <li>• Data analytics website (cookies, IP address)</li>
                </ul>
              </div>
            </div>

            {/* Data Usage */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-8 h-8 text-emerald-600 mr-3" />
                Penggunaan Data Pribadi
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Layanan Pelanggan</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Merespons pertanyaan dan permintaan</li>
                    <li>• Memberikan konsultasi produk</li>
                    <li>• Memproses permintaan layanan</li>
                    <li>• Memberikan dukungan teknis</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Pengembangan Layanan</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Menganalisis kebutuhan pasar</li>
                    <li>• Meningkatkan kualitas layanan</li>
                    <li>• Mengembangkan produk baru</li>
                    <li>• Personalisasi pengalaman pengguna</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Komunikasi Pemasaran</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Mengirim informasi produk terbaru</li>
                    <li>• Newsletter dan promosi</li>
                    <li>• Undangan acara dan webinar</li>
                    <li>• Penawaran khusus untuk pelanggan</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Kepatuhan Hukum</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Memenuhi kewajiban hukum</li>
                    <li>• Melindungi hak-hak perusahaan</li>
                    <li>• Mencegah aktivitas ilegal</li>
                    <li>• Menjaga keamanan sistem</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-8 h-8 text-emerald-600 mr-3" />
                Perlindungan Data
              </h2>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Langkah-Langkah Keamanan Kami</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Enkripsi Data</h4>
                      <p className="text-gray-600 text-sm">Semua data pribadi dienkripsi menggunakan teknologi SSL/TLS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Akses Terbatas</h4>
                      <p className="text-gray-600 text-sm">Hanya personil berwenang yang dapat mengakses data pribadi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Backup Rutin</h4>
                      <p className="text-gray-600 text-sm">Data di-backup secara rutin dan disimpan dengan aman</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Audit Keamanan</h4>
                      <p className="text-gray-600 text-sm">Audit keamanan dilakukan secara berkala</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-8 h-8 text-emerald-600 mr-3" />
                Hak Anda Sebagai Pengguna
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hak Akses dan Koreksi</h3>
                  <p className="text-gray-700">
                    Anda berhak mengakses, mengoreksi, atau memperbarui data pribadi yang Anda berikan kepada kami. 
                    Hubungi kami melalui email atau telepon untuk melakukan perubahan.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hak Penghapusan Data</h3>
                  <p className="text-gray-700">
                    Anda dapat meminta penghapusan data pribadi Anda dari sistem kami, kecuali jika data tersebut 
                    diperlukan untuk kepentingan hukum atau pemenuhan kontrak.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hak Menolak Pemasaran</h3>
                  <p className="text-gray-700">
                    Anda dapat menolak menerima komunikasi pemasaran dari kami kapan saja dengan mengklik 
                    link unsubscribe di email atau menghubungi kami langsung.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Party */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pihak Ketiga</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-2" />
                  Berbagi Data dengan Pihak Ketiga
                </h3>
                <p className="text-gray-700 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, 
                  kecuali dalam kondisi berikut:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mitra bisnis yang membantu menyediakan layanan kami</li>
                  <li>• Penyedia layanan pemrosesan pembayaran</li>
                  <li>• Otoritas hukum jika diwajibkan oleh undang-undang</li>
                  <li>• Perlindungan hak-hak dan keamanan perusahaan</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kebijakan Cookies</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna dan menganalisis traffic. 
                  Cookies adalah file teks kecil yang disimpan di browser Anda.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Jenis Cookies yang Kami Gunakan:</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• <strong>Essential Cookies:</strong> Diperlukan untuk fungsi dasar website</li>
                      <li>• <strong>Analytics Cookies:</strong> Membantu kami memahami penggunaan website</li>
                      <li>• <strong>Marketing Cookies:</strong> Digunakan untuk iklan yang relevan</li>
                      <li>• <strong>Preference Cookies:</strong> Mengingat preferensi pengguna</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Mengelola Cookies:</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda. 
                      Menonaktifkan cookies dapat mempengaruhi fungsi website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perubahan Kebijakan</h2>
              
              <p className="text-gray-700 leading-relaxed">
                PT TIGA PILAR NUSAINA berhak mengubah Kebijakan Privasi ini dari waktu ke waktu. 
                Perubahan akan diberitahukan melalui website atau email. 
                Kami menyarankan Anda untuk meninjau kebijakan ini secara berkala.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-emerald-600 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Hubungi Kami</h2>
              <p className="mb-6">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlakuan data pribadi Anda, 
                silakan hubungi kami:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Email:</h4>
                  <p className="text-emerald-100">privacy@tigapilarnusaina.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Telepon:</h4>
                  <p className="text-emerald-100">085353876138</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Alamat:</h4>
                  <p className="text-emerald-100">
                    JALAN MULAWARMAN GG.SETIA<br />
                    Lamaru, Balikpapan Timur<br />
                    Balikpapan, Kalimantan Timur
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Website:</h4>
                  <p className="text-emerald-100">www.tigapilarnusaina.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}