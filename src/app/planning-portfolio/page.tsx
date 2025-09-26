'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Grid, List, Maximize, Download } from 'lucide-react';
import Image from 'next/image';

export default function PlanningPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 生成作品集页面数据
  const portfolioPages = Array.from({ length: 20 }, (_, i) => i + 1);

  // 前5个是作品展示，第6个是"查看更多"
  const displayItems = [
    ...portfolioPages.slice(0, 5).map(pageNum => ({
      id: pageNum,
      type: 'page' as const,
      title: `作品集页面 ${pageNum}`,
      image: `/pdf-images/portfolio-page-${pageNum}.jpg`,
      pageNumber: pageNum
    })),
    {
      id: 6,
      type: 'more' as const,
      title: '查看完整作品集',
      image: `/pdf-images/portfolio-page-6.jpg`,
      description: '查看完整的20页作品集内容'
    }
  ];

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
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
              {['首页', '工作履历', 'AI作品集', '策划作品集', '视频策划'].map((item) => (
                <a
                  key={item}
                  href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                    item === 'AI作品集' ? 'ai-portfolio' :
                    item === '策划作品集' ? 'planning-portfolio' : 'video-planning'}`}
                  className={`text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 font-medium ${
                    item === '策划作品集' ? 'text-[#D97758]' : ''
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
            <h1 className="text-5xl font-bold text-[#0a0a0a] mb-6">策划作品集</h1>
            <p className="text-xl text-[#0a0a0a]/80 max-w-2xl mx-auto">
              专业的内容策划与创意执行，展现品牌价值与传播效果
            </p>
          </div>

          {/* 作品集介绍 */}
          <div className="bg-[#E3D8AC] p-8 rounded-2xl mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-4">内容策划作品集</h2>
              <p className="text-[#0a0a0a]/80 leading-relaxed mb-6">
                本作品集收录了我在内容策划领域的代表性项目，包括品牌营销策划、视频内容制作、
                社交媒体运营等方面的成果。每个项目都体现了专业的策划能力和创新思维。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  品牌策划
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  内容营销
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  视频制作
                </span>
                <span className="px-4 py-2 bg-white text-[#0a0a0a] rounded-full text-sm font-medium">
                  社交媒体
                </span>
              </div>
            </div>
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
            {displayItems.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl overflow-hidden border border-[#E3D8AC] hover:shadow-lg transition-shadow duration-300 ${
                  item.type === 'more' ? 'bg-[#E3D8AC]' : ''
                }`}
              >
                <div className="relative group cursor-pointer" onClick={() => {
                  if (item.type === 'page') {
                    openImageModal(item.image);
                  }
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />

                  {item.type === 'page' && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}

                  {item.type === 'more' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">+</div>
                        <div className="text-lg font-medium">查看更多</div>
                        <div className="text-sm opacity-80">完整作品集</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">
                    {item.title}
                  </h3>

                  {item.type === 'page' && (
                    <>
                      <p className="text-[#0a0a0a]/80 mb-4">
                        作品集第 {item.pageNumber} 页内容
                      </p>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => openImageModal(item.image)}
                          className="inline-flex items-center space-x-2 text-[#D97758] hover:text-[#C96A45] transition-colors duration-200 font-medium"
                        >
                          <Maximize className="w-4 h-4" />
                          <span>查看大图</span>
                        </button>
                        <a
                          href={item.image}
                          download
                          className="inline-flex items-center space-x-2 text-[#0a0a0a]/60 hover:text-[#0a0a0a] transition-colors duration-200"
                        >
                          <Download className="w-4 h-4" />
                          <span>下载</span>
                        </a>
                      </div>
                    </>
                  )}

                  {item.type === 'more' && (
                    <>
                      <p className="text-[#0a0a0a]/80 mb-4">
                        {item.description}
                      </p>
                      <a
                        href="/pdf-images/"
                        className="inline-flex items-center space-x-2 text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 font-medium"
                      >
                        <span>查看完整作品集</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 图片模态框 */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="作品集页面"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}