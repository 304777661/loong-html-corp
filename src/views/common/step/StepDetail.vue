<template lang="pug">
  .project-detail
    title-line(:title="projectTitle")
    .node-cell(v-for="(item,idx) in dataList" :key="idx" @click="goOtherPage(item.id)")
      .timeline
        .v-line(:class="idx === 0 ? 'line-inactive' : 'line-active'")
        .outer-ring
          .inner-ring
        .v-line(:class="idx === dataList.length - 1 ? 'line-inactive' : 'line-active'")
      .node-info
        .info
          p.title {{item.title}}
          p.desc
            | {{item.name}}
            span.split |
            | {{item.time | ymd}}
        img.arrow(src="~@img/ic_grey_arrow.png")
</template>

<script>
  import TitleLine from '@components/TitleLine'

  export default {
    name: 'Detail',
    components: {
      TitleLine
    },
    data () {
      return {
        projectTitle: '2P公端护套2P公端护套2P公端护套',
        dataList: [{
          title: '节点信息1',
          name: '张三',
          time: '2019-01-20 10:10:10'
        }, {
          title: '节点信息1',
          name: '张三',
          time: '2019-01-20 10:10:10'
        }]
      }
    },
    methods: {
      goOtherPage (id) {
        this.$router.push(`/common/StepTaskDetail?id=$(id)`)
      }
    }
  }
</script>

<style scoped lang='sass'>
  .project-detail
    .node-cell
      height: 98px
      background: white
      @include hor-center-center
      position: relative
      .timeline
        position: absolute
        @include ver-center-center
        width: 22px
        left: 30px
        top: 0
        bottom: 0
        height: 98px
        .line-inactive
          background: transparent
        .line-active
          background: #4A77AF
        .v-line
          width: 1px
          height: 38px
        .outer-ring
          @include hor-center-center
          background: #D5E0EC
          @include circle(22px)
          .inner-ring
            background: #4A77AF
            @include circle(16px)
      .node-info
        margin: 0 12px
        flex: 1
        min-width: 0
        background: $body-background
        padding: 0 15px 0 60px
        border-radius: 4px
        height: 78px
        @include hor-start-center
        .info
          flex: 1
          .title
            color: $black
            font-size: 16px
            line-height: 22px
          .desc
            margin-top: 9px
            color: $gray
            font-size: 13px
            line-height: 18px
            .split
              margin: 0 4px
</style>
