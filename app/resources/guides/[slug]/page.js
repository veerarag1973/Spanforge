import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { getGuideBySlug, getAllGuideSlugs, extractToc, slugify } from '@/lib/guides'
import { FRAMEWORK_THEME } from '../page'
import PrintButton from './PrintButton'
import styles from './page.module.css'

export async function generateStaticParams() {
  const slugs = await getAllGuideSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const guide = await getGuideBySlug(params.slug)
  if (!guide) return {}
  return {
    title: `${guide.title} — SpanForge`,
    description: guide.excerpt || guide.title,
    openGraph: {
      title: guide.title,
      description: guide.excerpt || guide.title,
      type: 'article',
      publishedTime: guide.date,
      authors: [guide.author || 'SpanForge'],
      siteName: 'SpanForge',
    },
  }
}

/** Custom heading renderer that adds slugified IDs for anchor navigation. */
function makeHeadingComponent(tag) {
  const Tag = tag
  return function HeadingWithId({ children }) {
    const text = extractText(children)
    const id = slugify(text)
    return <Tag id={id}>{children}</Tag>
  }
}

function extractText(node) {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (node?.props?.children) return extractText(node.props.children)
  return ''
}

const mdComponents = {
  h1: makeHeadingComponent('h1'),
  h2: makeHeadingComponent('h2'),
  h3: makeHeadingComponent('h3'),
}

export default async function GuidePage({ params }) {
  const guide = await getGuideBySlug(params.slug)
  if (!guide) notFound()

  const toc = extractToc(guide.content)
  const theme = FRAMEWORK_THEME[guide.framework] || { color: 'var(--accent)', bg: 'var(--accent-soft)' }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.date,
    author: { '@type': 'Organization', name: 'SpanForge', url: 'https://www.getspanforge.com' },
    publisher: { '@type': 'Organization', name: 'SpanForge', url: 'https://www.getspanforge.com' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.getspanforge.com/resources/guides/${guide.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Guide header ─────────────────────────────────────── */}
      <header className={styles.header} data-pdf-section="header">
        <div className="container">
          <div className={styles.headerMeta}>
            <span
              className={styles.frameworkBadge}
              style={{ color: theme.color, background: theme.bg }}
            >
              {guide.framework}
            </span>
            {guide.sections && (
              <span className={styles.metaItem}>{guide.sections} sections</span>
            )}
            {guide.author && (
              <span className={styles.metaItem}>By {guide.author}</span>
            )}
          </div>

          <h1 className={styles.h1}>{guide.title}</h1>

          {guide.excerpt && (
            <p className={styles.excerpt}>{guide.excerpt}</p>
          )}

          <div className={styles.headerActions} data-pdf-hide>
            <PrintButton />
            <Link href="/resources/guides" className={styles.backLink} data-pdf-hide>
              ← All guides
            </Link>
          </div>
        </div>
      </header>

      {/* ── Body: TOC sidebar + article ──────────────────────── */}
      <div className={styles.body}>
        <div className={`container ${styles.bodyInner}`}>

          {/* Table of contents sidebar */}
          {toc.length > 0 && (
            <aside className={styles.toc} data-pdf-hide aria-label="Table of contents">
              <details className={styles.tocDetails} open>
                <summary className={styles.tocSummary}>Contents</summary>
                <nav>
                  <ol className={styles.tocList}>
                    {toc.map((item) => (
                      <li
                        key={item.id}
                        className={item.level === 3 ? styles.tocItemSub : styles.tocItem}
                      >
                        <a href={`#${item.id}`} className={styles.tocLink}>
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </details>
            </aside>
          )}

          {/* Main article */}
          <article className={styles.article}>
            <div className={styles.prose}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={mdComponents}
              >
                {guide.content}
              </ReactMarkdown>
            </div>

            {/* In-article CTA */}
            <div className={styles.articleCta} data-pdf-hide>
              <p className={styles.articleCtaText}>
                Ready to move from understanding to implementation?
              </p>
              <div className={styles.articleCtaActions}>
                <a href="#contact" className={styles.articleCtaPrimary}>
                  Schedule an assessment
                </a>
                <Link href="/spanforgecore/sdk" className={styles.articleCtaSecondary}>
                  Explore the SDK
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* ── Footer nav ───────────────────────────────────────── */}
      <div className={styles.footerNav} data-pdf-hide>
        <div className="container">
          <Link href="/resources/guides" className={styles.footerBackLink}>
            ← Back to all guides
          </Link>
        </div>
      </div>

      <section className={styles.editorialFooter} data-pdf-hide>
        <div className={`container ${styles.editorialInner}`}>
          <div className={styles.editorialBlock}>
            <span className={styles.editorialEyebrow}>Explore more</span>
            <p className={styles.editorialTitle}>Browse all compliance guides</p>
            <Link href="/resources/guides" className={styles.editorialLink}>See all guides</Link>
          </div>
          <div className={styles.editorialDivider} aria-hidden="true" />
          <div className={styles.editorialBlock}>
            <span className={styles.editorialEyebrow}>The platform</span>
            <p className={styles.editorialTitle}>Explore the SpanForge SDK</p>
            <Link href="/spanforgecore" className={styles.editorialLink}>Explore the platform</Link>
          </div>
          <div className={styles.editorialDivider} aria-hidden="true" />
          <div id="contact" className={styles.editorialBlock}>
            <span className={styles.editorialEyebrow}>Talk to SpanForge</span>
            <p className={styles.editorialTitle}>Schedule a compliance assessment</p>
            <a href="mailto:sriram@getspanforge.com" className={styles.editorialLink}>Get in touch</a>
          </div>
        </div>
      </section>
    </>
  )
}
