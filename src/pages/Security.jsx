import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { trustStats } from '../data/siteCredibility.js'
import styles from './TrustPage.module.css'

export default function Security() {
  usePageTitle('Security · Spanforge')
  return (
    <div className={styles.page}>
      <Nav />
      <header className={styles.hero}>
        <h1>Security</h1>
        <p>
          Security at Spanforge centers on verifiable telemetry integrity, least-necessary
          data handling, and explicit control over where events are exported.
        </p>
      </header>

      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Security Controls</p>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h3>Tamper-evident telemetry</h3>
              <p>HMAC-signed event chains detect deletion, insertion, and mutation in audit streams.</p>
            </article>
            <article className={styles.card}>
              <h3>Data minimization</h3>
              <p>Redaction controls support field-level sensitivity handling before export.</p>
            </article>
            <article className={styles.card}>
              <h3>Portable exports</h3>
              <p>Use vendor-neutral OTEL-aligned event envelopes and route to your own backend.</p>
            </article>
            <article className={styles.card}>
              <h3>Policy enforcement</h3>
              <p>Governance checks can warn or block disallowed event patterns at runtime.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Operational Targets</p>
          <div className={styles.statGrid}>
            {trustStats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statValue}>{s.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.linksRow}>
            <Link className="btn btn-secondary" to="/compatibility">Compatibility Policy →</Link>
            <Link className="btn btn-secondary" to="/reliability">Reliability →</Link>
            <Link className="btn btn-secondary" to="/roadmap">Roadmap →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
