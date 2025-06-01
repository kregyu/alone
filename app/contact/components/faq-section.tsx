import { Card, CardContent } from "@/components/ui/card"

export default function FaqSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">常见问题</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-gray-800">教程适合什么基础的人学习？</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  教程设计为零基础友好，无论你是完全的新手还是有一定技术背景，都能从中受益。我会从最基础的AI工具使用开始讲解。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-gray-800">学完后真的能独立开发MVP吗？</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  是的，教程包含完整的实战项目，你将跟着我一步步完成一个真实的MVP开发，掌握整个流程和所有必要技能。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-gray-800">提供售后支持吗？</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  提供6个月的免费答疑支持，专属学员群交流，以及终身免费的教程内容更新。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-gray-800">可以定制开发服务吗？</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  可以提供MVP定制开发服务，根据你的具体需求和预算制定方案。请通过联系方式详细咨询。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}