# Tailwind CSS 问题排查指南

## 🚨 本次问题总结

**问题原因**: Tailwind CSS v4 与 Next.js 14 的兼容性问题

**核心问题**:
- Tailwind CSS v4 使用了新的配置方式
- Next.js 14 对 v4 支持不完善
- 导致 CSS 类无法正确编译成实际样式

**解决方案**:
- 降级到 Tailwind CSS v3.4.17
- 使用标准的 PostCSS 配置
- 更新 CSS 导入语句

## 🛡️ 预防措施

### 1. 版本锁定
在 `package.json` 中使用精确版本号：
```json
{
  "devDependencies": {
    "tailwindcss": "3.4.17",  // 精确版本，不要用 ^
    "postcss": "8.5.6",
    "autoprefixer": "10.4.21"
  }
}
```

### 2. 自动检查脚本
使用 `check-tailwind-version.js` 脚本：
```bash
# 手动检查
npm run check-tailwind

# 构建前自动检查（已配置在 prebuild 中）
npm run build
```

### 3. 正确的配置文件

**tailwind.config.js**:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 您的自定义配置
    },
  },
  plugins: [],
}
```

**postcss.config.js**:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**globals.css**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🔧 常见触发场景及应对

### 1. AI 修改代码后
- **症状**: 页面丢失样式，只有文字
- **解决**: 运行 `npm run check-tailwind`

### 2. 部署到 Vercel 失败
- **症状**: 构建成功但页面无样式
- **解决**: 确保 prebuild 脚本已配置

### 3. 迁移项目后
- **症状**: 样式系统失效
- **解决**: 检查配置文件版本匹配

## 📋 快速排查步骤

1. **检查版本**: `npm run check-tailwind`
2. **清理缓存**: `rm -rf .next node_modules package-lock.json`
3. **重新安装**: `npm install`
4. **重启服务**: `npm run dev`

## 🚀 部署前检查清单

- [ ] 运行 `npm run check-tailwind`
- [ ] 检查 `package.json` 中的 Tailwind 版本是否为 `3.4.17`
- [ ] 确认配置文件正确
- [ ] 本地测试正常
- [ ] 提交所有更改

## 💡 开发建议

1. **不要轻易升级 Tailwind CSS**
2. **使用精确版本号而非范围版本**
3. **在部署前运行检查脚本**
4. **保留稳定的工作配置**

## 🆘 紧急恢复

如果遇到问题，可以快速恢复：

```bash
# 1. 恢复到已知良好配置
git checkout HEAD -- package.json tailwind.config.js postcss.config.js src/app/globals.css

# 2. 重新安装
rm -rf .next node_modules package-lock.json
npm install

# 3. 重启服务
npm run dev
```

---

**重要**: 这个问题主要是由于 Tailwind CSS v4 的新架构与现有工具链的兼容性问题导致的。通过锁定版本和自动化检查，可以有效预防未来的类似问题。