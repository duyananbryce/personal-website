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
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const projects = [
    {
      id: 1,
      company: "啊哈娱乐",
      position: "市场营销经理",
      period: "2024.10 - 至今",
      location: "北京",
      description: "负责啊哈娱乐旗下《伍六七》IP的市场营销工作，包含《伍六七》动画第五季的市场营销工作、以及音乐巡演、手游、衍生品等市场推广。",
      achievements: [
        "制定《伍六七》动画第五季开播的市场营销方案，并跟进落地执行",
        "负责伍六七手游《伍六七：暗影交锋》的首曝活动推广方案，确保首曝期间各平台的物料按时制作并上线，助力手游 TAPTAP 预约超 170 万",
        "负责伍六七 2024 音乐巡演的线上营销规划方案、VJ 视频监制，以及巡演纪录片的拍摄跟进，确保四场巡演在各平台的传播热度，场均票务售罄时间 2.5 天",
        "负责《伍六七》周边衍生品的营销企划以及视觉创意",
        "负责《伍六七》2025 音乐巡演 VJ 视觉监制"
      ],
      highlights: ["IP营销", "动画推广", "音乐巡演", "手游推广", "衍生品"]
    },
    {
      id: 2,
      company: "猿辅导在线教育",
      position: "视频编导",
      period: "2022.12 - 2024.10",
      location: "北京",
      description: "负责猿辅导电商直播的短视频生产工作，包括脚本创作、拍摄、剪辑等；参与信息流短视频投放工作，负责千川、随心推的推广计划搭建；负责电商直播间的搭建、日常维护，以及户外直播活动的支持。",
      achievements: [
        "负责猿辅导小学部图书相关的信息流视频制作，包含脚本、拍摄、剪辑、投放等流程",
        "负责电商直播部门的相关直播间搭建，参与直播间搭建全流程，保障日常直播的顺利进行"
      ],
      highlights: ["视频制作", "直播运营", "信息流投放", "脚本创作"]
    },
    {
      id: 3,
      company: "站酷网",
      position: "抖音短视频运营",
      period: "2021.8 - 2022.12",
      location: "北京",
      description: "从零到一搭建新媒体视频矩阵，负责站酷网官方抖音、B站、小红书账号的视频运营；为公司相关活动提供内容创意，提升活动效果。",
      achievements: [
        "独立负责账号选题、文案、分镜、配音以及视频后期监制，从0到1运营，账号A抖音、B站累计涨粉7万+，播放2100万；账号B涨粉7万，累计播放800万",
        "小红书渠道累计发布视频49条，播放：158万，涨粉1万+，单条视频最高播放量：55万，7.5万点赞",
        "为公司重大节点的品牌活动宣发，提供内容策划和传播策略支持"
      ],
      highlights: ["账号运营", "内容策划", "视频制作", "品牌传播"]
    },
    {
      id: 4,
      company: "猿辅导在线教育",
      position: "内容运营",
      period: "2020.6 - 2021.8",
      location: "北京",
      description: "独立负责小猿搜题APP抖音、B站官方账号的内容更新和账号运营；负责小猿搜题社区多个栏目的内容制作；在重大活动节点策划品牌内容活动和落地执行。",
      achievements: [
        "视频内容策划：2021年1月开始，负责小猿搜题APP抖音账号运营，独立完成脚本、配音、剪辑等工作，0成本推动账号数据增长。运营期间累计涨粉25w，新增播放9000w+",
        "文字内容策划：担任科普、数据调查、学习技巧等等多个栏目的内容主笔，每周产出 3-5 篇优质文章，多篇内容成为爆款",
        "品牌内容推广：在重大活动节点参与的市场营销方案的策划与落地执行"
      ],
      highlights: ["账号运营", "内容创作", "爆款策划", "品牌推广"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation currentPage="工作履历" />

      {/* 主要内容 */}
      <main className="pt-64 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* 页面标题 */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">工作履历</h1>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              专业的内容策划与项目管理经验，致力于打造优质内容与品牌价值
            </p>
          </div>

          {/* 时间轴 */}
          <div className="relative">
            {/* 时间轴线 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {projects.map((project, index) => (
              <div key={project.id} className="relative mb-12">
                {/* 时间轴节点 */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                {/* 项目卡片 */}
                <div className="ml-16">
                  <div className="bg-surface p-8 rounded-2xl shadow-sm border border-gray-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{project.company}</h3>
                        <p className="text-lg text-primary font-medium">{project.position}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-2xl text-foreground-secondary mt-2 md:mt-0">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5" />
                          <span>{project.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground-secondary mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">工作成果：</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-foreground-secondary">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

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
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}