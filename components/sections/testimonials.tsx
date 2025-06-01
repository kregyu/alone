import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
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
  )
}