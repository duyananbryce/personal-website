/**
 * 导航栏组件 - 杜亚楠个人作品集网站
 * 
 * 本组件实现了网站的统一导航栏，支持：
 * - 滚动时背景变化效果
 * - 当前页面高亮显示
 * - 响应式设计（桌面端和移动端）
 * - 移动端汉堡菜单
 * 
 * @param {string} currentPage - 当前页面名称，用于高亮显示
 */
'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/** 导航组件属性接口 */
interface NavigationProps {
  currentPage?: string;
}

/**
 * 导航栏主组件
 * 
 * @param {NavigationProps} props - 组件属性
 * @returns {JSX.Element} 导航栏组件
 */
export default function Navigation({ currentPage = '首页' }: NavigationProps) {
  // 状态管理：滚动效果、移动端菜单
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 处理组件挂载和滚动状态
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 滚动超过10px时显示背景
    };

    // 服务器端渲染兼容性检查
    if (typeof window !== 'undefined') {
      // 立即检查滚动位置
      handleScroll();

      // 添加滚动事件监听
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // 导航菜单项配置
  const navItems = ['首页', '工作履历', 'AI作品集', '策划作品集', '视频策划'];

  return (
    <>
      {/* 顶部导航栏 - 现代简约主义透明背景 */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-background/90 backdrop-blur-md shadow-sm border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-200">
                <div className="w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="logo-clean w-full h-full flex items-center justify-center">
                    <img src="/assets/icons/logo.svg" alt="杜亚楠的作品集" className="max-w-full max-h-full" />
                  </div>
                </div>
                <span className="font-bold text-2xl text-foreground tracking-tight">作品集</span>
              </a>
            </div>

            {/* 桌面端导航 */}
            <div className="hidden lg:flex items-center space-x-12">
              {['首页', '工作履历', 'AI作品集', '策划作品集', '视频策划'].map((item) => (
                <a
                  key={item}
                  href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                    item === 'AI作品集' ? 'ai-portfolio' :
                    item === '策划作品集' ? 'planning-portfolio' :
                    item === '视频策划' ? 'video-planning' : ''}`}
                  className={`relative text-foreground hover:text-primary transition-colors duration-200 font-medium text-lg tracking-wide ${
                    item === currentPage ? 'text-primary' : ''
                  }`}
                >
                  {item}
                  {item === currentPage && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </a>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* 移动端菜单 */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
              <div className="px-6 py-8 space-y-6">
                {['首页', '工作履历', 'AI作品集', '策划作品集', '视频策划'].map((item) => (
                  <a
                    key={item}
                    href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                      item === 'AI作品集' ? 'ai-portfolio' :
                      item === '策划作品集' ? 'planning-portfolio' :
                      item === '视频策划' ? 'video-planning' : ''}`}
                    className={`relative block text-foreground hover:text-primary transition-colors duration-200 font-medium text-xl py-2 ${
                      item === currentPage ? 'text-primary' : ''
                    }`}
                  >
                    {item}
                    {item === currentPage && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}