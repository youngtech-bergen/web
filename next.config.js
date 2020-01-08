// next.config.js
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
module.exports = withImages(
  withSass({
    cssModules: true,
    webpack(config, options) {
      config.module.rules.push(
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        },
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      )
      return config
    }
  })
)
