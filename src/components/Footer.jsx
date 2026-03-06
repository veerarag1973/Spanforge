import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/logo.png" alt="Spanforge" />
          <span>Spanforge</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Toolkit</h4>
            <ul>
              <li><Link to="/llm-diff">llm-diff</Link></li>
              <li><a href="https://github.com/veerarag1973/promptlock" target="_blank" rel="noopener">promptlock</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Docs</h4>
            <ul>
              <li><Link to="/llm-diff/docs/getting-started">llm-diff Docs</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Learn</h4>
            <ul>
              <li><Link to="/learn/otel-python/part1">OTel in Python — Part 1</Link></li>
              <li><span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>More guides coming soon</span></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Community</h4>
            <ul>
              <li><a href="https://discord.gg/sv3UzmvR" target="_blank" rel="noopener">Discord</a></li>
              <li><a href="https://github.com/veerarag1973" target="_blank" rel="noopener">GitHub</a></li>
              <li><a href="https://github.com/veerarag1973/llmdiff/issues" target="_blank" rel="noopener">Issues</a></li>
              <li><a href="https://pypi.org/project/llm-diff/" target="_blank" rel="noopener">PyPI</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Trust</h4>
            <ul>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/reliability">Reliability</Link></li>
              <li><Link to="/compatibility">Compatibility Policy</Link></li>
              <li><Link to="/roadmap">Roadmap</Link></li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        <p className={styles.meta}>
          &copy; {new Date().getFullYear()} Spanforge &mdash; The home for OpenTelemetry practitioners.{' '}
          Released under the{' '}
          <a href="/LICENSE" target="_blank" rel="noopener">MIT License</a>.
          Built in the open.
        </p>
      </div>
    </footer>
  )
}
