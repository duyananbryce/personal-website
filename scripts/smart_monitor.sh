#!/bin/bash

# 智能服务器监控脚本 - 自动重启开发服务器
# 用法: ./smart_monitor.sh
# 功能: 监控端口3000的开发服务器，如果停止则自动重启

PROJECT_DIR="$(pwd)"
PORT=3000
LOG_FILE="smart_monitor.log"
SERVER_LOG="dev-server.log"

# 日志函数
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# 检查服务器是否运行
is_server_running() {
    if lsof -ti:$PORT > /dev/null 2>&1; then
        return 0  # 服务器正在运行
    else
        return 1  # 服务器未运行
    fi
}

# 启动开发服务器
start_server() {
    log_message "开发服务器未运行，正在启动..."
    cd "$PROJECT_DIR"

    # 确保在正确的分支
    git checkout main > /dev/null 2>&1

    # 启动服务器
    nohup npm run dev > "$SERVER_LOG" 2>&1 &

    # 等待服务器启动
    sleep 5

    # 检查是否启动成功
    if is_server_running; then
        log_message "开发服务器启动成功 - 端口: $PORT"
        echo "访问地址: http://localhost:$PORT"
    else
        log_message "开发服务器启动失败"
        log_message "错误日志:"
        tail -10 "$SERVER_LOG" >> "$LOG_FILE"
    fi
}

# 主监控循环
log_message "=== 开始智能服务器监控 ==="
log_message "项目目录: $PROJECT_DIR"
log_message "监控端口: $PORT"
log_message "日志文件: $LOG_FILE"

# 首次检查
if ! is_server_running; then
    start_server
else
    log_message "开发服务器正在运行 - 端口: $PORT"
fi

# 监控循环
while true; do
    sleep 30  # 每30秒检查一次

    if ! is_server_running; then
        log_message "检测到开发服务器已停止"
        start_server
    fi
done