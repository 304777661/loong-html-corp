import Vue from 'vue'
import Router from 'vue-router'
import setWechatTitle from './utils/setWechatTitle'
import { Toast } from 'vant'

Vue.use(Router)

function view (path) {
  return () => import(`./views/${path}.vue`)
}

const router = new Router({
  routes: [{
    path: '/mine',
    component: view('EmptyTemplate'),
    children: [{
      path: 'info',
      name: 'Info',
      component: view('mine/Info'),
      meta: {
        title: '个人信息'
      }
    }]
  }, {
    path: '/about',
    name: 'About',
    component: view('About')
  }, {
    path: '/pug',
    name: 'Pug',
    component: view('PugSample')
  }, {
    path: '/manage/firmInfo',
    name: 'manageFirmInfo',
    component: view('manage/firmInfo/Index'),
    meta: { title: '供应商信息' }
  }]
})

router.beforeEach((to, from, next) => {
  setWechatTitle(to.meta.title || '武汉昌龙企业微信')
  Toast.clear()
  next()
})

export default router
