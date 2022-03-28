// next.config.js
const path = require('path');
const withPWA = require('next-pwa');
// next.config.js
// const withVideos = require('next-videos')


module.exports = withPWA({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        crypto: false
      }
    }
    config.module.rules.push({
      test: /\.(gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });

    return config;
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    // dest: 'public',
    register: true,
    sw: '/sw.js',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['3.88.73.172'],
  },
});

// module.exports = {
//   images: {
//     domains: ['3.88.73.172'],
//   },
// }
