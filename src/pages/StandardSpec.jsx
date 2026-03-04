import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './Standard.module.css'

import specMd from '../../Standard/RFC-0001-AGENTOBS.md?raw'

const TOC_ITEMS = [
  { label: 'Introduction', anchor: '1-introduction' },
  { label: 'Conventions and Terminology', anchor: '2-conventions-and-terminology' },
  { label: 'Problem Statement and Motivation', anchor: '3-problem-statement-and-motivation' },
  { label: 'Design Principles', anchor: '4-design-principles' },
  { label: 'The AGENTOBS Event Envelope', anchor: '5-the-agentobs-event-envelope' },
  { label: 'Event Identifier: ULID', anchor: '6-event-identifier-ulid' },
  { label: 'Event Namespace Taxonomy', anchor: '7-event-namespace-taxonomy' },
  { label: 'Agent Span Hierarchy', anchor: '8-agent-span-hierarchy' },
  { label: 'Token and Cost Model', anchor: '9-token-and-cost-model' },
  { label: 'Provider Normalisation Protocol', anchor: '10-provider-normalisation-protocol' },
  { label: 'Security: HMAC Audit Chains', anchor: '11-security-hmac-audit-chains' },
  { label: 'Privacy: PII Redaction Framework', anchor: '12-privacy-pii-redaction-framework' },
  { label: 'Observability and Export', anchor: '13-observability-and-export' },
  { label: 'OpenTelemetry Alignment', anchor: '14-opentelemetry-alignment' },
  { label: 'Governance and Schema Evolution', anchor: '15-governance-and-schema-evolution' },
  { label: 'Compliance Checks', anchor: '16-compliance-checks' },
  { label: 'Schema Validation', anchor: '17-schema-validation' },
  { label: 'Conformance Profiles', anchor: '18-conformance-profiles' },
  { label: 'Security Considerations', anchor: '19-security-considerations' },
  { label: 'Privacy Considerations', anchor: '20-privacy-considerations' },
  { label: 'Interoperability Considerations', anchor: '21-interoperability-considerations' },
  { label: 'Normative References', anchor: '22-normative-references' },
  { label: 'Informative References', anchor: '23-informative-references' },
  { label: 'Public Review Questions', anchor: '24-public-review-questions' },
]

export default function StandardSpec() {
  usePageTitle('RFC-0001: AGENTOBS — Full Specification · Spanforge')
  const [tocOpen, setTocOpen] = useState(false)

  return (
    <div className={styles.specPage}>
      <Nav />

      {/* ── Header ── */}
      <div className={styles.specHeader}>
        <div className={styles.specHeaderInner}>
          <div className={styles.specCrumb}>
            <Link to="/" className={styles.breadcrumb}>Spanforge</Link>
            <span className={styles.sep}>/</span>
            <Link to="/standard" className={styles.breadcrumb}>The Standard</Link>
            <span className={styles.sep}>/</span>
            <span className={styles.breadcrumbCurrent}>RFC-0001</span>
          </div>
          <div className={styles.rfcBadge}>
            <span className={styles.rfcLabel}>RFC-0001</span>
            <span className={styles.statusBadge}>Public Review</span>
          </div>
          <h1 className={styles.specTitle}>AGENTOBS Specification</h1>
          <p className={styles.specSubtitle}>
            Observability Schema Standard for Agentic AI Systems
          </p>
          <div className={styles.specMeta}>
            <span className={styles.specMetaItem}><strong>Version:</strong> 2.0</span>
            <span className={styles.specMetaItem}><strong>Status:</strong> Draft</span>
            <span className={styles.specMetaItem}><strong>Date:</strong> March 4, 2026</span>
            <span className={styles.specMetaItem}><strong>Author:</strong> S. Sriram</span>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className={styles.specBody}>
        <Link to="/standard" className={styles.backLink}>← Back to Overview</Link>

        {/* Mobile TOC toggle */}
        <button
          className={styles.specTocToggle}
          onClick={() => setTocOpen(o => !o)}
        >
          {tocOpen ? '▾ Hide' : '▸ Show'} Table of Contents
        </button>

        {/* Table of Contents */}
        <div className={styles.specToc} style={tocOpen ? {} : undefined}>
          <h2>Table of Contents</h2>
          <ol>
            {TOC_ITEMS.map(item => (
              <li key={item.anchor}>
                <a href={`#${item.anchor}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </div>

        {/* Full spec rendered from markdown */}
        <MarkdownRenderer content={specMd} />
      </div>

      <Footer />
    </div>
  )
}
