import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">准备开始你的AI之旅了吗？</h2>
          <p className="text-xl mb-8 opacity-90">
            不要让技术门槛阻挡你的创业梦想。现在就联系我，让AI成为你最强大的创业伙伴。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              立即获取教程
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            >
              预约免费咨询
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}