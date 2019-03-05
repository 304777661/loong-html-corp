<template lang="pug">
  .borrow-list
    .goods(v-for="(item,idx) in dataList" :key="idx")
      goods-item(:item="item")
</template>

<script>
  import GoodsItem from '@components/GoodsItem'

  export default {
    name: 'BorrowList',
    components: {
      GoodsItem
    },
    data () {
      return {
        dataList: [{
          title: '2P公端护套',
          status: '已同意',
          no: '282104-1',
          count: 1000,
          name: '张三',
          time: '2019-10-10'
        }, {
          title: '2P公端护套',
          status: '已同意',
          no: '282104-1',
          count: 1000,
          name: '张三',
          time: '2019-10-10'
        }]
      }
    },
    methods: {}
  }
</script>

<style scoped lang='sass'>

</style>
