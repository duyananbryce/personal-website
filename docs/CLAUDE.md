# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个使用 Next.js 14 构建的个人作品集网站，属于内容创意策划师杜亚楠的个人展示网站。网站展示了丰富的内容策划、品牌营销和视频制作经验，累计视频播放量超过15亿次，管理社交媒体粉丝超过1000万。

## 常用命令

### 开发和构建
- `npm run dev` - 启动开发服务器（默认端口3000）
- `npm run dev -- -p 4000` - 启动开发服务器（指定端口4000）
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 检查

### 测试
目前没有配置测试命令。

### 开发工具脚本
- `python analyze_figma.py` - 解析 Figma 设计文件
- `python convert_pdf_to_images.py` - PDF 转图片工具
- `python extract_pdf_images.py` - PDF 图片提取工具

### 服务器管理
- `./monitor_servers.sh` - 启动服务器监控脚本（自动重启功能）
- `nohup ./monitor_servers.sh > monitor.log 2>&1 &` - 后台启动服务器监控
- `tail -f monitor.log` - 查看服务器监控日志

### 网络和连接
- 注意：由于网络环境限制，git pull 可能会失败，显示 "Failed to connect to github.com port 443"
- 可以通过本地开发服务器继续工作，本地代码通常是最新的
- 如需同步远程代码，可在网络恢复后运行 `git pull origin main`

## 项目架构

### 技术栈
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4 (使用 CSS 变量主题系统)
- **UI组件**: Lucide React
- **字体**: 
  - 西文：Styrene A (Anthropic 官方字体) + Inter
  - 中文：方正兰亭特黑扁简体 + 方正兰亭黑扁简体
  - 辅助：Space Grotesk
- **动画**: 内置 CSS 动画系统
- **构建工具**: Vercel

### 目录结构
```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # 首页 - 完整个人作品集展示
│   ├── layout.tsx                # 根布局 - 配置 Google Fonts
│   ├── globals.css               # 全局样式 + 字体导入 + CSS 变量
│   ├── ai-portfolio/             # AI作品集页面
│   ├── planning-portfolio/      # 策划作品集页面
│   ├── product-planning/         # 产品企划页面
│   ├── project-manager/          # 工作履历页面
│   ├── video-planning/           # 视频策划页面
│   └── accounts/                # 负责账号页面
├── components/
│   └── Navigation.tsx            # 可复用导航栏组件
public/
├── fonts/                       # 自定义字体文件
│   ├── StyreneAWeb-*.woff2      # Anthropic 字体
│   ├── 方正兰亭特黑扁简体.ttf
│   └── 方正兰亭黑扁简体.ttf
├── pdf-images/                  # PDF转换的图片资源
│   ├── ai-portfolio-page-*.jpg
│   ├── portfolio-page-*.jpg
│   └── product-planning-page-*.jpg
├── video-covers/                # 视频封面图片
└── [其他静态资源...]
*.py                            # Python 辅助脚本
```

### 核心功能模块
1. **个人介绍** - 包含基本信息、核心能力（内容策划、品牌营销、视频制作、项目管理、AI应用）和主要成就（15亿+播放量、1000万+粉丝、50+项目）
2. **工作履历** - 按时间线展示在啊哈娱乐、猿辅导、站酷网等公司的工作经历
3. **负责账号** - 展示管理过的社交媒体账号（小猿搜题、站酷家的小Z老师等）
4. **AI作品集** - AI相关的创意项目展示（网格/列表视图切换）
5. **策划作品集** - 品牌策划和创意执行案例
6. **产品企划** - 毛绒盲盒产品策划案例
7. **视频策划** - 视频内容策划和制作案例（B站视频展示，仅在开发分支中完整显示）

## 设计系统

### 色彩系统
```css
/* 基础色彩 - 现代简约主义暖色调 */
--background: #FAF9F5;          /* 暖米白背景 */
--foreground: #141413;          /* 主文字色 */
--foreground-secondary: #5E5D59; /* 次要文字色 */
--surface: #FFFFFF;             /* 纯白表面 */
--border: #E8E6DC;              /* 边框色 */

/* 主色调 - 焦糖珊瑚色系 */
--primary: #D97757;             /* 主珊瑚色 */
--primary-light: #E59980;        /* 浅珊瑚色 */
--primary-dark: #B85A3D;         /* 深珊瑚色 */
```

### 字体系统
- **标题**: Styrene A + 方正兰亭特黑扁简体
- **正文**: Inter + 方正兰亭黑扁简体
- **代码**: Geist Mono
- **备用**: -apple-system, BlinkMacSystemFont
- **注意**: Vercel部署使用Inter字体替代Geist字体以确保兼容性

### 间距和布局系统
- 8px 基础间距单位
- 响应式断点：sm(640px)、md(768px)、lg(1024px)、xl(1280px)
- 最大容器宽度：max-w-7xl (1280px)

### 阴影和圆角
- 圆角系统：0.25rem 到 1rem
- 阴影系统：sm、md、lg、xl 级别
- 主色调阴影：`--shadow-primary: 0 0 20px rgba(217, 119, 87, 0.15)`

### 动画系统
- `animate-float`: 浮动动画
- `animate-pulse-glow`: 脉冲发光效果
- 过渡动画：`transition-all duration-300`
- 悬停效果：缩放、阴影、边框变化

### 暗色主题支持
- 使用 `@media (prefers-color-scheme: dark)` 自动适配
- 暗色配色：深色背景 + 暖色调主色

## 组件模式

### 导航栏组件 (`Navigation.tsx`)
- 固定顶部，滚动时背景变化（透明 → 半透明）
- 当前页面高亮显示
- 响应式设计：桌面端横向菜单，移动端汉堡菜单
- Props: `currentPage?: string`

### 卡片组件模式
```tsx
<div className="bg-surface border border-border rounded-2xl p-6 
            hover:shadow-lg transition-all duration-300 
            hover:border-primary/30">
  {/* 内容 */}
</div>
```

### 按钮组件模式
```tsx
<button className="px-4 py-2 bg-primary text-white rounded-lg 
                hover:bg-primary-dark transition-colors duration-200">
  按钮文字
</button>
```

### 图片查看模态框
- 点击图片放大查看
- 支持关闭按钮和背景点击关闭
- 最大尺寸限制和响应式适配

## 开发注意事项

### 环境配置
- Next.js 14 App Router 架构
- TypeScript 严格模式
- Tailwind CSS v4 配置
- ESLint 代码规范检查

### 代码规范
- 使用 TypeScript 接口定义 Props
- 组件采用 `'use client'` 声明（客户端组件）
- 遵循 Next.js 官方项目结构
- 使用 CSS 变量而非硬编码颜色值
- 响应式设计：移动端优先策略

### 图片资源管理
- PDF 作品集转换为 JPG 图片展示
- 命名规范：`[类型]-page-[页码].jpg`
- 视频封面命名：`[视频标题]_[平台].jpg`
- 统一存放在 `public/` 目录下

### 字体优化
- 使用 `font-display: swap` 确保字体加载性能
- 提供多种字体格式（woff2、woff、ttf）
- 设置字体回退机制

### 性能优化
- 图片懒加载和优化
- CSS 动画使用 GPU 加速
- 组件代码分割
- 图片错误处理和占位符

### 跨平台兼容
- 服务器端渲染兼容性检查
- 移动端和桌面端适配
- 不同浏览器兼容性

## 部署配置

### Vercel 部署
- 配置文件：`vercel.json`
- 构建命令：`npm run build`
- 输出目录：`.next`
- 支持静态导出

### 开发环境
- 开发服务器：`npm run dev`（端口3000主分支，端口4000开发分支）
- 热重载支持
- 多源访问支持
- 自动服务器监控和重启功能

## 重要文件说明

### `/src/app/globals.css`
- 字体导入和配置
- CSS 变量定义
- Tailwind CSS 主题映射
- 自定义动画和工具类

### `/src/app/page.tsx`
- 单页应用，包含所有内容模块
- 图片模态框功能
- 响应式导航栏
- 滚动事件监听

### `/src/components/Navigation.tsx`
- 可复用导航组件
- 支持当前页面高亮
- 移动端菜单功能

### Python 脚本
- Figma 设计文件解析
- PDF 转图片处理
- 图片批量提取工具

### 服务器管理脚本
- `monitor_servers.sh` - 自动监控和重启开发服务器
- 支持主分支（端口3000）和开发分支（端口4000）的同时运行
- 每30秒检查一次服务器状态，自动重启意外停止的服务器
- 脚本路径配置：`/Volumes/4T 固态/personal-website-backup-20250925 2`（需要根据实际环境调整）

## 项目特色

### 内容丰富性
- 展示50+成功项目案例
- 多平台账号运营经验
- 15亿+视频播放量成果

### 技术现代化
- Next.js 14 最新特性
- Tailwind CSS v4
- TypeScript 全栈类型安全
- 响应式设计

### 设计专业性
- Anthropic 官方字体
- 现代简约主义设计
- 精致的交互细节
- 专业的色彩系统

## 分支管理策略

### Git分支结构
- **main分支**: 生产环境，包含稳定功能，导航栏不显示视频策划入口
- **feature/video-planning-dev分支**: 开发环境，包含完整功能包括视频策划模块

### 分支切换和开发
```bash
# 切换到主分支（生产环境）
git checkout main
npm run dev  # 端口3000

# 切换到开发分支（完整功能）
git checkout feature/video-planning-dev
npm run dev -- -p 4000  # 端口4000
```

### 导航配置差异
- **主分支**: 导航显示4个选项（首页、工作履历、AI作品集、策划作品集）
- **开发分支**: 导航显示5个选项（包含视频策划）
- **底部内容**: 两个分支都在首页底部保留视频策划模块

## 常见问题

### 字体加载
- 确保字体文件在 `public/fonts/` 目录
- 检查字体文件路径和格式
- 使用 `font-display: swap` 优化加载
- Vercel部署使用Inter字体确保兼容性

### 图片显示
- 检查 `public/` 目录结构
- 确认图片文件名和路径正确
- 添加错误处理和占位符

### 样式问题
- 优先使用 CSS 变量
- 遵循 Tailwind CSS 类名规范
- 注意响应式断点设置

### 服务器管理
- 使用 `monitor_servers.sh` 脚本保持服务器持续运行
- 检查端口占用：`lsof -ti:3000` 和 `lsof -ti:4000`
- 查看监控日志：`tail -f monitor.log`
- 手动启动监控：`nohup ./monitor_servers.sh > monitor.log 2>&1 &`

- 使用简体中文回答用户的所有问题

### 开发环境注意事项
- 当前工作目录：`/Volumes/003/personal-website-backup-20250925 3/personal-website`
- 监控脚本路径可能需要根据实际环境调整（当前脚本指向 `/Volumes/4T 固态/personal-website-backup-20250925 2`）
- 网络环境可能限制 GitHub 访问，优先使用本地开发环境