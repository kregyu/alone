import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
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
  )
}