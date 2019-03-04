<template lang="pug">
  .info
    p.detail {{msg}}
</template>

<script>
  export default {
    name: 'PugSample',
    data () {
      return {
        msg: '使用PUG语法的示例'
      }
    },
    methods: {}
  }
</script>

<style scoped lang='sass'>
  .info
    .detail
      font-size: 15px
      line-height: 21px
      color: green
</style>
