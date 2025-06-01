import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 MVP案例展示</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          从想法到产品，3天见证奇迹
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          这里展示了我使用AI工具矩阵快速搭建的真实MVP案例。每个项目都包含详细的搭建过程、使用的AI工具、时间线和实际成果数据。
        </p>
      </div>
    </section>
  )
}