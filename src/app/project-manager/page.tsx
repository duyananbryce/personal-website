'use client';

import { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function ProjectManager() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      company: "啊哈娱乐 (Aha Entertainment)",
      position: "内容策划经理",
      period: "2020.03 - 2021.08",
      location: "北京",
      description: "负责短视频内容策划与制作管理",
      achievements: [
        "策划制作短视频内容累计获得9000万+播放量",
        "管理内容团队，提升内容质量和传播效果",
        "与平台合作，优化内容分发策略"
      ],
      highlights: ["9000万+播放量", "团队管理", "平台合作"]
    },
    {
      id: 2,
      company: "猿辅导 (Yuanfudao)",
      position: "营销策划专员",
      period: "2019.06 - 2020.02",
      location: "北京",
      description: "负责教育产品营销策划与品牌推广",
      achievements: [
        "策划多场成功的品牌营销活动",
        "负责社交媒体内容策略制定",
        "协助品牌知名度提升和用户增长"
      ],
      highlights: ["品牌营销", "社交媒体", "用户增长"]
    },
    {
      id: 3,
      company: "站酷网 (Zcool)",
      position: "视频内容策划",
      period: "2018.09 - 2019.05",
      location: "北京",
      description: "负责创意设计平台的视频内容策划",
      achievements: [
        "策划制作设计师访谈系列视频",
        "与知名品牌合作推广设计理念",
        "提升平台用户粘性和活跃度"
      ],
      highlights: ["品牌合作", "设计师访谈", "用户增长"]
    },
    {
      id: 4,
      company: "个人项目",
      position: "内容创作者",
      period: "2017.06 - 至今",
      location: "北京",
      description: "个人抖音账号运营与内容创作",
      achievements: [
        "个人抖音账号粉丝增长至100万+",
        "创作多个爆款视频内容",
        "探索短视频内容创新形式"
      ],
      highlights: ["100万+粉丝", "爆款内容", "创新形式"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#0a0a0a]">
      <Navigation currentPage="工作履历" />

      {/* 主要内容 */}
      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* 页面标题 */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#0a0a0a] mb-6">项目经理</h1>
            <p className="text-xl text-[#0a0a0a]/80 max-w-2xl mx-auto">
              专业的内容策划与项目管理经验，致力于打造优质内容与品牌价值
            </p>
          </div>

          {/* 时间轴 */}
          <div className="relative">
            {/* 时间轴线 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E3D8AC]"></div>

            {projects.map((project, index) => (
              <div key={project.id} className="relative mb-12">
                {/* 时间轴节点 */}
                <div className="absolute left-6 w-4 h-4 bg-[#D97758] rounded-full border-4 border-[#FAFAF5]"></div>

                {/* 项目卡片 */}
                <div className="ml-16">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E3D8AC]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a0a0a] mb-2">{project.company}</h3>
                        <p className="text-lg text-[#D97758] font-medium">{project.position}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-[#0a0a0a]/60">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[#0a0a0a]/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-[#0a0a0a] mb-3">主要成就：</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-[#D97758] rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-[#0a0a0a]/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
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
      </main>
    </div>
  );
}