# Alone - 个人品牌展示网站

一个基于 Next.js 14 构建的现代化个人品牌展示网站，采用 App Router 架构，支持响应式设计和服务端渲染。

## 项目概述

本项目是一个专业的个人品牌展示网站，主要功能包括：
- 个人介绍和品牌展示
- 项目案例展示
- 联系表单和联系方式
- 响应式设计，支持移动端和桌面端

## 技术栈

### 前端框架
- **Next.js 14** - React 全栈框架，使用 App Router
- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript

### 样式和UI
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Lucide React** - 现代化图标库
- **shadcn/ui** - 高质量的 React 组件库

### 开发工具
- **ESLint** - 代码质量检查
- **PostCSS** - CSS 后处理器

### 部署和容器化
- **Docker** - 容器化部署
- **Nginx** - 反向代理服务器
- **自定义部署脚本** - 自动化部署流程

## 目录结构规则
```
alone/
├── app/                    # Next.js App Router 页面目录
│   ├── about/             # 关于我们页面
│   ├── contact/           # 联系我们页面
│   ├── showcase/          # 案例展示页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 首页
├── components/            # 可复用组件
│   ├── forms/            # 表单组件
│   ├── layout/           # 布局组件（导航、页脚）
│   ├── sections/         # 页面区块组件
│   └── ui/               # 基础UI组件（shadcn/ui）
├── data/                 # 静态数据配置
│   ├── navigation.ts     # 导航配置
│   └── projects.ts       # 项目数据
├── hooks/                # 自定义React Hooks
├── lib/                  # 工具函数和常量
│   ├── constants.ts      # 全局常量（联系信息、主题等）
│   └── utils.ts          # 工具函数
├── public/               # 静态资源
│   └── images/           # 图片资源
├── nginx/                # Nginx 配置
└── deploy.sh             # 部署脚本
```
## 脚本功能详解
- npm run dev - 启动开发服务器

- 在 http://localhost:3000 启动开发环境
- 支持热重载和快速刷新
- 开发时的错误提示和调试功能
- npm run build - 构建生产版本

- 编译 TypeScript 代码
- 优化和压缩资源
- 生成静态资源和服务端代码
- 输出到 .next/ 目录
- npm run start - 启动生产服务器

- 运行构建后的应用
- 需要先执行 npm run build
- 用于生产环境部署
- npm run lint - 代码质量检查

- 使用 ESLint 检查代码规范
- 检查 TypeScript 类型错误
- 确保代码质量和一致性
- npm run deploy - 执行部署脚本

- 运行 deploy.sh 脚本
- 自动化部署到远程服务器
- 包含构建、上传和服务器配置

