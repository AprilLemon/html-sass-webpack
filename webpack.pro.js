const { merge } = require('webpack-merge')

process.env.NODE_ENV = 'production'
module.exports = merge(require('./webpack.common.js'), {
  mode: 'production',
  devtool: 'inline-source-map',
})
