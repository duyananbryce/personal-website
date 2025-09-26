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

  // 滚动事件监听：实现导航栏背景效果
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 滚动超过10px时显示背景
    };
    
    // 服务器端渲染兼容性检查
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // 导航菜单项配置
  const navItems = ['首页', '工作履历', 'AI作品集', '策划作品集', '视频策划'];

  return (
    <>
      {/* 导航栏容器 - 固定顶部，带滚动效果 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background'
      } border-b border-gray-200`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo区域 */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl text-foreground">杜亚楠的作品集</span>
            </div>
          </div>

          {/* 桌面端导航菜单 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                  item === 'AI作品集' ? 'ai-portfolio' :
                  item === '策划作品集' ? 'planning-portfolio' : 'video-planning'}`}
                className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                  item === currentPage ? 'text-primary' : ''
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
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 移动端下拉菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-background">
            <div className="px-6 py-6 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                    item === 'AI作品集' ? 'ai-portfolio' :
                    item === '策划作品集' ? 'planning-portfolio' : 'video-planning'}`}
                  className={`block text-foreground hover:text-primary transition-colors duration-200 font-medium text-lg ${
                    item === currentPage ? 'text-primary' : ''
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
    </>
  );
}