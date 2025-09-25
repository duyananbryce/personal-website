'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Grid, List } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function AIPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiProjects = [
    {
      id: 1,
      title: "AI内容生成系统",
      category: "AI应用",
      description: "基于GPT的内容自动生成平台，支持多种内容类型创作",
      image: "/api/placeholder/400/300",
      tags: ["GPT", "内容生成", "自动化"],
      link: "#"
    },
    {
      id: 2,
      title: "智能视频剪辑工具",
      category: "AI工具",
      description: "利用AI技术自动识别视频重点，生成精彩片段剪辑",
      image: "/api/placeholder/400/300",
      tags: ["视频处理", "计算机视觉", "自动化"],
      link: "#"
    },
    {
      id: 3,
      title: "AI驱动的数据分析平台",
      category: "数据科学",
      description: "智能数据分析和可视化平台，提供深度洞察",
      image: "/api/placeholder/400/300",
      tags: ["数据分析", "机器学习", "可视化"],
      link: "#"
    },
    {
      id: 4,
      title: "智能客服机器人",
      category: "AI应用",
      description: "基于大语言模型的智能客服系统，提供24/7服务",
      image: "/api/placeholder/400/300",
      tags: ["NLP", "客服", "自动化"],
      link: "#"
    },
    {
      id: 5,
      title: "AI图像风格迁移",
      category: "计算机视觉",
      description: "艺术风格迁移应用，让普通照片变成艺术品",
      image: "/api/placeholder/400/300",
      tags: ["图像处理", "风格迁移", "艺术"],
      link: "#"
    },
    {
      id: 6,
      title: "更多AI项目",
      category: "查看全部",
      description: "查看完整的AI方向作品集",
      image: "/api/placeholder/400/300",
      tags: ["更多项目"],
      link: "#",
      isMore: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#0a0a0a]">
      <Navigation currentPage="AI作品集" />

      {/* 主要内容 */}
      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#0a0a0a] mb-6">AI方向作品集</h1>
            <p className="text-xl text-[#0a0a0a]/80 max-w-2xl mx-auto">
              探索人工智能技术在各领域的创新应用，推动技术边界
            </p>
          </div>

          {/* 视图切换 */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-white p-1 rounded-lg border border-[#E3D8AC]">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-[#D97758] text-white' : 'text-[#0a0a0a]/80 hover:text-[#D97758]'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>网格视图</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-[#D97758] text-white' : 'text-[#0a0a0a]/80 hover:text-[#D97758]'
                }`}
              >
                <List className="w-4 h-4" />
                <span>列表视图</span>
              </button>
            </div>
          </div>

          {/* 作品集网格 */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
          }`}>
            {aiProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl overflow-hidden border border-[#E3D8AC] hover:shadow-lg transition-shadow duration-300 ${
                  project.isMore ? 'bg-[#E3D8AC]' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.isMore && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">+</div>
                        <div className="text-lg font-medium">查看更多</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.isMore ? 'bg-[#D97758] text-white' : 'bg-[#E3D8AC] text-[#0a0a0a]'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{project.title}</h3>
                  <p className="text-[#0a0a0a]/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#F5F5F5] text-[#0a0a0a]/70 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {!project.isMore && (
                    <a
                      href={project.link}
                      className="inline-flex items-center space-x-2 text-[#D97758] hover:text-[#C96A45] transition-colors duration-200 font-medium"
                    >
                      <span>查看详情</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.isMore && (
                    <a
                      href={project.link}
                      className="inline-flex items-center space-x-2 text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 font-medium"
                    >
                      <span>查看完整作品集</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}