#!/usr/bin/env python3
"""
直接页面调试脚本
使用requests进行深度页面分析
"""

import requests
import re
import json
from urllib.parse import urljoin

def analyze_page_issues():
    """深度分析页面问题"""
    url = "http://localhost:3000"

    print("🔍 开始深度页面分析...")
    print("=" * 60)

    try:
        # 获取页面内容
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }

        response = requests.get(url, headers=headers, timeout=15)
        print(f"✅ 页面响应: {response.status_code}")

        if response.status_code != 200:
            print(f"❌ 页面无法访问: {response.status_code}")
            return False

        html_content = response.text
        print(f"📄 页面大小: {len(html_content)} 字符")

        # 1. 检查基础结构
        print("\n📋 基础结构检查:")
        basic_checks = [
            ("DOCTYPE", "<!DOCTYPE html>"),
            ("HTML标签", "<html"),
            ("Head标签", "<head"),
            ("Body标签", "<body"),
            ("UTF-8编码", "utf-8"),
        ]

        for name, pattern in basic_checks:
            if pattern in html_content:
                print(f"✅ {name}")
            else:
                print(f"❌ {name}")

        # 2. 检查CSS链接
        print("\n🎨 CSS样式检查:")
        css_links = re.findall(r'<link[^>]*href="([^"]*\.css)"[^>]*>', html_content)
        print(f"发现 {len(css_links)} 个CSS文件:")

        for css_link in css_links:
            if 'layout.css' in css_link:
                print(f"✅ 主要样式: {css_link}")
                # 尝试获取CSS内容
                css_url = urljoin(url, css_link)
                try:
                    css_response = requests.get(css_url, timeout=10)
                    if css_response.status_code == 200:
                        css_content = css_response.text

                        # 检查关键CSS内容
                        key_indicators = [
                            ("CSS变量", "--background:"),
                            ("Tailwind主题", "@theme inline"),
                            ("背景色", "var(--background)"),
                            ("前景色", "var(--foreground)"),
                            ("主色调", "var(--primary)"),
                            ("边框色", "var(--border)"),
                        ]

                        for ind_name, ind_pattern in key_indicators:
                            if ind_pattern in css_content:
                                print(f"  ✅ {ind_name}")
                            else:
                                print(f"  ❌ {ind_name}")

                        # 检查Tailwind CSS特征
                        if "@layer" in css_content:
                            print("  ✅ Tailwind CSS @layer 指令")
                        if "@theme" in css_content:
                            print("  ✅ Tailwind CSS @theme 指令")

                    else:
                        print(f"  ❌ CSS文件加载失败: {css_response.status_code}")
                except Exception as e:
                    print(f"  ❌ CSS文件访问失败: {e}")
            else:
                print(f"ℹ️  其他样式: {css_link}")

        # 3. 检查关键样式类应用
        print("\n🎯 样式类应用检查:")

        # 检查Tailwind CSS类使用情况
        critical_classes = {
            "bg-background": "背景色类",
            "text-foreground": "文字色类",
            "border-primary": "主边框类",
            "bg-surface": "表面背景类",
            "border-border": "普通边框类",
            "text-primary": "主文字色类",
            "max-w-7xl": "容器宽度类",
            "grid": "网格布局类",
            "flex": "弹性布局类",
            "rounded-2xl": "圆角类",
            "hover:shadow-lg": "悬停阴影类"
        }

        for css_class, desc in critical_classes.items():
            count = html_content.count(css_class)
            status = "✅" if count > 0 else "❌"
            print(f"{status} {desc} ({css_class}): {count}次")

        # 4. 检查页面布局结构
        print("\n🏗️  页面布局检查:")

        layout_structures = {
            "导航容器": r'<nav[^>]*>',
            "主要内容区": r'<main[^>]*>|<section[^>]*class="[^"]*min-h-[80vh]',
            "英雄区域": r'杜亚楠.*内容创意策划',
            "工作履历": r'工作履历',
            "账号展示": r'负责过的账号',
            "作品集网格": r'grid[^>]*gap-8',
            "卡片容器": r'bg-surface[^>]*rounded-2xl',
            "时间线": r'absolute.*left-8.*w-0\.5.*bg-gradient'
        }

        for struct_name, pattern in layout_structures.items():
            if re.search(pattern, html_content):
                print(f"✅ {struct_name}")
            else:
                print(f"❌ {struct_name}")

        # 5. 检查可能的样式问题
        print("\n⚠️  潜在问题检查:")

        # 检查是否有内联样式覆盖
        inline_styles = re.findall(r'style="[^"]*"', html_content)
        if inline_styles:
            print(f"⚠️  发现 {len(inline_styles)} 个内联样式（可能影响布局）")

        # 检查是否有style标签
        style_tags = re.findall(r'<style[^>]*>.*?</style>', html_content, re.DOTALL)
        if style_tags:
            print(f"⚠️  发现 {len(style_tags)} 个style标签")

        # 检查是否有JavaScript错误
        if "error" in html_content.lower():
            print("⚠️  页面可能包含错误信息")

        # 6. 尝试诊断具体问题
        print("\n🔧 问题诊断:")

        # 检查是否所有关键样式类都有对应的CSS变量
        css_variables = ["--background", "--foreground", "--primary", "--border", "--surface"]

        # 尝试获取CSS内容
        css_url = urljoin(url, "/_next/static/css/app/layout.css")
        try:
            css_response = requests.get(css_url, timeout=10)
            if css_response.status_code == 200:
                css_content = css_response.text

                print("CSS变量定义检查:")
                for var in css_variables:
                    if f"{var}:" in css_content:
                        print(f"✅ {var}")
                    else:
                        print(f"❌ {var} - 这可能是样式问题的根源!")
            else:
                print(f"❌ 无法获取CSS文件: {css_response.status_code}")
        except Exception as e:
            print(f"❌ CSS文件访问失败: {e}")

        # 7. 最终评估
        print("\n" + "=" * 60)
        print("📊 最终评估:")

        # 计算样式类应用率
        applied_classes = sum(1 for css_class in critical_classes.keys() if html_content.count(css_class) > 0)
        total_classes = len(critical_classes)
        application_rate = (applied_classes / total_classes) * 100

        print(f"样式类应用率: {application_rate:.1f}% ({applied_classes}/{total_classes})")

        if application_rate >= 80:
            print("✅ 样式类应用良好")
        elif application_rate >= 50:
            print("⚠️  样式类应用部分正常")
        else:
            print("❌ 样式类应用存在问题")

        return True

    except requests.exceptions.ConnectionRefused:
        print("❌ 连接被拒绝 - 开发服务器可能未启动")
        return False
    except requests.exceptions.Timeout:
        print("❌ 请求超时 - 服务器响应太慢")
        return False
    except Exception as e:
        print(f"❌ 分析过程中出错: {e}")
        return False

if __name__ == "__main__":
    success = analyze_page_issues()
    print(f"\n分析完成: {'成功' if success else '失败'}")