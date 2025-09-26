'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Users, TrendingUp, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function Accounts() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accounts = [
    {
      id: 1,
      name: "个人抖音账号",
      platform: "抖音",
      description: "专注于内容创作和短视频制作的个人账号",
      stats: {
        followers: "100万+",
        likes: "5000万+",
        videos: "200+"
      },
      link: "https://douyin.com",
      category: "个人创作",
      highlights: ["原创内容", "百万粉丝", "爆款视频"],
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "伍六七官方账号",
      platform: "多平台",
      description: "国产动画《伍六七》的官方内容运营",
      stats: {
        followers: "500万+",
        likes: "2亿+",
        videos: "150+"
      },
      link: "https://example.com/wuliuqi",
      category: "动画IP",
      highlights: ["官方运营", "现象级IP", "多平台分发"],
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "猿辅导品牌账号",
      platform: "微信/微博",
      description: "教育品牌的内容营销和用户增长",
      stats: {
        followers: "200万+",
        engagement: "15%",
        posts: "1000+"
      },
      link: "https://example.com/yuanfudao",
      category: "教育品牌",
      highlights: ["品牌营销", "用户增长", "教育内容"],
      image: "/api/placeholder/300/300"
    },
    {
      id: 4,
      name: "站酷网设计账号",
      platform: "站酷/Behance",
      description: "设计师社区的内容策划和运营",
      stats: {
        followers: "50万+",
        views: "1000万+",
        projects: "100+"
      },
      link: "https://example.com/zcool",
      category: "设计平台",
      highlights: ["设计内容", "社区运营", "品牌合作"],
      image: "/api/placeholder/300/300"
    },
    {
      id: 5,
      name: "啊哈娱乐账号",
      platform: "全平台",
      description: "娱乐公司的内容策划和账号矩阵",
      stats: {
        followers: "300万+",
        reach: "1亿+",
        campaigns: "50+"
      },
      link: "https://example.com/ahaentertainment",
      category: "娱乐内容",
      highlights: ["内容矩阵", "品牌合作", "娱乐IP"],
      image: "/api/placeholder/300/300"
    },
    {
      id: 6,
      name: "品牌合作项目",
      platform: "多品牌",
      description: "为各大品牌提供的内容营销服务",
      stats: {
        brands: "20+",
        campaigns: "100+",
        reach: "5亿+"
      },
      link: "https://example.com/brands",
      category: "品牌服务",
      highlights: ["品牌合作", "营销策划", "内容制作"],
      image: "/api/placeholder/300/300"
    }
  ];

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      '抖音': '#FE2C55',
      '多平台': '#D97758',
      '微信/微博': '#07C160',
      '站酷/Behance': '#0057FF',
      '全平台': '#8B5CF6',
      '多品牌': '#F59E0B'
    };
    return colors[platform] || '#D97758';
  };

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#0a0a0a]">
      {/* 顶部导航栏 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FAFAF5]/95 backdrop-blur-md shadow-sm' : 'bg-[#FAFAF5]'
      } border-b border-[#E3D8AC]`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#D97758] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="font-bold text-lg text-[#0a0a0a]">杜亚楠的作品集</span>
              </div>
            </div>

            {/* 导航链接 */}
            <div className="hidden md:flex items-center space-x-8">
              {['首页', '工作履历', 'AI作品集', '策划作品集', '账号管理', '产品企划', '视频策划'].map((item) => (
                <a
                  key={item}
                  href={item === '首页' ? '/' : `/${item === '项目经理' ? 'project-manager' :
                    item === 'AI作品集' ? 'ai-portfolio' :
                    item === '策划作品集' ? 'planning-portfolio' :
                    item === '账号管理' ? 'accounts' :
                    item === '产品企划' ? 'product-planning' : 'video-planning'}`}
                  className={`text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 font-medium ${
                    item === '账号管理' ? 'text-[#D97758]' : ''
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* 返回按钮 */}
            <a
              href="/"
              className="flex items-center space-x-2 text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回首页</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#0a0a0a] mb-6">负责过的账号</h1>
            <p className="text-xl text-[#0a0a0a]/80 max-w-2xl mx-auto">
              管理和运营过多个成功的社交媒体账号，积累了丰富的内容策划和用户增长经验
            </p>
          </div>

          {/* 统计概览 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#E3D8AC] p-6 rounded-2xl text-center">
              <Users className="w-8 h-8 text-[#D97758] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a0a0a]">1000万+</div>
              <div className="text-[#0a0a0a]/80">总粉丝数</div>
            </div>
            <div className="bg-[#DEC8BC] p-6 rounded-2xl text-center">
              <TrendingUp className="w-8 h-8 text-[#D97758] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a0a0a]">8亿+</div>
              <div className="text-[#0a0a0a]/80">总播放量</div>
            </div>
            <div className="bg-[#E8DFB7] p-6 rounded-2xl text-center">
              <Heart className="w-8 h-8 text-[#D97758] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a0a0a]">3亿+</div>
              <div className="text-[#0a0a0a]/80">总点赞数</div>
            </div>
            <div className="bg-[#E3D8AC] p-6 rounded-2xl text-center">
              <MessageCircle className="w-8 h-8 text-[#D97758] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a0a0a]">500+</div>
              <div className="text-[#0a0a0a]/80">内容作品</div>
            </div>
          </div>

          {/* 账号列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E3D8AC] hover:shadow-lg transition-all duration-300 group"
              >
                {/* 账号头部 */}
                <div className="relative">
                  <img
                    src={account.image}
                    alt={account.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: getPlatformColor(account.platform) }}
                      >
                        {account.platform}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                        {account.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{account.name}</h3>
                  </div>
                </div>

                {/* 账号内容 */}
                <div className="p-6">
                  <p className="text-[#0a0a0a]/80 mb-4 leading-relaxed">
                    {account.description}
                  </p>

                  {/* 数据统计 */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(account.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-[#D97758]">{value}</div>
                        <div className="text-xs text-[#0a0a0a]/60">
                          {key === 'followers' ? '粉丝' :
                           key === 'likes' ? '点赞' :
                           key === 'videos' ? '视频' :
                           key === 'engagement' ? '互动率' :
                           key === 'posts' ? '内容' :
                           key === 'views' ? '浏览' :
                           key === 'projects' ? '项目' :
                           key === 'reach' ? '覆盖' :
                           key === 'campaigns' ? '活动' :
                           key === 'brands' ? '品牌' : key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 特色标签 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {account.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#F5F5F5] text-[#0a0a0a]/70 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* 访问链接 */}
                  <a
                    href={account.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#D97758] text-white px-6 py-3 rounded-lg hover:bg-[#C96A45] transition-colors duration-200 font-medium group-hover:shadow-lg"
                  >
                    <span>访问账号</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 底部说明 */}
          <div className="mt-16 text-center">
            <div className="bg-[#E3D8AC] p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">账号运营经验</h3>
              <p className="text-[#0a0a0a]/80 leading-relaxed mb-6">
                拥有丰富的社交媒体账号运营经验，涵盖内容策划、用户增长、数据分析等多个方面。
                成功运营过从零到百万粉丝的个人账号，以及多个企业品牌的官方账号。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  内容策划
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  用户增长
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  数据分析
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  品牌合作
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  团队管理
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}