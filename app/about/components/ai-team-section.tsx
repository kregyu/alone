import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Star, Rocket, Clock, Heart } from "lucide-react"

export default function AiTeamSection() {
  return (
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
  )
}