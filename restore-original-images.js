#!/usr/bin/env node

/**
 * 恢复原始图片脚本
 * 从备份中恢复原始图片
 */

const fs = require('fs');
const path = require('path');

console.log('🔄 开始恢复原始图片...\n');

const backupDir = 'public/assets/images/backup';

// 恢复单个目录的图片
const restoreDirectory = (targetDir) => {
  const relativePath = path.relative('public/assets/images', targetDir);
  const backupPath = path.join(backupDir, relativePath);

  if (!fs.existsSync(backupPath)) {
    console.log(`⚠️  ${targetDir}: 没有找到备份`);
    return;
  }

  const backupFiles = fs.readdirSync(backupPath);
  const restoredCount = backupFiles.filter(file => {
    const sourceFile = path.join(backupPath, file);
    const targetFile = path.join(targetDir, file);

    if (fs.existsSync(sourceFile)) {
      fs.copyFileSync(sourceFile, targetFile);
      console.log(`✅ 恢复: ${file}`);
      return true;
    }
    return false;
  }).length;

  return restoredCount;
};

// 主要处理逻辑
const main = () => {
  if (!fs.existsSync(backupDir)) {
    console.log('❌ 没有找到备份目录');
    return;
  }

  const imageDirs = [
    'public/assets/images/planning-portfolio',
    'public/assets/images/ai-portfolio',
    'public/assets/images/product-planning',
    'public/assets/images/video-planning'
  ];

  let totalRestored = 0;

  for (const dir of imageDirs) {
    if (fs.existsSync(dir)) {
      console.log(`📁 恢复目录: ${dir}`);
      const restored = restoreDirectory(dir);
      totalRestored += restored;
      console.log(`   恢复了 ${restored} 个文件\n`);
    }
  }

  console.log('🎉 原始图片恢复完成！');
  console.log(`📊 总共恢复了 ${totalRestored} 个文件`);

  console.log('\n💡 提示:');
  console.log('   - 备份目录仍然保留在:', backupDir);
  console.log('   - 确认无误后可以手动删除备份目录');
  console.log('   - 重新启动开发服务器查看效果');
};

main().catch(console.error);