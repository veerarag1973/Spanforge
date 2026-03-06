import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './TrustPage.module.css'

const roadmapItems = [
  {
    horizon: 'Now',
    title: 'Trace-first onboarding quality',
    details: 'Tighter quickstarts, role-based docs paths, and reproducible local evaluation workflows.',
  },
  {
    horizon: 'Next',
    title: 'Performance + bundle discipline',
    details: 'Route-level splitting, page-level budgets, and proactive CI checks for frontend regressions.',
  },
  {
    horizon: 'Next',
    title: 'Stronger enterprise trust controls',
    details: 'Expanded security docs and clearer compatibility/deprecation automation.',
  },
  {
    horizon: 'Later',
    title: 'Case-study expansion',
    details: 'More production examples with measurable incident, quality, and cost outcomes.',
  },
]

export default function Roadmap() {
  usePageTitle('Roadmap · Spanforge')
  return (
    <div className={styles.page}>
      <Nav />
      <header className={styles.hero}>
        <h1>Roadmap</h1>
        <p>
          Public roadmap for product quality, operational trust, and ecosystem maturity.
        </p>
      </header>

      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Planned Work</p>
          <div className={styles.grid}>
            {roadmapItems.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.horizon}: {item.title}</h3>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
          <div className={styles.linksRow}>
            <Link className="btn btn-secondary" to="/security">Security →</Link>
            <Link className="btn btn-secondary" to="/reliability">Reliability →</Link>
            <Link className="btn btn-secondary" to="/compatibility">Compatibility Policy →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
