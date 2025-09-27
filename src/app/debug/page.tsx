'use client'

export default function DebugPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">🔍 Next.js 样式调试页面</h1>

        <div className="space-y-6">
          {/* 基础样式测试 */}
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">基础样式测试</h2>
            <p className="text-foreground-secondary">
              如果您能看到这个盒子有背景色、边框和圆角，说明Tailwind CSS样式正常工作。
            </p>
          </div>

          {/* 颜色测试 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary text-white p-4 rounded-lg">
              <h3 className="font-bold">主色调</h3>
              <p className="text-sm">Primary Color</p>
            </div>
            <div className="bg-surface border border-border p-4 rounded-lg">
              <h3 className="font-bold">表面色</h3>
              <p className="text-foreground-secondary">Surface Color</p>
            </div>
            <div className="bg-background border border-primary p-4 rounded-lg">
              <h3 className="font-bold">背景色</h3>
              <p className="text-foreground">Background Color</p>
            </div>
          </div>

          {/* 布局测试 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-border rounded-xl p-4">
              <h3 className="font-bold mb-2">网格布局测试</h3>
              <p className="text-foreground-secondary text-sm">
                这个页面使用了网格布局系统，如果正确显示，说明Tailwind的网格类工作正常。
              </p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-4">
              <h3 className="font-bold mb-2">响应式测试</h3>
              <p className="text-foreground-secondary text-sm">
                调整浏览器窗口大小，查看布局是否响应式变化。
              </p>
            </div>
          </div>

          {/* 交互测试 */}
          <div className="bg-surface border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
            <h3 className="font-bold mb-2">交互效果测试</h3>
            <p className="text-foreground-secondary">
              鼠标悬停在这个区域，应该看到阴影和边框颜色的变化。
            </p>
          </div>

          {/* 返回链接 */}
          <div className="pt-8">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              返回首页
            </a>
          </div>

          {/* 调试信息 */}
          <div className="mt-8 p-4 bg-background border border-border rounded-lg">
            <h3 className="font-bold mb-2">调试信息</h3>
            <div className="text-sm text-foreground-secondary space-y-1">
              <p>当前页面: /debug</p>
              <p>样式系统: Tailwind CSS v4</p>
              <p>主题: CSS变量系统</p>
              <p>框架: Next.js 14</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}