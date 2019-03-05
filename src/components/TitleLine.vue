<template lang="pug">
  .title-line
    p.title {{title}}
</template>

<script>
  export default {
    name: 'TitleLine',
    props: {
      title: {
        Type: String,
        default: ''
      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang='sass'>
  .title-line
    .title
      font-size: 16px
      line-height: 22px
      font-weight: 600
      background: $body-background
      padding: 10px 12px
      text-align: start

</style>
