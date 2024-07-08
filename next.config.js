/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns:[
      {
        hostname:"utfs.io"
      }
        
    ]
  }
}

module.exports = nextConfig
