import { Users, TrendingUp, Target, Eye, Zap, Clock, Star } from "lucide-react"

export const projects = [
  {
    id: 1,
    title: "智能文案生成器",
    category: "SaaS工具",
    description: "基于GPT-4的智能文案生成平台，帮助营销人员快速创作高质量广告文案",
    challenge: "传统文案创作耗时长，质量不稳定，营销团队效率低下",
    solution: "整合GPT-4 API，设计专业提示词模板，构建用户友好的生成界面",
    tools: ["GPT-4", "Next.js", "Supabase", "Stripe", "Vercel"],
    timeline: "2.5天",
    results: {
      users: "2,300",
      conversion: "12%",
      revenue: "¥15,000/月",
    },
    metrics: [
      { label: "月活用户", value: "2.3K", icon: Users },
      { label: "转化率", value: "12%", icon: TrendingUp },
      { label: "月收入", value: "¥15K", icon: Target },
    ],
    image: "bg-gradient-to-br from-blue-100 to-blue-200",
    color: "blue",
  },
  {
    id: 2,
    title: "AI匹配交友平台",
    category: "社交应用",
    description: "使用AI算法分析用户兴趣和性格，提供精准的交友匹配服务",
    challenge: "传统交友平台匹配成功率低，用户体验差，留存率不高",
    solution: "开发AI性格分析算法，设计游戏化匹配流程，优化用户互动体验",
    tools: ["Claude", "React Native", "Firebase", "OpenAI Embeddings", "Expo"],
    timeline: "3天",
    results: {
      users: "1,800",
      conversion: "78%",
      revenue: "¥8,500/月",
    },
    metrics: [
      { label: "注册用户", value: "1.8K", icon: Users },
      { label: "匹配成功率", value: "78%", icon: Target },
      { label: "日活跃", value: "450", icon: Eye },
    ],
    image: "bg-gradient-to-br from-purple-100 to-purple-200",
    color: "purple",
  },
  {
    id: 3,
    title: "智能日程管理助手",
    category: "效率工具",
    description: "AI驱动的智能日程优化工具，自动分析和安排最佳时间分配",
    challenge: "用户时间管理混乱，工作效率低，难以平衡工作和生活",
    solution: "集成日历API，使用AI分析用户习惯，提供个性化时间安排建议",
    tools: ["GPT-4", "Vue.js", "Node.js", "Google Calendar API", "Netlify"],
    timeline: "2天",
    results: {
      users: "890",
      conversion: "85%",
      revenue: "¥6,200/月",
    },
    metrics: [
      { label: "日活用户", value: "890", icon: Users },
      { label: "用户留存", value: "85%", icon: TrendingUp },
      { label: "效率提升", value: "40%", icon: Zap },
    ],
    image: "bg-gradient-to-br from-green-100 to-green-200",
    color: "green",
  },
  {
    id: 4,
    title: "AI代码审查工具",
    category: "开发工具",
    description: "自动化代码质量检测和优化建议，提升开发团队代码质量",
    challenge: "代码审查耗时长，标准不统一，新手开发者缺乏指导",
    solution: "训练专门的代码分析模型，集成到CI/CD流程，提供实时反馈",
    tools: ["Claude", "Python", "FastAPI", "GitHub API", "Docker"],
    timeline: "3天",
    results: {
      users: "650",
      conversion: "95%",
      revenue: "¥12,000/月",
    },
    metrics: [
      { label: "团队用户", value: "650", icon: Users },
      { label: "代码质量提升", value: "60%", icon: TrendingUp },
      { label: "审查效率", value: "5x", icon: Zap },
    ],
    image: "bg-gradient-to-br from-orange-100 to-orange-200",
    color: "orange",
  },
  {
    id: 5,
    title: "智能客服机器人",
    category: "客服工具",
    description: "基于大语言模型的智能客服系统，24/7自动处理客户咨询",
    challenge: "人工客服成本高，响应时间长，服务质量不稳定",
    solution: "构建知识库，训练专业客服模型，设计多轮对话流程",
    tools: ["GPT-4", "LangChain", "React", "PostgreSQL", "WebSocket"],
    timeline: "2.5天",
    results: {
      users: "1,200",
      conversion: "88%",
      revenue: "¥18,000/月",
    },
    metrics: [
      { label: "服务企业", value: "120", icon: Users },
      { label: "问题解决率", value: "88%", icon: Target },
      { label: "响应时间", value: "<3s", icon: Clock },
    ],
    image: "bg-gradient-to-br from-indigo-100 to-indigo-200",
    color: "indigo",
  },
  {
    id: 6,
    title: "AI内容创作平台",
    category: "内容工具",
    description: "多模态AI内容生成平台，支持文字、图片、视频的一站式创作",
    challenge: "内容创作门槛高，多媒体制作复杂，创作者效率低下",
    solution: "整合多个AI模型，设计统一创作界面，提供模板和工作流",
    tools: ["GPT-4", "DALL-E", "Stable Diffusion", "Next.js", "AWS S3"],
    timeline: "3天",
    results: {
      users: "3,100",
      conversion: "15%",
      revenue: "¥25,000/月",
    },
    metrics: [
      { label: "创作者", value: "3.1K", icon: Users },
      { label: "内容生成", value: "50K+", icon: Star },
      { label: "平台收入", value: "¥25K", icon: TrendingUp },
    ],
    image: "bg-gradient-to-br from-pink-100 to-pink-200",
    color: "pink",
  },
]

export const projectCategories = ["全部", "SaaS工具", "社交应用", "效率工具", "开发工具", "客服工具", "内容工具"]