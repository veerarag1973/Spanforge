import OrderForm from './OrderForm'
import styles from './page.module.css'

export const metadata = {
  title: 'AI Governance Kit — SpanForge Products',
  description:
    'Ready-to-use AI governance templates, policies, and roadmaps for compliance teams. Master policy, risk assessment, model cards, incident response, inventory register, and a 30-day roadmap.',
}

const ARTIFACTS = [
  {
    id: 'master-policy',
    title: 'AI Governance Master Policy',
    type: 'Policy Document',
    format: 'Word Document',
    price: 99,
    blurb:
      "The cornerstone of your AI governance programme. This master policy defines your organisation's principles, risk appetite, accountability structures, and mandatory controls for developing and deploying AI systems. Aligned to EU AI Act, ISO 42001, and NIST AI RMF requirements.",
  },
  {
    id: 'incident-response',
    title: 'AI Incident Response Plan',
    type: 'Response Plan',
    format: 'Word Document',
    price: 99,
    blurb:
      'A structured, step-by-step playbook for detecting, escalating, containing, and documenting AI incidents. Covers roles and responsibilities, severity tiers, regulator notification triggers, and post-incident review. Audit-ready for HIPAA, GDPR, and EU AI Act obligations.',
  },
  {
    id: 'incident-log',
    title: 'AI Incident Tracking Log',
    type: 'Tracking Register',
    format: 'Excel Spreadsheet',
    price: 99,
    blurb:
      'A pre-structured log to record every AI-related incident from initial detection through to resolution and lessons learned. Includes fields for severity classification, timeline, impacted systems, root cause, and regulatory relevance — ready to hand directly to auditors.',
  },
  {
    id: 'model-card',
    title: 'AI Model Card Template',
    type: 'Model Documentation',
    format: 'Word Document + Completed Example',
    price: 99,
    blurb:
      'Document every AI model your organisation uses or deploys — intended use, performance characteristics, known limitations, training data provenance, and risk flags. Includes a fully completed example card so your team can get started immediately. Required under ISO 42001 and EU AI Act Article 11 technical documentation obligations.',
  },
  {
    id: 'risk-assessment',
    title: 'AI Risk Assessment Template',
    type: 'Risk Register',
    format: 'Excel Spreadsheet',
    price: 99,
    blurb:
      'Identify, score, and track AI-specific risks across your portfolio. Covers data quality, model reliability, bias, security, privacy, and regulatory exposure. Pre-populated with 40+ common AI risk categories with likelihood and impact scoring built in. Mapped to EU AI Act risk tiers and NIST AI RMF Measure function.',
  },
  {
    id: 'system-inventory',
    title: 'AI System Inventory Register',
    type: 'Inventory Register',
    format: 'Excel Spreadsheet',
    price: 99,
    blurb:
      'Maintain a central, auditable inventory of every AI system in your organisation. Captures system owner, deployment context, risk classification, data inputs, regulatory obligations, and review cadence. The foundational register regulators check first — and the starting point for every compliance programme.',
  },
]

const ROADMAP = {
  id: 'roadmap',
  title: 'AI Governance 30-Day Roadmap',
  type: 'Implementation Roadmap',
  format: 'PDF + Excel Action Plan',
  price: 79,
  isRoadmap: true,
  blurb:
    'A day-by-day action plan to take your AI governance from zero to audit-ready in 30 days. Week 1 builds your foundations; Week 2 implements controls; Week 3 tests and validates; Week 4 closes gaps and prepares evidence. Includes the accompanying Excel planning worksheet to track progress and assign ownership across your team.',
}

const ALL_ARTIFACTS = [...ARTIFACTS, ROADMAP]

function ArtifactCard({ artifact }) {
  const { isRoadmap } = artifact
  return (
    <div className={`${styles.artifactCard} ${isRoadmap ? styles.artifactCardRoadmap : ''}`}>
      <div className={styles.artifactHeader}>
        <span className={styles.artifactType}>{artifact.type}</span>
        <span className={styles.artifactFormat}>{artifact.format}</span>
      </div>
      <h3 className={styles.artifactTitle}>{artifact.title}</h3>
      <p className={styles.artifactBlurb}>{artifact.blurb}</p>
      <div className={styles.artifactFooter}>
        <span className={styles.artifactPrice}>
          ${artifact.price}
          <span className={styles.artifactPriceLabel}>&nbsp;/ licence</span>
        </span>
        <a href="#order-form" className={styles.artifactCta}>
          Get this {isRoadmap ? 'Roadmap' : 'Template'} &rarr;
        </a>
      </div>
    </div>
  )
}

export default function AIGovernanceKitPage() {
  return (
    <main id="main-content" className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="kit-heading">
        <div className="container">
          <div className={styles.heroBadge}>Products</div>
          <h1 id="kit-heading" className={styles.heroH1}>AI Governance Kit</h1>
          <p className={styles.heroSub}>
            Everything your organisation needs to implement AI governance from day one. Ready-to-use policies, risk registers, model cards, incident playbooks, and a 30-day roadmap — built by AI compliance practitioners, not lawyers.
          </p>
          <div className={styles.heroMeta}>
            <span className={styles.heroMetaItem}>9 professional documents</span>
            <span className={styles.heroMetaSep}>·</span>
            <span className={styles.heroMetaItem}>Regulation-aligned</span>
            <span className={styles.heroMetaSep}>·</span>
            <span className={styles.heroMetaItem}>Immediate delivery</span>
            <span className={styles.heroMetaSep}>·</span>
            <span className={styles.heroMetaItem}>No subscription</span>
          </div>
          <a href="#order-form" className={styles.heroCta}>
            Get the Kit →
          </a>
        </div>
      </section>

      {/* Individual templates - $99 each */}
      <section className={styles.artifactsSection} aria-label="Included templates and documents">
        <div className="container">
          <h2 className={styles.artifactsSectionHeading}>Templates &amp; Documents &mdash; $99 each</h2>
          <p className={styles.artifactsSectionSub}>Each document is immediately usable, editable, and mapped to major regulatory frameworks.</p>
          <div className={styles.artifactsGrid}>
            {ARTIFACTS.map((a) => (
              <ArtifactCard key={a.id} artifact={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap - $79 */}
      <section className={styles.roadmapSection} aria-label="30-Day Roadmap">
        <div className="container">
          <h2 className={styles.roadmapSectionHeading}>30-Day Implementation Roadmap &mdash; $79</h2>
          <p className={styles.roadmapSectionSub}>Hit the ground running with a day-by-day plan and action tracker.</p>
          <div className={styles.roadmapSingleWrap}>
            <ArtifactCard artifact={ROADMAP} />
          </div>
        </div>
      </section>

      {/* Complete kit bundle - $250 */}
      <section className={styles.bundleSection} aria-label="Complete AI Governance Kit bundle">
        <div className="container">
          <div className={styles.bundleCard}>
            <div className={styles.bundleLeft}>
              <div className={styles.bundleBadge}>Best Value</div>
              <h2 className={styles.bundleTitle}>Complete AI Governance Kit</h2>
              <p className={styles.bundleBlurb}>
                All six templates, the master policy, the incident response plan, the 30-day roadmap PDF, and the Excel action plan &mdash; delivered as a single download. Everything you need to go from no governance programme to audit-ready, in one package.
              </p>
              <ul className={styles.bundleList}>
                {ALL_ARTIFACTS.map((a) => (
                  <li key={a.id} className={styles.bundleListItem}>
                    <span className={styles.bundleCheck} aria-hidden="true">&#10003;</span>
                    {a.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.bundleRight}>
              <p className={styles.bundleStrikeRow}>
                <span className={styles.bundleStrike}>$693</span>
                <span className={styles.bundleDiscount}>64% off</span>
              </p>
              <p className={styles.bundlePrice}>$250</p>
              <p className={styles.bundlePriceLabel}>one-time purchase &middot; all 9 documents</p>
              <a href="#order-form" className={styles.bundleCta}>
                Get the Complete Kit &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Order form */}
      <section id="order-form" className={styles.formSection} aria-labelledby="form-heading">
        <div className="container">
          <div className={styles.formWrap}>
            <div className={styles.formIntro}>
              <h2 id="form-heading" className={styles.formHeading}>Request Access &amp; Invoice</h2>
              <p className={styles.formDesc}>
                Fill in your details and tell us what you&rsquo;d like. We&rsquo;ll reply within one business day with a secure download link and a plain-text invoice. No account required, no recurring charges.
              </p>
              <div className={styles.formTrustPoints}>
                <span>&#10003; Secure download link</span>
                <span>&#10003; Plain-text invoice</span>
                <span>&#10003; One business day turnaround</span>
                <span>&#10003; No subscription</span>
              </div>
            </div>
            <OrderForm />
          </div>
        </div>
      </section>
    </main>
  )
}
