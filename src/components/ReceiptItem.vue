<template lang="pug">
  .receipt-item
    .receipt-hd
      span.order-no {{item.orderNo}}
      span.status {{item.status}}
    .receipt-bd
      img.icon(src="~@img/ic_receipt.png")
      .info
        p.title 深圳市研会科技有限公司
        p.name 商品名称：{{item.goodsName}}
        .desc
          p.no {{item.no}}
          p.type {{item.type}}
    .line-bottom
</template>

<script>
  export default {
    name: 'ReceiptItem',
    props: {
      item: {
        Type: Object,
        default: {}
      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang='sass'>
  .receipt-item
    padding: 10px 14px
    background: white
    position: relative
    .receipt-hd
      background: $body-background
      border-radius: 3px
      font-size: 12px
      line-height: 17px
      padding: 10px 6px
      color: $gray
      @include hor-between-center
    .receipt-bd
      @include hor-start-center
      margin: 10px 14px 4px
      .icon
        width: 22px
        height: 30px
      .info
        margin-left: 24px
        .title
          font-size: 16px
          line-height: 22px
          color: $black
        .name
          margin-top: 7px
          font-size: 13px
          line-height: 18px
          color: $gray
        .desc
          font-size: 12px
          line-height: 17px
          margin-top: 8px
          @include hor-start-center
          .no
            color: #138BED
            border: 1px solid #138BED
            border-radius: 3px
            padding: 1px 4px
          .type
            margin-left: 10px
            color: #F5A623
            padding: 1px 4px
            border-radius: 3px
            border: 1px solid #F5A623
</style>
