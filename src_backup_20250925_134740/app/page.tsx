'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, Menu, X, X as Close } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#0a0a0a]">
      {/* 顶部导航栏 - Anthropic风格 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FAFAF5]/95 backdrop-blur-md shadow-sm' : 'bg-[#FAFAF5]'
      } border-b border-[#E3D8AC]`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#D97758] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="font-bold text-xl text-[#0a0a0a]">杜亚楠的作品集</span>
              </div>
            </div>

            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center space-x-8">
              {['首页', '工作履历', 'AI作品集', '策划作品集', '账号管理', '产品企划', '视频策划'].map((item) => (
                <a
                  key={item}
                  href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                    item === 'AI作品集' ? 'ai-portfolio' :
                    item === '策划作品集' ? 'planning-portfolio' :
                    item === '账号管理' ? 'accounts' :
                    item === '产品企划' ? 'product-planning' : 'video-planning'}`}
                  className={`text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 font-medium ${
                    item === '首页' ? 'text-[#D97758]' : ''
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* 移动端菜单 */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-[#E3D8AC] bg-[#FAFAF5]">
              <div className="px-6 py-6 space-y-6">
                {['首页', '工作履历', 'AI作品集', '策划作品集', '账号管理', '产品企划', '视频策划'].map((item) => (
                  <a
                    key={item}
                    href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                      item === 'AI作品集' ? 'ai-portfolio' :
                      item === '策划作品集' ? 'planning-portfolio' :
                      item === '账号管理' ? 'accounts' :
                      item === '产品企划' ? 'product-planning' : 'video-planning'}`}
                    className={`block text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 font-medium text-lg ${
                      item === '首页' ? 'text-[#D97758]' : ''
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

      {/* 个人简介模块 */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* 个人基本信息 */}
            <div className="text-left max-w-4xl mx-auto space-y-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-[#0a0a0a]">
                杜亚楠
                <br />
                <span className="text-[#D97758]">内容创意策划</span>
              </h1>

              <p className="text-2xl md:text-3xl text-[#0a0a0a]/80 leading-relaxed font-light">
                专注于内容策划、品牌营销和视频制作，拥有丰富的项目管理经验和创意执行能力。
                致力于通过优质内容创造品牌价值，推动文化传播和创新发展。
              </p>
            </div>

            {/* 核心能力标签 */}
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-[#E3D8AC] text-[#0a0a0a] rounded-full text-lg font-medium">
                内容策划
              </span>
              <span className="px-6 py-3 bg-[#DEC8BC] text-[#0a0a0a] rounded-full text-lg font-medium">
                品牌营销
              </span>
              <span className="px-6 py-3 bg-[#E8DFB7] text-[#0a0a0a] rounded-full text-lg font-medium">
                视频制作
              </span>
              <span className="px-6 py-3 bg-[#E3D8AC] text-[#0a0a0a] rounded-full text-lg font-medium">
                项目管理
              </span>
              <span className="px-6 py-3 bg-[#DEC8BC] text-[#0a0a0a] rounded-full text-lg font-medium">
                AI应用
              </span>
            </div>

            {/* 主要成就 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-[#E3D8AC] p-10 rounded-2xl">
                <h3 className="text-3xl font-bold text-[#0a0a0a] mb-4">15亿+</h3>
                <p className="text-[#0a0a0a]/80 leading-relaxed text-lg">
                  累计视频播放量
                </p>
              </div>
              <div className="bg-[#DEC8BC] p-10 rounded-2xl">
                <h3 className="text-3xl font-bold text-[#0a0a0a] mb-4">1000万+</h3>
                <p className="text-[#0a0a0a]/80 leading-relaxed text-lg">
                  社交媒体粉丝
                </p>
              </div>
              <div className="bg-[#E8DFB7] p-10 rounded-2xl">
                <h3 className="text-3xl font-bold text-[#0a0a0a] mb-4">50+</h3>
                <p className="text-[#0a0a0a]/80 leading-relaxed text-lg">
                  成功项目案例
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工作履历时间轴 */}
      <section className="py-20 px-6 lg:px-8 border-t border-[#E3D8AC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#0a0a0a] mb-6">工作履历</h2>
            <p className="text-2xl text-[#0a0a0a]/80 max-w-4xl mx-auto font-light">
              专业的内容策划与项目管理经验，在不同领域积累了丰富的工作成果
            </p>
          </div>

          <div className="relative">
            {/* 时间轴线 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E3D8AC]"></div>

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
              <div key={index} className="relative mb-16">
                {/* 时间轴节点 */}
                <div className="absolute left-6 w-4 h-4 bg-[#D97758] rounded-full border-4 border-[#FAFAF5]"></div>

                {/* 经历卡片 */}
                <div className="ml-16">
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a0a0a] mb-2">{experience.company}</h3>
                        <p className="text-lg text-[#D97758] font-medium">{experience.position}</p>
                      </div>
                      <div className="text-sm text-[#0a0a0a]/60 mt-2 md:mt-0">
                        {experience.period}
                      </div>
                    </div>

                    <p className="text-[#0a0a0a]/80 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#E3D8AC] text-[#0a0a0a] rounded-full text-sm font-medium"
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

      {/* 负责过的账号 */}
      <section className="py-20 px-6 lg:px-8 border-t border-[#E3D8AC] bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a0a0a] mb-6">负责过的账号</h2>
            <p className="text-2xl text-[#0a0a0a]/80 max-w-4xl mx-auto font-light">
              以下账号的所有选题、文案撰写、剪辑、配音均为个人完成
            </p>
          </div>

          {/* 三栏布局 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 猿辅导 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-lg">猿</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0a0a0a]">猿辅导</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="https://v.douyin.com/L3YnhTJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FE2C55] to-[#FF0050] rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-sm">抖</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0a0a0a] text-sm group-hover:text-blue-600 transition-colors">小猿搜题</h4>
                        <p className="text-[#0a0a0a]/60 text-xs">抖音账号</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#0a0a0a]/40 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://space.bilibili.com/385925172/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00A1D6] to-[#0091D6] rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0a0a0a] text-sm group-hover:text-blue-600 transition-colors">小猿搜题</h4>
                        <p className="text-[#0a0a0a]/60 text-xs">B站账号</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#0a0a0a]/40 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* 站酷网 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-6 shadow-lg border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-lg">站</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0a0a0a]">站酷网</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="https://www.douyin.com/user/MS4wLjABAAAAkxinZjAvJZk4JVMIhyjf_qF__-9qG7QPp_8W6sioT-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FE2C55] to-[#FF0050] rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-sm">抖</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0a0a0a] text-sm group-hover:text-orange-600 transition-colors">站酷家的小Z老师</h4>
                        <p className="text-[#0a0a0a]/60 text-xs">抖音账号</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#0a0a0a]/40 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://space.bilibili.com/99382669/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00A1D6] to-[#0091D6] rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0a0a0a] text-sm group-hover:text-orange-600 transition-colors">站酷家的小Z老师</h4>
                        <p className="text-[#0a0a0a]/60 text-xs">B站账号</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#0a0a0a]/40 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://v.douyin.com/L3YKnmf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FE2C55] to-[#FF0050] rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-sm">抖</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0a0a0a] text-sm group-hover:text-orange-600 transition-colors">懂点儿设计</h4>
                        <p className="text-[#0a0a0a]/60 text-xs">抖音账号</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#0a0a0a]/40 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://space.bilibili.com/616419739/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00A1D6] to-[#0091D6] rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0a0a0a] text-sm group-hover:text-orange-600 transition-colors">懂点儿设计</h4>
                        <p className="text-[#0a0a0a]/60 text-xs">B站账号</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#0a0a0a]/40 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* 即时设计 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-6 shadow-lg border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-lg">即</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0a0a0a]">即时设计</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="https://space.bilibili.com/2030180204/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00A1D6] to-[#0091D6] rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0a0a0a] text-sm group-hover:text-purple-600 transition-colors">新来的设计师</h4>
                        <p className="text-[#0a0a0a]/60 text-xs">B站账号</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#0a0a0a]/40 group-hover:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://space.bilibili.com/1355154418/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00A1D6] to-[#0091D6] rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0a0a0a] text-sm group-hover:text-purple-600 transition-colors">设计练习生-乘风</h4>
                        <p className="text-[#0a0a0a]/60 text-xs">B站账号</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#0a0a0a]/40 group-hover:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI方向作品集 */}
      <section className="py-20 px-6 lg:px-8 bg-white border-t border-[#E3D8AC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a0a0a] mb-6">AI方向作品集</h2>
            <p className="text-2xl text-[#0a0a0a]/80 max-w-4xl mx-auto font-light">
              探索人工智能技术在各领域的创新应用，推动技术边界和创意表达
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={pageNum}
                className="transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl overflow-hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(`/pdf-images/ai-portfolio-page-${pageNum}.jpg`);
                }}
              >
                <img
                  src={`/pdf-images/ai-portfolio-page-${pageNum}.jpg`}
                  alt={`AI作品集第${pageNum}页`}
                  className="w-full h-auto rounded-lg shadow-md transition-all duration-300"
                />
              </div>
            ))}
            <div
              className="bg-[#E3D8AC] rounded-lg p-4 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center transform hover:scale-105 overflow-hidden h-full"
              onClick={() => window.location.href = "/ai-portfolio"}
            >
              <div className="text-4xl font-bold text-[#0a0a0a] mb-4">+</div>
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">查看完整作品集</h3>
              <p className="text-[#0a0a0a]/80 text-sm">探索更多AI创意项目</p>
              <div className="flex items-center text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 mt-4">
                <span className="font-medium text-sm">查看全部</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 策划作品集 */}
      <section className="py-20 px-6 lg:px-8 border-t border-[#E3D8AC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a0a0a] mb-6">策划作品集</h2>
            <p className="text-2xl text-[#0a0a0a]/80 max-w-4xl mx-auto font-light">
              专业的品牌策划与创意执行，展现内容策划的完整价值链
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={pageNum}
                className="transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl overflow-hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(`/pdf-images/portfolio-page-${pageNum}.jpg`);
                }}
              >
                <img
                  src={`/pdf-images/portfolio-page-${pageNum}.jpg`}
                  alt={`策划作品集第${pageNum}页`}
                  className="w-full h-auto rounded-lg shadow-md transition-all duration-300"
                />
              </div>
            ))}
            <div
              className="bg-[#DEC8BC] rounded-lg p-4 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center transform hover:scale-105 overflow-hidden h-full"
              onClick={() => window.location.href = "/planning-portfolio"}
            >
              <div className="text-4xl font-bold text-[#0a0a0a] mb-4">+</div>
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">查看完整作品集</h3>
              <p className="text-[#0a0a0a]/80 text-sm">探索更多策划案例</p>
              <div className="flex items-center text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 mt-4">
                <span className="font-medium text-sm">查看全部</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品企划 */}
      <section className="py-20 px-6 lg:px-8 bg-white border-t border-[#E3D8AC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a0a0a] mb-6">产品企划</h2>
            <p className="text-2xl text-[#0a0a0a]/80 max-w-4xl mx-auto font-light">
              毛绒盲盒产品策划与设计，从概念到市场的完整产品企划案例
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={pageNum}
                className="transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl overflow-hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(`/pdf-images/product-planning-page-${pageNum}.jpg`);
                }}
              >
                <img
                  src={`/pdf-images/product-planning-page-${pageNum}.jpg`}
                  alt={`产品企划第${pageNum}页`}
                  className="w-full h-auto rounded-lg shadow-md transition-all duration-300"
                />
              </div>
            ))}
            <div
              className="bg-[#E8DFB7] rounded-lg p-4 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center transform hover:scale-105 overflow-hidden h-full"
              onClick={() => window.location.href = "/product-planning"}
            >
              <div className="text-4xl font-bold text-[#0a0a0a] mb-4">+</div>
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">查看完整产品企划</h3>
              <p className="text-[#0a0a0a]/80 text-sm">探索更多产品策划案例</p>
              <div className="flex items-center text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 mt-4">
                <span className="font-medium text-sm">查看全部</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 视频策划 */}
      <section className="py-20 px-6 lg:px-8 border-t border-[#E3D8AC] bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a0a0a] mb-6">视频策划</h2>
            <p className="text-2xl text-[#0a0a0a]/80 max-w-4xl mx-auto font-light">
              专业的视频内容策划与制作，涵盖动画、教育、商业等多个领域
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => i + 1).map((itemNum) => (
              <div
                key={itemNum}
                className="rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => window.location.href = "/video-planning"}
              >
                <div className="relative">
                  <img
                    src={`/api/placeholder/400/225`}
                    alt={`视频策划项目${itemNum}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#D97758]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">视频策划项目 {itemNum}</h3>
                  <p className="text-[#0a0a0a]/60 text-sm">视频策划案例展示</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#D97758] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="font-bold text-xl">杜亚楠的作品集</span>
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
                <h3 className="font-semibold mb-6 text-lg">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-white/80 hover:text-white transition-colors text-lg">
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