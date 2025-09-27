#!/usr/bin/env python3
"""
可视化页面测试脚本
模拟浏览器行为分析页面渲染问题
"""

import requests
import re
import json
from urllib.parse import urljoin

def create_visual_report():
    """创建可视化报告"""
    url = "http://localhost:3000"

    print("🔍 创建可视化页面分析报告...")
    print("=" * 60)

    try:
        # 获取页面内容
        response = requests.get(url, timeout=15)
        if response.status_code != 200:
            print(f"❌ 页面访问失败: {response.status_code}")
            return False

        html_content = response.text

        # 1. 页面基本信息
        print("📊 页面基本信息:")
        print(f"   • 状态码: {response.status_code}")
        print(f"   • 页面大小: {len(html_content):,} 字符")
        print(f"   • 内容类型: {response.headers.get('content-type', '未知')}")

        # 2. 样式系统分析
        print("\n🎨 样式系统分析:")

        # 检查CSS文件链接
        css_match = re.search(r'href="([^"]*layout\.css[^"]*)"', html_content)
        if css_match:
            css_url = urljoin(url, css_match.group(1))
            print(f"   ✅ 主CSS文件: {css_url}")

            # 尝试获取CSS内容
            css_response = requests.get(css_url, timeout=10)
            if css_response.status_code == 200:
                css_content = css_response.text
                css_size = len(css_content)
                print(f"   ✅ CSS文件大小: {css_size:,} 字节")

                # 检查关键CSS组件
                critical_css_elements = {
                    "CSS变量定义": r":root\s*{",
                    "Tailwind主题": r"@theme inline",
                    "背景色变量": r"--background:",
                    "文字色变量": r"--foreground:",
                    "主色调变量": r"--primary:",
                    "边框色变量": r"--border:",
                    "Body样式": r"body\s*{",
                    "Tailwind指令": r"@layer",
                }

                for element_name, pattern in critical_css_elements:
                    if re.search(pattern, css_content):
                        print(f"   ✅ {element_name}")
                    else:
                        print(f"   ❌ {element_name}")

            else:
                print(f"   ❌ CSS文件加载失败: {css_response.status_code}")
        else:
            print("   ❌ 未找到主CSS文件")

        # 3. Tailwind CSS应用分析
        print("\n🎯 Tailwind CSS应用分析:")

        # 关键样式类统计
        tailwind_classes = {
            # 布局类
            "container": r"max-w-7xl|container",
            "grid": r"grid\s",
            "flex": r"flex\s",
            "padding": r"p-\d+|px-\d+|py-\d+",
            "margin": r"m-\d+|mx-\d+|my-\d+",

            # 颜色类
            "bg-background": r"bg-background",
            "text-foreground": r"text-foreground",
            "text-primary": r"text-primary",
            "border-primary": r"border-primary",
            "bg-surface": r"bg-surface",
            "border-border": r"border-border",

            # 交互类
            "hover": r"hover:",
            "transition": r"transition-",
            "rounded": r"rounded-",
            "shadow": r"shadow-",
        }

        for category, pattern in tailwind_classes.items():
            matches = re.findall(pattern, html_content)
            count = len(matches)
            status = "✅" if count > 0 else "❌"
            print(f"   {status} {category}: {count}次使用")

        # 4. 页面结构分析
        print("\n🏗️  页面结构分析:")

        structure_elements = {
            "导航栏": r"<nav",
            "主要区域": r"<(main|section)",
            "标题": r"<h[1-6]",
            "段落": r"<p",
            "链接": r"<a\s",
            "图片": r"<img",
            "按钮": r"<button",
            "容器": r"<div",
        }

        for element_name, pattern in structure_elements.items():
            matches = re.findall(pattern, html_content)
            count = len(matches)
            print(f"   • {element_name}: {count}个")

        # 5. 内容完整性检查
        print("\n📋 内容完整性检查:")

        content_checks = [
            ("个人姓名", "杜亚楠"),
            ("职业标题", "内容创意策划"),
            ("工作履历", "工作履历"),
            ("负责账号", "负责过的账号"),
            ("AI作品集", "AI方向作品集"),
            ("策划作品集", "策划作品集"),
            ("数据统计", "15亿\+|1000万\+|50\+"),
        ]

        for check_name, pattern in content_checks:
            if re.search(pattern, html_content):
                print(f"   ✅ {check_name}")
            else:
                print(f"   ❌ {check_name}")

        # 6. 性能指标
        print("\n⚡ 性能指标:")

        # 计算页面复杂度
        div_count = html_content.count('<div')
        img_count = html_content.count('<img')
        link_count = html_content.count('<a ')
        script_count = html_content.count('<script')

        print(f"   • DIV元素: {div_count}")
        print(f"   • 图片元素: {img_count}")
        print(f"   • 链接元素: {link_count}")
        print(f"   • 脚本元素: {script_count}")

        # 7. 问题诊断
        print("\n🔧 问题诊断:")

        # 检查可能的渲染问题
        issues_found = []

        # 检查CSS类应用是否完整
        critical_classes = ["bg-background", "text-foreground", "border-primary"]
        for css_class in critical_classes:
            if css_class not in html_content:
                issues_found.append(f"缺少关键CSS类: {css_class}")

        # 检查是否有JavaScript错误
        if "error" in html_content.lower():
            issues_found.append("页面可能包含JavaScript错误")

        # 检查样式表是否正确加载
        if 'rel="stylesheet"' not in html_content:
            issues_found.append("样式表链接可能有问题")

        if issues_found:
            print("   ⚠️  发现以下问题:")
            for issue in issues_found:
                print(f"      • {issue}")
        else:
            print("   ✅ 未发现明显问题")

        # 8. 最终评估
        print("\n" + "=" * 60)
        print("📈 最终评估:")

        # 计算健康度分数
        score = 0
        total_checks = 0

        # 基础功能 (20分)
        if response.status_code == 200:
            score += 20
        total_checks += 1

        # 样式系统 (30分)
        css_score = 0
        if 'layout.css' in html_content:
            css_score += 10
        if "bg-background" in html_content:
            css_score += 10
        if "text-foreground" in html_content:
            css_score += 10
        score += css_score
        total_checks += 1

        # 内容完整性 (30分)
        content_score = 0
        if "杜亚楠" in html_content:
            content_score += 10
        if "工作履历" in html_content:
            content_score += 10
        if "作品集" in html_content:
            content_score += 10
        score += content_score
        total_checks += 1

        # 结构完整性 (20分)
        structure_score = 0
        if "<nav" in html_content:
            structure_score += 5
        if "<section" in html_content:
            structure_score += 5
        if "<h1" in html_content:
            structure_score += 5
        if "grid" in html_content or "flex" in html_content:
            structure_score += 5
        score += structure_score
        total_checks += 1

        overall_score = score // total_checks if total_checks > 0 else 0
        print(f"   • 整体健康度: {overall_score}/100")

        if overall_score >= 80:
            print("   ✅ 页面状态优秀")
        elif overall_score >= 60:
            print("   ⚠️  页面状态良好，但有改进空间")
        else:
            print("   ❌ 页面存在明显问题")

        # 9. 建议
        print("\n💡 建议:")
        if overall_score < 80:
            print("   • 检查CSS文件是否正确加载")
            print("   • 验证Tailwind CSS配置")
            print("   • 检查浏览器开发者工具的Console和Network标签")
            print("   • 尝试硬刷新页面 (Ctrl+F5)")
        else:
            print("   • 页面基本正常，如仍有视觉问题建议:")
            print("   • 检查浏览器兼容性")
            print("   • 验证字体加载情况")
            print("   • 检查浏览器缩放设置")

        print(f"\n🌐 访问地址: {url}")
        print("📱 建议在多个浏览器中测试访问")

        return True

    except Exception as e:
        print(f"❌ 分析过程中出错: {e}")
        return False

if __name__ == "__main__":
    success = create_visual_report()
    print(f"\n分析完成: {'成功' if success else '失败'}")