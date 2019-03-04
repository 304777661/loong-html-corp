<template>
  <div class="no-data">
    <img src="../assets/images/no-data.png"/>
    <p class="no-data__p">哎呦 ~ 这里空空如也</p>
  </div>
</template>

<script>
  export default {
    name: 'no-data'
  }
</script>

<style lang="sass">
  .no-data
    @include abscenter
    width: 120px
    height: 160px
    font-size: $font-small
    text-align: center
    color: $gray
    &__p
      margin-top: 10px
</style>
