<template>
  <div class="my-tabs">
    <van-tabs v-model="curTabIndex" :swipeable="swipeable" :line-width="lineWidth" @change="handleTabChanged">
      <van-tab v-for="item in tabs" :title="item.label" :key="item.id">
        <van-actionsheet v-model="show" :actions="actions" @select="onSelect"></van-actionsheet>
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
        lineWidth: 18,
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
      background: #333333
      border-radius: 2px
    /deep/ .van-tab
      background-color: #F8FAFC
      color: #ccc
      &--active
        color: #333333

</style>
