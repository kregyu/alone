import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">想要了解更多？</h2>
          <p className="text-xl mb-8 opacity-90">
            如果你对我的理念和方法感兴趣，欢迎查看我的实战案例，或者直接联系我交流。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/showcase">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                查看实战案例
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                联系我
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}