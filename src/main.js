import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import 'normalize.css'
import './assets/styles/main.sass'
import './api/config'
import './assets/styles/vant.sass'
import api from './api'
import enums from './utils/enums'
import filters from './utils/filters'
import { Icon, Button, Cell, CellGroup, Field, List, Loading, Rate, Toast, Panel, Collapse, CollapseItem } from 'vant'
import loading from './components/Loading'
import NoData from './components/NoData'


Vue.use(Icon)
  .use(CellGroup)
  .use(Cell)
  .use(Field)
  .use(Button)
  .use(Rate)
  .use(List)
  .use(Toast)
  .use(Panel)
  .use(Loading)
  .use(Collapse)
  .use(CollapseItem)

Vue.component('loading', loading)
Vue.component('NoData', NoData)

Vue.prototype.$api = api
Vue.prototype.$enums = enums
Vue.prototype.$pageSize = 10
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
