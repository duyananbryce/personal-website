'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';

export default function PlanningPortfolio() {
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

  // 策划作品集页面数据
  const portfolioPages = [
    { id: 1, image: "/planning-portfolio/page-1.png", title: "策划作品集 - 第1页" },
    { id: 2, image: "/planning-portfolio/page-2.png", title: "策划作品集 - 第2页" },
    { id: 3, image: "/planning-portfolio/page-3.png", title: "策划作品集 - 第3页" },
    { id: 4, image: "/planning-portfolio/page-4.png", title: "策划作品集 - 第4页" },
    { id: 5, image: "/planning-portfolio/page-5.png", title: "策划作品集 - 第5页" },
    { id: 6, image: "/planning-portfolio/page-6.png", title: "策划作品集 - 第6页" },
    { id: 7, image: "/planning-portfolio/page-7.png", title: "策划作品集 - 第7页" },
    { id: 8, image: "/planning-portfolio/page-8.png", title: "策划作品集 - 第8页" },
    { id: 9, image: "/planning-portfolio/page-9.png", title: "策划作品集 - 第9页" },
    { id: 10, image: "/planning-portfolio/page-10.png", title: "策划作品集 - 第10页" },
    { id: 11, image: "/planning-portfolio/page-11.png", title: "策划作品集 - 第11页" },
    { id: 12, image: "/planning-portfolio/page-12.png", title: "策划作品集 - 第12页" },
    { id: 13, image: "/planning-portfolio/page-13.png", title: "策划作品集 - 第13页" },
    { id: 14, image: "/planning-portfolio/page-14.png", title: "策划作品集 - 第14页" },
    { id: 15, image: "/planning-portfolio/page-15.png", title: "策划作品集 - 第15页" },
    { id: 16, image: "/planning-portfolio/page-16.png", title: "策划作品集 - 第16页" },
    { id: 17, image: "/planning-portfolio/page-17.png", title: "策划作品集 - 第17页" },
    { id: 18, image: "/planning-portfolio/page-18.png", title: "策划作品集 - 第18页" },
    { id: 19, image: "/planning-portfolio/page-19.png", title: "策划作品集 - 第19页" },
    { id: 20, image: "/planning-portfolio/page-20.png", title: "策划作品集 - 第20页" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation currentPage="策划作品集" />

      {/* 主要内容 */}
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6">策划作品集</h1>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              专业的内容策划与创意执行，展现品牌价值与传播效果
            </p>
          </div>

          {/* 作品集介绍 */}
          <div className="bg-primary/5 p-8 rounded-2xl mb-12 border border-primary/20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">内容策划作品集</h2>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                本作品集收录了我在内容策划领域的代表性项目，包括品牌营销策划、视频内容制作、
                社交媒体运营等方面的成果。每个项目都体现了专业的策划能力和创新思维。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  品牌策划
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  内容营销
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  视频制作
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  社交媒体
                </span>
              </div>
            </div>
          </div>

          {/* 页面展示区域 */}
          <div className="flex flex-col items-center">
            {portfolioPages.map((page, index) => (
              <div
                key={page.id}
                className="relative group w-full max-w-5xl mx-auto mb-6"
              >
                {/* 页面容器 - 模拟真实页面效果 */}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden
                            border-2 border-gray-100
                            hover:shadow-2xl transition-all duration-500
                            hover:border-primary/20
                            transform hover:scale-[1.02]">
                  
                  {/* 页面阴影效果 */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* 页面图片 */}
                  <div className="relative w-full">
                    <img
                      src={page.image}
                      alt={page.title}
                      className="w-full h-auto object-contain"
                      loading={index < 3 ? 'eager' : 'lazy'} // 前三页优先加载
                    />
                    
                    {/* 页码指示器 */}
                    <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      {page.id} / {portfolioPages.length}
                    </div>

                    {/* 页面装饰线条 */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  </div>
                </div>

                {/* 页面间的细缝效果 */}
                {index < portfolioPages.length - 1 && (
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60"></div>
                )}

                {/* 页面标题 (悬停时显示) */}
                <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-l-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                  第{page.id}页
                </div>
              </div>
            ))}
          </div>

          {/* 返回顶部按钮 */}
          <div className="text-center mt-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium"
            >
              <span>返回顶部</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}