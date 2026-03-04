import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './Feedback.module.css'

// ── EmailJS configuration ──
// Sign up at https://www.emailjs.com (free tier: 200 emails/month)
// 1. Add a Gmail service → copy SERVICE_ID
// 2. Create a template with variables: {{from_name}}, {{from_email}}, {{section}}, {{feedback_type}}, {{message}}
// 3. Copy TEMPLATE_ID and PUBLIC_KEY below
const EMAILJS_SERVICE_ID  = 'service_h3bpugv'
const EMAILJS_TEMPLATE_ID = 'template_3nx70is'
const EMAILJS_PUBLIC_KEY   = '3-MiQfH1zkU4ZM_A-'

const SECTIONS = [
  'General',
  '§1–4 Introduction & Principles',
  '§5 Event Envelope',
  '§6 ULID',
  '§7 Namespace Taxonomy',
  '§8 Agent Span Hierarchy',
  '§9 Token & Cost Model',
  '§10 Provider Normalisation',
  '§11 HMAC Audit Chains',
  '§12 PII Redaction',
  '§13 Export',
  '§14 OpenTelemetry Alignment',
  '§15 Governance',
  '§16–17 Compliance & Validation',
  '§18 Conformance Profiles',
  '§19–21 Security / Privacy / Interop',
]

const TYPES = [
  { value: 'comment', label: 'General Comment' },
  { value: 'objection', label: 'Technical Objection' },
  { value: 'suggestion', label: 'Improvement Suggestion' },
  { value: 'clarification', label: 'Clarification Request' },
  { value: 'implementation', label: 'Implementation Report' },
]

export default function Feedback() {
  usePageTitle('Submit Feedback — RFC-0001 AGENTOBS · Spanforge')
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState(null) // 'success' | 'error'
  const [errorDetail, setErrorDetail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setResult(null)
    setErrorDetail('')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setResult('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      const msg = err?.text || err?.message || JSON.stringify(err)
      setErrorDetail(msg)
      setResult('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className={styles.page}>
      <Nav />

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.crumb}>
            <Link to="/" className={styles.breadcrumb}>Spanforge</Link>
            <span className={styles.sep}>/</span>
            <Link to="/standard" className={styles.breadcrumb}>The Standard</Link>
            <span className={styles.sep}>/</span>
            <span className={styles.breadcrumbCurrent}>Feedback</span>
          </div>
          <h1 className={styles.title}>Submit Feedback</h1>
          <p className={styles.subtitle}>
            RFC-0001 AGENTOBS is in public review through <strong>June 4, 2026</strong>.
            All feedback — comments, objections, and implementation reports — is welcome.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          {/* Name */}
          <div className={styles.field}>
            <label htmlFor="from_name" className={styles.label}>Your Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              placeholder="Jane Smith"
              className={styles.input}
            />
          </div>

          {/* Email */}
          <div className={styles.field}>
            <label htmlFor="from_email" className={styles.label}>Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              placeholder="jane@example.com"
              className={styles.input}
            />
          </div>

          {/* Organisation (optional) */}
          <div className={styles.field}>
            <label htmlFor="organization" className={styles.label}>
              Organisation <span className={styles.optional}>(optional)</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="Acme Corp"
              className={styles.input}
            />
          </div>

          {/* Two-column row */}
          <div className={styles.row}>
            {/* Section */}
            <div className={styles.field}>
              <label htmlFor="section" className={styles.label}>Spec Section</label>
              <select id="section" name="section" required className={styles.select}>
                {SECTIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Feedback Type */}
            <div className={styles.field}>
              <label htmlFor="feedback_type" className={styles.label}>Feedback Type</label>
              <select id="feedback_type" name="feedback_type" required className={styles.select}>
                {TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>Your Feedback</label>
            <textarea
              id="message"
              name="message"
              required
              rows={8}
              placeholder="Describe your feedback, suggestion, or objection…"
              className={styles.textarea}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={sending}
            className={`btn btn-primary ${styles.submitBtn}`}
          >
            {sending ? 'Sending…' : 'Submit Feedback'}
          </button>

          {/* Result messages */}
          {result === 'success' && (
            <div className={styles.successMsg}>
              Thank you! Your feedback has been sent successfully.
            </div>
          )}
          {result === 'error' && (
            <div className={styles.errorMsg}>
              <strong>Error:</strong> {errorDetail || 'Unknown error'}
              <br />
              Please try again or email{' '}
              <a href="mailto:veera.rag1973@gmail.com">veera.rag1973@gmail.com</a> directly.
            </div>
          )}
        </form>

        {/* Sidebar info */}
        <aside className={styles.sidebar}>
          <div className={styles.infoCard}>
            <h3>Public Review Questions</h3>
            <p>The RFC specifically invites comment on:</p>
            <ol>
              <li>Signature coverage — sign envelope fields too?</li>
              <li>Reasoning privacy — is content_hash enough?</li>
              <li>Cost model — non-USD normalisation?</li>
              <li>Namespace governance — centralised registry?</li>
              <li>OTel evolution — field rename policy?</li>
              <li>Profile boundaries — right capability split?</li>
            </ol>
          </div>
          <div className={styles.infoCard}>
            <h3>Direct Contact</h3>
            <p>
              You can also email feedback directly to{' '}
              <a href="mailto:veera.rag1973@gmail.com">veera.rag1973@gmail.com</a>
            </p>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  )
}
