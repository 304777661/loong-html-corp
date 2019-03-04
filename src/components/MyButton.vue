<template>
  <div class="my-button">
    <div class="my-button-wrapper">
      <van-button class="btn"
                  @click="btnClick">{{content}}
      </van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyButton',
    props: {
      content: {
        Type: String,
        default: ''
      }
    },
    methods: {
      btnClick () {
        this.$emit('btnClick')
      }
    }
  }
</script>

<style scoped lang="sass">
  .my-button
    $btn-width: 90vw
    $btn-height: 40px
    position: fixed
    background: #f5f5f5
    width: 100vw
    height: 60px
    bottom: 0
    left: 0
    right: 0
    .btn
      position: fixed
      left: 50%
      color: $white
      bottom: $default-gap
      width: $btn-width
      height: $btn-height
      line-height: $btn-height
      margin-left: -$btn-width / 2
      border-radius: 4px
      background: $dark-blue
      font-size: 16px
</style>
