<template lang="pug">
  .goods-item
    img.thumbnail(src="http://i7.hexun.com/2019-03-04/196375154.jpg")
    .info
      .header
        p.title {{item.title}}
        p.status {{item.status}}
      p.no {{item.no}}
      p.desc 数量：{{item.count}}件
      p.desc
        | {{item.name}}
        span.split |
        | 还货时间: {{item.time | ymd}}
    .line-bottom
</template>

<script>
  export default {
    name: 'GoodsItem',
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
  .goods-item
    padding: 10px 14px
    background: white
    @include hor-between-center
    position: relative
    .thumbnail
      @include rect(100px)
      border-radius: 5px
    .info
      margin-left: 9px
      flex: 1
      min-width: 0
      .header
        @include hor-between-center
        .title
          flex: 1
          min-width: 0
          color: $black
          font-size: 16px
          line-height: 22px
          font-weight: 600
          @include text-overflow
        .status
          color: #138BED
          font-size: 13px
          line-height: 18px
      .no
        color: #138BED
        margin-top: 5px
        border: 1px solid #138BED
        border-radius: 3px
        font-size: 12px
        line-height: 17px
        padding: 2px 6px
        margin-bottom: 17px
        display: inline-block
      .desc
        font-size: 12px
        line-height: 17px
        color: $gray
        margin-top: 2px
        .split
          margin: 0 4px
</style>
