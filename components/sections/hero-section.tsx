import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
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
  )
}