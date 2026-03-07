import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './ProductHome.module.css'

const features = [
  {
    icon: '✅',
    title: 'CLI Validation Gate',
    body: 'Drop-in CI gate with an exit-code contract that maps directly to pass/fail in GitHub Actions, GitLab CI, CircleCI, and any other CI system.',
  },
  {
    icon: '🐍',
    title: 'Python SDK',
    body: 'Fully importable library for programmatic validation — validate single events or entire JSONL streams with validate_event() and validate_stream().',
  },
  {
    icon: '🔐',
    title: 'HMAC Signature Verification',
    body: 'Cryptographic HMAC-SHA256 verification of per-event signatures. Detects tampering before events reach any downstream system.',
  },
  {
    icon: '🔁',
    title: 'OTel Compatibility Mode',
    body: 'Accept camelCase OpenTelemetry field-name aliases alongside AgentOBS snake_case — validate both streams with a single flag.',
  },
  {
    icon: '📐',
    title: 'JSON Schema Export',
    body: 'Export the full AgentOBS event envelope as a JSON Schema (Draft 2020-12) document for use with jsonschema, ajv, and OpenAPI generators.',
  },
  {
    icon: '⚡',
    title: 'High-Throughput Streaming',
    body: 'O(1) memory model for JSONL input — benchmarked at 136,000+ events/second with zero full-file buffering required.',
  },
]

const cliCommands = [
  { cmd: 'agentobs-validate events.jsonl',                       desc: 'Validate a JSONL event stream' },
  { cmd: 'agentobs-validate events.json',                        desc: 'Validate a JSON array file' },
  { cmd: 'agentobs-validate events.jsonl --json',                desc: 'Machine-readable JSON output for CI' },
  { cmd: 'cat events.jsonl | agentobs-validate',                 desc: 'Accept events from STDIN' },
  { cmd: 'agentobs-validate events.jsonl --otel',                desc: 'Accept camelCase OTel aliases' },
  { cmd: 'agentobs-validate events.jsonl --schema-version 0.1',  desc: 'Pin to a specific schema version' },
  { cmd: 'agentobs-validate events.jsonl --key-file signing.key',desc: 'HMAC-SHA256 signature verification' },
  { cmd: 'agentobs-validate --export-schema',                    desc: 'Export JSON Schema (Draft 2020-12)' },
]

const exitCodes = [
  { code: '0', meaning: 'All events valid — CI step passes' },
  { code: '1', meaning: 'One or more validation errors — CI step fails' },
  { code: '2', meaning: 'Input or configuration error (bad JSON, unreadable file, unsupported schema version)' },
  { code: '3', meaning: 'Internal / unexpected validator error' },
]

export default function AgentObsValidateHome() {
  usePageTitle('agentobs-validate · Reference Validation CLI & SDK · Spanforge')

  return (
    <div className={styles.page}>
      <Nav />

      {/* ── HERO ── */}
      <header className={styles.hero} style={{ '--hero-accent': '#e05c00', '--hero-glow': 'rgba(224,92,0,.12)' }}>
        <div className={styles.heroGlow} style={{ background: 'radial-gradient(ellipse, rgba(224,92,0,.11) 0%, transparent 70%)' }} />
        <div className={styles.heroCrumb}>
          <Link to="/" className={styles.breadcrumb}>Spanforge</Link>
          <span className={styles.sep}>/</span>
          <Link to="/tools/core" className={styles.breadcrumb}>The Tools</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbCurrent}>agentobs-validate</span>
        </div>

        <h1 className={styles.heroTitle}><span className={styles.titleMono}>agentobs-validate</span></h1>
        <p className={styles.heroTagline}>Reference validation CLI and Python SDK for the AgentOBS event standard.</p>
        <p className={styles.heroSub}>
          Validates JSON or JSONL event streams against the AgentOBS schema.
          Use as a drop-in CI gate or as a Python library for programmatic compliance checks.
          If a stream passes — it is AgentOBS compliant.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.stat}><span>1.0.0</span>Latest</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>100%</span>Test Coverage</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>639</span>Tests</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>136k+ ev/s</span>Throughput</div>
        </div>

        <div className={styles.heroActions}>
          <Link to="/agentobs-validate/docs/tutorial" className="btn btn-primary">Tutorial →</Link>
          <Link to="/agentobs-validate/docs/sdk" className="btn btn-secondary">SDK Reference</Link>
          <Link to="/agentobs-validate/docs/overview" className="btn btn-secondary">Overview</Link>
          <a href="https://github.com/veerarag1973/AgentOBSValidate" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub ↗</a>
        </div>

        <div className={styles.installBox}>
          <span className={styles.installComment}># Install from PyPI</span>
          <div className={styles.installLine}>
            <span className={styles.installPrompt}>$</span>
            <span className={styles.installCmd}>pip install agentobs-validate</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── OVERVIEW ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Overview</p>
          <h2 className={styles.sectionTitle}>One command to know if your events are compliant</h2>
          <div className={styles.providerGrid}>
            <article className={styles.providerCard}>
              <div className={styles.providerName}>What It Is</div>
              <div className={styles.providerModels} style={{ fontFamily: 'inherit', lineHeight: 1.7 }}>
                <code>agentobs-validate</code> is the reference validator for the AgentOBS event standard.
                It checks every required field, format constraint, type rule, and optional signature
                in a JSON or JSONL event stream — and reports pass/fail with machine-readable error codes.
              </div>
            </article>
            <article className={styles.providerCard}>
              <div className={styles.providerName}>What Problem It Solves</div>
              <div className={styles.providerModels} style={{ fontFamily: 'inherit', lineHeight: 1.7 }}>
                Schema drift between producers and consumers is a silent correctness failure. Without
                a validator in CI, non-compliant events reach observability backends and break
                downstream processing. This tool makes compliance a hard gate.
              </div>
            </article>
            <article className={styles.providerCard}>
              <div className={styles.providerName}>Start Here</div>
              <div className={styles.providerModels} style={{ fontFamily: 'inherit', lineHeight: 1.7 }}>
                Follow the tutorial for a step-by-step guide covering the CLI and Python SDK, or
                jump to the error code reference to understand what each failure code means.
                <br /><br />
                <Link to="/agentobs-validate/docs/tutorial" style={{ color: '#e05c00', fontWeight: 700, textDecoration: 'none' }}>
                  Open Tutorial →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── QUICK START ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Quick Start</p>
          <h2 className={styles.sectionTitle}>Validate your first event stream in seconds</h2>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeTitle}>python</span>
              <div className={styles.codeDots}><span /><span /><span /></div>
            </div>
            <pre className={styles.codePre}><code>{`from agentobs_validate.validator.engine import validate_event, validate_stream
from agentobs_validate.validator.input_parser import iter_events
from agentobs_validate.validator.context import ValidationContext

# Validate a single event dict
result = validate_event(1, {
    "event_id":   "01HZQSN7PQVR2K4M0BXJD3GSTA",
    "timestamp":  "2026-03-06T10:00:00.000Z",
    "event_type": "agent.plan.created",
    "source":     "spanforge@1.0.0",
    "trace_id":   "4bf92f3577b34da6a3ce929d0e0e4736",
    "span_id":    "00f067aa0ba902b7",
})
print(result.status)       # "pass"

# Validate a JSONL file
result = validate_stream(iter_events("events.jsonl"))
print(f"{result.valid}/{result.events_checked} valid")

# OTel camelCase mode + HMAC key verification
ctx = ValidationContext(
    otel_mode=True,
    key_bytes=open("signing.key", "rb").read().rstrip()
)
result = validate_stream(iter_events("events.jsonl"), ctx)`}</code></pre>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FEATURES ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className={styles.sectionTitle}>Complete validation surface for the AgentOBS standard</h2>
          <div className={styles.featGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featCard}>
                <div className={styles.featIcon}>{f.icon}</div>
                <h4 className={styles.featTitle}>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── CLI COMMANDS ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">CLI</p>
          <h2 className={styles.sectionTitle}>Every validation mode in one command</h2>
          <div className={styles.moduleGrid} style={{ marginTop: '2rem' }}>
            <div className={`${styles.moduleRow} ${styles.moduleRowHeader}`}>
              <div className={styles.moduleCell}>Command</div>
              <div className={styles.moduleCell}>What it does</div>
            </div>
            {cliCommands.map(c => (
              <div key={c.cmd} className={styles.moduleRow}>
                <div className={styles.moduleCell}><span className={styles.moduleName}>{c.cmd}</span></div>
                <div className={`${styles.moduleCell} ${styles.moduleDesc}`}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── EXIT CODES ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">CI Integration</p>
          <h2 className={styles.sectionTitle}>Exit codes map directly to CI pass / fail</h2>
          <div className={styles.moduleGrid} style={{ marginTop: '2rem' }}>
            <div className={`${styles.moduleRow} ${styles.moduleRowHeader}`}>
              <div className={styles.moduleCell}>Exit Code</div>
              <div className={styles.moduleCell}>Meaning</div>
            </div>
            {exitCodes.map(e => (
              <div key={e.code} className={styles.moduleRow}>
                <div className={styles.moduleCell}><span className={styles.moduleName}>{e.code}</span></div>
                <div className={`${styles.moduleCell} ${styles.moduleDesc}`}>{e.meaning}</div>
              </div>
            ))}
          </div>

          <div className={styles.codeBlock} style={{ marginTop: '2.5rem' }}>
            <div className={styles.codeHeader}>
              <span className={styles.codeTitle}>yaml — GitHub Actions</span>
              <div className={styles.codeDots}><span /><span /><span /></div>
            </div>
            <pre className={styles.codePre}><code>{`- name: Validate AgentOBS events
  run: agentobs-validate events.jsonl

# For machine-parseable CI output:
- name: Validate (JSON output)
  run: agentobs-validate events.jsonl --json | tee validation-report.json`}</code></pre>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── DOCS NAV ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Documentation</p>
          <h2 className={styles.sectionTitle}>From first validation to deep SDK integration</h2>
          <div className={styles.docGrid}>
            {[
              { path: 'overview',     label: 'Overview',       desc: 'Installation, quick-start CLI and SDK snippets, exit code contract' },
              { path: 'tutorial',     label: 'Tutorial',       desc: 'Step-by-step guide through CLI usage and Python SDK validation workflows' },
              { path: 'sdk',          label: 'SDK Reference',  desc: 'Full Python API — validate_event, validate_stream, ValidationContext, formatters' },
              { path: 'errors',       label: 'Error Codes',    desc: 'Every error code, the field it targets, example bad values, and how to fix them' },
              { path: 'ci',           label: 'CI Integration', desc: 'Drop-in configuration for GitHub Actions, GitLab CI, CircleCI and JSON output parsing' },
              { path: 'performance',  label: 'Performance',    desc: 'Benchmark results, throughput targets, memory model, and how to reproduce' },
            ].map(d => (
              <Link key={d.path} to={`/agentobs-validate/docs/${d.path}`} className={styles.docCard}>
                <div className={styles.docCardLabel}>{d.label} →</div>
                <div className={styles.docCardDesc}>{d.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
