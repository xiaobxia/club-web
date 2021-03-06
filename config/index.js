
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    // assetsSubDirectory: 'static',
    assetsSubDirectory: '',
    // 解决打包时font的问题
    assetsPathInCss: '../../',
    assetsPublicPath: './',
    //放七牛加速，减少带宽占用
    cdnPublicPath: 'http://ozuuc00xw.bkt.clouddn.com/',
    //打包就移除sourceMap
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the Bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    ifCdn: false
  },
  dev: {
    env: require('./dev.env'),
    port: 4000,
    autoOpenBrowser: true,
    // assetsSubDirectory: 'static',
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {
      "/clubWeb": {
        // "target": "http://39.108.114.91:8080/",
        "target": "http://localhost:8080/"
      }
    //your-business': {
    //  target: 'http://11.111.111.11/'
    //},
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
