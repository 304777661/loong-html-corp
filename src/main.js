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
import eventBus from './utils/eventBus'
import {
  Icon,
  Button,
  Cell,
  CellGroup,
  Field,
  List,
  Loading,
  Rate,
  Toast,
  Panel,
  DatetimePicker,
  Popup,
  Collapse,
  CollapseItem,
  Tab,
  Tabs,
  Actionsheet,
  Picker,
  Card,
  Tag,
  Stepper,
  Checkbox,
  CheckboxGroup,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant'
import loading from './components/Loading'
import NoData from './components/NoData'
import Search from './components/Search'
import MyButton from './components/MyButton'

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
  .use(DatetimePicker)
  .use(Popup)
  .use(Tab)
  .use(Tabs)
  .use(Actionsheet)
  .use(Picker)
  .use(Card)
  .use(Tag)
  .use(Stepper)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn)

Vue.component('loading', loading)
Vue.component('NoData', NoData)
Vue.component('Search', Search)
Vue.component('MyButton', MyButton)

Vue.prototype.$api = api
Vue.prototype.$enums = enums
Vue.prototype.$pageSize = 10
Vue.prototype.$filters = filters
Vue.prototype.$eventBus = eventBus
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
