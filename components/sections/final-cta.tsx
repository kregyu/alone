import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCta() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">准备好开启你的AI赋能之旅了吗？</h2>
          <p className="text-xl mb-8 opacity-90">加入已经有500+学员的创速引擎社区，让AI成为你最强大的创业伙伴</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              立即解锁AI快速搭建MVP的秘密
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            >
              先获取免费资料
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">30天无条件退款保证 | 终身免费更新 | 专属社群支持</p>
        </div>
      </div>
    </section>
  )
}