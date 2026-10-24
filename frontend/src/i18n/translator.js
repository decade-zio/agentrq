// Copyright 2026 Contextual, Inc. https://agentrq.com
// This notice may not be modified or removed.
// SPDX-License-Identifier: AGPL-3.0-only

/**
 * Runtime Chinese localisation.
 *
 * The views and components are left untouched: this walks the rendered DOM,
 * replaces text nodes and a few attributes whose *whole* value matches a key
 * in the dictionary, and keeps watching for content Vue renders later
 * (route changes, streamed replies, toasts).
 *
 * Only exact matches are replaced. Free-form content — agent replies, task
 * titles typed by a person, code — is never looked up word by word, and the
 * subtrees in `SKIP_SELECTOR` are not visited at all, so a message that
 * happens to say "Save" keeps saying it.
 */
import { PHRASES, PATTERNS, TITLE_RULES } from './zh-CN'

const ATTRIBUTES = ['placeholder', 'title', 'aria-label', 'alt', 'aria-description']

// Subtrees whose text is content rather than chrome. `KBD` is here because a
// shortcut name is a key, not a word to translate.
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'PRE', 'CODE', 'KBD', 'SAMP', 'SVG', 'PATH'])

const SKIP_SELECTOR = [
  '.markdown-body',
  '[contenteditable]:not([contenteditable="false"])',
  '[data-i18n-off]',
  '.xterm',
  '.cm-editor',
  '.monaco-editor'
].join(', ')

const normalize = (value) => value.replace(/\s+/g, ' ').trim()

// Keys are normalised once, so a fragment written with the padding it needs in
// the template (" of ", "Failed to ") still matches the trimmed text node.
// A case-insensitive fallback then lets a heading "Scheduled" and a chip
// "scheduled" share one entry; the first exact spelling wins.
const NORMALIZED = new Map()
const LOWER = new Map()
for (const [key, value] of Object.entries(PHRASES)) {
  const normalized = normalize(key)
  NORMALIZED.set(normalized, value)
  const lower = normalized.toLowerCase()
  if (!LOWER.has(lower)) LOWER.set(lower, value)
}

/**
 * Translate one complete string. Returns `null` when the string is not in the
 * dictionary, which is how the walker tells "nothing to do" from a translation
 * that happens to equal the input.
 */
export function translate(value) {
  if (typeof value !== 'string' || !/[A-Za-z]/.test(value)) return null
  const key = normalize(value)
  if (!key) return null

  if (NORMALIZED.has(key)) return NORMALIZED.get(key)

  const lower = LOWER.get(key.toLowerCase())
  if (lower !== undefined) return lower

  for (const [pattern, replacement] of PATTERNS) {
    if (pattern.test(key)) return key.replace(pattern, replacement)
  }
  return null
}

export function translateTitle(title) {
  const key = normalize(title)
  for (const rule of TITLE_RULES) {
    const next = rule(key)
    if (next) return next
  }
  return translate(key) ?? title
}

function preserveWhitespace(raw, next) {
  const lead = raw.match(/^\s*/)[0]
  const trail = raw.match(/\s*$/)[0]
  const between = raw.slice(lead.length, raw.length - trail.length)
  // Only keep the padding when the node was nothing but that phrase; a node
  // with a line break in the middle is normalised, and the spaces around it
  // are the ones the layout expects.
  return between === normalize(between) ? lead + next + trail : next
}

function skipped(node) {
  let el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement
  while (el && el !== document.body) {
    if (SKIP_TAGS.has(el.tagName)) return true
    if (el.matches && el.matches(SKIP_SELECTOR)) return true
    if (el.isContentEditable) return true
    el = el.parentElement
  }
  return false
}

function translateTextNode(node) {
  const raw = node.nodeValue
  if (!raw || skipped(node)) return
  const next = translate(raw)
  if (next === null) return
  const replacement = preserveWhitespace(raw, next)
  if (replacement !== raw) node.nodeValue = replacement
}

function translateAttributes(el) {
  if (!el.getAttribute || skipped(el)) return
  for (const name of ATTRIBUTES) {
    const raw = el.getAttribute(name)
    if (!raw) continue
    const next = translate(raw)
    if (next !== null && next !== raw) el.setAttribute(name, next)
  }
}

function translateSubtree(root) {
  if (!root) return
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root)
    return
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return

  translateAttributes(root)
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT)
  let node
  while ((node = walker.nextNode())) {
    if (node.nodeType === Node.TEXT_NODE) translateTextNode(node)
    else translateAttributes(node)
  }
}

function translateDocumentTitle() {
  const next = translateTitle(document.title)
  if (next && next !== document.title) document.title = next
}

let running = false
let bodyObserver = null
let headObserver = null

function onMutations(records) {
  for (const record of records) {
    if (record.type === 'characterData') {
      translateTextNode(record.target)
    } else if (record.type === 'attributes') {
      translateAttributes(record.target)
    } else {
      for (const node of record.addedNodes) translateSubtree(node)
    }
  }
}

/**
 * Start translating. Safe to call twice; the second call is a no-op.
 * `?lang=en` keeps the original English, which is the way to compare a screen
 * against its source without removing anything.
 *
 * @returns {() => void} stops both observers
 */
export function startI18n() {
  if (running || typeof document === 'undefined') return () => {}
  const lang = new URLSearchParams(window.location.search).get('lang')
  if (lang === 'en') return () => {}

  running = true
  document.documentElement.lang = 'zh-CN'

  translateDocumentTitle()
  translateSubtree(document.body)

  bodyObserver = new MutationObserver(onMutations)
  bodyObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ATTRIBUTES
  })

  // `document.title` is assigned on every route change; watching the element
  // is the only way to catch that without touching the views that set it.
  headObserver = new MutationObserver(translateDocumentTitle)
  headObserver.observe(document.head, { childList: true, subtree: true, characterData: true })

  return stopI18n
}

export function stopI18n() {
  if (!running) return
  bodyObserver?.disconnect()
  headObserver?.disconnect()
  bodyObserver = null
  headObserver = null
  running = false
}
