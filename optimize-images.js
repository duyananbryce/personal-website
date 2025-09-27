#!/usr/bin/env node

/**
 * 图片优化脚本
 * 自动压缩图片并转换为WebP格式
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

console.log('🖼️  开始图片优化...\n');

// 检查是否安装了必要的工具
const checkTools = () => {
  try {
    execSync('magick -version', { stdio: 'ignore' });
    console.log('✅ ImageMagick 已安装');
  } catch (e) {
    console.error('❌ 请先安装 ImageMagick: brew install imagemagick');
    process.exit(1);
  }

  try {
    execSync('cwebp -version', { stdio: 'ignore' });
    console.log('✅ WebP 工具已安装');
  } catch (e) {
    console.error('❌ 请先安装 WebP 工具: brew install webp');
    process.exit(1);
  }
};

// 图片优化配置
const IMAGE_CONFIG = {
  // 首页和作品集图片配置
  portfolio: {
    maxWidth: 1200,
    quality: 85,
    formats: ['webp', 'jpg']
  },
  // 视频封面配置
  video: {
    maxWidth: 600,
    quality: 80,
    formats: ['webp', 'jpg']
  },
  // 小图片配置
  small: {
    maxWidth: 300,
    quality: 90,
    formats: ['webp', 'png']
  }
};

// 获取图片配置
const getImageConfig = (filePath) => {
  const filename = path.basename(filePath).toLowerCase();

  if (filename.includes('video')) {
    return IMAGE_CONFIG.video;
  } else if (filename.includes('page-') || filename.includes('portfolio')) {
    return IMAGE_CONFIG.portfolio;
  } else {
    return IMAGE_CONFIG.small;
  }
};

// 获取文件大小
const getFileSize = (filePath) => {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024 / 1024).toFixed(2); // MB
};

// 优化单个图片
const optimizeImage = async (inputPath, outputPath, config) => {
  try {
    const ext = path.extname(outputPath).toLowerCase();

    if (ext === '.webp') {
      // 转换为 WebP
      const command = `cwebp -q ${config.quality} -m 6 -resize ${config.maxWidth} 0 "${inputPath}" -o "${outputPath}"`;
      await exec(command);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // 转换为 JPG
      const command = `magick "${inputPath}" -resize ${config.maxWidth}x\\> -quality ${config.quality} -interlace JPEG "${outputPath}"`;
      await exec(command);
    } else if (ext === '.png') {
      // 优化 PNG
      const command = `magick "${inputPath}" -resize ${config.maxWidth}x\\> -quality ${config.quality} "${outputPath}"`;
      await exec(command);
    }

    return true;
  } catch (error) {
    console.error(`❌ 优化失败 ${inputPath}:`, error.message);
    return false;
  }
};

// 处理目录
const processDirectory = async (dirPath) => {
  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log(`📁 ${dirPath}: 没有找到需要优化的图片`);
    return;
  }

  console.log(`📁 ${dirPath}: 找到 ${imageFiles.length} 个图片文件\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(dirPath, file);
    const config = getImageConfig(inputPath);
    const originalSize = getFileSize(inputPath);

    console.log(`🖼️  处理 ${file} (${originalSize}MB) → ${config.maxWidth}px, 质量 ${config.quality}%`);

    // 创建输出目录
    const outputDir = path.join(dirPath, 'optimized');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // 生成不同格式
    for (const format of config.formats) {
      const basename = path.basename(file, path.extname(file));
      const outputPath = path.join(outputDir, `${basename}.${format}`);

      const success = await optimizeImage(inputPath, outputPath, config);
      if (success) {
        const newSize = getFileSize(outputPath);
        const reduction = ((parseFloat(originalSize) - parseFloat(newSize)) / parseFloat(originalSize) * 100).toFixed(1);
        console.log(`   ✅ ${format.toUpperCase()}: ${newSize}MB (减少 ${reduction}%)`);
      }
    }

    console.log('');
  }
};

// 主要处理逻辑
const main = async () => {
  checkTools();

  const imageDirs = [
    'public/assets/images/planning-portfolio',
    'public/assets/images/ai-portfolio',
    'public/assets/images/product-planning',
    'public/assets/images/video-planning'
  ];

  let totalBefore = 0;
  let totalAfter = 0;

  for (const dir of imageDirs) {
    if (fs.existsSync(dir)) {
      await processDirectory(dir);
    }
  }

  console.log('🎉 图片优化完成！');
  console.log('💡 提示:');
  console.log('   - 优化后的图片保存在各目录的 optimized/ 子目录中');
  console.log('   - 建议先测试优化后的图片效果');
  console.log('   - 确认无误后，可以替换原始图片');
  console.log('   - WebP 格式需要检查浏览器兼容性');
};

main().catch(console.error);