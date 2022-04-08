const { merge } = require('webpack-merge')

process.env.NODE_ENV = 'development'
module.exports = merge(require('./webpack.common.js'), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    watchFiles: ['./index.html'],
  },
})
