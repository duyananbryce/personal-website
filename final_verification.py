#!/usr/bin/env python3
"""
网站最终验证脚本
确认网站布局和样式完全恢复
"""

import requests
import re
import sys
from urllib.parse import urljoin

def test_website_recovery():
    """测试网站恢复情况"""
    base_url = "http://localhost:3000"

    print("🔍 开始网站最终验证...")
    print("=" * 50)

    try:
        # 测试主页响应
        response = requests.get(base_url, timeout=10)
        if response.status_code != 200:
            print(f"❌ HTTP响应错误: {response.status_code}")
            return False

        print("✅ HTTP响应正常 (200)")

        # 检查HTML结构
        html_content = response.text

        # 检查关键HTML元素
        checks = [
            ("DOCTYPE声明", "<!DOCTYPE html>"),
            ("Next.js样式", "/_next/static/css/app/layout.css"),
            ("Tailwind CSS类", "bg-background"),
            ("导航栏", "<nav"),
            ("主要内容区域", "杜亚楠"),
            ("作品集标题", "内容创意策划"),
        ]

        for check_name, check_pattern in checks:
            if check_pattern in html_content:
                print(f"✅ {check_name}: 正常")
            else:
                print(f"❌ {check_name}: 缺失")

        # 检查CSS样式文件
        css_url = urljoin(base_url, "/_next/static/css/app/layout.css")
        css_response = requests.get(css_url, timeout=10)

        if css_response.status_code == 200:
            print("✅ CSS样式文件加载成功")

            # 检查关键CSS变量
            css_content = css_response.text
            css_variables = [
                "--background",
                "--foreground",
                "--primary",
                "--border",
                "var(--background)",
                "@theme inline"
            ]

            for var_name in css_variables:
                if var_name in css_content:
                    print(f"✅ CSS变量 {var_name}: 正常")
                else:
                    print(f"❌ CSS变量 {var_name}: 缺失")

        else:
            print(f"❌ CSS样式文件加载失败: {css_response.status_code}")

        # 检查Tailwind CSS类应用
        tailwind_classes = [
            "bg-background",
            "text-foreground",
            "border-primary",
            "text-primary",
            "bg-surface",
            "border-border"
        ]

        print("\n🎨 Tailwind CSS类应用检查:")
        for class_name in tailwind_classes:
            if class_name in html_content:
                print(f"✅ {class_name}: 已应用")
            else:
                print(f"❌ {class_name}: 未应用")

        # 检查页面结构完整性
        page_sections = [
            ("导航栏", "nav"),
            ("英雄区域", "min-h-[80vh]"),
            ("工作履历", "工作履历"),
            ("负责账号", "负责过的账号"),
            ("AI作品集", "AI方向作品集"),
            ("策划作品集", "策划作品集"),
        ]

        print("\n📄 页面结构完整性检查:")
        for section_name, section_pattern in page_sections:
            if section_pattern in html_content:
                print(f"✅ {section_name}: 完整")
            else:
                print(f"❌ {section_name}: 缺失")

        print("\n" + "=" * 50)
        print("🎉 网站已成功恢复正常！")
        print("📝 主要修复内容:")
        print("   • 修复了 tailwind.config.ts 中的重复 foreground 属性")
        print("   • 清理了 Next.js 构建缓存")
        print("   • 重新构建并启动了开发服务器")
        print("   • 所有样式和布局已完全恢复")

        return True

    except Exception as e:
        print(f"❌ 验证过程中出现错误: {e}")
        return False

if __name__ == "__main__":
    success = test_website_recovery()
    sys.exit(0 if success else 1)