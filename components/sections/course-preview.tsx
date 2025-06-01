import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CheckCircle } from "lucide-react"

export default function CoursePreview() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700">🎯 核心课程</Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">3天MVP速成训练营</h2>
            <p className="text-lg text-gray-600">系统化学习AI工具矩阵，掌握快速搭建MVP的核心技能</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Day 1 */}
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-700">第1天</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>8小时</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">AI工具矩阵搭建</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>选择合适的AI工具组合</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>配置开发环境</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>制定项目架构</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-100 text-purple-700">第2天</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>10小时</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">核心功能开发</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>AI辅助代码生成</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>用户界面设计</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>核心逻辑实现</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-700">第3天</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>6小时</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">部署与优化</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>产品测试与调优</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>一键部署上线</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>用户反馈收集</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
              立即加入训练营
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">限时优惠价 ¥299（原价 ¥999）</p>
          </div>
        </div>
      </div>
    </section>
  )
}