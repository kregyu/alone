import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ResourcesTeaser() {
  return (
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
  )
}