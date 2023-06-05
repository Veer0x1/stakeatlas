/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['source.unsplash.com',"media.carsandbids.com"],
  }
}

export default nextConfig
