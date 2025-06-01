"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Zap, Mail, MessageCircle, Send, Clock, PhoneIcon as Wechat, Menu, X } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              <Link href="/showcase" className="text-gray-600 hover:text-blue-600 transition-colors">
                案例展示
              </Link>
              <Link href="/contact" className="text-blue-600 font-medium">
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
                  className="text-blue-600 font-medium px-2 py-1"
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
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">💬 联系我们</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            让我们一起探讨AI的无限可能
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            无论你是想学习AI工具使用，还是需要定制化的MVP开发方案，我都很乐意与你交流。
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-blue-600" />
                  发送消息
                </CardTitle>
                <CardDescription>填写下面的表单，我会在24小时内回复你</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">姓名 *</label>
                    <Input placeholder="请输入您的姓名" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">邮箱 *</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">主题 *</label>
                  <Input placeholder="请简述您的咨询主题" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">咨询类型</label>
                  <div className="flex flex-wrap gap-2">
                    {["学习教程", "MVP开发", "技术咨询", "商业合作", "其他"].map((type) => (
                      <Badge
                        key={type}
                        variant="outline"
                        className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">详细描述 *</label>
                  <Textarea placeholder="请详细描述您的需求或问题，这将帮助我更好地为您提供帮助..." rows={6} />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3">
                  <Send className="w-5 h-5 mr-2" />
                  发送消息
                </Button>

                <p className="text-sm text-gray-500 text-center">提交后我会尽快回复。紧急事务请直接微信联系。</p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">联系方式</CardTitle>
                  <CardDescription>选择最适合你的联系方式</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">邮箱</h3>
                      <p className="text-gray-600">hrsdef@gmail.com</p>
                      <p className="text-sm text-gray-500">24小时内回复</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Wechat className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">微信</h3>
                      <p className="text-gray-600">hrsdef</p>
                      <p className="text-sm text-gray-500">工作时间内即时回复</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">在线咨询</h3>
                      <p className="text-gray-600">网站右下角聊天窗口</p>
                      <p className="text-sm text-gray-500">工作时间在线</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    工作时间
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">周一 - 周五</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">周六</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">周日</span>
                      <span className="text-gray-500">休息</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>注意：</strong> 邮件咨询24小时内回复，紧急事务请微信联系
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">关注我们</CardTitle>
                  <CardDescription>获取最新的AI工具资讯和教程更新</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Wechat className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-sm">微信公众号</span>
                    </Button>

                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-sm">B站</span>
                    </Button>

                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="text-sm">知乎</span>
                    </Button>

                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <span className="text-sm">小红书</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">常见问题</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-800">教程适合什么基础的人学习？</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    教程设计为零基础友好，无论你是完全的新手还是有一定技术背景，都能从中受益。我会从最基础的AI工具使用开始讲解。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-800">学完后真的能独立开发MVP吗？</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    是的，教程包含完整的实战项目，你将跟着我一步步完成一个真实的MVP开发，掌握整个流程和所有必要技能。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-800">提供售后支持吗？</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    提供6个月的免费答疑支持，专属学员群交流，以及终身免费的教程内容更新。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-800">可以定制开发服务吗？</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    可以提供MVP定制开发服务，根据你的具体需求和预算制定方案。请通过联系方式详细咨询。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">准备开始你的AI之旅了吗？</h2>
            <p className="text-xl mb-8 opacity-90">
              不要让技术门槛阻挡你的创业梦想。现在就联系我，让AI成为你最强大的创业伙伴。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                立即获取教程
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                预约免费咨询
              </Button>
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
