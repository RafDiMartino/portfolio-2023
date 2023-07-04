/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    webpack: (config) => {
        config.module.rules.push({
          test: /\.pdf$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        });
        return config;
      }
}

module.exports = nextConfig
