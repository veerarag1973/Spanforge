export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { fullName, company, email, products } = req.body ?? {}

  if (!fullName || !company || !email || !products) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const upstream = await fetch('https://formspree.io/f/xeedjdjv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ fullName, company, email, products }),
    })

    const data = await upstream.json().catch(() => ({}))

    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: data?.error ?? 'Submission failed' })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ error: 'Could not reach submission service' })
  }
}
