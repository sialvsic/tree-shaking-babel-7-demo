const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: [
    __dirname + '/test/file.js'
  ],
  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './buildFile'),
  },
  module: {},
  mode: 'production'
};
