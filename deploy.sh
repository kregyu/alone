#!/bin/zsh

# 使用 set -e 在命令失败时立即退出脚本，更安全
# 使用 set -u 在使用未定义变量时报错
# set -e
# set -u
# 注意：对于调试，你可能想暂时注释掉 set -e，以便看到所有错误信息。
# 对于生产脚本，强烈建议启用 set -e。

# --- 配置变量 ---
# 本地项目路径
LOCAL_PROJECT_PATH="/Users/haoyu/Project/alone"

# 远程服务器信息
REMOTE_USER="root"
REMOTE_HOST="47.93.3.11"
REMOTE_TARGET_BASE_PATH="/var/www/webapp/web" # 远程基础目标路径
REMOTE_SSH_PORT="22" # SSH 端口
REMOTE_SSH_KEY="$HOME/.ssh/deploy_key_mywebapp" # SSH 私钥路径

# 要上传的文件夹和文件 (基于 output: 'standalone')
STANDALONE_DIR=".next/standalone"
STATIC_DIR=".next/static"
PUBLIC_DIR="public"

# --- 构建 SSH 和 Rsync 的连接选项 ---
# 对于 rsync 的 -e 选项，它需要一个包含 ssh 命令及其参数的字符串
# 对于直接的 ssh 命令，我们使用 -i 指定密钥，-p 指定端口
SSH_OPTIONS="-p ${REMOTE_SSH_PORT} -i ${REMOTE_SSH_KEY}"
RSYNC_SSH_COMMAND="ssh -p ${REMOTE_SSH_PORT} -i ${REMOTE_SSH_KEY}"

# --- 执行部署 ---

echo "----------------------------------------------------"
echo "🚀 开始部署 Next.js 项目到服务器..."
echo "----------------------------------------------------"
echo "本地项目路径: ${LOCAL_PROJECT_PATH}"
echo "远程服务器: ${REMOTE_USER}@${REMOTE_HOST}"
echo "使用 SSH 密钥: ${REMOTE_SSH_KEY}"
echo "远程目标基础路径: ${REMOTE_TARGET_BASE_PATH}"
echo ""

# 检查本地项目路径是否存在
if [ ! -d "${LOCAL_PROJECT_PATH}" ]; then
  echo "❌ 错误: 本地项目路径 '${LOCAL_PROJECT_PATH}' 不存在。"
  exit 1
fi

# 检查 SSH 密钥文件是否存在
if [ ! -f "${REMOTE_SSH_KEY}" ]; then
  echo "❌ 错误: SSH 密钥文件 '${REMOTE_SSH_KEY}' 不存在。"
  echo "💡 请确保密钥文件路径正确，并且文件存在且权限为 600。"
  exit 1
fi

# 进入本地项目目录
cd "${LOCAL_PROJECT_PATH}" || { echo "❌ 错误: 无法进入本地项目目录 '${LOCAL_PROJECT_PATH}'。"; exit 1; }

# echo " rebuilding the project..."
# npm run build # 如果你想要在每次部署前都重新构建
# yarn build # 或者使用 yarn

# 检查构建产物是否存在
if [ ! -d "${STANDALONE_DIR}" ]; then
  echo "❌ 错误: '${STANDALONE_DIR}' 目录不存在。请先运行 'next build'。"
  exit 1
fi
if [ ! -d "${STATIC_DIR}" ]; then
  echo "❌ 错误: '${STATIC_DIR}' 目录不存在。请先运行 'next build'。"
  exit 1
fi
if [ ! -d "${PUBLIC_DIR}" ]; then
  echo "⚠️  警告: '${PUBLIC_DIR}' 目录不存在。如果你的项目没有 public 目录，这可能是正常的。"
fi

echo "----------------------------------------------------"
echo "📤 开始上传文件..."
echo "----------------------------------------------------"

# 1. 上传 .next/standalone 目录的内容到远程目标基础路径
echo "同步 '${STANDALONE_DIR}/' 到 '${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_TARGET_BASE_PATH}/' ..."
rsync -avz --delete \
  -e "${RSYNC_SSH_COMMAND}" \
  "${STANDALONE_DIR}/" \
  "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_TARGET_BASE_PATH}/"

if [ $? -eq 0 ]; then
  echo "✅ '${STANDALONE_DIR}' 上传成功。"
else
  echo "❌ '${STANDALONE_DIR}' 上传失败。"
  exit 1
fi
echo ""

# 2. 上传 .next/static 目录到远程目标路径的 .next/static
echo "创建远程目录 '${REMOTE_TARGET_BASE_PATH}/.next' (如果不存在)..."
ssh ${SSH_OPTIONS} "${REMOTE_USER}@${REMOTE_HOST}" "mkdir -p ${REMOTE_TARGET_BASE_PATH}/.next"

echo "同步 '${STATIC_DIR}/' 到 '${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_TARGET_BASE_PATH}/${STATIC_DIR}/' ..."
rsync -avz --delete \
  -e "${RSYNC_SSH_COMMAND}" \
  "${STATIC_DIR}/" \
  "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_TARGET_BASE_PATH}/${STATIC_DIR}/"

if [ $? -eq 0 ]; then
  echo "✅ '${STATIC_DIR}' 上传成功。"
else
  echo "❌ '${STATIC_DIR}' 上传失败。"
  exit 1
fi
echo ""

# 3. 上传 public 目录 (如果存在)
if [ -d "${PUBLIC_DIR}" ]; then
  echo "同步 '${PUBLIC_DIR}/' 到 '${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_TARGET_BASE_PATH}/${PUBLIC_DIR}/' ..."
  rsync -avz --delete \
    -e "${RSYNC_SSH_COMMAND}" \
    "${PUBLIC_DIR}/" \
    "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_TARGET_BASE_PATH}/${PUBLIC_DIR}/"

  if [ $? -eq 0 ]; then
    echo "✅ '${PUBLIC_DIR}' 上传成功。"
  else
    echo "❌ '${PUBLIC_DIR}' 上传失败。"
    exit 1
  fi
else
  echo "ℹ️  '${PUBLIC_DIR}' 目录不存在，跳过上传。"
fi
echo ""

echo "----------------------------------------------------"
echo "🎉 文件上传完成！"
echo "----------------------------------------------------"
echo ""
echo "下一步操作建议 (在服务器上):"
echo "1. SSH 到服务器: ssh ${SSH_OPTIONS} ${REMOTE_USER}@${REMOTE_HOST}" # 修改了这里的 SSH 命令
echo "2. 进入应用目录: cd ${REMOTE_TARGET_BASE_PATH}"
echo "3. (如果需要) 设置环境变量。"
echo "4. 启动应用: node server.js"
echo "   (或者使用 pm2: pm2 start server.js --name your-app-name)"
echo ""

exit 0