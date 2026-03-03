import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './Home.module.css'

const tools = [
  {
    id: 'llm-diff',
    name: 'llm-diff',
    tagline: 'The evaluation layer.',
    description:
      'Diffs LLM outputs across model versions, prompt changes, or time — so you can see exactly how your outputs shifted and whether quality improved or regressed.',
    features: [
      'Side-by-side output comparison with word-level diffs',
      'Regression detection across prompt versions',
      'Per-call USD cost tracking',
      'LLM-as-a-Judge scoring',
      'Multi-model (3–4 model) parallel comparison',
      'CI/CD gate via --fail-under with structured events',
    ],
    badge: 'done',
    badgeText: '✅ Available',
    pkg: 'pip install llm-diff',
    link: '/llm-diff',
    docsLink: '/llm-diff/docs/getting-started',
    ghLink: 'https://github.com/veerarag1973/llmdiff',
    accentColor: '#0d9f75',
    accentBg: '#f0fdf8',
  },
  {
    id: 'llm-toolkit-schema',
    name: 'llm-toolkit-schema',
    tagline: 'The shared event schema.',
    description:
      'Defines the OpenTelemetry-compatible JSON/OTLP event schema that all Spanforge tools emit and consume — the glue that makes the ecosystem composable without custom integration.',
    features: [
      'OpenTelemetry-compatible JSON/OTLP format',
      'HMAC-SHA256 tamper-proof event signing & audit chains',
      'First-class PII redaction before data leaves your app',
      'Ships to Grafana, Datadog, OTLP, Kafka, webhooks',
      '1302 tests · 100% coverage · zero required dependencies',
      'LangChain & LlamaIndex adapters built in',
    ],
    badge: 'done',
    badgeText: '✅ Available',
    pkg: 'pip install llm-toolkit-schema',
    link: '/llm-toolkit-schema',
    docsLink: '/llm-toolkit-schema/docs/quickstart',
    ghLink: 'https://github.com/veerarag1973/llm-toolkit-schema',
    accentColor: '#3d5af1',
    accentBg: '#f0f3ff',
  },
  {
    id: 'promptlock',
    name: 'promptlock',
    tagline: 'The prompt governance layer.',
    description:
      'Version control and enterprise governance for prompts — so every prompt change is tracked, auditable, and reversible. Designed for teams managing prompts at scale.',
    features: [
      'Full version history for every prompt',
      'Diff and rollback across prompt versions',
      'Approval workflows and access controls for enterprise teams',
      'Integrates with llm-diff to surface quality regressions',
      'Emits llm-toolkit-schema events for full audit trail',
    ],
    badge: 'dev',
    badgeText: '🔧 Under Development',
    link: null,
    ghLink: 'https://github.com/veerarag1973/promptlock',
    accentColor: '#3d5af1',
    accentBg: '#f0f3ff',
  },
]

const layers = [
  { icon: '🔧', title: 'Tools', body: 'Open source, composable tools for tracing, evaluating, and governing LLM and agentic AI systems — from single calls to full multi-agent pipelines.' },
  { icon: '📚', title: 'Education', body: 'Guides, tutorials, and explainers built for AI engineers. From OTEL fundamentals to tracing your first LangChain agent — we explain what the official docs skip.' },
  { icon: '💬', title: 'Community', body: 'The place where OTEL + AI questions get answered. Join engineers building at the frontier of observable, trustworthy agentic AI.' },
  { icon: '🗂️', title: 'Reference', body: 'Spanforge.dev is built to be the canonical resource people bookmark and share — the way css-tricks.com owned CSS for a decade.' },
]



export default function Home() {
  usePageTitle('Spanforge — OpenTelemetry for Agentic AI')
  return (
    <div className={styles.page}>
      <Nav />

      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <img className={styles.heroLogo} src="/logo.png" alt="Spanforge" />
          <h1 className={styles.heroTitle}>Spanforge</h1>
          <p className={styles.heroSub}>
            Where OpenTelemetry meets agentic AI. Tools, education, and community for engineers who need to trust their agents.
          </p>
          <div className={styles.heroActions}>
            <a href="#tools" className="btn btn-primary">Explore the Toolkit</a>
            <a href="#learn" className="btn btn-secondary">Read the Guides ↓</a>
          </div>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>Open Source</span>
            <span className={styles.heroBadge}>OpenTelemetry Native</span>
            <span className={styles.heroBadge}>OTEL for Agentic AI</span>
            <span className={styles.heroBadge}>Python</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── MISSION ── */}
      <section id="mission" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">The Mission</p>
          <h2 className={styles.sectionTitle}>
            This is more than a toolkit.<br />It's a destination.
          </h2>
          <p className={styles.sectionIntro}>
            OpenTelemetry is the standard for observability — but its documentation is notoriously
            hard to navigate, and most tutorials stop at distributed systems and never touch AI or
            agents. <strong>Spanforge is built to change that.</strong>
          </p>

          <div className={styles.missionQuote}>
            <blockquote>
              "Spanforge — where OpenTelemetry meets agentic AI. Tools, education, and community
              for engineers who need to trust their agents."
            </blockquote>
          </div>

          <div className={styles.layerGrid}>
            {layers.map(item => (
              <div key={item.title} className={styles.layerCard}>
                <div className={styles.layerIcon}>{item.icon}</div>
                <h4 className={styles.layerTitle}>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── WHY OTEL ── */}
      <section id="why-otel" className={styles.section}>
        <div className="container">
          <p className="section-label">Why OpenTelemetry</p>
          <h2 className={styles.sectionTitle}>The gap no one was filling</h2>
          <p className={styles.sectionIntro} style={{ maxWidth: 680 }}>
            OTEL documentation is hard for newcomers. Most tutorials stop at distributed systems
            and never reach agentic AI. No independent, vendor-neutral home exists yet for engineers
            who want to apply OTEL to AI systems — that's what Spanforge is building.
          </p>

          <div className={styles.whatGrid}>
            <div className={styles.whatCard}>
              <div className={styles.whatCardTitle}>Own the narrative first</div>
              <p>
                Spanforge owns the "OTEL for agentic AI" story before anyone else gets there.
                Education builds community faster than tools alone — people share tutorials,
                not changelogs.
              </p>
            </div>
            <div className={styles.whatCard}>
              <div className={styles.whatCardTitle}>A composable toolkit underneath</div>
              <p>
                Each Spanforge tool solves one problem sharply, shares a common
                OTel-compatible event schema, and composes freely — whether you adopt
                one or all of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── EDUCATION ── */}
      <section id="learn" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Education</p>
          <h2 className={styles.sectionTitle}>Learn OTEL for agentic AI</h2>
          <p className={styles.sectionIntro} style={{ maxWidth: 680 }}>
            Guides and tutorials written for AI engineers — not networking veterans. From first
            spans to full multi-agent observability, we explain what the official docs skip.
          </p>
          <div className={styles.guideComingSoon}>
            <p>
              <strong>🎉 Part 1 is live:</strong>{' '}
              <Link to="/learn/otel-python/part1">
                OpenTelemetry in Python — Introduction to Observability &amp; OpenTelemetry
              </Link>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              More parts covering distributed tracing, metrics, structured logging, the Collector,
              and end-to-end agentic AI observability are coming soon.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── TOOLKIT TABLE ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">The Toolkit</p>
          <h2 className={styles.sectionTitle}>Tools at a glance</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Purpose</th>
                  <th>Status</th>
                  <th>Package</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link to="/llm-diff" className={styles.toolLink}>llm-diff</Link></td>
                  <td className={styles.tdMuted}>LLM output quality comparison and evaluation</td>
                  <td><span className="badge badge-done">✅ Available</span></td>
                  <td><span className="pkg">pip install llm-diff</span></td>
                </tr>
                <tr>
                  <td><Link to="/llm-toolkit-schema" className={styles.toolLink}>llm-toolkit-schema</Link></td>
                  <td className={styles.tdMuted}>Shared OpenTelemetry-compatible event schema</td>
                  <td><span className="badge badge-done">✅ Available</span></td>
                  <td><span className="pkg">pip install llm-toolkit-schema</span></td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/veerarag1973/promptlock" target="_blank" rel="noopener" className={styles.toolLink}>
                      promptlock
                    </a>
                  </td>
                  <td className={styles.tdMuted}>Prompt version control and enterprise governance</td>
                  <td><span className="badge badge-dev">🔧 Under Development</span></td>
                  <td><span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>—</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── TOOLS DEEP DIVE ── */}
      <section id="tools" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Tools</p>
          <h2 className={styles.sectionTitle}>Deep dive</h2>

          <div className={styles.toolCards}>
            {tools.map(tool => (
              <div key={tool.id} className={styles.toolCard}>
                <div
                  className={styles.toolCardTop}
                  style={{ background: `linear-gradient(90deg, ${tool.accentColor}, transparent)` }}
                />
                <div className={styles.toolCardInner}>
                  <div className={styles.toolCardHeader}>
                    <div>
                      <h3 className={styles.toolName}>{tool.name}</h3>
                      <p className={styles.toolTagline}>{tool.tagline}</p>
                    </div>
                    <span className={`badge badge-${tool.badge}`}>{tool.badgeText}</span>
                  </div>

                  <p className={styles.toolDesc}>{tool.description}</p>

                  <ul className={styles.toolFeatures}>
                    {tool.features.map(f => <li key={f}>{f}</li>)}
                  </ul>

                  {tool.badge === 'dev' && (
                    <div className={styles.wipNote}>
                      Under development. Follow along or contribute on GitHub.
                    </div>
                  )}

                  <div className={styles.toolActions}>
                    {tool.link ? (
                      <>
                        <Link to={tool.link} className="btn btn-primary">
                          Learn more →
                        </Link>
                        <Link to={tool.docsLink} className="btn btn-secondary">
                          View Docs
                        </Link>
                      </>
                    ) : (
                      <a
                        href={tool.ghLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        Follow on GitHub ↗
                      </a>
                    )}
                    {tool.pkg && (
                      <span className="pkg">
                        <span style={{ userSelect: 'none', color: 'var(--muted)' }}>$</span>
                        {tool.pkg}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── COMMUNITY ── */}
      <section id="community" className={styles.section}>
        <div className="container">
          <p className="section-label">Community</p>
          <h2 className={styles.sectionTitle}>The place where OTEL + AI questions get answered</h2>
          <p className={styles.sectionIntro} style={{ maxWidth: 640 }}>
            Discord is where engineers at the frontier of agentic AI come to ask hard questions,
            share patterns, and debug traces together.
          </p>
          <div className={styles.communityGrid}>
            <div className={styles.communityCard}>
              <div className={styles.communityIcon}>💬</div>
              <h4>Ask anything about OTEL + AI</h4>
              <p>No question is too basic. We're building the handbook as we go.</p>
            </div>
            <div className={styles.communityCard}>
              <div className={styles.communityIcon}>🧩</div>
              <h4>Share patterns and integrations</h4>
              <p>LangChain, LlamaIndex, CrewAI, AutoGen — bring your stack.</p>
            </div>
            <div className={styles.communityCard}>
              <div className={styles.communityIcon}>🚀</div>
              <h4>Shape what gets built next</h4>
              <p>Every tool on the roadmap started as a conversation in the community.</p>
            </div>
          </div>
          <div className={styles.communityActions}>
            <a
              href="https://discord.gg/sv3UzmvR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Join on Discord ↗
            </a>
            <a
              href="https://github.com/veerarag1973"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
