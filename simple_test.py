#!/usr/bin/env python3
"""
简化版页面分析脚本
"""

import requests
import re

def simple_analysis():
    """简单分析页面状态"""
    url = "http://localhost:3000"

    print("🔍 页面快速分析...")
    print("=" * 50)

    try:
        # 获取页面
        response = requests.get(url, timeout=10)
        print(f"✅ 页面响应: {response.status_code}")

        if response.status_code != 200:
            return False

        html = response.text

        # 检查关键元素
        checks = [
            ("标题", "杜亚楠"),
            ("CSS类", "bg-background"),
            ("CSS变量", "text-foreground"),
            ("布局", "max-w-7xl"),
            ("导航", "<nav"),
            ("内容区块", "<section"),
        ]

        print("\n📋 关键元素检查:")
        for name, pattern in checks:
            if pattern in html:
                print(f"✅ {name}")
            else:
                print(f"❌ {name}")

        # 检查CSS
        css_url = "http://localhost:3000/_next/static/css/app/layout.css"
        css_response = requests.get(css_url, timeout=10)

        if css_response.status_code == 200:
            print(f"✅ CSS文件可访问 ({len(css_response.text)} 字节)")
            css = css_response.text

            css_checks = [
                ("CSS变量", "--background:"),
                ("主题配置", "@theme inline"),
                ("Body样式", "body {"),
            ]

            for name, pattern in css_checks:
                if pattern in css:
                    print(f"✅ {name}")
                else:
                    print(f"❌ {name}")
        else:
            print(f"❌ CSS文件无法访问: {css_response.status_code}")

        # 简单评估
        print("\n🎯 评估:")
        all_good = all([
            "杜亚楠" in html,
            "bg-background" in html,
            "text-foreground" in html,
            "<nav" in html,
            css_response.status_code == 200
        ])

        if all_good:
            print("✅ 页面结构和样式应该正常")
            print("💡 如果浏览器显示异常，建议:")
            print("   • 硬刷新页面 (Ctrl+F5)")
            print("   • 清除浏览器缓存")
            print("   • 检查浏览器开发者工具")
        else:
            print("❌ 页面可能存在问题")

        return True

    except Exception as e:
        print(f"❌ 分析失败: {e}")
        return False

if __name__ == "__main__":
    simple_analysis()