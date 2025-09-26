#!/bin/bash

# 服务器监控脚本 - 自动重启开发服务器
# 用法: ./monitor_servers.sh

PROJECT_DIR="/Volumes/4T 固态/personal-website-backup-20250925 2"
MAIN_PORT=3000
DEV_PORT=4000

# 检查并启动主分支服务器
check_and_start_main() {
    if ! lsof -ti:$MAIN_PORT > /dev/null 2>&1; then
        echo "$(date): 主分支服务器未运行，正在启动..."
        cd "$PROJECT_DIR"
        # 确保在main分支
        git checkout main > /dev/null 2>&1
        nohup npm run dev > main-branch.log 2>&1 &
        echo "$(date): 主分支服务器已启动在端口 $MAIN_PORT"
    fi
}

# 检查并启动开发分支服务器
check_and_start_dev() {
    if ! lsof -ti:$DEV_PORT > /dev/null 2>&1; then
        echo "$(date): 开发分支服务器未运行，正在启动..."
        cd "$PROJECT_DIR"
        # 确保在开发分支
        git checkout feature/video-planning-dev > /dev/null 2>&1
        nohup npm run dev -- -p $DEV_PORT > dev-branch.log 2>&1 &
        echo "$(date): 开发分支服务器已启动在端口 $DEV_PORT"
    fi
}

# 主循环
echo "开始监控服务器状态..."
while true; do
    check_and_start_main
    check_and_start_dev
    sleep 30  # 每30秒检查一次
done