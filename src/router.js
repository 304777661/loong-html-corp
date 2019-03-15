/* eslint-disable */
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
  },
    //////////////////////////////////////////////////////////公共模块路由
    {
    path: '/common',
    component: view('EmptyTemplate'),
    children: [
    {
      path: 'DepositoryList',
      name: 'Depository',
      component: view('common/depository/DepositoryList'),
      meta: {
        title: '仓库列表'
      }
    },{
      path: 'DepositoryDetail',
      name: 'DepositoryDetail',
      component: view('common/depository/DepositoryDetail'),
      meta: {
        title: '仓库详情'
      }
    },
    {
      path: 'FirmList',
      name: 'FirmList',
      component: view('common/firm/FirmList'),
      meta: {
        title: '公司列表'
      }
    },{
        path: 'FirmDetail',
        name: 'FirmDetail',
        component: view('common/firm/FirmDetail'),
        meta: {
          title: '公司详情'
        }
    },{
    path: 'supplierList',
    name: 'SupplierList',
    component: view('common/supplier/SupplierList'),
    meta: {
      title: '供应商列表'
    }
    }, {
      path: 'SupplierDetail',
      name: 'SupplierDetail',
      component: view('common/supplier/SupplierDetail'),
      meta: {
        title: '供应商详情'
      }
    }, {
      path: 'StepList',
      name: 'StepList',
      component: view('common/step/StepList'),
      meta: {
        title: '项目列表'
      }
    }, {
      path: 'StepDetail',
      name: 'StepDetail',
      component: view('common/step/StepDetail'),
      meta: {
        title: '项目详情'
      }
    }, {
      path: 'StepTaskDetail',
      name: 'StepTaskDetail',
      component: view('common/step/StepTaskDetail'),
      meta: {
        title: '任务详情'
      }
    }]
  },
    //////////////////////////////////////////////////////////销售模块路由
    {path: '/sell',
    component: view('EmptyTemplate'),
    children: [{
      path: 'AuditIndex',
      name: 'AuditIndex',
      component: view('sell/audit/AuditIndex'),
      meta: {
        title: '待审核'
      }
    }, {
      path: 'AuditBorrowList',
      name: 'AuditBorrowList',
      component: view('sell/audit/AuditBorrowList'),
      meta: {
        title: '借货列表'
      }
    }, {
      path: 'AuditReceiptList',
      name: 'AuditReceiptList',
      component: view('sell/audit/ReceiptList'),
      meta: {
        title: '开票申请列表'
      }
    }, {
      path: 'GoodsManageList',
      name: 'GoodsManageList',
      component: view('sell/goodsManage/GoodsManageList'),
      meta: {
        title: '商品管理列表'
      }
    },
      {
      path: 'Manage',
      name: 'Manage',
      component: view('sell/quotationManagement/Manage'),
      meta: {
        title: '报价管理'
      }
    },
      {
        path: 'QuotationDetails',
        name: 'QuotationDetails',
        component: view('sell/quotationManagement/QuotationDetails'),
        meta: {
          title: '报价详情'
        }
      },
      {
        path: 'NewQuotation',
        name: 'NewQuotation',
        component: view('sell/quotationManagement/NewQuotation'),
        meta: {
          title: '新增报价'
        }
      },
      {
        path: 'ChoseCompany',
        name: 'ChoseCompany',
        component: view('sell/quotationManagement/ChoseCompany'),
        meta: {
          title: '选择公司'
        }
      },
      {
        path: 'CustomerManagement',
        name: 'CustomerManagement',
        component: view('sell/quotationManagement/CustomerManagement'),
        meta: {
          title: '客户管理'
        }
      }]
  },
    //////////////////////////////////////////////////////////办公模块路由
    {path: '/office',
      component: view('EmptyTemplate'),
      children: [{
        path: 'OfficeAddBuy',
        name: 'OfficeAddBuy',
        component: view('office/OfficeAddBuy'),
        meta: {
          title: '新增采购订单'
        }
      }, {
        path: 'OfficeBuyDetail',
        name: 'OfficeBuyDetail',
        component: view('office/OfficeBuyDetail'),
        meta: {
          title: '采购订单详细'
        }
      }, {
        path: 'OfficeBuyList',
        name: 'OfficeBuyList',
        component: view('office/OfficeBuyList'),
        meta: {
          title: '采购订单列表'
        }
      }, {
        path: 'OfficePickerBuy',
        name: 'OfficePickerBuy',
        component: view('office/OfficePickerBuy'),
        meta: {
          title: '选择采购订单'
        }
      }, {
        path: 'OfficeWaitBuy',
        name: 'OfficeWaitBuy',
        component: view('office/OfficeWaitBuy'),
        meta: {
          title: '待采购'
        }
      }]
    },
    //////////////////////////////////////////////////////////仓库模块路由
    {path: '/store',
      component: view('EmptyTemplate'),
      children: [{
        path: 'CodeStorage',
        name: 'CodeStorage',
        component: view('store/codeStorage/CodeStorage'),
        meta: {
          title: '扫码入库'
        }
      }, {
        path: 'CodeStorageList',
        name: 'CodeStorageList',
        component: view('store/codeStorage/CodeStorageList'),
        meta: {
          title: '扫码入库列表'
        }
      }, {
        path: 'OrderStorage',
        name: 'OrderStorage',
        component: view('store/codeStorage/OrderStorage'),
        meta: {
          title: '订单入库'
        }
      }, {
        path: 'ShipManageList',
        name: 'ShipManageList',
        component: view('store/shipManage/ShipManageList'),
        meta: {
          title: '发货管理列表'
        }
      }, {
        path: 'GoodsOut',
        name: 'GoodsOut',
        component: view('store/shipManage/GoodsOut'),
        meta: {
          title: '商品出库'
        }
      }, {
        path: 'ShipNotes',
        name: 'ShipNotes',
        component: view('store/ShipNotes'),
        meta: {
          title: '发货记录'
        }
      }, {
        path: 'StorageNotes',
        name: 'StorageNotes',
        component: view('store/StorageNotes'),
        meta: {
          title: '入库记录'
        }
      }, {
        path: 'StoreCount',
        name: 'StoreCount',
        component: view('store/StoreCount'),
        meta: {
          title: '库存统计'
        }
      }, {
        path: 'StoreDetail',
        name: 'StoreDetail',
        component: view('store/StoreDetail'),
        meta: {
          title: '库存详情'
        }
      }]
    }
  ]
})
router.beforeEach((to, from, next) => {
  setWechatTitle(to.meta.title || '武汉昌龙企业微信')
  Toast.clear()
  next()
})

export default router
