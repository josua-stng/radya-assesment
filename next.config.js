/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
           hostname: 'www.theaudiodb.com'
      }
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
