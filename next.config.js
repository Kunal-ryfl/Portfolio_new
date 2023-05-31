/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns:[
      {
        hostname:"media.licdn.com"
      }
        
    ]
  }
}

module.exports = nextConfig
