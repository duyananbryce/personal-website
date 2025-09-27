/** @type {import('next').NextConfig} */
const nextConfig = {
  // 配置允许的开发源
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      }
    ]
  },
  // 允许的开发源地址
  allowedDevOrigins: ['http://localhost:4000', 'http://172.16.2.211:4000']
}

module.exports = nextConfig