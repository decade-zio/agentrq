// Copyright 2026 Contextual, Inc. https://agentrq.com
// This notice may not be modified or removed.
// SPDX-License-Identifier: AGPL-3.0-only

/**
 * The Chinese dictionary.
 *
 * `PHRASES` are whole strings, matched after whitespace has been collapsed,
 * so a label laid out over several source lines still matches. `PATTERNS`
 * cover the sentences assembled with a value in them (a count, a name, a
 * model). `TITLE_RULES` handle `document.title`, which is built in JS rather
 * than rendered.
 *
 * A key here is the *entire* rendered text of one node or one attribute. The
 * translator never substitutes inside a sentence, so content a person wrote
 * is only ever matched if it is exactly one of these strings.
 */
import common from './phrases/common'
import tasks from './phrases/tasks'
import machines from './phrases/machines'
import content from './phrases/content'
import workspaces from './phrases/workspaces'
import desktop from './phrases/desktop'

export const PHRASES = {
  ...common,
  ...tasks,
  ...machines,
  ...content,
  ...workspaces,
  ...desktop,

  // Page titles, assigned as complete strings in App.vue and the views.
  "Workspaces | AgentRQ": "工作区 | AgentRQ",
  "Login | AgentRQ": "登录 | AgentRQ",
  "Admin | AgentRQ": "管理后台 | AgentRQ",
  "Admin stats | AgentRQ": "管理后台统计 | AgentRQ",
  "Kanban | AgentRQ": "看板 | AgentRQ",
  "Events | AgentRQ": "事件 | AgentRQ",
  "Workflows | AgentRQ": "工作流 | AgentRQ",
  "Machines | AgentRQ": "机器 | AgentRQ",
  "Pano | AgentRQ": "Pano | AgentRQ",
  "Skills | AgentRQ": "技能 | AgentRQ",
  "Terminal | AgentRQ": "终端 | AgentRQ",
  "Tasks | AgentRQ": "任务 | AgentRQ",

  // Fragments the views build around a value or an element.
  "Archived ": "已归档 ",
  "Updated": "更新于",
  "Delete '": "删除“",
  "' with its files and comments? Every workspace loses it. This cannot be undone.":
    "”及其文件和评论？每个工作区都会失去它，且无法撤销。",
  "Showing ": "显示 ",
  " of ": " / ",
  "RUNS ": "运行次数 ",
  "NEXT RUN: ": "下次运行：",
  "Expires in ": "过期时间：",
  "Pinged ": "已提醒 ",
  "Could not load ": "无法加载 ",
  "Could not save ": "无法保存 ",
  "this workspace": "此工作区",
  "General": "常规",

  // Toasts whose English is assembled from a fixed word plus a verdict.
  "Permission allowed": "已允许权限",
  "Permission denied": "已拒绝权限",
  "JUST NOW": "刚刚",
  "Pano · every workspace can read it": "Pano · 每个工作区都可以阅读",

  // The desktop shell's updater toasts (desktop/src/renderer/main.js).
  "Updates": "更新",
  "Update failed": "更新失败",
  "Checking for updates…": "正在检查更新…",
  "AgentRQ is up to date": "AgentRQ 已是最新版本",

  // Words Vue leaves in their own text node, next to an interpolation.
  "task": "任务",
  "tasks": "任务",
  "file": "文件",
  "files": "文件",
  "agent": "智能体",
  "agents": "智能体",
  "workspace": "工作区",
  "workspaces": "工作区",
  "machine": "机器",
  "machines": "机器",
  "skill": "技能",
  "skills": "技能",
  "comment": "评论",
  "comments": "评论",
  "Imported": "已导入",
  "selected": "已选择",
  "closed": "已关闭",
  "free of": "可用，共",
  "By": "作者：",
  "by": "由",
  "· updated": "· 更新于",

  "This workspace has 1 fork. Merge it back before archiving or purging it.":
    "此工作区有 1 个分叉。请先合并它，再归档或清除。"
}

/** Sentences that carry a value. Order matters: the specific ones come first. */
export const PATTERNS = [
  [/^In (\d+) days?$/, '$1 天后'],
  [/^In (\d+) hours?$/, '$1 小时后'],
  [/^In (\d+) mins?$/, '$1 分钟后'],
  [/^In (\d+)h (\d+)m$/, '$1 小时 $2 分钟后'],
  [/^Expires in (\d+) days$/, '$1 天后过期'],

  [/^(\d+) tasks?$/, '$1 个任务'],
  [/^(\d+) workspaces?$/, '$1 个工作区'],
  [/^(\d+) agents?$/, '$1 个智能体'],
  [/^(\d+) files?$/, '$1 个文件'],
  [/^(\d+) bytes?$/, '$1 字节'],
  [/^On in (\d+) workspaces?$/, '在 $1 个工作区启用'],

  [/^(\d+)m ago$/, '$1 分钟前'],
  [/^(\d+)h ago$/, '$1 小时前'],
  [/^(\d+)d ago$/, '$1 天前'],
  [/^(\d+)s ago$/, '$1 秒前'],
  [/^(\d+) minutes? ago$/, '$1 分钟前'],
  [/^(\d+) hours? ago$/, '$1 小时前'],
  [/^(.+?) ago$/, '$1 前'],

  [/^Showing (\d+) of (\d+)$/, '显示 $1 / $2'],
  [/^Updated (.+)$/, '已更新 $1'],
  [/^Fork of (.+)$/, '$1 的分叉'],
  [/^Pinged (\d+) workspaces?$/, '已提醒 $1 个工作区'],
  [/^Assigned to (.+)$/, '已分配给 $1'],
  [/^Status updated to (.+)$/, '状态已更新为 $1'],
  [/^Task reassigned to (.+)$/, '任务已重新分配给 $1'],
  [/^Merge into (.+)$/, '合并到 $1'],

  [/^The gateway is running (\d+) at a time$/, '网关同时运行 $1 个'],
  [/^The agent is running at (.+)$/, '智能体正以 $1 强度运行'],
  [/^The agent is running (.+)$/, '智能体正在运行 $1'],
  [/^Session cost (.+)$/, '会话费用 $1'],
  [/^exit (\d+)$/, '退出码 $1'],
  [/^Stops (\d+) running sessions and starts them again\. Unsaved work is lost\.$/,
    '停止 $1 个运行中的会话并重新启动它们。未保存的工作会丢失。'],
  [/^Local copy cleared, freeing (.+)$/, '本地副本已清除，释放了 $1'],
  [/^Tasks you stop opening will be dropped after (\d+) days$/, '你不再打开的任务将在 $1 天后被丢弃'],
  [/^This machine is already running a (.+) for that workspace\.$/, '此机器已在为该工作区运行一个 $1。'],
  [/^Set one in (.+)'s settings$/, '在 $1 的设置中设置'],
  [/^Same account as (.+)$/, '与 $1 使用同一账号'],
  [/^Workspace (.+)$/, '工作区 $1'],
  [/^Removed, but this was left behind: (.+)$/, '已移除，但留下了以下内容：$1'],
  [/^Its author says it contacts (.+)\.$/, '其作者称它会连接 $1。'],
  [/^This extension asks for "(.+)" twice\.$/, '此扩展两次请求“$1”。'],
  [/^This view nests deeper than (\d+) levels\.$/, '此视图的嵌套层数超过 $1 层。'],
  [/^This view has more than (\d+) elements\.$/, '此视图的元素数量超过 $1 个。'],
  [/^A "(.+)" needs a list of elements\.$/, '“$1”需要一个元素列表。'],
  [/^The select "(.+)" needs a list of options\.$/, '下拉框“$1”需要一个选项列表。'],
  [/^The select "(.+)" offers more than (\d+) options\.$/, '下拉框“$1”提供的选项超过 $2 个。'],
  [/^This diagram is longer than (\d+) characters\.$/, '此图表超过 $1 个字符。'],
  [/^Nothing saved under (.+) yet\.$/, '尚未在 $1 下保存任何内容。'],
  [/^Could not open (.+)$/, '无法打开 $1'],
  [/^AgentRQ does not run files, so (.+) is shown in your file manager instead\.$/,
    'AgentRQ 不运行文件，因此改为在文件管理器中显示 $1。'],
  [/^Dictation failed: (.+)$/, '听写失败：$1'],
  [/^Failed to access microphone: (.+)$/, '访问麦克风失败：$1'],
  [/^Failed to process audio: (.+)$/, '处理音频失败：$1'],
  [/^The (.+) extension$/, '$1 扩展'],
  [/^(.+) wants to use your camera and microphone$/, '$1 想使用你的摄像头和麦克风'],
  [/^(.+) wants to (.+)$/, '$1 想$2'],
  [/^(.+) is on in (.+)$/, '$1 在 $2 中已启用'],
  [/^(.+) is off in (.+)$/, '$1 在 $2 中已关闭'],
  [/^Workspace · creates "(.+)"$/, '工作区 · 创建“$1”'],
  [/^Pano: (.+)$/, 'Pano：$1'],
  [/^This workspace is for (.+) \((.+)\)\.$/, '此工作区面向 $1（$2）。'],
  [/^Could not switch profile: (.+)$/, '无法切换配置：$1'],
  [/^Could not remove that profile: (.+)$/, '无法移除该配置：$1'],
  [/^Could not add a profile: (.+)$/, '无法添加配置：$1'],
  [/^(.+) was disabled: (.+)$/, '$1 已被禁用：$2'],
  [/^Could not rename the task: (.+)$/, '无法重命名任务：$1'],
  [/^Could not fork the task: (.+)$/, '无法分叉任务：$1'],
  [/^Failed to create workspace: (.+)$/, '创建工作区失败：$1'],
  [/^Failed to create event \((\d+)\)$/, '创建事件失败（$1）'],
  [/^Failed to create workflow \((\d+)\)$/, '创建工作流失败（$1）'],
  [/^Failed to create workflow step \((\d+)\)$/, '创建工作流步骤失败（$1）'],
  [/^Failed to save workflow \((\d+)\)$/, '保存工作流失败（$1）'],
  [/^Too many attempts\. Try again in (\d+) minutes?\.$/, '尝试次数过多。请在 $1 分钟后重试。'],
  [/^Its folder on the machine is left as it is: (.+)$/, '它在机器上的文件夹会保留原样：$1'],
  [/^Merged into (.+): (\d+) tasks? moved back$/, '已合并到 $1：移回 $2 个任务'],
  [/^Forked (.+)$/, '已分叉 $1'],

  // Deleting a Pano doc: the title is quoted in the sentence.
  [/^Delete '(.+)' with its files and comments\? Every workspace loses it\. This cannot be undone\.$/,
    '删除“$1”及其文件和评论？每个工作区都会失去它，且无法撤销。'],
  [/^Delete '(.+)' with its files and comments\?$/, '删除“$1”及其文件和评论？'],
  [/^Give '(.+)' a new ID\? Do this only if its MCP token has been compromised\. Its MCP URL will change: every agent connected with the current URL stops working until you set it up again with the new one, and links to this workspace and its tasks change too\.$/,
    '给“$1”一个新 ID？仅当其 MCP 令牌已泄露时才这样做。它的 MCP URL 会发生变化：使用当前 URL 连接的每个智能体都会停止工作，直到你用新 URL 重新设置，指向此工作区及其任务的链接也会改变。'],
  [/^Are you sure you want to permanently delete '(.+)'\? This will erase all tasks, messages, and configurations\. This cannot be undone\.$/,
    '确定要永久删除“$1”吗？这将清除所有任务、消息和配置，且无法撤销。'],

  // Toasts and labels built around a value in the views.
  [/^Failed to allow task: (.+)$/, '允许任务失败：$1'],
  [/^Failed to deny task: (.+)$/, '拒绝任务失败：$1'],
  [/^Failed to load (.+) tasks: (.+)$/, '加载 $1 任务失败：$2'],
  [/^Failed to fetch (.+) tasks: (.+)$/, '获取 $1 任务失败：$2'],
  [/^Could not read the tasks of (.+): (.+)$/, '无法读取 $1 的任务：$2'],
  [/^Could not ping (.+): (.+)$/, '无法提醒 $1：$2'],
  [/^Task created in (.+)$/, '任务已创建于 $1'],
  [/^Deleted (.+)$/, '已删除 $1'],
  [/^(.+) copied$/, '已复制 $1'],
  [/^The machine is (.+); its sessions will come back as new terminals$/,
    '机器正在$1；其会话将作为新终端返回'],
  [/^Use Browser Language \((.+)\)$/, '使用浏览器语言（$1）'],
  [/^Made on the first launch, from (.+)$/, '首次启动时从 $1 创建'],
  [/^(\d+) forks?$/, '$1 个分叉'],
  [/^(\d+) comments?$/, '$1 条评论'],
  [/^(\d+) extensions?$/, '$1 个扩展'],
  [/^(\d+) times?$/, '$1 次'],
  [/^Not running — failed (\d+) times?$/, '未运行 — 失败 $1 次'],
  [/^This workspace has (\d+) forks\. Merge them back before archiving or purging it\.$/,
    '此工作区有 $1 个分叉。请先合并它们，再归档或清除。'],
  [/^(\d+) already running will finish first\. Nothing new starts until the count drops below (\d+)\.$/,
    '$1 个已在运行的任务会先完成。在数量降到 $2 以下之前不会启动新任务。'],

  // Pano cards and the supervisor composer.
  [/^No doc's title matches “(.+)” in this color\.$/, '此颜色下没有文档标题匹配“$1”。'],
  [/^No doc's title matches “(.+)”\.$/, '没有文档标题匹配“$1”。'],
  [/^Ask (.+) about the Pano, # to tag a doc\.\.\. \(Cmd ⌘ \+ Enter to send\)$/,
    '向 $1 询问 Pano，输入 # 标记文档…（Cmd ⌘ + Enter 发送）'],
  [/^The task is linked to (.+)$/, '此任务关联到 $1'],
  [/^New (.+) note$/, '新建$1便签'],

  // Tooltips assembled from a label and a shortcut.
  [/^Message thread\s+(.+)$/, '消息线程 $1'],
  [/^Tool call trajectory\s+(.+)$/, '工具调用轨迹 $1'],
  [/^Open side panel\s+(.+)$/, '打开侧边面板 $1'],
  [/^Decided by the (.+) extension$/, '由 $1 扩展决定'],

  // Relative timestamps, which the task detail builds in upper case.
  [/^(\d+)M AGO$/, '$1 分钟前'],
  [/^(\d+)H AGO$/, '$1 小时前'],
  [/^Loading Model\.\.\. (\d+)%$/, '正在加载模型… $1%'],
  [/^Loading AI Model\.\.\. (\d+)%$/, '正在加载 AI 模型… $1%'],
  [/^Downloading version (.+)…$/, '正在下载版本 $1…'],

  // Generic failure wrappers, after every specific message above.
  [/^Failed to (.+)$/, '操作失败：$1'],
  [/^Could not (.+)$/, '无法完成：$1']
]

/**
 * `document.title` is composed rather than rendered, so these rules read the
 * finished string. A rule returns `undefined` to fall through.
 */
export const TITLE_RULES = [
  (title) => {
    const match = title.match(/^(.*) Tasks \| AgentRQ$/)
    if (!match) return undefined
    return `${lookup(match[1]) ?? match[1]}任务 | AgentRQ`
  },
  (title) => {
    const match = title.match(/^Edit Task \| (.+) \| AgentRQ$/)
    if (!match) return undefined
    return `编辑任务 | ${match[1]} | AgentRQ`
  },
  (title) => {
    const match = title.match(/^New Task \| (.+) \| AgentRQ$/)
    if (!match) return undefined
    return `新建任务 | ${match[1]} | AgentRQ`
  }
]

function lookup(value) {
  return PHRASES[value]
}
