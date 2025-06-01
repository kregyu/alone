import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Send, Clock, PhoneIcon as Wechat } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

// 图标映射
const iconMap = {
  Mail,
  MessageCircle,
  Wechat
}

export default function ContactFormInfoSection() {
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center">
                <Send className="w-6 h-6 mr-3 text-blue-600" />
                发送消息
              </CardTitle>
              <CardDescription>填写下面的表单，我会在24小时内回复你</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">姓名 *</label>
                  <Input placeholder="请输入您的姓名" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">邮箱 *</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">主题 *</label>
                <Input placeholder="请简述您的咨询主题" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">咨询类型</label>
                <div className="flex flex-wrap gap-2">
                  {CONTACT_INFO.consultationTypes.map((type) => (
                    <Badge
                      key={type}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">详细描述 *</label>
                <Textarea placeholder="请详细描述您的需求或问题，这将帮助我更好地为您提供帮助..." rows={6} />
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3">
                <Send className="w-5 h-5 mr-2" />
                发送消息
              </Button>

              <p className="text-sm text-gray-500 text-center">提交后我会尽快回复。紧急事务请直接微信联系。</p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">联系方式</CardTitle>
                <CardDescription>选择最适合你的联系方式</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {CONTACT_INFO.methods.map((method, index) => {
                  const IconComponent = iconMap[method.icon as keyof typeof iconMap]
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${method.bgColor} rounded-full flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${method.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{method.title}</h3>
                        <p className="text-gray-600">{method.value}</p>
                        <p className="text-sm text-gray-500">{method.description}</p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  工作时间
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{CONTACT_INFO.workingHours.weekdays.label}</span>
                    <span className="font-medium">{CONTACT_INFO.workingHours.weekdays.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{CONTACT_INFO.workingHours.saturday.label}</span>
                    <span className="font-medium">{CONTACT_INFO.workingHours.saturday.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{CONTACT_INFO.workingHours.sunday.label}</span>
                    <span className="text-gray-500">{CONTACT_INFO.workingHours.sunday.time}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>注意：</strong> {CONTACT_INFO.workingHours.notice}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">关注我们</CardTitle>
                <CardDescription>获取最新的AI工具资讯和教程更新</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {CONTACT_INFO.socialMedia.map((social, index) => {
                    const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                    return (
                      <Button key={index} variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                        <div className={`w-8 h-8 ${social.bgColor} rounded-full flex items-center justify-center`}>
                          <IconComponent className={`w-5 h-5 ${social.iconColor}`} />
                        </div>
                        <span className="text-sm">{social.name}</span>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}