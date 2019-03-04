<template>
  <div class="section-picker">
    <van-icon name="arrow-left" class="icon-size" @click="handlePreviousClick()" color="#fff"></van-icon>
    <span class="section-picker-content">{{content}}</span>
    <van-icon name="arrow" class="icon-size" @click="handleNextClick()" color="#fff"></van-icon>
  </div>
</template>

<script>
  export default {
    name: 'SectionPicker',
    props: {
      content: String
    },
    methods: {
      handlePreviousClick () {
        this.$emit('previousClick')
      },
      handleNextClick () {
        this.$emit('nextClick')
      }
    }
  }
</script>

<style scoped lang="sass">
  .section-picker
    background: $dark-blue
    $h: 55px
    height: $h
    line-height: $h
    @include hor-between-center
    padding: 0 60px
    .icon-size
      font-size: 13px
    &-content
      color: $white
      text-align: center
      line-height: 24px
      font-size: 17px

</style>
