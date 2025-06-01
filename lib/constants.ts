// 主题配置
export const THEME = {
  colors: {
    primary: 'from-blue-600 to-purple-600',
    primaryHover: 'from-blue-700 to-purple-700',
    background: 'from-slate-50 via-blue-50 to-indigo-50'
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    }
  }
} as const

// 业务配置
export const BUSINESS = {
  contact: {
    email: 'hrsdef@gmail.com',
    wechat: 'hrsdef',
    onlineChat: '网站右下角聊天窗口'
  },
  social: {
    github: 'https://github.com/your-username',
    twitter: 'https://twitter.com/your-username'
  }
} as const

// 联系信息配置
export const CONTACT_INFO = {
  methods: [
    {
      icon: 'Mail',
      title: '邮箱',
      value: 'hrsdef@gmail.com',
      description: '24小时内回复',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'Wechat',
      title: '微信',
      value: 'hrsdef',
      description: '工作时间内即时回复',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'MessageCircle',
      title: '在线咨询',
      value: '网站右下角聊天窗口',
      description: '工作时间在线',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ],
  workingHours: {
    weekdays: {
      label: '周一 - 周五',
      time: '9:00 - 18:00'
    },
    saturday: {
      label: '周六',
      time: '10:00 - 16:00'
    },
    sunday: {
      label: '周日',
      time: '休息'
    },
    notice: '邮件咨询24小时内回复，紧急事务请微信联系'
  },
  socialMedia: [
    {
      name: '微信公众号',
      icon: 'Wechat',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      name: 'B站',
      icon: 'MessageCircle',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      name: '知乎',
      icon: 'MessageCircle',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      name: '小红书',
      icon: 'MessageCircle',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    }
  ],
  consultationTypes: ['学习教程', 'MVP开发', '技术咨询', '商业合作', '其他']
} as const

// SEO配置
export const SEO = {
  defaultTitle: '创速引擎 - AI驱动的快速开发服务',
  defaultDescription: '专业的AI开发团队，3天内从想法到产品上线。提供端到端的开发服务。',
  keywords: ['AI开发', '快速开发', '产品开发', 'MVP开发']
} as const