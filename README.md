# Next.js 博客系统

一个使用 Next.js 13+ App Router 构建的现代化个人博客系统。

## 技术栈

- **框架**: Next.js 13+
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **Markdown 解析**: gray-matter + marked
- **构建工具**: Next.js 内置

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动。

### 3. 构建生产版本

```bash
npm run build
```

### 4. 启动生产服务器

```bash
npm start
```

### 5. 代码检查

```bash
npm run lint
```

## 项目结构

```
nextjs-blog/
├── app/                    # Next.js App Router 目录
│   ├── about/              # 关于页面
│   ├── blog/               # 博客相关页面
│   │   ├── [slug]/         # 博客文章详情页
│   │   └── page.tsx        # 博客列表页
│   ├── projects/           # 项目页面
│   ├── layout.tsx          # 全局布局
│   └── page.tsx            # 首页
├── blog/                   # Markdown 博客文章存储目录
├── components/             # React 组件
│   ├── Comments.tsx        # 评论组件
│   ├── Footer.tsx          # 页脚组件
│   ├── Navbar.tsx          # 导航栏组件
│   └── PostCard.tsx        # 文章卡片组件
├── lib/                    # 工具函数
│   └── posts.ts            # 博客文章处理逻辑
├── styles/                 # 样式文件
│   └── globals.css         # 全局样式
├── .gitignore              # Git 忽略文件
├── next.config.mjs         # Next.js 配置
├── package.json            # 项目依赖
├── postcss.config.js       # PostCSS 配置
├── tailwind.config.js      # Tailwind CSS 配置
└── tsconfig.json           # TypeScript 配置
```

## 如何添加新文章

1. 在 `blog/` 目录下创建一个新的 Markdown 文件，例如：`my-new-post.md`
2. 在文件顶部添加元数据（front matter），示例：

```yaml
title: "我的新文章"
excerpt: "这是文章的摘要"
date: "2023-10-01"
tags: ["nextjs", "blogging", "tutorial"]
slug: "my-new-post"
```

3. 在元数据下方添加文章内容（Markdown 格式）
4. 保存文件后，Next.js 开发服务器会自动刷新，新文章将出现在博客列表中

## 元数据字段说明

- `title`: 文章标题（必填）
- `excerpt`: 文章摘要（必填）
- `date`: 发布日期，格式为 YYYY-MM-DD（必填）
- `tags`: 文章标签数组（可选）
- `slug`: 文章的 URL 路径（必填，确保唯一）

## 如何自定义样式

1. 修改 `tailwind.config.js` 文件来自定义 Tailwind CSS 配置
2. 在 `styles/globals.css` 中添加全局样式
3. 对于组件级样式，可以直接在组件中使用 Tailwind CSS 类名

## 如何添加新页面

1. 在 `app/` 目录下创建一个新的目录，例如：`contact`
2. 在该目录下创建 `page.tsx` 文件
3. 编写页面组件，示例：

```tsx
export default function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">联系我</h1>
      <p>这是联系页面内容</p>
    </div>
  );
}
```

4. 新页面将可以通过 `/contact` 访问

## 功能特性

- ✅ 博客文章列表与详情页
- ✅ Markdown 支持
- ✅ 文章标签系统
- ✅ 响应式设计
- ✅ 现代化 UI
- ✅ 支持搜索功能
- ✅ 支持按标签筛选

## 部署方法

### Vercel（推荐）

1. 登录 [Vercel](https://vercel.com/)
2. 点击 "New Project"
3. 选择你的 GitHub 仓库
4. 按照提示完成部署

### 其他平台

1. 构建生产版本：`npm run build`
2. 将 `.next` 目录和 `package.json` 上传到你的服务器
3. 在服务器上安装依赖：`npm install --production`
4. 启动服务器：`npm start`

## 自定义导航栏

修改 `components/Navbar.tsx` 文件来自定义导航栏链接和样式。

## 自定义页脚

修改 `components/Footer.tsx` 文件来自定义页脚内容和样式。

## 常见问题

### Q: 如何修改博客主题色？
A: 在 `tailwind.config.js` 文件中修改 `theme.colors` 配置。

### Q: 如何添加评论功能？
A: 修改 `components/Comments.tsx` 文件，集成第三方评论系统（如 Disqus、Giscus 等）。

### Q: 如何添加文章阅读量统计？
A: 可以集成第三方服务（如 Google Analytics、Vercel Analytics 等），或自行实现数据库存储。

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 更新日志

### v1.0.0
- 初始版本
- 支持基本博客功能
- 使用 Next.js 13+ App Router
- 支持 Markdown 文章
- 支持标签系统
