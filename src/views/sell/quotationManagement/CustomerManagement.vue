<template>
  <div class="body">
    <search placeholder="输入公司名称进行搜索"></search>

    <div class="companyBox" v-for="item in list1" :key="item">
      <div class="left">
        <p class="company">{{item.name1}}</p>
        <p class="person">{{item.name2}}</p>
        <p class="sale">{{item.name3}}</p>
      </div>
      <div class="right">
        <p class="pay">{{item.name4}}</p>
        <p class="payed">{{item.name5}}</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'CustomerManagement',
    data () {
      return {
        list1: [
          {
            name1: '深圳市研慧科技有限公司',
            name2: '毛静云 | 18258236786',
            name3: '销售员：张三',
            name4: '应收：¥5,000.00',
            name5: '实收：¥5,000.00'

          },
          {
            name1: '深圳市研慧科技有限公司',
            name2: '毛静云 | 18258236786',
            name3: '销售员：张三',
            name4: '应收：¥5,000.00',
            name5: '实收：¥5,000.00'

          },
          {
            name1: '深圳市研慧科技有限公司',
            name2: '毛静云 | 18258236786',
            name3: '销售员：张三',
            name4: '应收：¥5,000.00',
            name5: '实收：¥5,000.00'

          },
          {
            name1: '深圳市研慧科技有限公司',
            name2: '毛静云 | 18258236786',
            name3: '销售员：张三',
            name4: '应收：¥5,000.00',
            name5: '实收：¥5,000.00'

          },
          {
            name1: '深圳市研慧科技有限公司',
            name2: '毛静云 | 18258236786',
            name3: '销售员：张三',
            name4: '应收：¥5,000.00',
            name5: '实收：¥5,000.00'

          }
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
  .body
    .companyBox
      border: #BBBBBB solid 1px
      display: flex
      justify-content: space-between
      .left
        .company
          font-size: 13px
          font-weight: 800
          margin-top: 8px
          margin-left: 10px
          margin-bottom: 8px
        .person
          color: #828282
          font-size: 12px
          margin-left: 10px
          margin-bottom: 5px
        .sale
          color: #828282
          font-size: 12px
          margin-left: 10px
          margin-bottom: 8px
      .right
        margin-top: 34px
        margin-right: 36px
        margin-bottom: 8px
        .pay
          font-size: 12px
          color: #828282
        .payed
          font-size: 12px
          color: #828282
</style>
