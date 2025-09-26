# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个使用 Next.js 14 构建的个人作品集网站，属于内容创意策划师杜亚楠的个人展示网站。

## 常用命令

### 开发和构建
- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 检查

### 测试
目前没有配置测试命令。

## 项目架构

### 技术栈
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **UI组件**: Lucide React
- **动画**: Framer Motion
- **字体**: @fontsource (Inter, Playfair Display, Space Grotesk)

### 目录结构
- `src/app/` - Next.js App Router 主要应用代码
  - `page.tsx` - 首页，包含完整的个人作品集展示
  - `layout.tsx` - 根布局，配置字体和全局样式
- `public/` - 静态资源
  - `pdf-images/` - PDF转换的图片资源
  - `video-covers/` - 视频封面图片
- `docs/` - 文档目录
- `scripts/` - 脚本文件

### 核心功能模块
1. **个人介绍** - 包含基本信息、核心能力和主要成就
2. **工作履历** - 按时间线展示工作经历
3. **负责账号** - 展示管理过的社交媒体账号
4. **AI作品集** - AI相关的创意项目展示
5. **策划作品集** - 品牌策划和创意执行案例
6. **产品企划** - 毛绒盲盒产品策划案例
7. **视频策划** - 视频内容策划和制作案例

### 设计系统
- **色彩方案**: 
  - 主色调: `#D97757` (橙褐色)
  - 背景色: `#FAF9F5` (米白色)
  - 文字色: `#141413` (深黑色)
  - 辅助色: `#E3D8AC`, `#DEC8BC`, `#E8DFB7`
- **字体**: 使用 Google Fonts 的 Geist 字体家族
- **响应式设计**: 移动端优先，支持桌面端和移动端

### 页面特性
- 固定导航栏，滚动时改变背景
- 响应式移动端菜单
- 图片点击放大查看功能
- 平滑滚动和过渡动画
- 卡片式布局展示作品

## 开发注意事项

### 环境配置
- 开发服务器支持多个源地址访问
- 配置了 CORS 头以支持跨域请求

### 代码规范
- 使用 ESLint 和 TypeScript 进行代码质量控制
- 遵循 Next.js 官方推荐的项目结构
- 使用 Tailwind CSS 进行样式开发

### 资源管理
- PDF 文件转换为图片进行展示
- 视频封面存储在 `public/video-covers/` 目录
- 静态图片资源放在 `public/pdf-images/` 目录

## 部署
项目配置为在 Vercel 上部署，支持静态导出。

- 使用简体中文回答用户的所有问题