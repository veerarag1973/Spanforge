import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './TrustPage.module.css'

export default function Reliability() {
  usePageTitle('Reliability · Spanforge')
  return (
    <div className={styles.page}>
      <Nav />
      <header className={styles.hero}>
        <h1>Reliability</h1>
        <p>
          Reliability means deterministic event contracts, reproducible evaluation workflows,
          and clear failure semantics in CI and runtime pipelines.
        </p>
      </header>

      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Reliability Controls</p>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h3>Schema stability</h3>
              <ul>
                <li>Versioned event envelopes.</li>
                <li>Backward-compatible migration paths.</li>
                <li>Compatibility checks in CI.</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3>Evaluation safety rails</h3>
              <ul>
                <li>Threshold-based regression gates.</li>
                <li>Structured regression events for audit.</li>
                <li>Deterministic batch ordering.</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3>Failure visibility</h3>
              <ul>
                <li>Trace spans per model call and tool step.</li>
                <li>Cost, cache, and latency metadata attached to events.</li>
                <li>Export-ready artifacts for post-incident analysis.</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3>Operational guidance</h3>
              <ul>
                <li>Reference docs with explicit assumptions.</li>
                <li>Tutorials mapped to production adoption paths.</li>
                <li>Open issue workflows for rapid iteration.</li>
              </ul>
            </article>
          </div>
          <div className={styles.linksRow}>
            <Link className="btn btn-secondary" to="/security">Security →</Link>
            <Link className="btn btn-secondary" to="/compatibility">Compatibility Policy →</Link>
            <Link className="btn btn-secondary" to="/roadmap">Roadmap →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
