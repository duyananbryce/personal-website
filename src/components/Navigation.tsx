'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = '首页' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['首页', '工作履历', 'AI作品集', '策划作品集', '视频策划'];

  return (
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
            {navItems.map((item) => (
              <a
                key={item}
                href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                  item === 'AI作品集' ? 'ai-portfolio' :
                  item === '策划作品集' ? 'planning-portfolio' : 'video-planning'}`}
                className={`text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 font-medium ${
                  item === currentPage ? 'text-[#D97758]' : ''
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
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === '首页' ? '/' : `/${item === '工作履历' ? 'project-manager' :
                    item === 'AI作品集' ? 'ai-portfolio' :
                    item === '策划作品集' ? 'planning-portfolio' : 'video-planning'}`}
                  className={`block text-[#0a0a0a] hover:text-[#D97758] transition-colors duration-200 font-medium text-lg ${
                    item === currentPage ? 'text-[#D97758]' : ''
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
  );
}