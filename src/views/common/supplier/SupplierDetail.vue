<template lang="pug">
    .supplierDetail
      .client
        .title
          span {{clientData.title}}
        .line
        .table-cell
          span 联系人
          span {{ clientData.name }}
        .table-cell
          span 联系电话
          span {{ clientData.phone }}
        .table-cell
          span 地址
          span {{ clientData.address | summary(30)}}
        .table-cell
          span 归属公司
          span {{ clientData.returned }}
        .table-cell
          span 销售员
          span {{ clientData.buyProple }}
        van-collapse(v-model="activeNames" @change="collapseTitle=collapseTitle==='展开'?'收起':'展开'")
          van-collapse-item(:title="collapseTitle" name="1")
            .table-cell
              span 销售员
              span {{ clientData.buyProple }}
            .table-cell
              span 销售员
              span {{ clientData.buyProple }}
            .table-cell
              span 销售员
              span {{ clientData.buyProple }}
      van-cell-group
        van-cell(title="历史订单" is-link value="10单" @click="goOtherPage(`/admin/supplier`)")
        van-cell(title="总交易额" is-link value="¥200,000.00" @click="goOtherPage(`/admin/supplier`)")
        van-cell(title="应收款" is-link value="¥200,000.00")
        van-cell(title="逾期欠款" is-link value-class="color-red" value="¥200,000.00")
</template>

<script>
  export default {
    name: 'SupplierDetail',
    data () {
      return {
        id: this.$route.query.id,
        activeNames: ['2'],
        collapseTitle: '展开',
        clientData: {
          title: '深圳市研会科技有限公司',
          name: '毛静云',
          phone: '18273829182',
          address: '深圳市南山区粤海街道科技南十二路011号深圳市南山区粤海街道科技南十二路011号深圳市南山区粤海街道科技南十二路011号',
          returned: '武汉市昌龙电子电器有限公司',
          buyProple: '张三'
        }
      }
    },
    methods: {
      goOtherPage (url) {
        this.$router.push(`${url}?id=` + this.id)
      },
      showHide () {}
    },
    created () {

    },
    mounted () {
    }
  }
</script>

<style scoped lang='sass'>
  .client
    padding: 18px 18px 0 18px
    background-color: #F8FAFC
    .title
      font-size: 16px
      margin-bottom: 12px
      font-weight: 500
      display: flex
      justify-content: space-between
      span.edit
        color: #4A77AF
        font-size: 13px
    .line
      border: 1px solid rgba(238, 238, 238, 0.9)
    .table-cell
      font-size: 13px
      padding: 9px 0
      display: flex
      span:nth-child(1)
        display: inline-block
        width: 30%
        color: #9B9B9B
      span:nth-child(2)
        width: 70%
        color: #333333
    /deep/ .van-cell
      padding: 9px 0
      background-color: transparent
      justify-content: center
      color: #138BED
      .van-cell__title
        flex: none
      .van-icon
        color: #138BED
  /deep/ .color-red
    color: #F44336
  /deep/ .van-collapse-item__content
    padding: 0
    background-color: transparent

</style>
