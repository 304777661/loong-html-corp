<template lang="pug">
  .project
    search(placeholder="搜索项目名称" @search="onSearch")
    no-data(v-show="!loading")
    van-list(v-model="loading" :finished="finished" @load="onLoad")
      .project-cell(v-for="(item,idx) in dataList" :key="idx" @click="goDetail(item.id)")
        img.project-cell__icon(src="~@img/ic_project_cell.png")
        .project-cell__info
          p.title {{item.title}}
          p.desc
            | {{item.count}}
            span.split |
            | 开始时间：{{item.createdTime | ymd}}
        .line-bottom
</template>

<script>
  export default {
    name: 'ProjectList',
    data () {
      return {
        keywords: null,
        pageNo: 1,
        loading: false,
        finished: false,
        dataList: [{
          title: '2P公端护套2P公端护套2P公端护套2P2P公端护套2P公端护套2P公端护套2P',
          count: '4节点',
          createdTime: '2019-01-20 10:10:10'
        }, {
          title: '2P公端护套2P公端护套2P公端护套2P2P公端护套2P公端护套2P公端护套2P',
          count: '4节点',
          createdTime: '2019-01-20 10:10:10'
        }]
      }
    },
    watch: {
      keywords (newVal) {
        if (!newVal) {
          this.loadData()
        }
      }
    },
    methods: {
      async loadData (resetList = true) {
        this.loading = true
        if (resetList) {
          this.dataList = []
          this.pageNo = 1
        }
        let data = await this.$api.XXX({})
        if (resetList) {
          this.dataList = data.list
        } else {
          this.dataList = this.dataList.concat(data.list)
        }
        this.finished = !data.hasNextPage
        this.loading = false
        this.pageNo++
      },
      onSearch () {
        this.loadData(true)
      },
      onLoad () {
        // this.loadData()
      },
      goDetail () {}
    },
    async onCreated () {
      // await this.loadData()
    }
  }
</script>

<style scoped lang='sass'>
  .project
    &-cell
      @include hor-center-center
      padding: 7px 16px
      background: white
      position: relative
      &__icon
        @include rect(30px)
      &__info
        flex: 1
        margin-left: 17px
        min-width: 0
        .title
          font-weight: 600
          font-size: 16px
          line-height: 22px
          @include text-overflow
        .desc
          margin-top: 9px
          color: $gray
          font-size: 13px
          line-height: 18px
          .split
            margin: 0 4px
</style>
