import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileText, Shield, AlertTriangle, CheckCircle, Scale, Clock } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Syarat dan ketentuan penggunaan layanan PT TIGA PILAR NUSAINA.
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
                Selamat datang di PT TIGA PILAR NUSAINA. Dengan mengakses dan menggunakan layanan kami, 
                Anda setuju untuk terikat oleh Syarat & Ketentuan ini. Harap baca dengan seksama sebelum 
                menggunakan layanan dekorasi eksterior kami.
              </p>
            </div>

            {/* Company Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Informasi Perusahaan</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Nama Perusahaan</h3>
                    <p className="text-gray-700">PT TIGA PILAR NUSAINA</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bidang Usaha</h3>
                    <p className="text-gray-700">Dekorasi Eksterior</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Alamat</h3>
                    <p className="text-gray-700">
                      JALAN MULAWARMAN GG.SETIA<br />
                      Lamaru, Balikpapan Timur<br />
                      Balikpapan, Kalimantan Timur
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Kontak</h3>
                    <p className="text-gray-700">
                      Telepon: 085353876138<br />
                      Email: info@tigapilarnusaina.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Layanan Kami</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ruang Lingkup Layanan</h3>
                  <p className="text-gray-700 mb-4">
                    PT TIGA PILAR NUSAINA menyediakan layanan dekorasi eksterior meliputi:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Landscape & Taman</li>
                    <li>• Fasade Bangunan</li>
                    <li>• Lighting Design</li>
                    <li>• Water Features</li>
                    <li>• Carport & Garasi</li>
                    <li>• Pagar & Gerbang</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                    Standar Layanan
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Menggunakan material berkualitas premium</li>
                    <li>• Dikerjakan oleh tenaga profesional berpengalaman</li>
                    <li>• Garansi pengerjaan hingga 5 tahun</li>
                    <li>• Konsultasi gratis sebelum proyek dimulai</li>
                    <li>• Progress report transparan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kewajiban Klien</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                  Tanggung Jawab Klien
                </h3>
                <p className="text-gray-700 mb-4">
                  Sebagai klien, Anda setuju untuk:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <div>
                      <strong>Informasi Akurat:</strong> Memberikan informasi yang benar dan lengkap mengenai kebutuhan dan lokasi proyek
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <div>
                      <strong>Akses Lokasi:</strong> Memastikan tim kami memiliki akses yang memadai ke lokasi proyek
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <div>
                      <strong>Pembayaran Tepat Waktu:</strong> Melakukan pembayaran sesuai dengan jadwal yang disepakati
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <div>
                      <strong>Keputusan Final:</strong> Memberikan keputusan final mengenai desain dan material yang akan digunakan
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <div>
                      <strong>Perizinan:</strong> Memastikan semua perizinan yang diperlukan telah diurus
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Syarat Pembayaran</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Struktur Pembayaran</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tahap Pembayaran:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>DP (30%):</strong> Saat kontrak ditandatangani</li>
                        <li>• <strong>Tahap 2 (30%):</strong> Setelah material tiba</li>
                        <li>• <strong>Tahap 3 (30%):</strong> Proyek 50% selesai</li>
                        <li>• <strong>Pelunasan (10%):</strong> Serah terima proyek</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Metode Pembayaran:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Transfer Bank</li>
                        <li>• Tunai (dengan kwitansi)</li>
                        <li>• Kartu Kredit (dengan biaya admin)</li>
                        <li>• Cicilan (syarat & ketentuan berlaku)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Keterlambatan Pembayaran</h3>
                  <p className="text-gray-700 mb-3">
                    Keterlambatan pembayaran akan dikenakan denda sebesar 0.5% per hari dari total nilai kontrak. 
                    Proyek dapat dihentikan sementara hingga pembayaran dilunasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Warranty */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Garansi & Jaminan</h2>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Kebijakan Garansi</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Garansi Pengerjaan</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Struktur: 5 tahun</li>
                      <li>• Finishing: 2 tahun</li>
                      <li>• Instalasi: 1 tahun</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Garansi Material</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Sesuai garansi pabrik</li>
                      <li>• Minimal 1 tahun</li>
                      <li>• Berlaku untuk cacat produksi</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Syarat Garansi Berlaku:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Pembayaran lunas tepat waktu</li>
                    <li>• Perawatan sesuai anjuran</li>
                    <li>• Tidak ada modifikasi tanpa persetujuan</li>
                    <li>• Kerusakan bukan karena bencana alam atau kesalahan penggunaan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-emerald-600 mr-3" />
                Pembatasan Tanggung Jawab
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Batas Tanggung Jawab</h3>
                  <p className="text-gray-700 mb-4">
                    PT TIGA PILAR NUSAINA tidak bertanggung jawab atas:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Kerusakan akibat bencana alam (gempa, banjir, angin topan, dll)</li>
                    <li>• Kerusakan akibat kesalahan penggunaan atau perawatan yang salah</li>
                    <li>• Kerugian tidak langsung atau konsekuensial</li>
                    <li>• Modifikasi yang dilakukan tanpa persetujuan tertulis</li>
                    <li>• Keterlambatan akibat force majeure</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Force Majeure</h3>
                  <p className="text-gray-700">
                    PT TIGA PILAR NUSAINA dibebaskan dari kewajiban jika terjadi hal-hal di luar kendali kami 
                    seperti bencana alam, kerusuhan, perang, atau perubahan peraturan pemerintah yang mempengaruhi pelaksanaan proyek.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Timeline */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-8 h-8 text-emerald-600 mr-3" />
                Jadwal & Waktu Pengerjaan
              </h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Estimasi Waktu Pengerjaan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Landscape & Taman:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Kecil (&lt;100m²): 2-3 minggu</li>
                      <li>• Sedang (100-500m²): 4-6 minggu</li>
                      <li>• Besar (&gt;500m²): 6-12 minggu</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Fasade Bangunan:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Rumah tinggal: 4-8 minggu</li>
                      <li>• Kantor: 6-12 minggu</li>
                      <li>• Komersial: 8-16 minggu</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <strong>Catatan:</strong> Waktu pengerjaan dapat berubah tergantung pada cuaca, ketersediaan material, 
                    dan kompleksitas desain. Perubahan akan dikomunikasikan segera kepada klien.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hak Kekayaan Intelektual</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Semua desain, gambar teknis, dan konsep yang dibuat oleh PT TIGA PILAR NUSAINA merupakan 
                  hak kekayaan intelektual perusahaan. Klien tidak boleh:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Menyalin atau mendistribusikan desain tanpa izin tertulis</li>
                  <li>• Menggunakan desain untuk proyek lain tanpa persetujuan</li>
                  <li>• Mengklaim desain sebagai karya sendiri</li>
                  <li>• Memodifikasi desain tanpa konsultasi dengan tim kami</li>
                </ul>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="w-8 h-8 text-emerald-600 mr-3" />
                Penyelesaian Sengketa
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Prosedur Penyelesaian Sengketa</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                      <div>
                        <strong>Musyawarah:</strong> Kedua belah pihak sepakat untuk menyelesaikan sengketa secara musyawarah
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                      <div>
                        <strong>Mediasi:</strong> Jika musyawarah gagal, dilakukan mediasi dengan pihak ketiga yang netral
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                      <div>
                        <strong>Arbitrase:</strong> Sengketa diselesaikan melalui Badan Arbitrase Nasional Indonesia (BANI)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                      <div>
                        <strong>Pengadilan:</strong> Sebagai upaya terakhir, sengketa dapat diajukan ke pengadilan negeri Balikpapan
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Yurisdiksi</h3>
                  <p className="text-gray-700">
                    Syarat & Ketentuan ini diatur oleh hukum Republik Indonesia. 
                    Setiap sengketa akan diselesaikan dalam yurisdiksi pengadilan negeri Balikpapan.
                  </p>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pemutusan Kontrak</h2>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Alasan Pemutusan Kontrak</h3>
                <p className="text-gray-700 mb-4">
                  Kontrak dapat diputus oleh salah satu pihak dengan alasan:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Oleh PT TIGA PILAR NUSAINA:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Keterlambatan pembayaran &gt;30 hari</li>
                      <li>• Klien tidak kooperatif</li>
                      <li>• Perubahan desain yang tidak wajar</li>
                      <li>• Pelanggaran syarat & ketentuan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Oleh Klien:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Keterlambatan pengerjaan &gt;50% dari jadwal</li>
                      <li>• Kualitas kerja tidak sesuai standar</li>
                      <li>• Pelanggaran kontrak yang serius</li>
                      <li>• Kesepakatan bersama</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perubahan Syarat & Ketentuan</h2>
              
              <p className="text-gray-700 leading-relaxed">
                PT TIGA PILAR NUSAINA berhak mengubah Syarat & Ketentuan ini kapan saja. 
                Perubahan akan berlaku efektif setelah diumumkan melalui website atau komunikasi langsung. 
                Penggunaan layanan setelah perubahan dianggap sebagai persetujuan Anda terhadap syarat yang baru.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-emerald-600 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Hubungi Kami</h2>
              <p className="mb-6">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Email:</h4>
                  <p className="text-emerald-100">info@tigapilarnusaina.com</p>
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
                  <h4 className="font-semibold mb-2">Jam Operasional:</h4>
                  <p className="text-emerald-100">
                    Senin - Jumat: 08:00 - 17:00<br />
                    Sabtu: 08:00 - 15:00
                  </p>
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