/** @type {import('next').NextConfig} */

const eslintDirs = ['frontend', '__test__', '__mocks__']
const giphyApiDomains = [...Array(6)].map(
  (_, index) => `media${index}.giphy.com`
)

const nextConfig = {
  reactStrictMode: true,
  eslint: { dirs: eslintDirs },
  images: { domains: giphyApiDomains }
}

module.exports = nextConfig
