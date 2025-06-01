import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PersonalBackgroundSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">我的技术背景</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">8+</span>
                </div>
                <h3 className="font-semibold mb-2">年开发经验</h3>
                <p className="text-gray-600 text-sm">从前端到后端，从移动端到云服务的全栈开发经验</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">15+</span>
                </div>
                <h3 className="font-semibold mb-2">成功项目</h3>
                <p className="text-gray-600 text-sm">涵盖电商、社交、工具类等多个领域的产品开发</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">25+</span>
                </div>
                <h3 className="font-semibold mb-2">AI工具掌握</h3>
                <p className="text-gray-600 text-sm">深度使用并整合各类AI工具到实际开发流程中</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">技术栈与AI工具矩阵</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium mb-4 text-gray-700">传统技术栈</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "TypeScript"].map(
                    (tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                        {tech}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-4 text-gray-700">AI工具矩阵</h4>
                <div className="flex flex-wrap gap-2">
                  {["GPT-4", "Claude", "Midjourney", "Cursor", "v0", "Bubble", "Webflow", "Zapier"].map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-blue-100 text-blue-700">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}