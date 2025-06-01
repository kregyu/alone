import { Rocket, Zap, Users, Target } from "lucide-react"

export default function ValuesSection() {
  return (
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
  )
}