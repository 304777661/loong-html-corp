<template lang="pug">
  .receipt-list
    .receipts(v-for="(item,idx) in dataList" :key="idx")
      receipt-item(:item="item")
</template>

<script>
  import ReceiptItem from '@components/ReceiptItem'

  export default {
    name: 'ReceiptList',
    components: {
      ReceiptItem
    },
    data () {
      return {
        dataList: [{
          orderNo: '单据编号：2HCL-28371827319',
          status: '未审核',
          no: '282104-1',
          count: 1000,
          goodsName: '20P公端护套',
          company: '深圳市研会科技有限公司',
          time: '2019-10-10',
          type: '发动机'
        }, {
          orderNo: '单据编号：2HCL-28371827319',
          status: '未审核',
          no: '282104-1',
          count: 1000,
          goodsName: '20P公端护套',
          company: '深圳市研会科技有限公司',
          time: '2019-10-10',
          type: '发动机'
        }]
      }
    },
    methods: {}
  }
</script>

<style scoped lang='sass'>

</style>
