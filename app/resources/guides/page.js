import Link from 'next/link'
import { getAllGuides } from '@/lib/guides'
import styles from './page.module.css'

export const metadata = {
  title: 'AI Compliance Guides — SpanForge Learning Center',
  description:
    'Free compliance roadmaps for EU AI Act, GDPR, HIPAA, ISO 42001, NIST AI RMF, and SOC 2. Understand your obligations and build audit-ready AI systems.',
}

export const FRAMEWORK_THEME = {
  'EU AI Act':   { color: '#1266F1', bg: 'rgba(18, 102, 241, 0.10)' },
  'GDPR':        { color: '#059669', bg: 'rgba(5, 150, 105, 0.10)' },
  'HIPAA':       { color: '#D97706', bg: 'rgba(217, 119, 6, 0.10)' },
  'ISO 42001':   { color: '#7C3AED', bg: 'rgba(124, 58, 237, 0.10)' },
  'NIST AI RMF': { color: '#DC2626', bg: 'rgba(220, 38, 38, 0.10)' },
  'SOC 2':       { color: '#0891B2', bg: 'rgba(8, 145, 178, 0.10)' },
  'Mastery':     { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)' },
}

const PLANNED_GUIDES = []

export default async function GuidesPage() {
  const allGuides = await getAllGuides()
  const masteryGuide = allGuides.find((g) => g.slug === 'ai-governance-mastery')
  const guides = allGuides.filter((g) => g.slug !== 'ai-governance-mastery')

  const COVERED_FRAMEWORKS = ['EU AI Act', 'GDPR', 'HIPAA', 'SOC 2', 'ISO 42001', 'NIST AI RMF']

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">AI Compliance Learning Center</span>
          <h1 className={styles.h1}>Compliance Guides</h1>
          <p className={styles.heroSub}>
            Free, in-depth roadmaps for every major AI compliance framework.
            Understand your obligations. Assess your gaps. Build audit-ready AI.
          </p>
        </div>
      </section>

      <section className={styles.library}>
        <div className="container">

          {/* ── Mastery guide — featured card ─────────────────── */}
          {masteryGuide && (
            <div className={styles.featuredWrap}>
              <span className={styles.featuredLabel}>★ Start here</span>
              <div className={styles.featuredCard}>
                <div className={styles.featuredInner}>
                  <div className={styles.featuredMeta}>
                    <div className={styles.featuredFrameworks}>
                      {COVERED_FRAMEWORKS.map((fw) => {
                        const t = FRAMEWORK_THEME[fw]
                        return (
                          <span
                            key={fw}
                            className={styles.frameworkBadge}
                            style={{ color: t.color, background: t.bg }}
                          >
                            {fw}
                          </span>
                        )
                      })}
                    </div>
                    <h2 className={styles.featuredTitle}>{masteryGuide.title}</h2>
                    <p className={styles.featuredExcerpt}>{masteryGuide.excerpt}</p>
                    <span className={styles.featuredStat}>
                      {masteryGuide.sections} sections · {masteryGuide.date}
                    </span>
                  </div>
                  <div className={styles.featuredAction}>
                    <Link
                      href={`/resources/guides/${masteryGuide.slug}`}
                      className={styles.featuredBtn}
                    >
                      Read the mastery guide →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Framework guides grid ──────────────────────────── */}
          <p className={styles.sectionHeading}>Framework Guides</p>
          <div className={styles.grid}>
            {guides.map((guide) => {
              const theme =
                FRAMEWORK_THEME[guide.framework] || { color: 'var(--accent)', bg: 'var(--accent-soft)' }
              return (
                <div key={guide.slug} className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardTop}>
                      <span
                        className={styles.frameworkBadge}
                        style={{ color: theme.color, background: theme.bg }}
                      >
                        {guide.framework}
                      </span>
                      {guide.sections && (
                        <span className={styles.cardStat}>{guide.sections} sections</span>
                      )}
                    </div>
                    <h2 className={styles.cardTitle}>{guide.title}</h2>
                    {guide.excerpt && (
                      <p className={styles.cardExcerpt}>{guide.excerpt}</p>
                    )}
                    <div className={styles.cardActions}>
                      <Link
                        href={`/resources/guides/${guide.slug}`}
                        className={styles.readBtn}
                      >
                        Read guide →
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}

            {PLANNED_GUIDES.map((guide) => {
              const theme =
                FRAMEWORK_THEME[guide.framework] || { color: 'var(--accent)', bg: 'var(--accent-soft)' }
              return (
                <div
                  key={guide.framework}
                  className={`${styles.card} ${styles.cardPlanned}`}
                  aria-label={`${guide.title} — coming soon`}
                >
                  <div className={styles.cardInner}>
                    <div className={styles.cardTop}>
                      <span
                        className={styles.frameworkBadge}
                        style={{ color: theme.color, background: theme.bg, opacity: 0.6 }}
                      >
                        {guide.framework}
                      </span>
                      <span className={styles.comingSoon}>Coming soon</span>
                    </div>
                    <h2 className={styles.cardTitle}>{guide.title}</h2>
                    {guide.excerpt && (
                      <p className={styles.cardExcerpt}>{guide.excerpt}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <p className={styles.ctaText}>
              Each guide maps directly to SpanForge SDK modules — so when you&apos;re ready
              to move from understanding to implementation, the tool is already there.
            </p>
            <Link href="/spanforgecore/sdk" className={styles.ctaBtn}>
              Explore the SDK →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
