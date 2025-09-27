#!/usr/bin/env node

/**
 * 更新图片引用脚本
 * 自动将代码中的图片引用更新为WebP格式
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 开始更新图片引用...\n');

// 需要检查的文件
const filesToCheck = [
  'src/app/page.tsx',
  'src/app/planning-portfolio/page.tsx',
  'src/app/ai-portfolio/page.tsx',
  'src/app/product-planning/page.tsx'
];

// 图片映射：原始文件名 -> WebP文件名
const createImageMap = (imageDir) => {
  const imageMap = {};
  const files = fs.readdirSync(imageDir);

  files.forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const basename = path.basename(file, path.extname(file));
      const webpFile = `${basename}.webp`;

      // 检查WebP文件是否存在
      if (fs.existsSync(path.join(imageDir, webpFile))) {
        imageMap[file] = webpFile;
      }
    }
  });

  return imageMap;
};

// 获取所有图片映射
const getAllImageMaps = () => {
  const imageMaps = {};

  const imageDirs = [
    'public/assets/images/planning-portfolio',
    'public/assets/images/ai-portfolio',
    'public/assets/images/product-planning',
    'public/assets/images/video-planning'
  ];

  imageDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      const relativePath = dir.replace('public/', '');
      imageMaps[relativePath] = createImageMap(dir);
    }
  });

  return imageMaps;
};

// 更新单个文件中的图片引用
const updateFileReferences = (filePath, imageMaps) => {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  文件不存在: ${filePath}`);
    return { updated: 0, references: [] };
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let updatedCount = 0;
  const updatedReferences = [];

  // 遍历所有图片映射
  Object.entries(imageMaps).forEach(([dirPath, images]) => {
    Object.entries(images).forEach(([originalFile, webpFile]) => {
      const originalPath = `/${dirPath}/${originalFile}`;
      const webpPath = `/${dirPath}/${webpFile}`;

      // 检查是否包含原始图片引用
      if (content.includes(originalPath)) {
        console.log(`📝 ${filePath}: ${originalFile} → ${webpFile}`);
        updatedReferences.push({ original: originalPath, webp: webpPath });

        // 替换为WebP格式
        content = content.replace(new RegExp(originalPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), webpPath);
        updatedCount++;
      }
    });
  });

  if (updatedCount > 0) {
    // 创建备份
    const backupPath = `${filePath}.backup`;
    fs.copyFileSync(filePath, backupPath);
    console.log(`💾 备份原始文件: ${backupPath}`);

    // 写入更新后的内容
    fs.writeFileSync(filePath, content);
    console.log(`✅ 更新了 ${updatedCount} 个图片引用`);
  }

  return { updated: updatedCount, references: updatedReferences };
};

// 生成使用<picture>标签的代码建议
const generatePictureTagSuggestions = () => {
  console.log('\n💡 <picture> 标签使用建议:');
  console.log('```tsx');
  console.log('<picture>');
  console.log('  <source srcSet="/path/to/image.webp" type="image/webp" />');
  console.log('  <img src="/path/to/image.jpg" alt="描述" className="your-classes" />');
  console.log('</picture>');
  console.log('```');
  console.log('这样做的好处:');
  console.log('- 现代浏览器会自动加载WebP格式（更小）');
  console.log('- 不支持WebP的浏览器会回退到JPG格式');
  console.log('- 提供最佳的兼容性和性能');
};

// 主要处理逻辑
const main = () => {
  const imageMaps = getAllImageMaps();
  let totalUpdated = 0;

  console.log('📊 发现的图片映射:');
  Object.entries(imageMaps).forEach(([dir, images]) => {
    if (Object.keys(images).length > 0) {
      console.log(`   ${dir}: ${Object.keys(images).length} 个图片`);
    }
  });
  console.log('');

  filesToCheck.forEach(filePath => {
    console.log(`🔍 检查文件: ${filePath}`);
    const result = updateFileReferences(filePath, imageMaps);
    totalUpdated += result.updated;

    if (result.updated > 0) {
      console.log(`   ✅ 更新了 ${result.updated} 个引用`);
      result.references.forEach(ref => {
        console.log(`     ${ref.original} → ${ref.webp}`);
      });
    } else {
      console.log(`   ℹ️  没有找到需要更新的引用`);
    }
    console.log('');
  });

  console.log('🎉 图片引用更新完成！');
  console.log(`📊 总共更新了 ${totalUpdated} 个图片引用`);

  if (totalUpdated > 0) {
    generatePictureTagSuggestions();
  }

  console.log('\n💡 下一步建议:');
  console.log('   1. 重新启动开发服务器测试');
  console.log('   2. 在浏览器中检查图片显示是否正常');
  console.log('   3. 测试图片加载速度是否改善');
  console.log('   4. 如有问题，可以使用 .backup 文件恢复');
};

main().catch(console.error);