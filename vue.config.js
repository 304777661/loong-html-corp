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
  devServer: {
    proxy: 'https://gy-dev.yun-chang.cn'
  },
  baseUrl: '',
  productionSourceMap: false
}
