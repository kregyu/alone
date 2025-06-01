import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Zap, Star, Clock, Play, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  description: string
  challenge: string
  solution: string
  tools: string[]
  timeline: string
  results: {
    users: string
    conversion: string
    revenue: string
  }
  metrics: Array<{
    label: string
    value: string
    icon: any
  }>
  image: string
  color: string
}

interface ProjectsGridSectionProps {
  projects: Project[]
}

export default function ProjectsGridSection({ projects }: ProjectsGridSectionProps) {
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Project Header */}
              <div className={`${project.image} p-6 text-center`}>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-white/80">
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-600 bg-white/80 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 mr-1" />
                    {project.timeline}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`w-10 h-10 bg-${project.color}-100 rounded-full flex items-center justify-center mx-auto mb-2`}
                      >
                        <metric.icon className={`w-5 h-5 text-${project.color}-600`} />
                      </div>
                      <div className={`text-lg font-bold text-${project.color}-600`}>{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-red-500" />
                      挑战
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-green-500" />
                      解决方案
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-purple-500" />
                    技术栈 & AI工具
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className={`bg-${project.color}-50 text-${project.color}-700 border-${project.color}-200`}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Timeline & Results */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-gray-700 mb-2">开发时间线</h5>
                      <div className="space-y-1 text-gray-600">
                        <div>• 需求分析: 0.5天</div>
                        <div>• AI辅助设计: 0.5天</div>
                        <div>• 快速开发: {Number.parseFloat(project.timeline) - 1}天</div>
                        <div>• 测试上线: 0.5天</div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700 mb-2">核心成果</h5>
                      <div className="space-y-1 text-gray-600">
                        <div>• 用户数: {project.results.users}</div>
                        <div>• 转化率: {project.results.conversion}</div>
                        <div>• 月收入: {project.results.revenue}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className={`flex-1 bg-${project.color}-600 hover:bg-${project.color}-700`}>
                    <Play className="w-4 h-4 mr-2" />
                    查看演示
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    详细分析
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}