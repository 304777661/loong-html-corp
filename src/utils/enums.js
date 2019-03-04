/* eslint-disable */

// 枚举合集
export default {

  // ---------------- YesNoStatus枚举  开始 -------------------
  YesNoStatus: {
    // 枚举列表
    list: [
      {label: '是', value: 'YES'},
      {label: '否', value: 'NO'}
    ],
    // 查询条件列表
    allList: function () {
      return [{label: '全部', value: null}].concat(this.list)
    },
    // 根据枚举值获取名称
    getName: function (val) {
      switch (val) {
        case 'YES':
          return '是'
        case 'NO':
          return '否'
        default:
          return val
      }
    }
  }
  // ---------------- YesNoStatus枚举  结束 -------------------
}
