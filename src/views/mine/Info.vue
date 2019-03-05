<template>
  <div class="info">
    <p class="detail">Info</p>
  </div>
</template>

<script>
  export default {
    name: 'Info',
    data () {
      return {}
    },
    methods: {}
  }
</script>

<!--@formatter:off-->
<style scoped lang='sass'>
  .info
    .detail
      color: red
      font-size: 15px
      font-weight: 600
      line-height: 21px
      @include hor-center-center

</style>
