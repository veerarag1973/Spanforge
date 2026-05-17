'use client'

import { useState } from 'react'
import styles from './page.module.css'

const PRODUCT_OPTIONS = [
  { value: 'kit', label: 'Complete AI Governance Kit', price: '$250', highlight: true },
  { value: 'master-policy', label: 'AI Governance Master Policy', price: '$99' },
  { value: 'incident-response', label: 'AI Incident Response Plan', price: '$99' },
  { value: 'incident-log', label: 'AI Incident Tracking Log', price: '$99' },
  { value: 'model-card', label: 'AI Model Card Template', price: '$99' },
  { value: 'risk-assessment', label: 'AI Risk Assessment Template', price: '$99' },
  { value: 'system-inventory', label: 'AI System Inventory Register', price: '$99' },
  { value: 'roadmap', label: 'AI Governance 30-Day Roadmap', price: '$79' },
]

export default function OrderForm() {
  const [form, setForm] = useState({ fullName: '', company: '', email: '' })
  const [selected, setSelected] = useState(new Set())
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const kitSelected = selected.has('kit')

  const handleCheck = (value) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (value === 'kit') {
        if (next.has('kit')) {
          // Deselect kit — clear everything
          next.clear()
        } else {
          // Select kit — select only the kit
          next.clear()
          next.add('kit')
        }
      } else {
        // Individual item — only toggle if kit isn't selected
        if (next.has('kit')) return prev
        if (next.has(value)) next.delete(value)
        else next.add(value)
      }
      return next
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.fullName.trim() || !form.company.trim() || !form.email.trim()) {
      setError('Please fill in all fields before submitting.')
      return
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (selected.size === 0) {
      setError('Please select at least one product.')
      return
    }
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          company: form.company,
          email: form.email,
          products: Array.from(selected).join(', '),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data?.error ?? 'Submission failed. Please try again.')
        return
      }
      setSubmitted(true)
    } catch {
      setError('Submission failed. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className={styles.formSuccess}>
        <span className={styles.formSuccessIcon} aria-hidden="true">&#10003;</span>
        <h3 className={styles.formSuccessTitle}>Request received!</h3>
        <p className={styles.formSuccessText}>
          Thanks, <strong>{form.fullName}</strong>. We&apos;ll send your download link and invoice to <strong>{form.email}</strong> within one business day.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Order form">
      <div className={styles.formRow}>
        <label className={styles.formLabel} htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          className={styles.formInput}
          placeholder="Jane Smith"
          value={form.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formRow}>
        <label className={styles.formLabel} htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={styles.formInput}
          placeholder="Acme Corp"
          value={form.company}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formRow}>
        <label className={styles.formLabel} htmlFor="email">Work Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={styles.formInput}
          placeholder="jane@acmecorp.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formRow}>
        <span className={styles.formLabel}>What would you like?</span>
        <div className={styles.checkboxGroup} role="group" aria-label="Product selection">
          {PRODUCT_OPTIONS.map((opt) => {
            const isKit = opt.value === 'kit'
            const isDisabled = kitSelected && !isKit
            const isChecked = selected.has(opt.value) || isDisabled
            return (
              <label
                key={opt.value}
                className={`${styles.checkboxItem} ${opt.highlight ? styles.checkboxItemHighlight : ''} ${isChecked ? styles.checkboxItemChecked : ''} ${isDisabled ? styles.checkboxItemDisabled : ''}`}
              >
                <input
                  type="checkbox"
                  className={styles.checkboxInput}
                  checked={isChecked}
                  disabled={isDisabled}
                  onChange={() => handleCheck(opt.value)}
                />
                <span className={styles.checkboxCustom} aria-hidden="true" />
                <span className={styles.checkboxLabel}>{opt.label}</span>
                <span className={styles.checkboxPrice}>{opt.price}</span>
              </label>
            )
          })}
        </div>
      </div>
      {error && <p className={styles.formError} role="alert">{error}</p>}
      <button type="submit" className={styles.formSubmit}>
        Request Access &amp; Invoice
      </button>
      <p className={styles.formNote}>
        We&apos;ll reply within one business day with a secure download link and a plain-text invoice. No account required, no recurring charges.
      </p>
    </form>
  )
}
