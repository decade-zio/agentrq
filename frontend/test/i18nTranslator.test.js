// Copyright 2026 Contextual, Inc. https://agentrq.com
// This notice may not be modified or removed.
// SPDX-License-Identifier: AGPL-3.0-only

import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { startI18n, stopI18n, translate, translateTitle } from '../src/i18n/translator'

const settle = () => new Promise((r) => setTimeout(r, 0))

describe('translate', () => {
  it('replaces a whole string from the dictionary', () => {
    expect(translate('Save')).toBe('保存')
    expect(translate('Cancel')).toBe('取消')
  })

  it('collapses whitespace before matching, so a label split over lines still hits', () => {
    expect(translate('  Save\n  ')).toBe('保存')
  })

  it('falls back to a case-insensitive match', () => {
    expect(translate('save')).toBe('保存')
  })

  it('translates sentences assembled around a value', () => {
    expect(translate('In 3 days')).toBe('3 天后')
    expect(translate('Showing 1 of 4')).toBe('显示 1 / 4')
    expect(translate('Fork of Nightly build')).toBe('Nightly build 的分叉')
  })

  it('leaves anything unknown alone', () => {
    expect(translate('A sentence nobody wrote a key for')).toBeNull()
  })

  it('ignores strings with no Latin letters and non-strings', () => {
    expect(translate('保存')).toBeNull()
    expect(translate('123')).toBeNull()
    expect(translate(undefined)).toBeNull()
  })
})

describe('translateTitle', () => {
  it('translates a workspace’s task page', () => {
    expect(translateTitle('agentrq-static Tasks | AgentRQ')).toBe('agentrq-static任务 | AgentRQ')
  })

  it('translates the task form titles', () => {
    expect(translateTitle('Edit Task | agentrq-static | AgentRQ')).toBe('编辑任务 | agentrq-static | AgentRQ')
    expect(translateTitle('New Task | agentrq-static | AgentRQ')).toBe('新建任务 | agentrq-static | AgentRQ')
  })

  it('translates a plain page title', () => {
    expect(translateTitle('Machines | AgentRQ')).toBe('机器 | AgentRQ')
  })

  it('keeps a title it does not know', () => {
    expect(translateTitle('agentrq-static')).toBe('agentrq-static')
  })
})

describe('startI18n', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    document.head.innerHTML = ''
    document.title = ''
    window.history.replaceState(null, '', '/')
  })

  afterEach(() => {
    stopI18n()
  })

  it('translates what is already rendered and keeps watching what comes later', async () => {
    document.body.innerHTML = '<button>Save</button>'
    startI18n()
    expect(document.body.textContent).toBe('保存')

    const later = document.createElement('span')
    later.textContent = 'Cancel'
    document.body.appendChild(later)
    await settle()
    expect(later.textContent).toBe('取消')
  })

  it('keeps the padding around a phrase that shares a node with layout whitespace', () => {
    document.body.innerHTML = '<span> Save </span>'
    startI18n()
    expect(document.body.querySelector('span').textContent).toBe(' 保存 ')
  })

  it('translates placeholders and titles', () => {
    document.body.innerHTML = '<input placeholder="Search"><div title="Settings"></div>'
    startI18n()
    const input = document.querySelector('input')
    expect(input.getAttribute('placeholder')).toBe('搜索')
    expect(document.querySelector('div').getAttribute('title')).toBe('设置')
  })

  it('does not touch content, code or a shortcut name', () => {
    document.body.innerHTML = [
      '<div class="markdown-body">Save</div>',
      '<pre>Save</pre>',
      '<code>Save</code>',
      '<kbd>Save</kbd>',
      '<div contenteditable="true">Save</div>',
      '<div data-i18n-off>Save</div>'
    ].join('')
    startI18n()
    expect(document.body.textContent.replace(/\s+/g, '')).toBe('SaveSaveSaveSaveSaveSave')
  })

  it('is idempotent, so re-running the walker changes nothing', async () => {
    document.body.innerHTML = '<button>Save</button>'
    startI18n()
    startI18n()
    await settle()
    expect(document.body.textContent).toBe('保存')
  })

  it('follows document.title as the router replaces it', async () => {
    startI18n()
    document.title = 'Kanban | AgentRQ'
    await settle()
    expect(document.title).toBe('看板 | AgentRQ')
  })

  it('sets the document language', () => {
    startI18n()
    expect(document.documentElement.lang).toBe('zh-CN')
  })

  it('leaves the page in English when ?lang=en is asked for', async () => {
    window.history.replaceState(null, '', '/?lang=en')
    document.body.innerHTML = '<button>Save</button>'
    startI18n()
    expect(document.body.textContent).toBe('Save')

    const later = document.createElement('span')
    later.textContent = 'Cancel'
    document.body.appendChild(later)
    await settle()
    expect(later.textContent).toBe('Cancel')
  })
})
