import Link from "next/link"
import { Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">创速引擎</span>
            </div>
            <p className="text-gray-400 text-sm">一人公司，AI赋能。让每个人都能快速打造自己的MVP产品。</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">快速链接</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors block">
                关于我们
              </Link>
              <Link href="/showcase" className="text-gray-400 hover:text-white transition-colors block">
                案例展示
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors block">
                联系我们
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">学习资源</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                免费工具清单
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                AI使用指南
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                案例分析
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">关注我们</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                微信公众号
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                B站
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                知乎
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 创速引擎. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}