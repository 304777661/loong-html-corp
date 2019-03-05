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
    component: view('manage/firmInfo/Index')
  }, {
    path: '/project',
    component: view('EmptyTemplate'),
    children: [{
      path: 'list',
      name: 'ProjectList',
      component: view('project/List'),
      meta: {
        title: '项目列表'
      }
    }, {
      path: 'detail',
      name: 'ProjectDetail',
      component: view('project/Detail'),
      meta: {
        title: '项目详情'
      }
    }, {
      path: 'task',
      name: 'TaskDetail',
      component: view('project/TaskDetail'),
      meta: {
        title: '任务详情'
      }
    }]
  }]
})

router.beforeEach((to, from, next) => {
  setWechatTitle(to.meta.title || '武汉昌龙企业微信')
  Toast.clear()
  next()
})

export default router
