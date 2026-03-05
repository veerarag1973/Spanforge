import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './ProductHome.module.css'

const features = [
  {
    icon: '🔁',
    title: 'Trace Replay',
    body: 'Replay an agent run step-by-step from JSONL traces to understand exactly what happened and in what order.',
  },
  {
    icon: '🌳',
    title: 'Trace Tree',
    body: 'Print full span hierarchy trees so parent/child flow across run, steps, and model calls is obvious.',
  },
  {
    icon: '📈',
    title: 'Timeline + Attribution',
    body: 'Inspect timeline offsets and per-step token/cost/latency attribution with percentile summaries.',
  },
  {
    icon: '🧰',
    title: 'Tool + Decision Views',
    body: 'List tool invocations and decision points captured in AgentOBS traces to debug agent behavior.',
  },
  {
    icon: '🧪',
    title: 'Batch Reports',
    body: 'Generate summary reports across all traces in a file and compare two runs side-by-side.',
  },
  {
    icon: '⌨️',
    title: 'CLI + Python API',
    body: 'Use as a command-line debugger during operations or integrate directly in Python pipelines.',
  },
]

export default function AgentObsDebugHome() {
  usePageTitle('AgentOBSDebug · Agent Trace Debugging Toolkit · Spanforge')

  return (
    <div className={styles.page}>
      <Nav />

      <header className={styles.hero} style={{ '--hero-accent': '#3d5af1', '--hero-glow': 'rgba(61,90,241,.12)' }}>
        <div className={styles.heroGlow} />
        <div className={styles.heroCrumb}>
          <Link to="/" className={styles.breadcrumb}>Spanforge</Link>
          <span className={styles.sep}>/</span>
          <Link to="/tools/core" className={styles.breadcrumb}>The Tools</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbCurrent}>AgentOBSDebug</span>
        </div>

        <h1 className={styles.heroTitle}><span className={styles.titleMono}>AgentOBSDebug</span></h1>
        <p className={styles.heroTagline}>Debugging and inspection tools for AgentOBS traces.</p>
        <p className={styles.heroSub}>
          Developer tools for inspecting, replaying, and visualising AgentOBS traces. Use the CLI
          or Python API to replay runs, inspect hierarchy, analyze decisions, and attribute cost.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.stat}><span>Python 3.10+</span>Requirement</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>agentobs &gt;= 1.0</span>Dependency</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>CLI + API</span>Interface</div>
        </div>

        <div className={styles.heroActions}>
          <Link to="/agentobs-debug/docs/api-reference" className="btn btn-primary">API Reference →</Link>
          <Link to="/agentobs-debug/docs/tutorial" className="btn btn-secondary">Tutorial</Link>
          <a href="https://github.com/veerarag1973/agentobs-debug" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub ↗</a>
        </div>

        <div className={styles.installBox}>
          <span className={styles.installComment}># Install from PyPI</span>
          <div className={styles.installLine}>
            <span className={styles.installPrompt}>$</span>
            <span className={styles.installCmd}>pip install agentobs-debug</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className={styles.sectionTitle}>Inspect traces from every angle</h2>
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

      <Footer />
    </div>
  )
}
