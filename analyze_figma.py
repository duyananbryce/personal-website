#!/usr/bin/env python3
import json
import struct
import zipfile
import os
from typing import Dict, Any

def parse_figma_file(fig_path: str) -> Dict[str, Any]:
    """解析Figma文件并提取设计信息"""
    try:
        # Figma文件实际上是zip压缩包
        with zipfile.ZipFile(fig_path, 'r') as zip_ref:
            # 列出文件内容
            file_list = zip_ref.namelist()
            print("Figma文件包含的文件:")
            for file in file_list:
                print(f"  - {file}")
            
            # 查找主要的JSON文件
            main_json = None
            for file in file_list:
                if file == 'canvas.json' or file.endswith('.json'):
                    with zip_ref.open(file) as f:
                        content = f.read().decode('utf-8')
                        try:
                            data = json.loads(content)
                            main_json = data
                            print(f"成功解析: {file}")
                            break
                        except json.JSONDecodeError:
                            continue
            
            if main_json:
                return extract_design_info(main_json)
            else:
                print("未找到有效的JSON数据")
                return {}
                
    except Exception as e:
        print(f"解析Figma文件时出错: {e}")
        return {}

def extract_design_info(data: Dict[str, Any]) -> Dict[str, Any]:
    """从Figma数据中提取设计信息"""
    design_info = {
        'colors': set(),
        'fonts': set(),
        'components': [],
        'styles': {}
    }
    
    def traverse_node(node):
        if isinstance(node, dict):
            # 提取颜色信息
            if 'fills' in node:
                for fill in node['fills']:
                    if 'color' in fill:
                        color = fill['color']
                        # 将RGBA转换为十六进制
                        if color:
                            r = int(color.get('r', 0) * 255)
                            g = int(color.get('g', 0) * 255)
                            b = int(color.get('b', 0) * 255)
                            a = color.get('a', 1)
                            hex_color = f"#{r:02x}{g:02x}{b:02x}"
                            design_info['colors'].add(hex_color)
            
            # 提取字体信息
            if 'style' in node:
                style = node['style']
                if 'fontFamily' in style:
                    design_info['fonts'].add(style['fontFamily'])
                if 'fontSize' in style:
                    design_info['styles']['fontSize'] = style['fontSize']
                if 'fontWeight' in style:
                    design_info['styles']['fontWeight'] = style['fontWeight']
            
            # 递归遍历子节点
            if 'children' in node:
                for child in node['children']:
                    traverse_node(child)
    
    if 'document' in data:
        traverse_node(data['document'])
    
    return design_info

def main():
    fig_path = "/Users/d1/Downloads/Untitled.fig"
    
    if not os.path.exists(fig_path):
        print(f"Figma文件不存在: {fig_path}")
        return
    
    print(f"开始分析Figma文件: {fig_path}")
    design_info = parse_figma_file(fig_path)
    
    print("\n=== 设计信息提取结果 ===")
    print(f"发现颜色: {list(design_info['colors'])}")
    print(f"发现字体: {list(design_info['fonts'])}")
    print(f"样式信息: {design_info['styles']}")
    
    # 保存结果到文件
    with open('/tmp/figma_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(design_info, f, indent=2, ensure_ascii=False, default=list)
    
    print(f"\n分析结果已保存到: /tmp/figma_analysis.json")

if __name__ == "__main__":
    main()