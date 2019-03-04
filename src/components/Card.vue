<template>
  <div class="card"
       :class="{'card-sharpen': sharpen, 'card-chain': chain}"
        @click="doClick">
    <div class="card-sharpen__tag" v-if="sharpen">
      <span>{{tag}}</span>
    </div>
    <div class="card-sharpen__line" v-if="sharpen"></div>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      // 如果是sharpen, 则必须要传tag
      sharpen: Boolean,
      tag: String,
      chain: Boolean,
      gradient: Boolean
    },
    data () {
      return {}
    },
    methods: {
      doClick () {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="sass">
  .card
    $default-radius: 10px
    padding: $default-gap
    background: #fff
    border-radius: $default-radius
    box-shadow: $default-shadow

    &-sharpen
      $triangle-width: 6px
      position: relative
      padding: 58px 0 0
      border-radius: $default-radius $default-radius 0 0
      &:after
        $h: 8px
        content: ''
        position: absolute
        left: 0
        bottom: -$h
        width: 100%
        height: $h
        background-size: 2 * $h 2 * $h
        background-repeat: repeat-x
        background-image: linear-gradient(-135deg, transparent 50%, #fff 25%), linear-gradient(135deg, transparent 50%, #fff 25%)
        transform: rotate(180deg)
      &__issue
        position: absolute
        right: $default-gap
        top: (58px - 46px) / 2
        line-height: 46px
      &__tag
        $w: 70px
        $h: 28px
        position: absolute
        left: -$triangle-width
        top: $default-gap
        width: $w
        height: $h
        line-height: $h
        text-align: center
        color: $red
        background: #ffd8d6
        border-radius: 0 $h $h 0
        @include hor-center-center
        span
          position: relative
          width: 100%
          height: 100%
          &:before
            content: ''
            display: inline-block
            @include rect(7.5px)
            margin-right: 7.5px
            border-radius: 50%
            background: $red
          &:after
            content: ''
            position: absolute
            left: 0
            bottom: -$triangle-width
            width: 0
            height: 0
            border-style: solid
            border-width: $triangle-width 0 0 $triangle-width
            border-color: $red transparent transparent
      &__line
        position: absolute
        left: $default-gap
        top: 0
        width: 7px
        height: 100%
        $border: 1px solid #ffd8d6
        border-left: $border
        border-right: $border
      .card-cell
        //height: 46px
        //padding-left: 2 * $default-gap
        //padding-right: $default-gap
        line-height: 1.3
        padding: $default-gap $default-gap $default-gap 2 * $default-gap
        border-top: 1px solid $gray-light
        @include hor-between-center
        .icon-publish-time
          width: 14px
          margin-right: 5px
        .green
          font-size: $font-small
          color: $green
        .blue
          font-size: $font-small
          color: $blue
        .red
          font-size: $font-small
          color: $red
        .orange
          font-size: $font-small
          color: $orange
        .gray
          font-size: $font-small
          color: $gray

    &-chain
      position: relative
      // margin-bottom: $default-gap
      &:before, &:after
        content: ''
        position: absolute
        bottom: -20px
        width: 8px
        height: 2 * $default-gap
        background: url("~IMAGE/chain.png") no-repeat center / cover
        z-index: 1
      &:before
        left: 40px
      &:after
        right: 40px
      .card-cell
        $h: 50px
        width: 100%
        height: $h
        line-height: $h
        border-bottom: 1.5px dashed $gray-light
        @include hor-between-center
        &:last-child
          border-bottom: none
        .icon-close
          margin-left: $default-gap
          font-size: $font-small
          color: $red
      .card-add
        padding-top: $default-gap
        text-align: center
        color: $blue
        @include hor-center-center
        .icon-add
          margin-right: 8px
          font-size: $font-small
</style>
