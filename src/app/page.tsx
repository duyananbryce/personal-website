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
                <div className="w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="logo-clean w-full h-full flex items-center justify-center">
          <img src="/assets/icons/logo.svg" alt="杜亚楠的作品集" className="max-w-full max-h-full" />
        </div>
                </div>
                <span className="font-bold text-2xl text-foreground tracking-tight">作品集</span>
              </div>
            </div>

            {/* 桌面端导航 */}
            <div className="hidden lg:flex items-center space-x-12">
              {['首页', '工作履历', 'AI作品集', '策划作品集'].map((item) => (
                <a
                  key={item}
                  href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                    item === 'AI作品集' ? 'ai-portfolio' :
                    item === '策划作品集' ? 'planning-portfolio' : ''}`}
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
                {['首页', '工作履历', 'AI作品集', '策划作品集'].map((item) => (
                  <a
                    key={item}
                    href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                      item === 'AI作品集' ? 'ai-portfolio' :
                      item === '策划作品集' ? 'planning-portfolio' : ''}`}
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
      <section className="py-12 px-6 lg:px-8 border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">工作履历</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-foreground-secondary max-w-4xl mx-auto font-light leading-relaxed">
              专业的内容策划与项目管理经验，在不同领域积累了丰富的工作成果
            </p>
          </div>

          <div className="relative">
            {/* 时间轴线 - 精致设计 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent"></div>

            {[
              {
                company: "啊哈娱乐",
                position: "市场营销经理",
                period: "2024.10 - 至今",
                description: "负责啊哈娱乐旗下《伍六七》IP的市场营销工作，包含《伍六七》动画第五季的市场营销工作、以及音乐巡演、手游、衍生品等市场推广。",
                highlights: ["IP营销", "动画推广", "音乐巡演", "手游推广", "衍生品"]
              },
              {
                company: "猿辅导在线教育",
                position: "视频编导",
                period: "2022.12 - 2024.10",
                description: "负责猿辅导电商直播的短视频生产工作，包括脚本创作、拍摄、剪辑等；参与信息流短视频投放工作，负责千川、随心推的推广计划搭建；负责电商直播间的搭建、日常维护，以及户外直播活动的支持。",
                highlights: ["视频制作", "直播运营", "信息流投放", "脚本创作"]
              },
              {
                company: "站酷网",
                position: "抖音短视频运营",
                period: "2021.8 - 2022.12",
                description: "从零到一搭建新媒体视频矩阵，负责站酷网官方抖音、B站、小红书账号的视频运营；为公司相关活动提供内容创意，提升活动效果。",
                highlights: ["账号运营", "内容策划", "视频制作", "品牌传播"]
              },
              {
                company: "猿辅导在线教育",
                position: "内容运营",
                period: "2020.6 - 2021.8",
                description: "独立负责小猿搜题APP抖音、B站官方账号的内容更新和账号运营；负责小猿搜题社区多个栏目的内容制作；在重大活动节点策划品牌内容活动和落地执行。",
                highlights: ["账号运营", "内容创作", "爆款策划", "品牌推广"]
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
                    <div className="mb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">{experience.company}</h3>
                          <p className="text-lg text-primary font-medium">{experience.position}</p>
                        </div>
                        <div className="text-xl text-foreground bg-border px-3 py-1 rounded-full text-left whitespace-nowrap">
                          {experience.period}
                        </div>
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
                <div className="w-20 h-20 flex items-center justify-center mr-4">
                  <img src="/assets/icons/猿辅导.svg" alt="猿辅导" className="w-full h-full object-contain" />
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
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img src="/assets/icons/douyin-icon.svg" alt="抖音" className="w-full h-full object-contain" />
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
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img src="/assets/icons/bilibili-icon.svg" alt="B站" className="w-full h-full object-contain" />
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
                <div className="w-20 h-20 flex items-center justify-center mr-4">
                  <img src="/assets/icons/站酷123.svg" alt="站酷" className="w-full h-full object-contain" />
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
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img src="/assets/icons/douyin-icon.svg" alt="抖音" className="w-full h-full object-contain" />
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
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img src="/assets/icons/bilibili-icon.svg" alt="B站" className="w-full h-full object-contain" />
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
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img src="/assets/icons/douyin-icon.svg" alt="抖音" className="w-full h-full object-contain" />
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
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img src="/assets/icons/bilibili-icon.svg" alt="B站" className="w-full h-full object-contain" />
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
                <div className="w-20 h-20 flex items-center justify-center mr-4">
                  <img src="/assets/icons/即时设计.svg" alt="即时设计" className="w-full h-full object-contain" />
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
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img src="/assets/icons/bilibili-icon.svg" alt="B站" className="w-full h-full object-contain" />
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
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img src="/assets/icons/bilibili-icon.svg" alt="B站" className="w-full h-full object-contain" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={pageNum}
                className="group transition-all duration-300 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(`/assets/images/ai-portfolio/page-${pageNum}.png`);
                }}
              >
                <div className="relative bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                  <img
                    src={`/assets/images/ai-portfolio/page-${pageNum}.png`}
                    alt={`AI作品集第${pageNum}页`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
            <div
              className="relative bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-primary/50 group"
              onClick={() => window.location.href = "/ai-portfolio"}
            >
              <div className="flex items-center justify-center h-full p-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-3 group-hover:translate-x-1 transition-transform duration-300">→</div>
                  <h3 className="text-base font-bold text-foreground mb-1">查看完整作品集</h3>
                  <p className="text-xs text-foreground-secondary">探索更多AI创意项目</p>
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={pageNum}
                className="group transition-all duration-300 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(`/assets/images/planning-portfolio/page-${pageNum}.png`);
                }}
              >
                <div className="relative bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                  <img
                    src={`/assets/images/planning-portfolio/page-${pageNum}.png`}
                    alt={`策划作品集第${pageNum}页`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
            <div
              className="relative bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-primary/50 group"
              onClick={() => window.location.href = "/planning-portfolio"}
            >
              <div className="flex items-center justify-center h-full p-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-3 group-hover:translate-x-1 transition-transform duration-300">→</div>
                  <h3 className="text-base font-bold text-foreground mb-1">查看完整作品集</h3>
                  <p className="text-xs text-foreground-secondary">探索更多策划案例</p>
                </div>
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
                className="group transition-all duration-300 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(`/assets/images/product-planning/page-${pageNum}.png`);
                }}
              >
                <div className="relative bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                  <img
                    src={`/assets/images/product-planning/page-${pageNum}.png`}
                    alt={`产品企划第${pageNum}页`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
            <div
              className="relative bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-primary/50 group"
              onClick={() => window.location.href = "/product-planning"}
            >
              <div className="flex items-center justify-center h-full p-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-3 group-hover:translate-x-1 transition-transform duration-300">→</div>
                  <h3 className="text-base font-bold text-foreground mb-1">查看完整作品集</h3>
                  <p className="text-xs text-foreground-secondary">探索更多产品企划</p>
                </div>
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
                image: "/assets/images/video-planning/video1.jpg",
                platform: "bilibili",
                views: "280万",
                time: "2023.12"
              },
              {
                id: 2,
                title: "为什么北大选课堪称'海淀赌场'？",
                image: "/assets/images/video-planning/video2.jpg",
                platform: "bilibili",
                views: "156万",
                time: "2023.11"
              },
              {
                id: 3,
                title: "做题全靠想象力是一种怎样的体验 3.0",
                image: "/assets/images/video-planning/video3.jpg",
                platform: "bilibili",
                views: "420万",
                time: "2023.10"
              },
              {
                id: 4,
                title: "围观了一场设计比烂大赛，设计师：我不做人啦！",
                image: "/assets/images/video-planning/video4.jpg",
                platform: "bilibili",
                views: "320万",
                time: "2023.08"
              },
              {
                id: 5,
                title: "警告！别碰设计师的屏幕！",
                image: "/assets/images/video-planning/video5.jpg",
                platform: "bilibili",
                views: "580万",
                time: "2023.09"
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
                <div className="p-4">
                  <h3 className="text-base font-bold text-foreground h-12 mb-3 tracking-tight line-clamp-2 leading-relaxed">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-foreground-secondary">播放量: {video.views}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-foreground-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-foreground-tertiary">{video.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* 查看全部视频卡片 */}
            <div
              className="relative bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-primary/50 group"
              onClick={() => window.location.href = "/video-planning"}
            >
              <div className="flex items-center justify-center h-full p-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-3 group-hover:translate-x-1 transition-transform duration-300">→</div>
                  <h3 className="text-base font-bold text-foreground mb-1">查看全部视频</h3>
                  <p className="text-xs text-foreground-secondary">探索更多视频策划案例</p>
                </div>
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
                <div className="w-12 h-12 flex items-center justify-center shadow-lg">
                  <div className="logo-clean w-full h-full flex items-center justify-center">
          <img src="/assets/icons/logo.svg" alt="杜亚楠的作品集" className="max-w-full max-h-full" />
        </div>
                </div>
                <span className="font-bold text-xl tracking-tight">作品集</span>
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
              © 2024 作品集. 保留所有权利.
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