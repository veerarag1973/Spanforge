import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './TrustPage.module.css'

export default function Compatibility() {
  usePageTitle('Compatibility Policy · Spanforge')
  return (
    <div className={styles.page}>
      <Nav />
      <header className={styles.hero}>
        <h1>Compatibility Policy</h1>
        <p>
          Spanforge follows an explicit compatibility model so platform teams can upgrade
          safely across SDK and schema changes.
        </p>
      </header>

      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Policy</p>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h3>Versioning model</h3>
              <ul>
                <li>Semantic versioning for SDK packages.</li>
                <li>Documented event schema versions.</li>
                <li>Breaking changes only in major releases.</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3>Support window</h3>
              <ul>
                <li>Current minor + previous minor supported.</li>
                <li>Deprecation notices published before removals.</li>
                <li>Migration guidance included in docs and changelogs.</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3>Contract checks</h3>
              <ul>
                <li>Compatibility checks available in CLI and code.</li>
                <li>Schema validation can run in CI before deploy.</li>
                <li>Consumer registry supports proactive break detection.</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3>Deprecation process</h3>
              <ul>
                <li>Mark deprecated API/event fields first.</li>
                <li>Provide replacement path and timeline.</li>
                <li>Remove only after sunset window closes.</li>
              </ul>
            </article>
          </div>
          <div className={styles.linksRow}>
            <Link className="btn btn-secondary" to="/security">Security →</Link>
            <Link className="btn btn-secondary" to="/reliability">Reliability →</Link>
            <Link className="btn btn-secondary" to="/roadmap">Roadmap →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
