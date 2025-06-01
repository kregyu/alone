export default function ProcessOverviewSection() {
  const processSteps = [
    {
      step: "1",
      title: "需求分析",
      description: "使用AI辅助市场调研和用户需求分析",
      color: "blue"
    },
    {
      step: "2",
      title: "快速设计",
      description: "AI生成原型设计和用户界面",
      color: "purple"
    },
    {
      step: "3",
      title: "敏捷开发",
      description: "AI辅助编码和功能实现",
      color: "green"
    },
    {
      step: "4",
      title: "快速上线",
      description: "自动化部署和用户反馈收集",
      color: "orange"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">标准化MVP搭建流程</h2>
          <p className="text-lg text-gray-600 mb-12">每个项目都遵循这套经过验证的快速开发流程</p>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl font-bold text-${step.color}-600`}>{step.step}</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}