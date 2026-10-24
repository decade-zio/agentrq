// Copyright 2026 Contextual, Inc. https://agentrq.com
// This notice may not be modified or removed.
// SPDX-License-Identifier: AGPL-3.0-only

/**
 * Workspace list, the workspace form, the workspace's own pages, and its
 * settings screen.
 */
export default {
  // ── Workspace list ─────────────────────────────────────────────────────────
  "Performance": "性能",
  "Loading Workspaces...": "加载工作区...",
  "Active workspaces": "活跃工作区",
  "Search workspaces...": "搜索工作区...",
  "Clear Search": "清除搜索",
  "No active workspaces": "没有活跃工作区",
  "Build your first AgentRQ pipeline today.": "今天就搭建你的第一条 AgentRQ 流水线。",
  "New Workspace": "新建工作区",
  "Archived Workspaces": "已归档工作区",
  "Restore Workspace": "恢复工作区",
  "No archived workspaces found": "未找到已归档工作区",
  "Online Agents": "在线智能体",
  "Pending Tasks": "待处理任务",
  "Scheduled Tasks": "已排期任务",
  "Workspace protocol restored": "工作区协议已恢复",
  "Operation Failed": "操作失败",
  "New": "新建",
  "Fork of ": "分叉自 ",

  // ── Workspace form ─────────────────────────────────────────────────────────
  "What are you building?": "你在构建什么？",
  "A workspace is where you and an agent share tasks, memory and skills for one project.":
    "工作区是你与智能体为同一个项目共享任务、记忆和技能的地方。",
  "Lowercase letters, numbers and dashes. Spaces turn into dashes as you type.":
    "仅限小写字母、数字和连字符。输入空格时会自动变成连字符。",
  "Working directory": "工作目录",
  "Browse": "浏览",
  "The absolute path the agent starts in on its machine.": "智能体在其机器上启动时使用的绝对路径。",
  "Mission": "使命",
  "Restore default": "恢复默认",
  "What are we building? Describe the mission of this workspace...": "我们在构建什么？描述此工作区的使命...",
  "Every agent working here reads this first. Markdown is supported.":
    "在这里工作的每个智能体都会先读到这段内容。支持 Markdown。",
  "Self-learning loop": "自学习循环",
  "Upon completing the task, evaluate your execution path...": "完成任务后，评估你的执行路径...",
  "Appended to every task an agent is given here.": "附加到智能体在此处收到的每个任务中。",
  "Cmd ⌘ + Enter to create": "Cmd ⌘ + Enter 创建",
  "Create Workspace": "创建工作区",

  // ── Workspace detail ───────────────────────────────────────────────────────
  "Loading workspace context...": "加载工作区上下文...",
  "Analytics": "分析",
  "Board": "看板",
  "Search Tasks": "搜索任务",
  "List view": "列表视图",
  "Kanban board": "看板视图",
  "Workspace Settings": "工作区设置",
  "New Task": "新建任务",
  "Open Setup Guide": "打开设置指南",
  "Connect your first Agent": "连接你的第一个智能体",
  "Agent is Offline": "智能体离线",
  "This workspace is currently offline. Connect Claude, Gemini, or Codex via MCP to start automating tasks.":
    "此工作区当前离线。通过 MCP 连接 Claude、Gemini 或 Codex，即可开始自动化任务。",
  "Reconnect": "重新连接",
  "No tasks yet": "还没有任务",
  "Agent is connected and ready. Create your first task to see the agent in action.":
    "智能体已连接并就绪。创建第一个任务，看看它的表现。",
  "Create First Task": "创建第一个任务",
  "Select a task": "选择一个任务",
  "Choose a task from the list to view its details, conversation history, and take actions.":
    "从列表中选择一个任务，查看详情、对话历史并执行操作。",
  "Active": "活跃",
  "Active Tasks": "活跃任务",

  // ── Sidebar workspace list ─────────────────────────────────────────────────
  "actions": "操作",
  "Hide forks": "隐藏分叉",
  "Show ": "显示 ",
  " forks": " 个分叉",

  // ── Settings: general ──────────────────────────────────────────────────────
  "Danger Zone": "危险区域",
  "Settings, memory and skills are inherited from ": "设置、记忆和技能继承自 ",
  "Change settings there. Memory and skills are the same ones, so what is saved here is saved there.":
    "在那里修改设置。记忆和技能是同一份，所以这里保存的内容也会保存在那里。",
  "Workspace Name": "工作区名称",
  "e.g. project-redstone": "例如 project-redstone",
  "Made by the machine for this fork. Merging leaves it where it is.":
    "由机器为此分叉创建。合并后会保留在原位。",
  "Optional. Absolute path the agent should work in.": "可选。智能体应在其中工作的绝对路径。",
  " Browse for it in the desktop app.": " 在桌面应用中浏览。",
  "Mission Description": "使命描述",
  "What are we building together?": "我们一起构建什么？",
  "Self-Learning Strategy": "自学习策略",
  "Extract successful workarounds and record them in skills md files...":
    "提取成功的变通方法，并记录到技能 md 文件中...",
  "Guidance for the agent to optimize its strategy over time.": "指导智能体随时间优化其策略。",
  "Voice Input Language": "语音输入语言",
  "The language you speak when using the mic.": "使用麦克风时所说的语言。",
  "Name untitled tasks": "为无标题任务命名",
  "This device only": "仅此设备",
  "A task you create here without a title is named from its description by the local AI model, in the background.":
    "在此处创建的无标题任务，会在后台由本地 AI 模型根据描述命名。",
  "Message Send Delay": "消息发送延迟",
  "Hold sent messages for a countdown before delivery, with a chance to cancel.":
    "发送前先倒计时，期间可以取消。",
  "Keep a copy on this device": "在此设备保留副本",
  "Tasks you open are kept locally so lists appear instantly and you can search their titles and descriptions without a connection.":
    "你打开过的任务会保存在本地，列表可即时显示，离线时也能搜索标题和描述。",
  "This choice is not shared with your other devices, and the server is always what an open task shows.":
    "此选择不会同步到其他设备；打开任务时始终以服务器内容为准。",
  "Keep tasks for": "任务保留时长",
  "Counted from the last time you opened a task, not from when it was written — so anything you keep coming back to stays.":
    "从你上次打开任务时开始计算，而不是从创建时计算——所以你经常回看的任务会保留下来。",
  "This browser is storing": "此浏览器正在存储",
  " across all workspaces.": "，覆盖所有工作区。",
  "Your browser does not report how much it is storing.": "你的浏览器未报告存储占用量。",
  "Clear this workspace": "清除此工作区",
  "There was nothing stored on this device": "此设备上没有存储内容",
  "Local copy cleared": "本地副本已清除",

  // ── Settings: setup ────────────────────────────────────────────────────────
  "Run it on one of your machines": "在你的某台机器上运行",
  "Starts an agent for this workspace on a machine you have already enrolled — no configuration to copy. The steps below are for connecting an agent yourself.":
    "在你已注册的机器上为此工作区启动智能体——无需复制配置。下面的步骤用于自行连接智能体。",
  "Machine": "机器",
  "Claude": "Claude",
  "ACP": "ACP",
  "Agy": "Agy",
  "Antigravity": "Antigravity",
  "Codex": "Codex",
  "DeepSeek Harness": "DeepSeek Harness",
  "The simplest way to spin up agents": "启动智能体最简单的方式",
  "Set up a machine once — any computer running ": "只需设置一次机器——任何运行 ",
  " —": " ——",
  "and you can start this workspace's agent, or any other's, from here in one click. Nothing to copy, nothing to configure.":
    "然后你就可以在这里一键启动此工作区或任何其他工作区的智能体。无需复制，无需配置。",
  "Rather connect an agent yourself? The other tabs show how.": "想自行连接智能体？其他标签页有说明。",
  "Set up a machine": "设置机器",
  "1. Configuration": "1. 配置",
  "Copied!": "已复制！",
  "Copy Config": "复制配置",
  "2. Claude Permissions": "2. Claude 权限",
  "Add this to ": "将其添加到 ",
  " to bypass permission prompts.": "，以跳过权限提示。",
  "Entry point": "入口",
  "Browser (dsh web)": "浏览器（dsh web）",
  "Terminal (dsh)": "终端（dsh）",
  " always boots the profile literally named ": " 总是启动名称完全为 ",
  " — a workspace-named profile (used by the terminal flow) is invisible to it. Install and configure into ":
    " 的配置档案——以工作区命名的档案（终端流程使用）对它不可见。请改为安装并配置到 ",
  " directly instead. Since one profile can only carry one workspace's bundle, the browser UI can be wired to one AgentRQ workspace at a time this way — use the terminal flow for several at once.":
    "。由于一个档案只能承载一个工作区的捆绑包，浏览器界面一次只能接入一个 AgentRQ 工作区——需要同时处理多个时请使用终端流程。",
  "1. Profile Config": "1. 配置档案",
  "Save this as ": "将其保存为 ",
  " after the install step below. One row, one URL — the plugin mounts the MCP bridge itself. Each profile pins its own workspace here, so switching workspaces is switching profiles, with no environment variable. ":
    "（在下方安装步骤之后）。一行一个 URL——插件会自行挂载 MCP 桥接。每个档案在这里固定自己的工作区，因此切换工作区就是切换档案，无需环境变量。",
  " watches this file, so edits apply without a restart.": " 会监视此文件，因此修改无需重启即可生效。",
  "2. Tuning (optional)": "2. 调优（可选）",
  "Tasks arrive over the workspace channel — the plugin does not poll. Restate the ":
    "任务通过工作区通道到达——插件不会轮询。用这些键重写 ",
  " row with these keys to change delivery or reconnect behavior. Anything you leave out falls back to its default.":
    " 行，以更改投递或重连行为。未写出的项会使用默认值。",
  "Prefer an environment variable — for a container or CI — instead of pinning the URL in the file? Drop the ":
    "在容器或 CI 中，更希望使用环境变量而不是在文件里固定 URL？删掉 ",
  " lines and export this instead; the bundle falls back to it.": " 行，改为导出此变量；捆绑包会回退使用它。",
  "Run this in your terminal to start the MCP server:": "在终端中运行以下命令以启动 MCP 服务器：",
  "Codex will not open a session until it has been logged in to, so that comes first. Run both from this workspace's directory — the one holding the ":
    "Codex 必须先登录才能打开会话，所以先做这一步。两条命令都在此工作区目录中运行——也就是包含 ",
  " above.": " 的那个目录。",
  "1. Log in. The first run fetches the agent, then hands you its login — pick a method when asked:":
    "1. 登录。首次运行会获取智能体，然后交给你登录——按提示选择一种方式：",
  "2. Start the bridge. Tasks assigned to this workspace's agent arrive from here:":
    "2. 启动桥接。分配给此工作区智能体的任务会从这里到达：",
  "1. Install the bundle into your profile:": "1. 将捆绑包安装到你的档案：",
  "2. Save the config above as ": "2. 将上面的配置保存为 ",
  " — the install step creates that directory.": "——安装步骤会创建该目录。",
  "Start the browser UI:": "启动浏览器界面：",
  "Start the harness:": "启动 harness：",
  "Antigravity will not open a session until it has been logged in to, so that comes first. Run both from this workspace's directory — the one holding the ":
    "Antigravity 必须先登录才能打开会话，所以先做这一步。两条命令都在此工作区目录中运行——也就是包含 ",
  "1. Log in. The first run downloads the agent, then hands you its login — pick a method when asked:":
    "1. 登录。首次运行会下载智能体，然后交给你登录——按提示选择一种方式：",
  "Run these from this workspace's directory — the one holding the ": "在此工作区目录中运行——也就是包含 ",
  "1. See which agents the registry publishes. The name on the left is what ": "1. 查看注册表发布了哪些智能体。左边的名称就是 ",
  " takes:": " 所接收的名称：",
  "2. Log in, if that agent wants one. It asks which method; an agent needing no login just says so:":
    "2. 如果该智能体需要登录，请登录。它会询问使用哪种方式；无需登录的智能体会直接说明：",
  "3. Start the bridge. Tasks assigned to this workspace's agent arrive from here:":
    "3. 启动桥接。分配给此工作区智能体的任务会从这里到达：",
  "Already have an agent installed? Pass its own command after ": "已经安装了智能体？在 ",
  " and nothing is downloaded:": " 后面传入它自己的命令，就不会下载任何内容：",
  "Downloads are checked against the registry's checksum before they run. Google Antigravity publishes none and needs a login first, so it has a tab of its own.":
    "下载内容在运行前会与注册表的校验和比对。Google Antigravity 没有发布校验和且需要先登录，因此有单独的标签页。",

  // ── Settings: automations, notifications, Slack ────────────────────────────
  "Auto-Allow List": "自动允许列表",
  " Active": " 已启用",
  "These tools will execute autonomously without requiring manual confirmation. Trusted tools speed up execution significantly.":
    "这些工具将自动执行，无需手动确认。受信任的工具会显著加快执行速度。",
  "No tools auto-approved": "没有自动允许的工具",
  "Tools appear here when you select 'Allow All' during a task execution.":
    "在执行任务时选择“全部允许”，工具就会出现在这里。",
  "YOLO Mode (Execute All)": "YOLO 模式（全部执行）",
  "Warning: Agent will not ask for permission": "警告：智能体将不再请求许可",
  "Clear context before each task": "每个任务前清除上下文",
  "Event Triggers": "事件触发器",
  "Delivery Channels": "投递渠道",
  "Email Delivery": "邮件投递",
  "Slack Active": "Slack 已启用",
  "Setup Slack": "设置 Slack",
  "Push Active": "推送已启用",
  "Enable Push": "启用推送",
  "Desktop Alerts On": "桌面提醒已开启",
  "Desktop Alerts Off": "桌面提醒已关闭",
  "Slack Connection": "Slack 连接",
  "Provision or assign a dedicated channel to sync conversations with your agent.":
    "配置或指定一个专用频道，与智能体同步对话。",
  "Linked to Slack": "已关联 Slack",
  "Slack Not Connected": "Slack 未连接",
  "Unlinking...": "取消关联中...",
  "Disconnect Channel": "断开频道",
  "Slack Channel": "Slack 频道",
  "Channel ID": "频道 ID",
  "Provision Type": "配置方式",
  "Auto-Created Private Channel": "自动创建的私有频道",
  "Manually Linked Channel": "手动关联的频道",
  "Slack Integration Disabled": "Slack 集成已禁用",
  "Dynamic Workspace Authorization": "动态工作区授权",
  "Authorizing AgentRQ securely connects the AI agent to your Slack workspace. It will automatically provision a secure, private discussion channel and join it to sync task logs and permission approvals.":
    "授权 AgentRQ 会将 AI 智能体安全地连接到你的 Slack 工作区。它会自动创建一个安全的私有讨论频道并加入其中，以同步任务日志和权限审批。",
  "Add to Slack": "添加到 Slack",
  "Advanced Option: Link Slack Channel Manually": "高级选项：手动关联 Slack 频道",
  "Channel Name": "频道名称",
  "e.g. C08AB7C89DE": "例如 C08AB7C89DE",
  "e.g. agentrq-general": "例如 agentrq-general",
  "Link Slack Channel": "关联 Slack 频道",
  "Task Created": "任务已创建",
  "Status Update": "状态更新",
  "New Message": "新消息",
  "Desktop alerts enabled": "桌面提醒已开启",
  "Desktop alerts muted": "桌面提醒已静音",
  "Could not update desktop alerts": "无法更新桌面提醒",
  "Push notifications are blocked or unavailable in this browser.": "此浏览器中的推送通知已被阻止或不可用。",
  "Both Channel ID and Channel Name are required": "频道 ID 和频道名称均为必填",
  "Slack channel assigned successfully": "Slack 频道已成功指定",
  "Slack channel unlinked successfully": "Slack 频道已成功取消关联",
  "Workspace settings updated": "工作区设置已更新",
  "Workspace archived": "工作区已归档",
  "Workspace restored": "工作区已恢复",
  "Workspace purged": "工作区已清除",
  "Workspace ID reset. Set up your agents again with the new MCP URL.":
    "工作区 ID 已重置。请使用新的 MCP URL 重新设置智能体。",
  "Untitled tasks will be named on this device": "无标题任务将在此设备上命名",
  "Untitled tasks will keep their title on this device": "无标题任务将在此设备上保留标题",
  "This workspace will be kept on this device": "此工作区将保留在此设备上",
  "This workspace will be kept until you clear it": "此工作区将保留，直到你清除它",

  // ── Settings: lifecycle ────────────────────────────────────────────────────
  "Merge into ": "合并到 ",
  "Stops this fork's agent, moves every task back to ": "停止此分叉的智能体，将所有任务移回 ",
  " with its whole thread, and removes the fork. Its folder is left as it is, unless you choose to delete it.":
    " 及其完整对话线程，并移除分叉。除非你选择删除，否则它的文件夹会保留原样。",
  "Not yet: ": "暂不可用：",
  "Merge Fork": "合并分叉",
  "This workspace has ": "此工作区有 ",
  " back before archiving or purging it.": "。在归档或清除它之前，请先合并回来。",
  "Bring this workspace back to active status.": "将此工作区恢复为活跃状态。",
  "Archive Workspace": "归档工作区",
  "Make this workspace read-only. Connections will be paused.": "将此工作区设为只读。连接将暂停。",
  "Unarchive": "取消归档",
  "Purge Workspace": "清除工作区",
  "Permanently delete this workspace and all its history. This action is irreversible.":
    "永久删除此工作区及其全部历史。此操作不可撤销。",
  "Purge Permanent": "永久清除",
  "Reset Workspace ID": "重置工作区 ID",
  "Only needed if this workspace's MCP token has been compromised. The workspace gets a new ID, which revokes every token issued for the old one.":
    "仅当此工作区的 MCP 令牌已泄露时才需要。工作区会获得新 ID，旧 ID 的所有令牌都会被吊销。",
  "The MCP URL will change. Every agent connected with the current URL stops working until you set it up again with the new one.":
    "MCP URL 将发生变化。使用当前 URL 连接的智能体将停止工作，直到你用新 URL 重新设置。",
  "Reset ID": "重置 ID",
  "Update Workspace": "更新工作区",

  // ── Settings: tabs ─────────────────────────────────────────────────────────
  "General": "常规",
  "Setup": "设置",
  "Automations": "自动化",
  "Notifications": "通知",
  "Memories": "记忆",
  "Slack": "Slack",
  "Input": "输入",
  "Local Storage": "本地存储",
}
