import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"

export default function MvpShowcaseTeaser() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">MVP案例精选</h2>
            <p className="text-lg text-gray-600">看看我是如何用AI在3天内打造这些成功的MVP产品</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group p-0">
              <div>
                <div className="text-center">
                  <Image
                      src="/images/writehelper.png"
                      alt="WriteHelper"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-blue-100 text-blue-700">AI写作助手</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>2天</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">WriteHelper</h3>
                  <p className="text-gray-600 text-sm mb-4">AI驱动的智能写作平台，帮助用户快速生成高质量内容</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>1.2k+ 用户</span>
                    </div>
                    <span className="text-green-600 font-semibold text-sm">月收入 ¥8k+</span>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Case 2 */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group p-0">
              <div>
                <div className="text-center">
                  <Image
                      src="/images/social.png"
                      alt="SocialBoost"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-100 text-purple-700">社交媒体</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>3天</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">SocialBoost</h3>
                  <p className="text-gray-600 text-sm mb-4">AI社交媒体内容生成器，一键生成吸引人的社交媒体内容</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>800+ 用户</span>
                    </div>
                    <span className="text-green-600 font-semibold text-sm">月收入 ¥5k+</span>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Case 3 */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group p-0">
              <div>
                <div className="text-center">
                  <Image
                      src="/images/tool.png"
                      alt="ToolFinder"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-green-100 text-green-700">工具导航</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>1天</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">ToolFinder</h3>
                  <p className="text-gray-600 text-sm mb-4">AI工具发现平台，帮助用户找到最适合的AI工具</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>2k+ 用户</span>
                    </div>
                    <span className="text-green-600 font-semibold text-sm">月收入 ¥12k+</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/showcase">
              <Button variant="outline" size="lg" className="border-2 border-blue-200 hover:border-blue-300">
                查看更多成功案例
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}