<template>
  <div class="search">
    <!--使用form解决iOS键盘不显示搜索问题-->
    <form action="javascript:return true;">
      <!--使用type=search弹出带搜索按钮的键盘-->
      <input type="search" class="search__input"
             :placeholder="placeholder"
             :value="value"
             ref="searchInput"
             @input="onInput"
             @keyup.13=show()
             @keydown.enter="search">
      <van-icon name="search" class="search__icon"></van-icon>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'search',
    props: {
      placeholder: {
        type: String,
        default: '请输入关键字'
      },
      value: String
    },
    model: {
      prop: 'value',
      event: 'input'
    },
    data () {
      return {}
    },
    methods: {
      onInput (e) {
        this.$emit('input', e.target.value)
      },
      search () {
        event.preventDefault()
        this.$emit('search')
      },
      show () {
        this.$refs.searchInput.blur()
      }
    }
  }
</script>

<style lang="sass">
  .search
    position: relative
    padding: $default-gap
    background: $white
    margin-bottom: 10px
    &__input
      width: 100%
      height: $search-input-height
      line-height: $search-input-height
      padding-left: 30px
      background: #f2f2f2
      border-radius: 2px
    &__icon
      position: absolute
      left: 22px
      top: 50%
      transform: translateY(-50%)
      color: $black
      font-size: $font-normal
      font-weight: bold
</style>
