import { Brain } from "lucide-react"

export default function MyStorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">我的故事：从传统开发到AI赋能</h2>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  我是一名有着8年经验的全栈开发者，曾经在多家互联网公司担任技术负责人。在传统的开发模式下，我深深体会到团队协作的复杂性和开发周期的漫长。
                </p>
                <p className="leading-relaxed">
                  2023年，当GPT-4发布时，我意识到这是一个历史性的转折点。我开始尝试将AI工具融入到我的开发流程中，结果令人震惊：
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="font-medium text-blue-800 mb-2">突破性发现：</p>
                  <p className="text-blue-700">
                    原本需要3个月的项目，我一个人用AI工具在1周内就完成了MVP。不仅如此，质量和用户体验甚至超过了之前团队开发的产品。
                  </p>
                </div>
                <p className="leading-relaxed">
                  从那时起，我开始系统性地研究和实践"一人+AI"的工作模式，并成功打造了多个获得市场验证的MVP产品。现在，我想把这套方法论分享给更多的创业者和开发者。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium text-lg">AI + 人类智慧</p>
                  <p className="text-gray-500 text-sm">= 无限可能</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}