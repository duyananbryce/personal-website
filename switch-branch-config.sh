#!/bin/bash

# 分支切换和配置管理脚本
# 用于确保主分支和开发分支完全独立运行

echo "=== 分支配置管理脚本 ==="

# 获取当前分支
CURRENT_BRANCH=$(git branch --show-current)
echo "当前分支: $CURRENT_BRANCH"

# 根据分支切换配置文件
if [ "$CURRENT_BRANCH" = "main" ]; then
    echo "切换到主分支配置..."

    # 使用主分支配置文件
    cp config-main/package.json ./package.json
    cp config-main/next.config.js ./next.config.js
    cp config-main/postcss.config.mjs ./postcss.config.mjs

    # 恢复主分支的layout.tsx (使用Inter字体)
    git checkout main -- src/app/layout.tsx

    # 恢复主分支的导航 (4个菜单项)
    git checkout main -- src/components/Navigation.tsx

    # 清理缓存并重启
    rm -rf .next
    echo "主分支配置已恢复，请运行: npm run dev"

elif [ "$CURRENT_BRANCH" = "feature/video-planning-dev" ]; then
    echo "切换到开发分支配置..."

    # 使用开发分支配置文件
    cp config-dev/package.json ./package.json
    cp config-dev/next.config.js ./next.config.js
    cp config-dev/postcss.config.mjs ./postcss.config.mjs

    # 使用开发分支专用的layout.tsx (Geist字体)
    cp config-dev/layout-dev.tsx src/app/layout.tsx

    # 恢复开发分支的导航 (5个菜单项，包含视频策划)
    git checkout feature/video-planning-dev -- src/components/Navigation.tsx

    # 清理缓存并重启
    rm -rf .next
    echo "开发分支配置已恢复，请运行: npm run dev"

else
    echo "未知分支: $CURRENT_BRANCH"
    echo "请切换到 main 或 feature/video-planning-dev 分支"
fi

echo "=== 配置完成 ==="