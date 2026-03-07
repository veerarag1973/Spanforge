import { useParams, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import DocLayout from '../components/DocLayout.jsx'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

import readmeMd    from '../../AgentOBSValidate/README.md?raw'
import tutorialMd  from '../../AgentOBSValidate/docs/tutorial.md?raw'
import sdkMd       from '../../AgentOBSValidate/docs/sdk.md?raw'
import errorsMd    from '../../AgentOBSValidate/docs/errors.md?raw'
import ciMd        from '../../AgentOBSValidate/docs/ci.md?raw'
import performanceMd from '../../AgentOBSValidate/docs/performance.md?raw'
import roadmapMd   from '../../AgentOBSValidate/docs/roadmap.md?raw'

const DOC_MAP = {
  'overview':    { content: readmeMd,       source: 'README.md' },
  'tutorial':    { content: tutorialMd,     source: 'docs/tutorial.md' },
  'sdk':         { content: sdkMd,          source: 'docs/sdk.md' },
  'errors':      { content: errorsMd,       source: 'docs/errors.md' },
  'ci':          { content: ciMd,           source: 'docs/ci.md' },
  'performance': { content: performanceMd,  source: 'docs/performance.md' },
  'roadmap':     { content: roadmapMd,      source: 'docs/roadmap.md' },
}

const SOURCE_TO_PAGE = {
  'README.md':              'overview',
  'docs/tutorial.md':       'tutorial',
  'docs/sdk.md':            'sdk',
  'docs/errors.md':         'errors',
  'docs/ci.md':             'ci',
  'docs/performance.md':    'performance',
  'docs/roadmap.md':        'roadmap',
}

function normalizePath(path) {
  const parts = path.split('/').filter(Boolean)
  const out = []
  for (const part of parts) {
    if (part === '.') continue
    if (part === '..') { if (out.length) out.pop(); continue }
    out.push(part)
  }
  return out.join('/')
}

function resolveRelativePath(fromFile, relativePath) {
  const fromParts = fromFile.split('/').filter(Boolean)
  const fromDir = fromParts.slice(0, -1).join('/')
  const raw = fromDir ? `${fromDir}/${relativePath}` : relativePath
  return normalizePath(raw)
}

const AGENTOBS_VALIDATE_GITHUB_BASE = 'https://github.com/veerarag1973/AgentOBSValidate/blob/main'

const SIDEBAR = [
  {
    title: null,
    items: [{ path: 'overview', label: 'Overview' }],
  },
  {
    title: 'Guides',
    items: [
      { path: 'tutorial',    label: 'Tutorial' },
      { path: 'ci',          label: 'CI Integration' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { path: 'sdk',         label: 'SDK Reference' },
      { path: 'errors',      label: 'Error Codes' },
    ],
  },
  {
    title: 'Meta',
    items: [
      { path: 'performance', label: 'Performance' },
      { path: 'roadmap',     label: 'Roadmap' },
    ],
  },
]

export default function AgentObsValidateDocs() {
  const params = useParams()
  const currentPage = params['*'] || 'tutorial'
  const currentDoc = DOC_MAP[currentPage]
  const content = currentDoc?.content

  const pageLabel = SIDEBAR.flatMap(s => s.items)
    .find(item => item.path === currentPage)?.label || 'Docs'

  usePageTitle(`${pageLabel} · agentobs-validate Docs · Spanforge`)

  const resolveDocLink = (href) => {
    if (!href || !currentDoc?.source) return href
    if (href.startsWith('#')) return href
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) return href
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return href

    const [rawPath, hash] = href.split('#')
    const hashSuffix = hash ? `#${hash}` : ''

    if (!rawPath) return hashSuffix || href

    const normalized = rawPath.startsWith('/')
      ? normalizePath(rawPath)
      : resolveRelativePath(currentDoc.source, rawPath)

    const page = SOURCE_TO_PAGE[normalized]
    if (page) {
      return `/agentobs-validate/docs/${page}${hashSuffix}`
    }

    if (normalized.endsWith('.md') || normalized.endsWith('.json')) {
      return `${AGENTOBS_VALIDATE_GITHUB_BASE}/${normalized}${hashSuffix}`
    }

    return href
  }

  if (!content) {
    return <Navigate to="/agentobs-validate/docs/tutorial" replace />
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <DocLayout basePath="/agentobs-validate/docs" sidebar={SIDEBAR}>
        <MarkdownRenderer content={content} resolveLink={resolveDocLink} />
      </DocLayout>
      <Footer />
    </div>
  )
}
