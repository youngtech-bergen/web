// next.config.js
const path = require('path')
const withImages = require('next-images')
module.exports = withImages(
  {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }
)
