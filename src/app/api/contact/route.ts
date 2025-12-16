import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    // Validate phone format (Indonesian phone number)
    const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,11}$/
    const cleanPhone = phone.replace(/[-\s]/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Format nomor telepon tidak valid' },
        { status: 400 }
      )
    }

    // Initialize ZAI SDK
    const zai = await ZAI.create()

    // Create email content using AI
    const emailContent = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'Anda adalah asisten profesional yang membuat email konfirmasi untuk PT TIGA PILAR NUSAINA, perusahaan dekorasi eksterior. Buat email yang profesional, ramah, dan informatif dalam Bahasa Indonesia.'
        },
        {
          role: 'user',
          content: `Buat email konfirmasi untuk klien baru dengan detail berikut:
          Nama: ${name}
          Email: ${email}
          Telepon: ${phone}
          Layanan: ${service || 'Tidak spesifik'}
          Pesan: ${message}
          
          Email harus berisi:
          1. Ucapan terima kasih
          2. Konfirmasi penerimaan pesan
          3. Informasi tentang follow-up
          4. Kontak perusahaan
          5. Penutup profesional`
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    })

    // Log the contact submission
    console.log('New contact submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email to client
    // 3. Send notification to admin
    // 4. Maybe integrate with CRM

    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah terkirim. Tim kami akan menghubungi Anda dalam 24 jam.',
      data: {
        name,
        email,
        phone,
        service,
        submittedAt: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}