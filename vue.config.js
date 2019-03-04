
const path = require('path')

// 解析dir的真实路径
function resolveRealPath (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/assets/styles/_variables.sass" , "@/assets/styles/_extends.sass", "@/assets/styles/_mixins.sass"`
      }
    }
  },
  // webpack 链接 API，用于生成和修改 webapck 配置
  chainWebpack: config => {
    // 配置目录别名
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@utils', resolveRealPath('src/utils'))
      .set('@views', resolveRealPath('src/views'))
      .set('@assets', resolveRealPath('src/assets'))
      .set('@styles', resolveRealPath('src/assets/styles'))
      .set('@img', resolveRealPath('src/assets/images'))
      .set('@components', resolveRealPath('src/components'))
  },
  devServer: {
    proxy: 'https://gy-dev.yun-chang.cn'
  },
  baseUrl: '',
  productionSourceMap: false
}
