'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import ResourceCard from '@/components/ResourceCard'
import styles from './page.module.css'

const TYPE_FILTERS = [
  { value: 'all',            label: 'All' },
  { value: 'whitepaper',     label: 'Whitepapers' },
  { value: 'research-paper', label: 'Research Papers' },
  { value: 'mini-book',      label: 'Mini Books' },
  { value: 'guide',          label: 'Guides' },
  { value: 'spec',           label: 'Specs' },
  { value: 'report',         label: 'Reports' },
]

const FRAMEWORK_GUIDES = [
  { framework: 'EU AI Act',   slug: 'eu-ai-act',   color: '#1266F1', bg: 'rgba(18,102,241,0.10)',  available: true },
  { framework: 'GDPR',        slug: 'gdpr',         color: '#059669', bg: 'rgba(5,150,105,0.10)',   available: true },
  { framework: 'HIPAA',       slug: null,           color: '#D97706', bg: 'rgba(217,119,6,0.10)',   available: false },
  { framework: 'ISO 42001',   slug: null,           color: '#7C3AED', bg: 'rgba(124,58,237,0.10)',  available: false },
  { framework: 'NIST AI RMF', slug: null,           color: '#DC2626', bg: 'rgba(220,38,38,0.10)',   available: false },
  { framework: 'SOC 2',       slug: null,           color: '#0891B2', bg: 'rgba(8,145,178,0.10)',   available: false },
]

export default function ResourcesPageClient({ resources }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return resources
    return resources.filter((r) => r.type === activeFilter)
  }, [resources, activeFilter])

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Library</span>
          <h1 className={styles.h1}>
            Research, Guides &amp; Papers
          </h1>
          <p className={styles.heroSub}>
            Whitepapers, mini books, research papers, and practical guides on
            AI delivery — governance, observability, production operations,
            and the SpanForge platform.
          </p>
        </div>
      </section>

      {/* ── Compliance Guides strip ─────────────────────────── */}
      <section className={styles.guidesStrip}>
        <div className="container">
          <div className={styles.guidesHeader}>
            <div>
              <span className={styles.guidesEyebrow}>AI Compliance Learning Center</span>
              <h2 className={styles.guidesTitle}>Compliance Guides</h2>
              <p className={styles.guidesSub}>
                Free, in-depth roadmaps for every major AI compliance framework — readable on-site, downloadable as PDF.
              </p>
            </div>
            <Link href="/resources/guides" className={styles.guidesViewAll}>
              View all guides →
            </Link>
          </div>
          <div className={styles.guidesRow}>
            {FRAMEWORK_GUIDES.map((g) => (
              <div
                key={g.framework}
                className={`${styles.guideChip} ${g.available ? '' : styles.guideChipPlanned}`}
              >
                {g.available ? (
                  <Link href={`/resources/guides/${g.slug}`} className={styles.guideChipLink}>
                    <span className={styles.guideChipBadge} style={{ color: g.color, background: g.bg }}>
                      {g.framework}
                    </span>
                    <span className={styles.guideChipAction}>Read →</span>
                  </Link>
                ) : (
                  <span className={styles.guideChipLink} aria-label={`${g.framework} guide — coming soon`}>
                    <span className={styles.guideChipBadge} style={{ color: g.color, background: g.bg, opacity: 0.5 }}>
                      {g.framework}
                    </span>
                    <span className={styles.guideChipSoon}>Soon</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.library}>
        <div className="container">
          <div className={styles.filters} role="group" aria-label="Filter by type">
            {TYPE_FILTERS.map((f) => (
              <button
                key={f.value}
                className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(f.value)}
                aria-pressed={activeFilter === f.value}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>No resources in this category yet. <a href="/blog">Read the blog</a> while you wait.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
