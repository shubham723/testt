const path = require('path');
const withPWA = require('next-pwa');
// next.config.js


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
});
