#!/usr/bin/env node

/**
 * Tailwind CSS 版本检查脚本
 * 防止意外升级到不兼容的 v4 版本
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 检查 Tailwind CSS 配置...\n');

// 检查 package.json 中的版本
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const tailwindVersion = packageJson.devDependencies?.tailwindcss;
console.log(`📦 发现 Tailwind CSS 版本: ${tailwindVersion}`);

// 检查是否是 v4
if (tailwindVersion && tailwindVersion.startsWith('^4')) {
    console.log('❌ 检测到 Tailwind CSS v4 - 这可能与 Next.js 14 不兼容！');
    console.log('🔧 正在修复到 v3.4.17...\n');

    // 修复版本
    packageJson.devDependencies.tailwindcss = '3.4.17';

    // 确保有正确的依赖
    if (!packageJson.devDependencies.postcss) {
        packageJson.devDependencies.postcss = '8.5.6';
    }
    if (!packageJson.devDependencies.autoprefixer) {
        packageJson.devDependencies.autoprefixer = '10.4.21';
    }

    // 移除 v4 特有依赖
    if (packageJson.devDependencies['@tailwindcss/postcss']) {
        delete packageJson.devDependencies['@tailwindcss/postcss'];
        console.log('🗑️  移除了 @tailwindcss/postcss 依赖');
    }

    // 写回文件
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log('✅ 版本已修复到 v3.4.17');
    console.log('⚠️  请运行: npm install');

} else if (tailwindVersion && (tailwindVersion.startsWith('3') || tailwindVersion.startsWith('^3'))) {
    console.log('✅ Tailwind CSS v3 - 版本正常');

    // 检查配置文件
    const configFiles = [
        'tailwind.config.js',
        'tailwind.config.ts',
        'postcss.config.js',
        'postcss.config.mjs'
    ];

    let configIssues = [];

    configFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');

            if (file.includes('tailwind.config') && content.includes('@theme inline')) {
                configIssues.push(`${file} 包含 v4 特有的 @theme inline 配置`);
            }

            if (file.includes('postcss.config') && content.includes('@tailwindcss/postcss')) {
                configIssues.push(`${file} 包含 v4 特有的 @tailwindcss/postcss 配置`);
            }
        }
    });

    if (configIssues.length > 0) {
        console.log('⚠️  发现配置问题:');
        configIssues.forEach(issue => console.log(`   • ${issue}`));
        console.log('🔧 建议重新运行此脚本或手动修复配置');
    } else {
        console.log('✅ 配置文件正常');
    }

} else {
    console.log('❓ 未找到 Tailwind CSS 或版本格式异常');
}

console.log('\n📋 检查完成');
console.log('💡 提示: 在部署前运行此脚本可以避免兼容性问题');