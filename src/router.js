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
    path: '/admin/firmInfo',
    name: 'manageFirmInfo',
    component: view('admin/firmInfo/Index'),
    meta: { title: '供应商信息' }
  }, {
    path: '/sell',
    component: view('EmptyTemplate'),
    children: [{
      path: 'goodsManage/manageList',
      name: 'ProjectList',
      component: view('sell/goodsManage/ManageList'),
      meta: {
        title: '商品管理列表'
      }
    }]
  }, {
    path: '/admin/SupplierDetail',
    name: 'SupplierDetail',
    component: view('admin/firmInfo/SupplierDetail'),
    meta: { title: '供应商详情' }
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
  }, {
    path: '/sale',
    component: view('EmptyTemplate'),
    children: [{
      path: 'audit',
      name: 'SaleAudit',
      component: view('sale/audit/Index'),
      meta: {
        title: '待审核'
      }
    }, {
      path: 'borrow',
      name: 'BorrowList',
      component: view('sale/audit/BorrowList'),
      meta: {
        title: '借货列表'
      }
    }, {
      path: 'receipt',
      name: 'ReceiptList',
      component: view('sale/audit/ReceiptList'),
      meta: {
        title: '借货列表'
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
