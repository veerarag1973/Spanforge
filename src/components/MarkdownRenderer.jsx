import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'
import styles from './MarkdownRenderer.module.css'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
      onClick={() => {
        navigator.clipboard.writeText(text || '')
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      }}
      aria-label="Copy code"
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  )
}

function PreWithCopy({ children, ...props }) {
  const codeText = typeof children?.props?.children === 'string'
    ? children.props.children
    : ''
  return (
    <div className={styles.codeWrapper}>
      <CopyButton text={codeText} />
      <pre {...props}>{children}</pre>
    </div>
  )
}

export default function MarkdownRenderer({ content, resolveLink }) {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          pre: PreWithCopy,
          a: ({ href, children, ...props }) => {
            const resolvedHref = resolveLink ? resolveLink(href) : href
            const isExternal = resolvedHref && (resolvedHref.startsWith('http') || resolvedHref.startsWith('//'))
            if (isExternal) {
              return (
                <a href={resolvedHref} target="_blank" rel="noopener noreferrer" {...props}>
                  {children}
                </a>
              )
            }
            if (resolvedHref && resolvedHref.startsWith('/')) {
              return <Link to={resolvedHref} {...props}>{children}</Link>
            }
            return <a href={resolvedHref} {...props}>{children}</a>
          },
          img: ({ src, alt, ...props }) => (
            <img src={src} alt={alt} className={styles.img} {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
