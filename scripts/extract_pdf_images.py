#!/usr/bin/env python3
import os
import sys
from PyPDF2 import PdfReader
from PIL import Image
import io

def extract_images_from_pdf(pdf_path, output_dir):
    """从PDF文件中提取图片并保存到指定目录"""
    
    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)
    
    try:
        # 读取PDF文件
        with open(pdf_path, 'rb') as file:
            reader = PdfReader(file)
            
            print(f"PDF文件有 {len(reader.pages)} 页")
            
            # 遍历每一页
            for page_num, page in enumerate(reader.pages):
                print(f"正在处理第 {page_num + 1} 页...")
                
                # 尝试提取图片
                if '/Resources' in page:
                    if '/XObject' in page['/Resources']:
                        x_object = page['/Resources']['/XObject'].get_object()
                        
                        for obj in x_object:
                            if x_object[obj]['/Subtype'] == '/Image':
                                try:
                                    # 获取图片数据
                                    image_data = x_object[obj]._data
                                    
                                    # 创建图片对象
                                    img = Image.open(io.BytesIO(image_data))
                                    
                                    # 保存图片
                                    output_path = os.path.join(output_dir, f'product-planning-page-{page_num + 1}.png')
                                    img.save(output_path, 'PNG')
                                    
                                    print(f"已保存: {output_path}")
                                    
                                except Exception as e:
                                    print(f"处理图片时出错: {e}")
                
                # 如果没有找到图片，尝试其他方法
                else:
                    print(f"第 {page_num + 1} 页没有找到资源")
            
            print("图片提取完成!")
            
    except Exception as e:
        print(f"处理PDF文件时出错: {e}")

if __name__ == "__main__":
    # PDF文件路径
    pdf_path = "/Users/d1/Library/Mobile Documents/com~apple~CloudDocs/personal-website-backup-20250925 2/伍六七毛绒盲盒-1.pdf"
    
    # 输出目录
    output_dir = "/Users/d1/Library/Mobile Documents/com~apple~CloudDocs/personal-website-backup-20250925 2/public/pdf-images"
    
    if not os.path.exists(pdf_path):
        print(f"PDF文件不存在: {pdf_path}")
        sys.exit(1)
    
    print(f"开始处理PDF文件: {pdf_path}")
    extract_images_from_pdf(pdf_path, output_dir)