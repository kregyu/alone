import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
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
  )
}