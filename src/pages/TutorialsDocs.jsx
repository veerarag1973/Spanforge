import { useParams, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import DocLayout from '../components/DocLayout.jsx'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

// ── Static markdown imports ──
import part1Md from '../tutorials/otel-python-part1.md?raw'

const DOC_MAP = {
  'otel-python/part1': part1Md,
}

const SIDEBAR = [
  {
    title: 'OpenTelemetry in Python',
    items: [
      { path: 'otel-python/part1', label: 'Part 1 — Intro & Setup' },
      { path: 'otel-python/part2', label: 'Part 2 — Distributed Tracing', disabled: true },
      { path: 'otel-python/part3', label: 'Part 3 — Metrics & Prometheus', disabled: true },
      { path: 'otel-python/part4', label: 'Part 4 — Structured Logging', disabled: true },
      { path: 'otel-python/part5', label: 'Part 5 — The Collector', disabled: true },
      { path: 'otel-python/part6', label: 'Part 6 — End-to-End', disabled: true },
    ],
  },
]

export default function TutorialsDocs() {
  const params = useParams()
  const currentPage = params['*'] || 'otel-python/part1'

  const content = DOC_MAP[currentPage]
  const pageLabel =
    SIDEBAR.flatMap(s => s.items).find(i => i.path === currentPage)?.label || 'Tutorial'
  usePageTitle(`${pageLabel} · Learn · Spanforge`)

  if (!content) {
    return <Navigate to="/learn/otel-python/part1" replace />
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <DocLayout basePath="/learn" sidebar={SIDEBAR}>
        <MarkdownRenderer content={content} />
      </DocLayout>
      <Footer />
    </div>
  )
}
