"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, Users, Clock, Star, Play, CheckCircle, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

export default function HomePage() {
  // 在组件内部添加状态管理
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                创速引擎
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                首页
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
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
                  className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1"
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
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 一人公司，AI赋能</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            3天打造你的MVP
            <br />
            引爆流量！
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            掌握AI工具矩阵，让人工智能成为你的超级员工。从想法到产品，从零到一，快速验证商业模式，抢占市场先机。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
            >
              立即学习MVP速成秘籍
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-blue-200 hover:border-blue-300"
            >
              获取免费AI工具清单
            </Button>
          </div>

          {/* Demo Video Placeholder */}
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border-2 border-gray-200">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">AI快速搭建MVP演示视频</p>
                <p className="text-gray-400 text-sm">点击观看完整搭建过程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">我是谁？我的AI团队理念</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  我是一名技术创业者，相信<strong>一个人+AI</strong>
                  可以胜过传统的小团队。通过精心组建的AI工具矩阵，我将各种AI模型打造成我的"超级员工"：
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">GPT-4作为我的产品经理和文案专家</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Claude作为我的代码架构师</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">Midjourney作为我的视觉设计师</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-gray-700">各种专业AI工具作为我的技术专家</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="text-center rounded-xl border-2 border-gray-200">
                  <Image
                      src="/images/myteam.png"
                      alt="Hero Image"
                      width={800} // 必须提供 width 和 height (或 layout="fill")
                      height={600}
                      className="rounded-xl"
                      // layout="responsive" // 可选，用于响应式图片
                      // priority // 可选，如果是首屏关键图片
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">传统开发的痛点 vs AI赋能的解决方案</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pain Points */}
              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    传统开发痛点
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">开发周期长，动辄几个月才能看到成果</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">成本高昂，需要组建多人团队</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">技术门槛高，非技术人员难以参与</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">沟通成本大，团队协作效率低</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">错过市场窗口，竞争对手抢先</span>
                  </div>
                </CardContent>
              </Card>

              {/* Solutions */}
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <Zap className="w-6 h-6 mr-2" />
                    AI赋能解决方案
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">3天完成MVP，快速验证想法</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">一人成军，大幅降低人力成本</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">AI辅助，零基础也能快速上手</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">高效协作，AI工具无缝配合</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">抢占先机，快速占领市场</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Showcase Teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">MVP案例精选</h2>
              <p className="text-lg text-gray-600">看看我是如何用AI在3天内打造这些成功的MVP产品</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Case 1 */}
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group p-0">
                <div>
                  <div className="text-center">
                    <Image
                        src="/images/writehelper.png"
                        layout="responsive"
                        alt="Hero Image"
                        width={800} // 必须提供 width 和 height (或 layout="fill")
                        height={600}
                        className="rounded-xl"
                        // layout="responsive" // 可选，用于响应式图片
                        // priority // 可选，如果是首屏关键图片
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">SaaS工具</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      2.5天
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">智能文案生成器</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    使用GPT-4和自定义提示工程，帮助营销人员快速生成高质量文案
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-medium">月活用户: 2.3K</span>
                    <span className="text-blue-600 font-medium">转化率: 12%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Case 2 */}
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group p-0">
                <div>
                  <div className="text-center">
                    <Image
                          src="/images/social.png"
                          alt="Hero Image"
                          layout="responsive"
                          width={800} // 必须提供 width 和 height (或 layout="fill")
                          height={600}
                          className="rounded-xl"
                          // layout="responsive" // 可选，用于响应式图片
                          // priority // 可选，如果是首屏关键图片
                      />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">社交应用</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      3天
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">AI匹配交友</h3>
                  <p className="text-gray-600 text-sm mb-4">基于AI算法的智能匹配系统，提高用户匹配成功率</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-medium">注册用户: 1.8K</span>
                    <span className="text-purple-600 font-medium">匹配率: 78%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Case 3 */}
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group p-0">
                <div>
                  <div className="text-center">
                    <Image
                          src="/images/tool.png"
                          alt="Hero Image"
                          width={800} // 必须提供 width 和 height (或 layout="fill")
                          height={600}
                          className="rounded-xl"
                          layout="responsive" // 可选，用于响应式图片
                          // priority // 可选，如果是首屏关键图片
                      />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">生产力</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      2天
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-600 transition-colors">智能日程管理</h3>
                  <p className="text-gray-600 text-sm mb-4">AI驱动的日程优化工具，自动安排最佳时间分配</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-medium">日活用户: 890</span>
                    <span className="text-green-600 font-medium">留存率: 85%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link href="/showcase">
                <Button variant="outline" size="lg" className="border-2 border-blue-200 hover:border-blue-300">
                  查看更多案例详情
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">教程核心内容预览</h2>
            <p className="text-lg text-gray-600 mb-12">掌握这些技能，你也能成为AI赋能的一人公司</p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">AI工具矩阵搭建</h3>
                    <p className="text-gray-600 text-sm">学会选择和组合20+核心AI工具，打造你的专属AI团队</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">快速原型设计</h3>
                    <p className="text-gray-600 text-sm">从想法到可交互原型，AI辅助设计流程详解</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">无代码/低代码开发</h3>
                    <p className="text-gray-600 text-sm">掌握Bubble、Webflow等平台，AI辅助快速开发</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">AI驱动营销</h3>
                    <p className="text-gray-600 text-sm">内容创作、SEO优化、社媒运营全流程AI化</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">数据分析与优化</h3>
                    <p className="text-gray-600 text-sm">AI辅助用户行为分析，产品迭代决策</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">商业化策略</h3>
                    <p className="text-gray-600 text-sm">从MVP到盈利产品的完整商业化路径</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-2 border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">学习成果保证</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>独立完成MVP搭建</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>掌握25+AI工具</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>建立个人AI工作流</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">学员真实评价</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "作为一个非技术背景的创业者，我原本以为开发产品是不可能的事。但通过这个教程，我在3天内就搭建出了自己的第一个MVP，现在已经有了200多个用户！"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">李</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">李明</p>
                      <p className="text-sm text-gray-500">电商创业者</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "这套AI工具组合太强大了！我现在一个人就能完成以前需要整个团队才能做的事情。效率提升了至少5倍，成本却降低了80%。"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">张</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">张小雨</p>
                      <p className="text-sm text-gray-500">产品经理</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Resources Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">免费资源 & 最新洞察</h2>
            <p className="text-lg text-gray-600 mb-8">获取AI工具使用技巧和行业最新趋势</p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-left">
                  <Badge className="mb-3 bg-blue-100 text-blue-700">工具指南</Badge>
                  <h3 className="font-semibold mb-2">2024年最值得关注的25个AI工具</h3>
                  <p className="text-gray-600 text-sm">详细评测和使用场景分析</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-left">
                  <Badge className="mb-3 bg-green-100 text-green-700">案例分析</Badge>
                  <h3 className="font-semibold mb-2">如何用AI在48小时内验证商业想法</h3>
                  <p className="text-gray-600 text-sm">实战案例和具体操作步骤</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-left">
                  <Badge className="mb-3 bg-purple-100 text-purple-700">趋势洞察</Badge>
                  <h3 className="font-semibold mb-2">一人公司的未来：AI时代的新商业模式</h3>
                  <p className="text-gray-600 text-sm">行业趋势和机会分析</p>
                </CardContent>
              </Card>
            </div>
            <Button variant="outline" size="lg" className="mt-8 border-2 border-gray-300 hover:border-gray-400">
              访问免费资源库
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">准备好开启你的AI赋能之旅了吗？</h2>
            <p className="text-xl mb-8 opacity-90">加入已经有500+学员的创速引擎社区，让AI成为你最强大的创业伙伴</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                立即解锁AI快速搭建MVP的秘密
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                先获取免费资料
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">30天无条件退款保证 | 终身免费更新 | 专属社群支持</p>
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
