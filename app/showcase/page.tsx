"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, Users, Clock, Star, ExternalLink, Play, TrendingUp, Eye } from "lucide-react"
import Link from "next/link"

export default function ShowcasePage() {
  const projects = [
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

  const categories = ["全部", "SaaS工具", "社交应用", "效率工具", "开发工具", "客服工具", "内容工具"]

  // 在组件内部添加状态管理
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                创速引擎
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                首页
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                关于我们
              </Link>
              <Link href="/showcase" className="text-blue-600 font-medium">
                案例展示
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                联系我们
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                立即学习
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  首页
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  关于我们
                </Link>
                <Link
                  href="/showcase"
                  className="text-blue-600 font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  案例展示
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  联系我们
                </Link>
                <div className="pt-2">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    立即学习
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 MVP案例展示</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            从想法到产品，3天见证奇迹
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            这里展示了我使用AI工具矩阵快速搭建的真实MVP案例。每个项目都包含详细的搭建过程、使用的AI工具、时间线和实际成果数据。
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "全部" ? "default" : "outline"}
                className={category === "全部" ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Project Header */}
                <div className={`${project.image} p-6 text-center`}>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-white/80">
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600 bg-white/80 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4 mr-1" />
                      {project.timeline}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>

                <CardContent className="p-6 space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`w-10 h-10 bg-${project.color}-100 rounded-full flex items-center justify-center mx-auto mb-2`}
                        >
                          <metric.icon className={`w-5 h-5 text-${project.color}-600`} />
                        </div>
                        <div className={`text-lg font-bold text-${project.color}-600`}>{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-red-500" />
                        挑战
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-green-500" />
                        解决方案
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-purple-500" />
                      技术栈 & AI工具
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="secondary"
                          className={`bg-${project.color}-50 text-${project.color}-700 border-${project.color}-200`}
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & Results */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">开发时间线</h5>
                        <div className="space-y-1 text-gray-600">
                          <div>• 需求分析: 0.5天</div>
                          <div>• AI辅助设计: 0.5天</div>
                          <div>• 快速开发: {Number.parseFloat(project.timeline) - 1}天</div>
                          <div>• 测试上线: 0.5天</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">核心成果</h5>
                        <div className="space-y-1 text-gray-600">
                          <div>• 用户数: {project.results.users}</div>
                          <div>• 转化率: {project.results.conversion}</div>
                          <div>• 月收入: {project.results.revenue}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button className={`flex-1 bg-${project.color}-600 hover:bg-${project.color}-700`}>
                      <Play className="w-4 h-4 mr-2" />
                      查看演示
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      详细分析
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">标准化MVP搭建流程</h2>
            <p className="text-lg text-gray-600 mb-12">每个项目都遵循这套经过验证的快速开发流程</p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">需求分析</h3>
                <p className="text-gray-600 text-sm">使用AI辅助市场调研和用户需求分析</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">快速设计</h3>
                <p className="text-gray-600 text-sm">AI生成原型设计和用户界面</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">敏捷开发</h3>
                <p className="text-gray-600 text-sm">AI辅助编码和功能实现</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">快速上线</h3>
                <p className="text-gray-600 text-sm">自动化部署和用户反馈收集</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">想要学会这套方法？</h2>
            <p className="text-xl mb-8 opacity-90">
              这些案例只是开始。在我的完整教程中，你将学会如何复制这些成功经验，打造属于自己的MVP产品。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                获取完整教程
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                >
                  咨询定制方案
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">创速引擎</span>
              </div>
              <p className="text-gray-400 text-sm">一人公司，AI赋能。让每个人都能快速打造自己的MVP产品。</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">快速链接</h3>
              <div className="space-y-2 text-sm">
                <Link href="/" className="text-gray-400 hover:text-white transition-colors block">
                  首页
                </Link>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors block">
                  关于我们
                </Link>
                <Link href="/showcase" className="text-gray-400 hover:text-white transition-colors block">
                  案例展示
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors block">
                  联系我们
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">学习资源</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  免费工具清单
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  AI使用指南
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  案例分析
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">关注我们</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  微信公众号
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  B站
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  知乎
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 创速引擎. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
