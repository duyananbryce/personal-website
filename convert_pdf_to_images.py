#!/usr/bin/env python3
import os
import sys
import fitz  # PyMuPDF

def convert_pdf_pages_to_images(pdf_path, output_dir, dpi=150):
    """将PDF的每一页转换为图片"""
    
    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)
    
    try:
        # 打开PDF文件
        doc = fitz.open(pdf_path)
        
        print(f"PDF文件有 {len(doc)} 页")
        
        # 遍历每一页
        for page_num in range(len(doc)):
            print(f"正在处理第 {page_num + 1} 页...")
            
            # 获取页面
            page = doc[page_num]
            
            # 设置缩放因子（DPI转换）
            zoom = dpi / 72  # 72是PDF的默认DPI
            mat = fitz.Matrix(zoom, zoom)
            
            # 渲染页面为图片
            pix = page.get_pixmap(matrix=mat)
            
            # 保存图片
            output_path = os.path.join(output_dir, f'product-planning-page-{page_num + 1}.jpg')
            pix.save(output_path, 'jpeg')
            
            print(f"已保存: {output_path}")
            
            # 只处理前5页
            if page_num >= 4:
                break
        
        print("PDF页面转换完成!")
        
    except Exception as e:
        print(f"处理PDF文件时出错: {e}")
    finally:
        if 'doc' in locals():
            doc.close()

if __name__ == "__main__":
    # PDF文件路径
    pdf_path = "/Users/d1/Library/Mobile Documents/com~apple~CloudDocs/personal-website-backup-20250925 2/伍六七毛绒盲盒-1.pdf"
    
    # 输出目录
    output_dir = "/Users/d1/Library/Mobile Documents/com~apple~CloudDocs/personal-website-backup-20250925 2/public/pdf-images"
    
    if not os.path.exists(pdf_path):
        print(f"PDF文件不存在: {pdf_path}")
        sys.exit(1)
    
    print(f"开始转换PDF文件为图片: {pdf_path}")
    convert_pdf_pages_to_images(pdf_path, output_dir)