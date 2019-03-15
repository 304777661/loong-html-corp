<template lang="pug">
  .deliveryList
    search(placeholder="输入公司名称进行搜索" @search="onSearch")
    no-data(v-show="!loading")
    van-list(v-model="loading" :finished="finished" @load="onLoad")
      ul.wait-buy(v-for="(item, index) in dataList" :key="index")
        li
          span 发货单号：{{item.orderNumber}}
          span(:class="{blue: item.status === '已出库'}") {{item.status}}
          //span(:class="[item.status === '已出库' ? 'blue' : 'red']") {{item.status}}
        li.list(v-for="(elem, index) in item.list" :key="index" v-show="item.isSpread || index < itemShowCnt")
          img.goods-img(src="@img/goods-img.png")
          div
            p.title
              span {{elem.title}}
              span {{elem.sellPerson}}
            p 料号：{{elem.no}}
            p.between
              span 应发：{{elem.inBuy}}件
              span 实发：{{elem.yiBuy}}件
        li.swtich(v-if="item.list.length > itemShowCnt" @click="swtich(item)") {{item.isSpread?'收起':'展开'}}({{ item.list.length }})
        li.end
          span 发货日期：{{item.deliveDate | ymd}}
          span 合计：
            span.red 4000件
</template>

<script>
  export default {
    name: 'DeliveryList',
    data () {
      return {
        loading: false,
        finished: false,
        itemShowCnt: 2,
        dataList: [{
          orderNumber: 'S20190101001',
          deliveDate: '2000-10-12 00:00:00',
          status: '未出库',
          isSpread: false,
          list: [{
            title: '1P公端护套2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套',
            no: '282104-1',
            sellPerson: '张三',
            inBuy: '1000',
            yiBuy: '200'
          }, {
            title: '2P公端护套',
            sellPerson: '张三',
            no: '282104-1',
            inBuy: '12000',
            yiBuy: '2200'
          }, {
            title: '3P公端护套',
            sellPerson: '张三',
            no: '282104-1',
            inBuy: '12000',
            yiBuy: '2200'
          }]
        }, {
          orderNumber: 'S20190101001',
          deliveDate: '2000-10-12 00:00:00',
          status: '已出库',
          isSpread: false,
          list: [{
            title: '2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套',
            no: '282104-1',
            sellPerson: '张三',
            inBuy: '1000',
            yiBuy: '200'
          }, {
            title: '2P公端护套',
            no: '282104-1',
            sellPerson: '张三',
            inBuy: '12000',
            yiBuy: '2200'
          }]
        }]
      }
    },
    methods: {
      swtich (item) {
        item.isSpread = !item.isSpread
      },
      onSearch () {
      },
      onLoad () {
        // this.loadData()
      }
    }
  }
</script>

<style lang="sass" scoped>
  .deliveryList
    background: #f4f4f4
    .wait-buy
      padding: 8px 12px
      background-color: #fff
      margin-bottom: 10px
      li:nth-of-type(1)
        background-color: #F8FAFC
        padding: 6px
        font-size: 12px
        border-radius: 3px
        @include hor-between-center
      li.end
        @include hor-between-center
        border-top: 1px solid rgba(238, 238, 238, 0.9)
        padding: 6px 0
        i
          font-size: 16px
          vertical-align: middle
      li.swtich
        text-align: center
        color: #138BED
        padding-bottom: 10px
      li.list
        height: 90px
        @include hor-center-center
        span.red
          color: #D0021B
        span.blue
          color: #138BED
        img
          width: 67px
          height: 67px
          border-radius: 5px
        div
          flex-grow: 1
          width: calc(100% - 94px)
          padding: 0 13px
          p
            font-size: 12px
            padding: 5px 0
          p.title
            font-size: 16px
            color: #333
            @include hor-between-center
            span:first-child
              flex: 5
              @include text-overflow
            span:last-child
              text-align: center
              border: 1px solid #138BED
              padding: 2px 5px
              color: #138BED
              border-radius: 3px
              font-size: $font-small
              flex: 1
            //width: 200px
            //@include text-overflow
          p.between
            span
              position: relative
              margin-right: 17px
              &:not(:last-child):before
                content: ''
                position: absolute
                width: 1px
                height: 8px
                right: -8px
                top: 3px
                background: #999
</style>
