import { CheckCircle } from "lucide-react"
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">我是谁？我的AI团队理念</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                我是一名技术创业者，相信<strong>一个人+AI</strong>
                可以胜过传统的小团队。通过精心组建的AI工具矩阵，我将各种AI模型打造成我的"超级员工"：
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">GPT-4作为我的产品经理和文案专家</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Claude作为我的代码架构师</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Midjourney作为我的视觉设计师</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">各种专业AI工具作为我的技术专家</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-center rounded-xl border-2 border-gray-200">
                <Image
                    src="/images/myteam.png"
                    alt="Hero Image"
                    width={800}
                    height={600}
                    className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}