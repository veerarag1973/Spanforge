import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './Standard.module.css'

const pillars = [
  {
    icon: '📐',
    title: 'Event Envelope',
    desc: 'A fixed-structure container with typed fields, ULID identifiers, and W3C TraceContext-compatible trace/span IDs — applied uniformly to every AI observability event.',
  },
  {
    icon: '🌳',
    title: 'Agent Span Hierarchy',
    desc: 'First-class representation of multi-step agent runs, tool invocations, reasoning steps, and decision points as an OpenTelemetry-compatible span tree.',
  },
  {
    icon: '💰',
    title: 'Token & Cost Model',
    desc: 'Structured, auditable cost attribution with per-category breakdowns (input, output, cached, reasoning) — not a bare float, but a typed value object.',
  },
  {
    icon: '🔐',
    title: 'HMAC Audit Chains',
    desc: 'Tamper-evident, compliance-grade event integrity using HMAC-SHA256 signing with prev_id linkage — detects modification, deletion, insertion, and reordering.',
  },
  {
    icon: '🛡️',
    title: 'PII Redaction Framework',
    desc: 'Field-level privacy annotations with five sensitivity levels (LOW → PHI) and threshold-based redaction policies enforced before any data reaches a backend.',
  },
  {
    icon: '📡',
    title: 'Export & OTel Alignment',
    desc: 'Vendor-neutral export to OTLP, Datadog, Grafana Loki, webhooks, and JSONL — with direct mapping to OpenTelemetry gen_ai.* semantic conventions.',
  },
]

const namespaces = [
  { ns: 'llm.trace.*', desc: 'Model calls, agent runs, reasoning steps' },
  { ns: 'llm.cost.*', desc: 'Per-call cost attribution and rollups' },
  { ns: 'llm.cache.*', desc: 'Semantic cache hit/miss, TTL, key hash' },
  { ns: 'llm.eval.*', desc: 'Quality scores, regression detection' },
  { ns: 'llm.guard.*', desc: 'Safety classifier output, block decisions' },
  { ns: 'llm.fence.*', desc: 'Structured output constraints, retry loops' },
  { ns: 'llm.prompt.*', desc: 'Prompt template versions, rendered text' },
  { ns: 'llm.redact.*', desc: 'PII audit record — categories found, removed' },
  { ns: 'llm.diff.*', desc: 'Prompt/response delta between two events' },
  { ns: 'llm.template.*', desc: 'Template registry metadata, variable bindings' },
  { ns: 'llm.audit.*', desc: 'Security: key rotation, audit-chain control events' },
]

const profiles = [
  {
    name: 'Core',
    label: 'AGENTOBS-Core-2.0',
    color: '#0d9f75',
    bg: '#f0fdf8',
    border: '#a3e6cf',
    desc: 'Standardised AI spans, token usage, cost attribution, and agent run telemetry. The minimum interoperable implementation.',
    audience: 'Teams that want standardised AI spans and cost attribution without security, privacy, or governance overhead.',
  },
  {
    name: 'Security',
    label: 'AGENTOBS-Security-2.0',
    color: '#b85c00',
    bg: '#fff7e6',
    border: '#f5c97a',
    desc: 'Adds tamper-evident HMAC-SHA256 audit chains with key rotation, constant-time verification, and secret leakage prevention.',
    audience: 'Teams with compliance or audit requirements (SOC 2, ISO 27001, financial services).',
  },
  {
    name: 'Privacy',
    label: 'AGENTOBS-Privacy-2.0',
    color: '#7c3aed',
    bg: '#f5f3ff',
    border: '#c4b5fd',
    desc: 'Adds field-level PII controls with Redactable types, five sensitivity levels, and threshold-based redaction policies enforced before export.',
    audience: 'Teams operating under GDPR, HIPAA, CCPA, or EU AI Act obligations.',
  },
  {
    name: 'Enterprise',
    label: 'AGENTOBS-Enterprise-2.0',
    color: '#3d5af1',
    bg: '#f0f3ff',
    border: '#c5cef8',
    desc: 'Full superset — adds schema lifecycle governance, deprecation registries, consumer compatibility, and CLI compliance checks.',
    audience: 'Multi-team organisations managing schema evolution across a distributed ecosystem.',
  },
]

export default function StandardHome() {
  usePageTitle('RFC-0001: AGENTOBS — Observability Schema Standard for Agentic AI · Spanforge')
  return (
    <div className={styles.page}>
      <Nav />

      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroCrumb}>
          <Link to="/" className={styles.breadcrumb}>Spanforge</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbCurrent}>The Standard</span>
        </div>

        <div className={styles.rfcBadge}>
          <span className={styles.rfcLabel}>RFC-0001</span>
          <span className={styles.statusBadge}>Public Review</span>
        </div>

        <h1 className={styles.heroTitle}>AGENTOBS</h1>
        <p className={styles.heroTagline}>
          Observability Schema Standard for Agentic AI Systems
        </p>
        <p className={styles.heroSub}>
          An open event-schema standard that gives every LLM observability tool
          a common language — structured events, agent span hierarchies, auditable cost,
          tamper-evident audit chains, and privacy-first PII redaction.
        </p>

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Status</span>
            <span className={styles.metaValue}>Draft Specification</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Version</span>
            <span className={styles.metaValue}>2.0</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Date</span>
            <span className={styles.metaValue}>March 4, 2026</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Review Closes</span>
            <span className={styles.metaValue}>June 4, 2026</span>
          </div>
        </div>

        <div className={styles.heroActions}>
          <Link to="/standard/spec" className="btn btn-primary">
            Read Full Specification →
          </Link>
          <Link to="/standard/feedback" className="btn btn-secondary">
            Submit Feedback
          </Link>
        </div>
      </header>

      <hr className="divider" />

      {/* ── EXECUTIVE SUMMARY ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Executive Summary</p>
          <h2 className={styles.sectionTitle}>Why a new standard?</h2>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryText}>
              <p>
                Agentic AI systems — applications where large language models orchestrate multi-step
                workflows, invoke tools, delegate to sub-agents, and engage in iterative reasoning —
                produce observability data that is fundamentally different from traditional distributed-systems
                telemetry.
              </p>
              <p>
                Today there is <strong>no broadly adopted cross-vendor standard</strong> for what an
                "AI observability event" looks like. Teams rebuild dashboards per service, PII surfaces
                in logs because no one owns the redaction contract, token costs are unauditable floats,
                and multi-step agent runs cannot be represented as coherent span trees.
              </p>
              <p>
                <strong>AGENTOBS</strong> solves this by defining a structured, typed event schema that
                every LLM instrumentation tool can emit and every observability backend can consume.
                It extends — rather than replaces — OpenTelemetry's semantic conventions, adding the
                agent-level abstractions that OTel does not yet cover.
              </p>
            </div>
            <div className={styles.summaryCallout}>
              <div className={styles.calloutHeader}>In short</div>
              <p>
                <strong>OTel</strong> gives you individual LLM spans.
              </p>
              <p>
                <strong>AGENTOBS</strong> gives you the agent run that ties those spans together,
                the cost model that makes them auditable, the privacy layer that makes them safe to
                export, and the audit chain that makes them tamper-evident.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── WHAT IT DEFINES ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Architecture</p>
          <h2 className={styles.sectionTitle}>What AGENTOBS defines</h2>
          <p className={styles.sectionSub}>
            Nine capabilities spanning observability, security, privacy, and governance —
            designed for incremental adoption.
          </p>
          <div className={styles.pillarGrid}>
            {pillars.map(p => (
              <div key={p.title} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h4 className={styles.pillarTitle}>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── NAMESPACE TAXONOMY ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Namespace Taxonomy</p>
          <h2 className={styles.sectionTitle}>36 event types across 11 domains</h2>
          <p className={styles.sectionSub}>
            All standard event types follow <code>llm.&lt;namespace&gt;.&lt;entity&gt;.&lt;action&gt;</code>.
            Extension types use reverse-domain prefixes.
          </p>
          <div className={styles.nsGrid}>
            {namespaces.map(n => (
              <div key={n.ns} className={styles.nsRow}>
                <code className={styles.nsCode}>{n.ns}</code>
                <span className={styles.nsDesc}>{n.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── CONFORMANCE PROFILES ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Conformance</p>
          <h2 className={styles.sectionTitle}>Four profiles for incremental adoption</h2>
          <p className={styles.sectionSub}>
            Profiles are cumulative — each higher profile includes all requirements of the profiles below it.
            Adopt only what you need today.
          </p>
          <div className={styles.profileGrid}>
            {profiles.map(p => (
              <div
                key={p.name}
                className={styles.profileCard}
                style={{ borderTopColor: p.color }}
              >
                <div className={styles.profileHeader}>
                  <span className={styles.profileName} style={{ color: p.color }}>{p.name}</span>
                  <code className={styles.profileLabel} style={{ background: p.bg, color: p.color, borderColor: p.border }}>
                    {p.label}
                  </code>
                </div>
                <p className={styles.profileDesc}>{p.desc}</p>
                <p className={styles.profileAudience}>
                  <strong>Audience:</strong> {p.audience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── DESIGN PRINCIPLES ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Design Principles</p>
          <h2 className={styles.sectionTitle}>Seven normative principles</h2>
          <div className={styles.principlesGrid}>
            {[
              { id: 'P1', title: 'Zero Mandatory Dependencies', desc: 'Core operations use only the standard library. No dependency conflicts.' },
              { id: 'P2', title: 'Immutability After Construction', desc: 'Envelope fields are read-only once constructed. Mutations raise errors.' },
              { id: 'P3', title: 'Deterministic Serialisation', desc: 'Byte-for-byte identical JSON output regardless of platform or call time.' },
              { id: 'P4', title: 'Typed Exceptions', desc: 'Every validation failure carries structured fields — field name, value, reason.' },
              { id: 'P5', title: 'Namespace-Based Event Types', desc: 'Prefix routing, collision prevention, and OTel naming alignment.' },
              { id: 'P6', title: 'Vendor Neutrality', desc: 'No provider privileged. GenAISystem enum with _custom escape hatch.' },
              { id: 'P7', title: 'Privacy at Source', desc: 'PII redaction at field construction, not post-processing.' },
            ].map(p => (
              <div key={p.id} className={styles.principleCard}>
                <span className={styles.principleId}>{p.id}</span>
                <div>
                  <h4 className={styles.principleTitle}>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── PUBLIC REVIEW ── */}
      <section className={styles.sectionAlt}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Public Review</p>
          <h2 className={styles.sectionTitle}>Open for comment</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 640, margin: '0 auto 2rem', lineHeight: 1.75 }}>
            The public comment period is open from <strong>March 4, 2026</strong> through{' '}
            <strong>June 4, 2026</strong>. Contributions, objections, and implementation reports
            are welcome via the GitHub issue tracker.
          </p>
          <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
            <Link to="/standard/spec" className="btn btn-primary">
              Read Full Specification →
            </Link>
            <Link to="/standard/feedback" className="btn btn-secondary">
              Submit Feedback
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
