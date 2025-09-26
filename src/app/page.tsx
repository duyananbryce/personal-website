/**
 * 首页组件 - 杜亚楠个人作品集网站
 * 
 * 本组件实现了网站的首页布局，包含以下主要部分：
 * - 顶部导航栏（带滚动效果）
 * - 英雄区域（个人介绍和主要信息展示）
 * - 工作履历时间轴
 * - 负责过的账号展示
 * - 三个作品集模块（产品企划、策划作品集、AI方向作品集）
 * - 视频策划作品展示
 * - 页脚信息
 */
'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, Menu, X, X as Close } from 'lucide-react';

/**
 * 首页主要组件
 * 
 * @returns {JSX.Element} 首页完整布局
 */
export default function Home() {
  // 状态管理：导航栏滚动效果、移动端菜单、图片模态框
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 滚动事件监听：用于导航栏背景效果
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // 服务器端渲染兼容性检查
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 顶部导航栏 - 现代简约主义透明背景 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-border-light' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="text-white font-bold text-2xl">A</span>
                </div>
                <span className="font-bold text-2xl text-foreground tracking-tight">杜亚楠的作品集</span>
              </div>
            </div>

            {/* 桌面端导航 */}
            <div className="hidden lg:flex items-center space-x-12">
              {['首页', '工作履历', 'AI作品集', '策划作品集', '视频策划'].map((item) => (
                <a
                  key={item}
                  href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                    item === 'AI作品集' ? 'ai-portfolio' :
                    item === '策划作品集' ? 'planning-portfolio' : 'video-planning'}`}
                  className={`relative text-foreground hover:text-primary transition-colors duration-200 font-medium text-lg tracking-wide ${
                    item === '首页' ? 'text-primary' : ''
                  }`}
                >
                  {item}
                  {item === '首页' && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </a>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-accent/50"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* 移动端菜单 */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
              <div className="px-6 py-8 space-y-6">
                {['首页', '工作履历', 'AI作品集', '策划作品集', '视频策划'].map((item) => (
                  <a
                    key={item}
                    href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                      item === 'AI作品集' ? 'ai-portfolio' :
                      item === '策划作品集' ? 'planning-portfolio' : 'video-planning'}`}
                    className={`block text-foreground hover:text-primary transition-colors duration-200 font-medium text-xl py-2 ${
                      item === '首页' ? 'text-primary' : ''
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 个人简介模块 - 大胆排版与留白艺术 */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 lg:px-8 pt-32 pb-20 relative">
        {/* 装饰性背景元素 */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* 个人基本信息 - 精致排版 */}
            <div className="text-left max-w-4xl mx-auto space-y-10">
              <div className="space-y-6">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight text-foreground tracking-tight">
                  杜亚楠
                  <br />
                  <span className="text-primary">内容创意策划</span>
                </h1>
                
                {/* 装饰性分隔线 */}
                <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
              </div>

              <p className="text-2xl md:text-3xl text-foreground-secondary leading-relaxed font-light max-w-3xl mx-auto pl-1">
                专注于内容策划、品牌营销和视频制作，拥有丰富的项目管理经验和创意执行能力。
                致力于通过优质内容创造品牌价值，推动文化传播和创新发展。
              </p>
            </div>

            {/* 核心能力标签 - 精致设计 */}
            <div className="flex flex-wrap justify-center gap-6 mt-16">
              <span className="px-8 py-4 bg-surface border border-border rounded-full text-lg font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md">
                内容策划
              </span>
              <span className="px-8 py-4 bg-surface border border-border rounded-full text-lg font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md">
                品牌营销
              </span>
              <span className="px-8 py-4 bg-surface border border-border rounded-full text-lg font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md">
                视频制作
              </span>
              <span className="px-8 py-4 bg-surface border border-border rounded-full text-lg font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md">
                项目管理
              </span>
              <span className="px-8 py-4 bg-surface border border-border rounded-full text-lg font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md">
                AI应用
              </span>
            </div>

            {/* 主要成就 - 现代卡片设计 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="bg-surface border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="text-4xl font-bold text-primary mb-3">15亿+</div>
                <p className="text-foreground-secondary leading-relaxed text-lg">
                  累计视频播放量
                </p>
              </div>
              <div className="bg-surface border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="text-4xl font-bold text-primary mb-3">1000万+</div>
                <p className="text-foreground-secondary leading-relaxed text-lg">
                  社交媒体粉丝
                </p>
              </div>
              <div className="bg-surface border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="text-4xl font-bold text-primary mb-3">50+</div>
                <p className="text-foreground-secondary leading-relaxed text-lg">
                  成功项目案例
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工作履历时间轴 - 精致分隔与文本层次 */}
      <section className="py-20 px-6 lg:px-8 border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6 tracking-tight">工作履历</h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-foreground-secondary max-w-4xl mx-auto font-light leading-relaxed">
              专业的内容策划与项目管理经验，在不同领域积累了丰富的工作成果
            </p>
          </div>

          <div className="relative">
            {/* 时间轴线 - 精致设计 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent"></div>

            {[
              {
                company: "啊哈娱乐 (Aha Entertainment)",
                position: "市场部经理",
                period: "2020.03 - 2021.08",
                description: "负责短视频内容策划与制作管理，策划制作短视频内容累计获得9000万+播放量，管理内容团队，提升内容质量和传播效果",
                highlights: ["9000万+播放量", "团队管理", "市场策略"]
              },
              {
                company: "猿辅导 (Yuanfudao)",
                position: "营销策划专员",
                period: "2019.06 - 2020.02",
                description: "负责教育产品营销策划与品牌推广，策划多场成功的品牌营销活动，负责社交媒体内容策略制定",
                highlights: ["品牌营销", "社交媒体", "用户增长"]
              },
              {
                company: "猿辅导 (Yuanfudao)",
                position: "内容运营",
                period: "2019.03 - 2019.06",
                description: "负责在线教育内容的运营和推广，协助品牌知名度提升和用户增长",
                highlights: ["内容运营", "用户增长", "教育产品"]
              },
              {
                company: "站酷网 (Zcool)",
                position: "视频内容策划",
                period: "2018.09 - 2019.05",
                description: "负责创意设计平台的视频内容策划，策划制作设计师访谈系列视频，与知名品牌合作推广设计理念",
                highlights: ["品牌合作", "设计师访谈", "内容策划"]
              }
            ].map((experience, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* 时间轴节点 - 精致设计 */}
                <div className="absolute left-6 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* 经历卡片 - 现代设计 */}
                <div className="ml-20">
                  <div className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">{experience.company}</h3>
                        <p className="text-lg text-primary font-medium">{experience.position}</p>
                      </div>
                      <div className="text-base text-foreground-tertiary mt-3 md:mt-0 bg-accent px-3 py-1 rounded-full">
                        {experience.period}
                      </div>
                    </div>

                    <p className="text-foreground-secondary mb-6 leading-relaxed text-base">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {experience.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 负责过的账号 - 精致设计 */}
      <section className="py-20 px-6 lg:px-8 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6 tracking-tight">负责过的账号</h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-foreground-secondary max-w-4xl mx-auto font-light leading-relaxed">
              以下账号的所有选题、文案撰写、剪辑、配音均为个人完成
            </p>
          </div>

          {/* 三栏布局 - 现代卡片设计 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* 猿辅导 - 精致卡片 */}
            <div className="bg-surface border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-xl">猿</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">猿辅导</h3>
              </div>
              <div className="space-y-4">
                <a
                  href="https://v.douyin.com/L3YnhTJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-background border border-border rounded-xl p-4 hover:bg-surface hover:shadow-md transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">抖</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">小猿搜题</h4>
                        <p className="text-foreground-tertiary text-sm">抖音账号</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-foreground-tertiary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://space.bilibili.com/385925172/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-background border border-border rounded-xl p-4 hover:bg-surface hover:shadow-md transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">B</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">小猿搜题</h4>
                        <p className="text-foreground-tertiary text-sm">B站账号</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-foreground-tertiary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* 站酷网 - 精致卡片 */}
            <div className="bg-surface border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-xl">站</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">站酷网</h3>
              </div>
              <div className="space-y-4">
                <a
                  href="https://www.douyin.com/user/MS4wLjABAAAAkxinZjAvJZk4JVMIhyjf_qF__-9qG7QPp_8W6sioT-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-background border border-border rounded-xl p-4 hover:bg-surface hover:shadow-md transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">抖</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">站酷家的小Z老师</h4>
                        <p className="text-foreground-tertiary text-sm">抖音账号</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-foreground-tertiary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://space.bilibili.com/99382669/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-background border border-border rounded-xl p-4 hover:bg-surface hover:shadow-md transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">B</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">站酷家的小Z老师</h4>
                        <p className="text-foreground-tertiary text-sm">B站账号</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-foreground-tertiary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://v.douyin.com/L3YKnmf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-background border border-border rounded-xl p-4 hover:bg-surface hover:shadow-md transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">抖</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">懂点儿设计</h4>
                        <p className="text-foreground-tertiary text-sm">抖音账号</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-foreground-tertiary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://space.bilibili.com/616419739/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-background border border-border rounded-xl p-4 hover:bg-surface hover:shadow-md transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">B</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">懂点儿设计</h4>
                        <p className="text-foreground-tertiary text-sm">B站账号</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-foreground-tertiary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* 即时设计 - 精致卡片 */}
            <div className="bg-surface border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-xl">即</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">即时设计</h3>
              </div>
              <div className="space-y-4">
                <a
                  href="https://space.bilibili.com/2030180204/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-background border border-border rounded-xl p-4 hover:bg-surface hover:shadow-md transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">B</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">新来的设计师</h4>
                        <p className="text-foreground-tertiary text-sm">B站账号</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-foreground-tertiary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://space.bilibili.com/1355154418/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-background border border-border rounded-xl p-4 hover:bg-surface hover:shadow-md transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">B</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">设计练习生-乘风</h4>
                        <p className="text-foreground-tertiary text-sm">B站账号</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-foreground-tertiary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI方向作品集 - 现代设计风格 */}
      <section className="py-24 px-6 lg:px-8 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6 tracking-tight">AI方向作品集</h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-foreground-secondary max-w-4xl mx-auto font-light leading-relaxed">
              探索人工智能技术在各领域的创新应用，推动技术边界和创意表达
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={pageNum}
                className="group transition-all duration-300 cursor-pointer row-span-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(`/pdf-images/ai-portfolio-page-${pageNum}.jpg`);
                }}
              >
                <div className="relative bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50 h-full">
                  <img
                    src={`/pdf-images/ai-portfolio-page-${pageNum}.jpg`}
                    alt={`AI作品集第${pageNum}页`}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
            <div
              className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center hover:border-primary/50 group row-span-1"
              onClick={() => window.location.href = "/ai-portfolio"}
            >
              <div className="text-4xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">+</div>
              <h3 className="text-lg font-bold text-foreground mb-2">查看完整作品集</h3>
              <p className="text-foreground-secondary text-sm mb-4">探索更多AI创意项目</p>
              <div className="flex items-center text-primary hover:text-primary-dark transition-colors duration-200 font-medium text-sm">
                <span>查看全部</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 策划作品集 - 现代设计风格 */}
      <section className="py-24 px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6 tracking-tight">策划作品集</h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-foreground-secondary max-w-4xl mx-auto font-light leading-relaxed">
              专业的品牌策划与创意执行，展现内容策划的完整价值链
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={pageNum}
                className="group transition-all duration-300 cursor-pointer row-span-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(`/pdf-images/portfolio-page-${pageNum}.jpg`);
                }}
              >
                <div className="relative bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50 h-full">
                  <img
                    src={`/pdf-images/portfolio-page-${pageNum}.jpg`}
                    alt={`策划作品集第${pageNum}页`}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
            <div
              className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center hover:border-primary/50 group row-span-1"
              onClick={() => window.location.href = "/planning-portfolio"}
            >
              <div className="text-4xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">+</div>
              <h3 className="text-lg font-bold text-foreground mb-2">查看完整作品集</h3>
              <p className="text-foreground-secondary text-sm mb-4">探索更多策划案例</p>
              <div className="flex items-center text-primary hover:text-primary-dark transition-colors duration-200 font-medium text-sm">
                <span>查看全部</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品企划 - 现代设计风格 */}
      <section className="py-24 px-6 lg:px-8 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6 tracking-tight">产品企划</h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-foreground-secondary max-w-4xl mx-auto font-light leading-relaxed">
              毛绒盲盒产品策划与设计，从概念到市场的完整产品企划案例
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={pageNum}
                className="group transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(`/pdf-images/product-planning-page-${pageNum}.jpg`);
                }}
              >
                <div className="relative bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                  <img
                    src={`/pdf-images/product-planning-page-${pageNum}.jpg`}
                    alt={`产品企划第${pageNum}页`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
            <div
              className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center hover:border-primary/50 group h-full"
              onClick={() => window.location.href = "/product-planning"}
            >
              <div className="text-5xl font-bold text-primary mb-6 group-hover:scale-110 transition-transform duration-300">+</div>
              <h3 className="text-xl font-bold text-foreground mb-3">查看完整产品企划</h3>
              <p className="text-foreground-secondary text-base mb-6">探索更多产品策划案例</p>
              <div className="flex items-center text-primary hover:text-primary-dark transition-colors duration-200 font-medium">
                <span>查看全部</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 视频策划 - 现代设计风格 */}
      <section className="py-24 px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6 tracking-tight">视频策划</h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-foreground-secondary max-w-4xl mx-auto font-light leading-relaxed">
              专业的视频内容策划与制作，涵盖动画、教育、商业等多个领域
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 视频卡片数据 */}
            {[
              {
                id: 1,
                title: "一张笑脸圈粉800万，他的漫画有何魔力？",
                image: "/视频封面/一张笑脸圈粉800万，他的漫画有何魔力？_哔哩哔哩_bilibili.jpg",
                platform: "bilibili",
                views: "280万",
                time: "2023.12"
              },
              {
                id: 2,
                title: "为什么北大选课堪称'海淀赌场'？",
                image: "/视频封面/为什么北大选课堪称“海淀赌场” ？_哔哩哔哩_bilibili.jpg",
                platform: "bilibili",
                views: "156万",
                time: "2023.11"
              },
              {
                id: 3,
                title: "做题全靠想象力是一种怎样的体验 3.0",
                image: "/视频封面/做题全靠想象力是一种怎样的体验 3.0_哔哩哔哩_bilibili.jpg",
                platform: "bilibili",
                views: "420万",
                time: "2023.10"
              },
              {
                id: 4,
                title: "做题全靠想象力是一种怎样的体验？",
                image: "/视频封面/做题全靠想象力是一种怎样的体验？_哔哩哔哩_bilibili.jpg",
                platform: "bilibili",
                views: "580万",
                time: "2023.09"
              },
              {
                id: 5,
                title: "围观了一场设计比烂大赛，设计师：我不做人啦！",
                image: "/视频封面/围观了一场设计比烂大赛，设计师：我不做人啦！_哔哩哔哩_bilibili.jpg",
                platform: "bilibili",
                views: "320万",
                time: "2023.08"
              }
            ].map((video) => (
              <div
                key={video.id}
                className="group bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50 cursor-pointer"
                onClick={() => window.location.href = "/video-planning"}
              >
                <div className="relative">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/api/placeholder/400/225';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg ${
                      video.platform === 'bilibili' 
                        ? 'bg-pink-500/90 text-white' 
                        : 'bg-black/80 text-white'
                    }`}>
                      {video.platform === 'bilibili' ? 'B站' : '抖音'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 tracking-tight line-clamp-2 leading-relaxed">
                    {video.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-foreground-secondary">播放量: {video.views}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-foreground-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-foreground-tertiary">{video.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* 查看全部视频卡片 */}
            <div
              className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center hover:border-primary/50 group"
              onClick={() => window.location.href = "/video-planning"}
            >
              <div className="text-5xl font-bold text-primary mb-6 group-hover:scale-110 transition-transform duration-300">+</div>
              <h3 className="text-xl font-bold text-foreground mb-3">查看全部视频</h3>
              <p className="text-foreground-secondary text-base mb-6">探索更多视频策划案例</p>
              <div className="flex items-center text-primary hover:text-primary-dark transition-colors duration-200 font-medium">
                <span>查看全部</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - 现代简约设计 */}
      <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-white py-24 px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-16">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="font-bold text-xl tracking-tight">杜亚楠的作品集</span>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                专注于内容策划、品牌营销和视频制作，致力于通过优质内容创造品牌价值。
              </p>
            </div>

            {[
              {
                title: "专业技能",
                links: ["内容策划", "品牌营销", "视频制作", "项目管理"]
              },
              {
                title: "作品分类",
                links: ["AI应用", "策划案例", "账号运营", "产品企划"]
              },
              {
                title: "联系方式",
                links: ["邮箱联系", "社交媒体", "合作洽谈", "关于我"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-8 text-lg tracking-tight">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 text-lg hover:translate-x-1 inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 mt-16 pt-16 text-center">
            <p className="text-white/70 text-lg">
              © 2024 杜亚楠的作品集. 保留所有权利.
            </p>
          </div>
        </div>
      </footer>

      {/* 图片放大模态框 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <Close className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="放大查看"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}