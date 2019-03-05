<template lang="pug">
  .my-button
    .my-button-wrapper
      .content(@click="btnClick") {{content}}
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
    bottom: 40px
    left: 0
    right: 0
    &:active
      transform: scale(0.98)
    .content
      position: fixed
      left: 50%
      color: $white
      width: $btn-width
      height: $btn-height
      line-height: $btn-height
      margin-left: -$btn-width / 2
      border-radius: 4px
      text-align: center
      background: #4A77AF
      font-size: 16px
</style>
