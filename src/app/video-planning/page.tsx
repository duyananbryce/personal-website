'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Play, Clock, Eye, Heart, MessageSquare, Film, Users, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function VideoPlanning() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const videoProjects = [
    {
      id: 1,
      title: "伍六七动画系列",
      category: "动画制作",
      status: "已播出",
      description: "参与国产动画《伍六七》的内容策划与制作工作",
      highlights: ["现象级IP", "多平台分发", "国际化"],
      achievements: [
        "全网播放量超过10亿",
        "获得多项动画大奖",
        "成功出海到海外市场"
      ],
      timeline: "2018.01 - 2021.12",
      platforms: ["B站", "腾讯视频", "Netflix"],
      stats: {
        views: "10亿+",
        likes: "2000万+",
        episodes: "30集"
      },
      thumbnail: "/api/placeholder/800/450",
      link: "#",
      tags: ["动画", "内容策划", "IP运营"]
    },
    {
      id: 2,
      title: "教育短视频系列",
      category: "教育内容",
      status: "系列制作",
      description: "为猿辅导策划制作的在线教育短视频内容",
      highlights: ["知识科普", "趣味性", "传播性强"],
      achievements: [
        "单系列播放量5000万+",
        "提升了品牌知名度",
        "获得用户高度认可"
      ],
      timeline: "2019.06 - 2020.02",
      platforms: ["抖音", "快手", "微信视频号"],
      stats: {
        views: "5000万+",
        completion: "85%",
        videos: "100集"
      },
      thumbnail: "/api/placeholder/800/450",
      link: "#",
      tags: ["教育", "短视频", "知识科普"]
    },
    {
      id: 3,
      title: "设计师访谈系列",
      category: "人物访谈",
      status: "已完成",
      description: "为站酷网策划的设计师人物访谈视频系列",
      highlights: ["深度访谈", "行业洞察", "专业内容"],
      achievements: [
        "采访了50+知名设计师",
        "建立了设计行业影响力",
        "提升了平台专业形象"
      ],
      timeline: "2018.09 - 2019.05",
      platforms: ["站酷", "优酷", "B站"],
      stats: {
        views: "1000万+",
        designers: "50+",
        duration: "30分钟/集"
      },
      thumbnail: "/api/placeholder/800/450",
      link: "#",
      tags: ["访谈", "设计", "人物"]
    },
    {
      id: 4,
      title: "品牌营销视频",
      category: "商业合作",
      status: "持续进行",
      description: "为各大品牌定制的营销视频内容策划",
      highlights: ["品牌定制", "营销导向", "效果导向"],
      achievements: [
        "服务20+知名品牌",
        "平均ROI达到300%",
        "客户满意度95%"
      ],
      timeline: "2019.01 - 持续进行",
      platforms: ["全媒体", "社交媒体", "电商平台"],
      stats: {
        brands: "20+",
        campaigns: "100+",
        roi: "300%"
      },
      thumbnail: "/api/placeholder/800/450",
      link: "#",
      tags: ["品牌", "营销", "商业"]
    },
    {
      id: 5,
      title: "个人创作短视频",
      category: "个人IP",
      status: "持续更新",
      description: "个人抖音账号的原创短视频内容",
      highlights: ["原创内容", "个人风格", "百万粉丝"],
      achievements: [
        "个人账号粉丝100万+",
        "创作多个爆款视频",
        "形成了个人创作风格"
      ],
      timeline: "2017.06 - 持续更新",
      platforms: ["抖音", "小红书", "视频号"],
      stats: {
        followers: "100万+",
        videos: "200+",
        engagement: "15%"
      },
      thumbnail: "/api/placeholder/800/450",
      link: "#",
      tags: ["个人IP", "原创", "短视频"]
    },
    {
      id: 6,
      title: "纪录片策划",
      category: "纪录片",
      status: "前期策划",
      description: "关于文化创意产业的纪录片项目策划",
      highlights: ["文化价值", "深度报道", "社会意义"],
      achievements: [
        "获得文化基金支持",
        "建立了专业制作团队",
        "完成前期调研工作"
      ],
      timeline: "2024.01 - 策划中",
      platforms: ["待定", "视频平台", "电视台"],
      stats: {
        funding: "已落实",
        team: "8人",
        research: "完成"
      },
      thumbnail: "/api/placeholder/800/450",
      link: "#",
      tags: ["纪录片", "文化", "社会"]
    }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      '已播出': '#10B981',
      '系列制作': '#3B82F6',
      '已完成': '#10B981',
      '持续进行': '#F59E0B',
      '持续更新': '#F59E0B',
      '前期策划': '#8B5CF6'
    };
    return colors[status] || '#6B7280';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation currentPage="视频策划" />

      {/* 主要内容 */}
      <main className="pt-20 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6">视频策划</h1>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              专业的视频内容策划与制作，涵盖动画、教育、商业等多个领域
            </p>
          </div>

          {/* 统计概览 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-primary-subtle p-6 rounded-2xl text-center">
              <Film className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-foreground-secondary">视频作品</div>
            </div>
            <div className="bg-accent p-6 rounded-2xl text-center">
              <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">15亿+</div>
              <div className="text-foreground-secondary">总播放量</div>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">1000万+</div>
              <div className="text-foreground-secondary">粉丝数</div>
            </div>
            <div className="bg-primary-subtle p-6 rounded-2xl text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">6个</div>
              <div className="text-foreground-secondary">内容领域</div>
            </div>
          </div>

          {/* 视频项目列表 */}
          <div className="space-y-8">
            {videoProjects.map((project) => (
              <div
                key={project.id}
                className="bg-surface rounded-2xl overflow-hidden border border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                {/* 视频预览区 */}
                <div className="relative">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* 播放按钮 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 cursor-pointer">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* 状态和分类标签 */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: getStatusColor(project.status) }}
                    >
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-surface/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                      {project.category}
                    </span>
                  </div>

                  {/* 视频标题 */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.description}</p>
                  </div>
                </div>

                {/* 项目详情 */}
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 左侧信息 */}
                    <div className="md:col-span-2">
                      {/* 核心亮点 */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">核心亮点：</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-subtle text-foreground rounded-full text-sm font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 主要成就 */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">主要成就：</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-foreground-secondary">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 时间线 */}
                      <div className="flex items-center space-x-2 text-sm text-foreground-secondary">
                        <Clock className="w-4 h-4" />
                        <span>{project.timeline}</span>
                      </div>
                    </div>

                    {/* 右侧数据和操作 */}
                    <div className="space-y-6">
                      {/* 数据统计 */}
                      <div className="grid grid-cols-1 gap-3">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                            <span className="text-sm text-foreground-secondary">
                              {key === 'views' ? '播放量' :
                               key === 'likes' ? '点赞量' :
                               key === 'episodes' ? '集数' :
                               key === 'completion' ? '完播率' :
                               key === 'videos' ? '视频数' :
                               key === 'designers' ? '设计师' :
                               key === 'duration' ? '时长' :
                               key === 'brands' ? '品牌数' :
                               key === 'campaigns' ? '活动数' :
                               key === 'roi' ? 'ROI' :
                               key === 'followers' ? '粉丝数' :
                               key === 'engagement' ? '互动率' :
                               key === 'funding' ? '资金' :
                               key === 'team' ? '团队' :
                               key === 'research' ? '调研' : key}
                            </span>
                            <span className="font-bold text-primary">{value}</span>
                          </div>
                        ))}
                      </div>

                      {/* 平台 */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">播出平台：</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.platforms.map((platform, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-foreground-secondary rounded text-xs"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 标签 */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">标签：</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-accent text-foreground-secondary rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 查看详情 */}
                      <a
                        href={project.link}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium"
                      >
                        <span>查看详情</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 底部说明 */}
          <div className="mt-16 text-center">
            <div className="bg-primary-subtle p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">视频策划能力</h3>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                具备从内容策划到制作执行的全流程视频制作经验，擅长创意构思、脚本撰写、
                拍摄指导和后期制作。在多个领域都有成功的作品，能够根据不同平台特性和受众需求
                制作出具有传播力的优质内容。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-surface text-foreground rounded-full text-sm font-medium">
                  内容策划
                </span>
                <span className="px-4 py-2 bg-surface text-foreground rounded-full text-sm font-medium">
                  脚本创作
                </span>
                <span className="px-4 py-2 bg-surface text-foreground rounded-full text-sm font-medium">
                  拍摄指导
                </span>
                <span className="px-4 py-2 bg-surface text-foreground rounded-full text-sm font-medium">
                  后期制作
                </span>
                <span className="px-4 py-2 bg-surface text-foreground rounded-full text-sm font-medium">
                  平台运营
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}