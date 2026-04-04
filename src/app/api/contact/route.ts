import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  email: string
  service?: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()

    const { name, email, message } = body

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    }

    // In production this would persist to DB or send via email service.
    // For MVP we log and return success.
    // eslint-disable-next-line no-console
    console.log('[contact] New submission:', {
      name: name.trim(),
      email: email.trim(),
      service: body.service ?? 'Not specified',
      messageLength: message.trim().length,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: 'Your message has been received.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }
}
