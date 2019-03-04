<template>
  <div class="loading" v-show="loading">
    <van-loading class="loading__icon" :size="$px2rem('16px')"/>
    <span class="loading__text">{{text}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: '加载中...'
      },
      loading: {
        type: Boolean
      }
    },
    model: {
      prop: 'loading'
    }
  }
</script>

<!--@formatter:off-->
<style lang='sass' scoped>
  .loading
    width: 100%
    height: 50px
    padding: 0 9px
    @extend %hor-center-center
    &__text
      margin-left: 5px
      font-size: $font-small
      color: #969799
</style>
