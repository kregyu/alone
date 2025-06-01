import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb } from "lucide-react"

export default function MissionVisionSection() {
  return (
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
  )
}