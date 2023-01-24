/** @type {import('next').NextConfig} */
const giphyApiDomains = [
  'media0.giphy.com',
  'media1.giphy.com',
  'media2.giphy.com',
  'media3.giphy.com',
  'media4.giphy.com'
]

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [...giphyApiDomains]
  }
}

module.exports = nextConfig
