/**
 * @jest-environment node
 *
 * Unit tests for the /api/contact route handler logic.
 * We test the validation rules directly by exercising the exported POST function.
 */

// Minimal mock for NextRequest used in route tests
function makeRequest(body: unknown): Request {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('/api/contact route', () => {
  // Dynamic import so Next.js server-only modules don't break test env
  let POST: (req: Request) => Promise<Response>

  beforeAll(async () => {
    const mod = await import('@/app/api/contact/route')
    POST = mod.POST as (req: Request) => Promise<Response>
  })

  it('returns 200 for a valid submission', async () => {
    const req = makeRequest({ name: 'Ada', email: 'ada@example.com', message: 'Hello!' })
    const res = await POST(req as never)
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.success).toBe(true)
  })

  it('returns 400 when name is missing', async () => {
    const req = makeRequest({ name: '', email: 'test@example.com', message: 'Hi' })
    const res = await POST(req as never)
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toMatch(/name/i)
  })

  it('returns 400 for an invalid email', async () => {
    const req = makeRequest({ name: 'Bob', email: 'not-an-email', message: 'Hi' })
    const res = await POST(req as never)
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toMatch(/email/i)
  })

  it('returns 400 when message is missing', async () => {
    const req = makeRequest({ name: 'Bob', email: 'bob@example.com', message: '' })
    const res = await POST(req as never)
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toMatch(/message/i)
  })
})
