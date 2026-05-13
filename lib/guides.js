import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const GUIDES_DIR = path.join(process.cwd(), 'guides')

function deriveSlug(filename, data) {
  return (
    data.slug ||
    filename
      .replace(/\.(md|mdx)$/, '')
      .toLowerCase()
      .replace(/_/g, '-')
  )
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function getAllGuides() {
  if (!fs.existsSync(GUIDES_DIR)) return []
  const files = fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(GUIDES_DIR, filename), 'utf8')
      const { data } = matter(raw)
      return { slug: deriveSlug(filename, data), ...data }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getGuideBySlug(slug) {
  if (!fs.existsSync(GUIDES_DIR)) return null
  const files = fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  for (const filename of files) {
    const raw = fs.readFileSync(path.join(GUIDES_DIR, filename), 'utf8')
    const { data, content } = matter(raw)
    if (deriveSlug(filename, data) === slug) {
      return { slug, ...data, content }
    }
  }
  return null
}

export function getAllGuideSlugs() {
  if (!fs.existsSync(GUIDES_DIR)) return []
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(GUIDES_DIR, filename), 'utf8')
      const { data } = matter(raw)
      return deriveSlug(filename, data)
    })
}

/**
 * Extract h2 and h3 headings from markdown content for a table of contents.
 * Strips bold/code markers from heading text.
 */
export function extractToc(content) {
  return content
    .split('\n')
    .filter((line) => /^#{2,3}\s/.test(line))
    .map((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)/)
      if (!match) return null
      const level = match[1].length
      const text = match[2].replace(/\*\*/g, '').replace(/`/g, '').trim()
      return { level, text, id: slugify(text) }
    })
    .filter(Boolean)
}
