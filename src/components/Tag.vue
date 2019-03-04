<template>
  <span class="tag van-hairline--surround"
        :class="styleClass">
    <slot/>
  </span>
</template>

<script>
  export default {
    props: {
      arrow: Boolean,
      plain: Boolean,
      type: String
    },

    computed: {
      styleClass () {
        let {arrow, plain, type} = this
        let obj = {
          arrow,
          plain,
          [type]: type
        }
        Object.keys(obj).forEach(key => {
          console.log(key)
        })
      }
    },

    data () {
      return {}
    }
  }
</script>

<style lang="sass">
  .tag
    position: relative
    display: inline-block
    padding: 2px 5px
    font-size: $font-small
    &--plain
      background: #fff
      color: $gray
      border-radius: 5px
    &--arrow
      $height: 20px
      $sqrt2: 1.41421356
      height: $height
      text-align: center
      line-height: $height
      border: 1px solid $blue
      color: $blue
      border-right: none
      &:after
        $w: ($height - 2px) / $sqrt2
        content: ''
        position: absolute
        top: -1.414px
        right: -$w - 1.8px
        @include rect($w)
        border-color: $blue $blue transparent transparent
        border-style: solid
        border-width: 1px
        background: transparent
        transition: all 1s ease
        transform: rotate(45deg)
        transform-origin: 0 0
        z-index: -1
        border-radius: 1px 0 1px 0
      &:before
        $w: 3px
        content: ''
        position: absolute
        top: 50%
        right: -5px
        @include rect($w)
        background: $blue
        border-radius: 50%
        transform: translateY(-50%)
</style>
