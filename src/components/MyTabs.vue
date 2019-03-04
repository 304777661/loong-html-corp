<template>
  <div class="my-tabs">
    <van-tabs v-model="curTabIndex" :swipeable="swipeable" :line-width="lineWidth" @change="handleTabChanged">
      <van-tab v-for="item in tabs" :title="item.label" :key="item.id">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name: 'MyTabs',
    props: {
      tabs: {
        Type: Array,
        default: () => []
      },
      swipeable: {
        Type: Boolean,
        default: () => false
      }
    },
    data () {
      return {
        lineWidth: 30,
        curTabIndex: 0
      }
    },
    methods: {
      handleTabChanged () {
        this.$emit('tabChanged', this.curTabIndex)
      }
    }
  }
</script>

<style scoped lang="sass">
  .my-tabs
    /deep/ .van-tabs__line
      bottom: 22px
      background-color: $black
    /deep/ .van-tab
      color: #ccc
      &--active
        color: $black

</style>
