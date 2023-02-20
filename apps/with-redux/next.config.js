const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'jherr-pokemon.s3.us-west-1.amazonaws.com',
    ],
  },
})
