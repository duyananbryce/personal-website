'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Calendar, Users, TrendingUp, Target, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function ProductPlanning() {
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

  const products = [
    {
      id: 1,
      title: "伍六七毛绒盲盒",
      category: "IP衍生品",
      status: "已上市",
      description: "基于热门动画《伍六七》IP开发的毛绒盲盒产品",
      highlights: ["IP开发", "盲盒经济", "粉丝经济"],
      timeline: "2021.03 - 2021.08",
      results: {
        sales: "50万+",
        satisfaction: "95%",
        markets: "全国"
      },
      image: "/assets/images/product-planning/page-1.png",
      link: "#",
      tags: ["IP衍生", "盲盒", "动画周边"]
    },
    {
      id: 2,
      title: "教育科技内容产品",
      category: "教育产品",
      status: "策划中",
      description: "结合AI技术的个性化教育内容平台",
      highlights: ["AI教育", "个性化学习", "内容科技"],
      timeline: "2024.01 - 进行中",
      results: {
        progress: "60%",
        users: "测试中",
        features: "8个模块"
      },
      image: "/assets/images/product-planning/page-2.png",
      link: "#",
      tags: ["AI教育", "内容科技", "个性化"]
    },
    {
      id: 3,
      title: "短视频创作工具",
      category: "创作工具",
      status: "概念阶段",
      description: "面向内容创作者的智能短视频制作工具",
      highlights: ["创作工具", "AI辅助", "内容生态"],
      timeline: "2024.06 - 概念设计",
      results: {
        research: "完成",
        prototype: "设计中",
        feedback: "收集中"
      },
      image: "/assets/images/product-planning/page-3.png",
      link: "#",
      tags: ["创作工具", "短视频", "AI辅助"]
    },
    {
      id: 4,
      title: "设计师协作平台",
      category: "社区产品",
      status: "已上线",
      description: "面向设计师的协作与作品展示平台",
      highlights: ["社区运营", "设计师生态", "协作工具"],
      timeline: "2020.09 - 2021.05",
      results: {
        users: "10万+",
        projects: "5万+",
        activity: "日活15%"
      },
      image: "/assets/images/product-planning/page-4.png",
      link: "#",
      tags: ["设计社区", "协作工具", "作品展示"]
    },
    {
      id: 5,
      title: "品牌内容营销服务",
      category: "服务产品",
      status: "服务中",
      description: "为品牌提供全方位的内容营销解决方案",
      highlights: ["品牌服务", "内容营销", "全案策划"],
      timeline: "2019.06 - 持续服务",
      results: {
        brands: "20+",
        campaigns: "100+",
        roi: "平均300%"
      },
      image: "/assets/images/product-planning/page-5.png",
      link: "#",
      tags: ["品牌服务", "内容营销", "全案策划"]
    },
    {
      id: 6,
      title: "AI内容生成平台",
      category: "AI产品",
      status: "开发中",
      description: "基于大语言模型的内容自动生成平台",
      highlights: ["AIGC", "内容自动化", "创意工具"],
      timeline: "2023.10 - 开发中",
      results: {
        progress: "75%",
        accuracy: "92%",
        speed: "3秒/篇"
      },
      image: "/assets/images/product-planning/page-6.png",
      link: "#",
      tags: ["AIGC", "内容生成", "AI平台"]
    }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      '已上市': '#10B981',
      '已上线': '#10B981',
      '服务中': '#10B981',
      '策划中': '#F59E0B',
      '开发中': '#3B82F6',
      '概念阶段': '#8B5CF6'
    };
    return colors[status] || '#6B7280';
  };

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#0a0a0a]">
      <Navigation currentPage="产品企划" />

      {/* 主要内容 */}
      <main className="pt-20 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#0a0a0a] mb-6">产品企划</h1>
            <p className="text-xl text-[#0a0a0a]/80 max-w-2xl mx-auto">
              从概念到落地，参与策划和推进多个创新产品项目
            </p>
          </div>

          {/* 统计概览 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#E3D8AC] p-6 rounded-2xl text-center">
              <Target className="w-8 h-8 text-[#D97758] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a0a0a]">15+</div>
              <div className="text-[#0a0a0a]/80">策划产品</div>
            </div>
            <div className="bg-[#DEC8BC] p-6 rounded-2xl text-center">
              <TrendingUp className="w-8 h-8 text-[#D97758] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a0a0a]">300%</div>
              <div className="text-[#0a0a0a]/80">平均ROI</div>
            </div>
            <div className="bg-[#E8DFB7] p-6 rounded-2xl text-center">
              <Users className="w-8 h-8 text-[#D97758] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a0a0a]">100万+</div>
              <div className="text-[#0a0a0a]/80">覆盖用户</div>
            </div>
            <div className="bg-[#E3D8AC] p-6 rounded-2xl text-center">
              <Lightbulb className="w-8 h-8 text-[#D97758] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#0a0a0a]">8个</div>
              <div className="text-[#0a0a0a]/80">行业领域</div>
            </div>
          </div>

          {/* 产品网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E3D8AC] hover:shadow-lg transition-all duration-300 group"
              >
                {/* 产品图片 */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: getStatusColor(product.status) }}
                    >
                      {product.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0a0a0a]">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* 产品内容 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{product.title}</h3>
                  <p className="text-[#0a0a0a]/80 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* 时间线 */}
                  <div className="flex items-center space-x-2 mb-4 text-sm text-[#0a0a0a]/60">
                    <Calendar className="w-4 h-4" />
                    <span>{product.timeline}</span>
                  </div>

                  {/* 核心亮点 */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#0a0a0a] mb-2">核心亮点：</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#F5F5F5] text-[#0a0a0a]/70 rounded text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 数据结果 */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(product.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-[#D97758]">{value}</div>
                        <div className="text-xs text-[#0a0a0a]/60">
                          {key === 'sales' ? '销量' :
                           key === 'satisfaction' ? '满意度' :
                           key === 'markets' ? '市场' :
                           key === 'progress' ? '进度' :
                           key === 'users' ? '用户' :
                           key === 'features' ? '功能' :
                           key === 'research' ? '调研' :
                           key === 'prototype' ? '原型' :
                           key === 'feedback' ? '反馈' :
                           key === 'projects' ? '项目' :
                           key === 'activity' ? '活跃度' :
                           key === 'brands' ? '品牌' :
                           key === 'campaigns' ? '活动' :
                           key === 'roi' ? 'ROI' :
                           key === 'accuracy' ? '准确率' :
                           key === 'speed' ? '速度' : key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#E3D8AC] text-[#0a0a0a]/70 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 查看详情 */}
                  <a
                    href={product.link}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#D97758] text-white px-6 py-3 rounded-lg hover:bg-[#C96A45] transition-colors duration-200 font-medium"
                  >
                    <span>查看详情</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 底部说明 */}
          <div className="mt-16 text-center">
            <div className="bg-[#E3D8AC] p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">产品企划能力</h3>
              <p className="text-[#0a0a0a]/80 leading-relaxed mb-6">
                具备从产品概念设计到市场推广的全流程经验，擅长市场需求分析、用户研究、
                产品定位和商业模式设计。成功推动多个产品从0到1的完整生命周期。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  市场调研
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  用户研究
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  产品设计
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  商业模式
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  项目管理
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}