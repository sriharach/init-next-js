/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withLess = require('next-with-less')

const plugins = [
  [
    withLess,
    {
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ],
]

const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
}

module.exports = withPlugins(plugins, nextConfig)
