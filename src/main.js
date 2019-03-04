import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import 'normalize.css'
import './assets/styles/main.sass'
import './api/config'
import api from './api'
import enums from './utils/enums'
import filters from './utils/filters'
import { Button, Cell, CellGroup, Field, List, Loading, Rate, Toast } from 'vant'
import loading from './components/Loading'

Vue.use(CellGroup)
  .use(Cell)
  .use(Field)
  .use(Button)
  .use(Rate)
  .use(List)
  .use(Toast)
  .use(Loading)

Vue.component('loading', loading)

Vue.prototype.$api = api
Vue.prototype.$enums = enums
Vue.prototype.$filters = filters
// 全局注册过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(`${filterName}`, filters[filterName])
})

Vue.prototype.$px2rem = (px) => {
  if (!px) return 0
  if (typeof px === 'string') {
    px = parseFloat(px.replace(/px$/, ''))
  }
  return px / 37.5 + 'rem'
}

// if (process.env.NODE_ENV === 'development') {
//   api.simulateLogin({
//     phone: '15874150335'
//   })
// }

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')