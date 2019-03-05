<template lang="pug">
  .audit
    van-cell(title="开具发票" is-link @click="go")
      .right
        span.bubble(slot="right-icon") {{receiptNum}}
        img.arrow(src="~@img/ic_grey_arrow.png")
    .split
    van-cell(title="借货" is-link @click="go")
      .right
        span.bubble(slot="right-icon") {{borrowNum}}
        img.arrow(src="~@img/ic_grey_arrow.png")
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        receiptNum: 23,
        borrowNum: 13
      }
    },
    methods: {}
  }
</script>

<style scoped lang='sass'>
  .audit
    .split
      margin-top: 10px
    .bubble
      height: 18px
      width: 33px
      color: white
      font-size: 13px
      line-height: 18px
      border-radius: 13px
      background: #4A77AF
      padding: 1px 9px
</style>
