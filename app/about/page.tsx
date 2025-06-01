"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, Users, Clock, Star, Brain, Lightbulb, Rocket, Heart, Menu, X } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
              <Link href="/about" className="text-blue-600 font-medium">
                关于我们
              </Link>
              <Link href="/showcase" className="text-gray-600 hover:text-blue-600 transition-colors">
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
                  className="text-blue-600 font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  关于我们
                </Link>
                <Link
                  href="/showcase"
                  className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1"
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
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 关于创速引擎</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            重新定义一人公司的可能性
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            我相信在AI时代，一个人+AI工具矩阵可以创造出超越传统团队的价值。让我来分享我的故事和理念。
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">我的故事：从传统开发到AI赋能</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="leading-relaxed">
                    我是一名有着8年经验的全栈开发者，曾经在多家互联网公司担任技术负责人。在传统的开发模式下，我深深体会到团队协作的复杂性和开发周期的漫长。
                  </p>
                  <p className="leading-relaxed">
                    2023年，当GPT-4发布时，我意识到这是一个历史性的转折点。我开始尝试将AI工具融入到我的开发流程中，结果令人震惊：
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <p className="font-medium text-blue-800 mb-2">突破性发现：</p>
                    <p className="text-blue-700">
                      原本需要3个月的项目，我一个人用AI工具在1周内就完成了MVP。不仅如此，质量和用户体验甚至超过了之前团队开发的产品。
                    </p>
                  </div>
                  <p className="leading-relaxed">
                    从那时起，我开始系统性地研究和实践"一人+AI"的工作模式，并成功打造了多个获得市场验证的MVP产品。现在，我想把这套方法论分享给更多的创业者和开发者。
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium text-lg">AI + 人类智慧</p>
                    <p className="text-gray-500 text-sm">= 无限可能</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">我们的使命与愿景</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 bg-white/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">使命</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    让每一个有想法的人都能快速将创意转化为现实产品，不再受限于技术门槛、资金约束或团队规模。通过AI工具的力量，实现真正的创业民主化。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-white/80">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-800">愿景</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    构建一个AI赋能的创业生态，在这里，每个人都是自己的CEO，每个想法都有机会成为改变世界的产品。让"一人公司"成为未来商业的主流模式。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Team Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">认识我的AI团队</h2>
              <p className="text-lg text-gray-600">每个AI工具都有自己的"人格"和专长，就像真正的团队成员一样</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* GPT-4 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">GPT-4</h3>
                  <Badge className="mb-3 bg-green-100 text-green-700">产品经理 & 文案专家</Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    负责需求分析、产品规划、文案创作和用户体验设计。它的逻辑思维和创意能力让我的产品更有竞争力。
                  </p>
                </CardContent>
              </Card>

              {/* Claude */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Claude</h3>
                  <Badge className="mb-3 bg-blue-100 text-blue-700">代码架构师</Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    专注于代码架构设计和复杂逻辑实现。它的代码质量和系统思维帮我构建稳定可扩展的产品。
                  </p>
                </CardContent>
              </Card>

              {/* Midjourney */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Midjourney</h3>
                  <Badge className="mb-3 bg-purple-100 text-purple-700">视觉设计师</Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    创造令人惊艳的视觉设计和品牌形象。从Logo到UI界面，它让我的产品在视觉上脱颖而出。
                  </p>
                </CardContent>
              </Card>

              {/* AI Tools */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">专业AI工具</h3>
                  <Badge className="mb-3 bg-orange-100 text-orange-700">技术专家团</Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    包括数据分析、SEO优化、自动化测试等各领域的专业AI工具，为产品提供全方位的技术支持。
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">AI团队的协作优势</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">24/7全天候工作，无需休息</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">瞬间响应，极速执行</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">零沟通成本，完美配合</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">我们的核心价值观</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">创新至上</h3>
                    <p className="text-gray-600">拥抱新技术，勇于尝试，永远保持对未知领域的好奇心和探索精神。</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">效率为王</h3>
                    <p className="text-gray-600">时间是最宝贵的资源，我们追求用最少的时间创造最大的价值。</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">赋能他人</h3>
                    <p className="text-gray-600">分享知识和经验，帮助更多人实现自己的创业梦想和技术突破。</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">实用主义</h3>
                    <p className="text-gray-600">注重实际效果，所有的理论和方法都必须经过实战验证。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">我的技术背景</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">8+</span>
                  </div>
                  <h3 className="font-semibold mb-2">年开发经验</h3>
                  <p className="text-gray-600 text-sm">从前端到后端，从移动端到云服务的全栈开发经验</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">15+</span>
                  </div>
                  <h3 className="font-semibold mb-2">成功项目</h3>
                  <p className="text-gray-600 text-sm">涵盖电商、社交、工具类等多个领域的产品开发</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">25+</span>
                  </div>
                  <h3 className="font-semibold mb-2">AI工具掌握</h3>
                  <p className="text-gray-600 text-sm">深度使用并整合各类AI工具到实际开发流程中</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">技术栈与AI工具矩阵</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4 text-gray-700">传统技术栈</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "TypeScript"].map(
                      (tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4 text-gray-700">AI工具矩阵</h4>
                  <div className="flex flex-wrap gap-2">
                    {["GPT-4", "Claude", "Midjourney", "Cursor", "v0", "Bubble", "Webflow", "Zapier"].map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-blue-100 text-blue-700">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">想要了解更多？</h2>
            <p className="text-xl mb-8 opacity-90">
              如果你对我的理念和方法感兴趣，欢迎查看我的实战案例，或者直接联系我交流。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/showcase">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  查看实战案例
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                >
                  联系我
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
