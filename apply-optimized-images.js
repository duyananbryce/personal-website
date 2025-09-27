#!/usr/bin/env node

/**
 * 应用优化后的图片脚本
 * 将优化后的图片替换原始图片，并提供备份功能
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

console.log('🖼️  开始应用优化后的图片...\n');

// 配置
const CONFIG = {
  // 使用WebP格式 (更现代，更小)
  useWebP: true,
  // 是否备份原始图片
  backupOriginal: true,
  // 备份目录
  backupDir: 'public/assets/images/backup'
};

// 创建备份目录
const createBackupDir = () => {
  if (!fs.existsSync(CONFIG.backupDir)) {
    fs.mkdirSync(CONFIG.backupDir, { recursive: true });
    console.log('📁 创建备份目录: public/assets/images/backup');
  }
};

// 备份原始图片
const backupOriginalImages = async (sourceDir) => {
  const relativePath = path.relative('public/assets/images', sourceDir);
  const backupPath = path.join(CONFIG.backupDir, relativePath);

  if (!fs.existsSync(backupPath)) {
    fs.mkdirSync(backupPath, { recursive: true });
  }

  const files = fs.readdirSync(sourceDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

  for (const file of imageFiles) {
    const sourceFile = path.join(sourceDir, file);
    const backupFile = path.join(backupPath, file);

    // 复制文件到备份目录
    fs.copyFileSync(sourceFile, backupFile);
    console.log(`💾 备份: ${file}`);
  }
};

// 应用优化后的图片
const applyOptimizedImages = (sourceDir) => {
  const optimizedDir = path.join(sourceDir, 'optimized');
  if (!fs.existsSync(optimizedDir)) {
    console.log(`⚠️  ${sourceDir}: 没有找到优化后的图片`);
    return;
  }

  const files = fs.readdirSync(optimizedDir);
  let webpCount = 0;
  let jpgCount = 0;

  for (const file of files) {
    const sourceFile = path.join(optimizedDir, file);
    const targetFile = path.join(sourceDir, file);

    // 复制优化后的文件
    fs.copyFileSync(sourceFile, targetFile);

    if (file.endsWith('.webp')) {
      webpCount++;
    } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      jpgCount++;
    }

    console.log(`✅ 应用: ${file}`);
  }

  // 清理优化目录
  fs.rmSync(optimizedDir, { recursive: true, force: true });
  console.log(`🧹 清理优化目录: ${optimizedDir}`);

  return { webpCount, jpgCount };
};

// 更新代码中的图片引用
const updateImageReferences = () => {
  console.log('🔍 检查图片引用更新需求...');

  // 检查是否有需要在代码中更新的图片引用
  const filesToCheck = [
    'src/app/page.tsx',
    'src/app/planning-portfolio/page.tsx',
    'src/app/ai-portfolio/page.tsx',
    'src/app/product-planning/page.tsx'
  ];

  let needsUpdate = false;

  for (const file of filesToCheck) {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('.png') || content.includes('.jpg')) {
        console.log(`📝 ${file}: 可能需要更新图片引用`);
        needsUpdate = true;
      }
    }
  }

  if (needsUpdate) {
    console.log('💡 提示: 如果使用了WebP格式，可能需要更新代码中的图片引用');
    console.log('   - .png → .webp');
    console.log('   - .jpg → .webp');
    console.log('   - 或者添加 <picture> 标签支持多种格式');
  }
};

// 主要处理逻辑
const main = async () => {
  console.log('⚙️  配置:');
  console.log(`   - 使用WebP格式: ${CONFIG.useWebP ? '是' : '否'}`);
  console.log(`   - 备份原始图片: ${CONFIG.backupOriginal ? '是' : '否'}`);
  console.log('');

  if (CONFIG.backupOriginal) {
    createBackupDir();
  }

  const imageDirs = [
    'public/assets/images/planning-portfolio',
    'public/assets/images/ai-portfolio',
    'public/assets/images/product-planning',
    'public/assets/images/video-planning'
  ];

  let totalWebP = 0;
  let totalJpg = 0;

  for (const dir of imageDirs) {
    if (fs.existsSync(dir)) {
      console.log(`📁 处理目录: ${dir}`);

      // 备份原始图片
      if (CONFIG.backupOriginal) {
        await backupOriginalImages(dir);
      }

      // 应用优化后的图片
      const result = applyOptimizedImages(dir);
      if (result) {
        totalWebP += result.webpCount;
        totalJpg += result.jpgCount;
      }

      console.log('');
    }
  }

  console.log('🎉 图片应用完成！');
  console.log('📊 统计:');
  console.log(`   - WebP图片: ${totalWebP} 个`);
  console.log(`   - JPG图片: ${totalJpg} 个`);

  if (CONFIG.backupOriginal) {
    console.log(`   - 原始图片已备份到: ${CONFIG.backupDir}`);
  }

  updateImageReferences();

  console.log('\n💡 下一步建议:');
  console.log('   1. 在浏览器中测试网站显示效果');
  console.log('   2. 检查图片加载速度是否改善');
  console.log('   3. 确认图片清晰度是否符合要求');
  console.log('   4. 如需要，可以恢复原始图片: node restore-original-images.js');
};

main().catch(console.error);