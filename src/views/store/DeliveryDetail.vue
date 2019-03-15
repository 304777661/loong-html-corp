<template lang="pug">
  .deliveryDetail
    .top
      .sellnum
        span.bold 发货单号：
        span.num 2HJL-141414441441
        span.seller 张三
      .sellstate
        span 未出库
        span 2019-01-01
    .middle
      .tipsScan
        span 商品
        img.scan-img(src="@img/ic-scan@3x.png")
      no-data(v-show="!loading")
      van-list(v-model="loading" :finished="finished" @load="onLoad")
        ul.wait-buy(v-for="(item, index) in dataList" :key="index")
          li.list(v-for="(elem, index) in item.list" :key="index")
            img.goods-img(src="@img/goods-img.png")
            div
              p.title
                span {{elem.title}}
                span {{elem.sellPerson}}
              p 料号：{{elem.no}}
              p.between
                span 应发：{{elem.inBuy}}件
                span 实发：{{elem.yiBuy}}件
          li.end
            span 发货日期：{{item.deliveDate | ymd}}
            span 合计：
              span.red 4000件
</template>

<script>
  export default {
    name: 'DeliveryDetail',
    data () {
      return {
        loading: false,
        finished: false,
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
    }
  }
</script>

<style lang="sass" scoped>
  .deliveryDetail
    background: #f4f4f4
    .top
      font-size: $font-normal
      background: #f8fafc
      line-height: 30px
      padding: 10px 20px
      .sellstate
        span
          color: #999
          position: relative
          margin-right: 21px
          &:not(:last-child):before
            content: ''
            position: absolute
            width: 1px
            height: 10px
            right: -10px
            top: 4px
            background: #999
      .seller
        margin-left: 10px
        font-size: $font-small
        color: #138BED
        border: 1px solid #138BED
        padding: 2px 10px
        border-radius: 3px
      .num
        color: #666
      .bold
        font-weight: bold
    .middle
      background: #ffffff
      .tipsScan
        padding: 0 20px
        height: 40px
        @include hor-between-center
        span
          font-size: $font-large
        .scan-img
          height: 29px
          width: 30px
      .wait-buy
        border-radius: 5px
        margin: 0 10px
        padding: 5px 0 5px 5px
        background-color: #F8FAFC
        margin-bottom: 10px
        li:nth-of-type(1)
          /*background-color: #F8FAFC*/
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
