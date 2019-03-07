<template lang="pug">
  .project
    search(placeholder="输入公司名称进行搜索" @search="onSearch")
    no-data(v-show="!loading")
    van-list(v-model="loading" :finished="finished" @load="onLoad")
      .project-cell(v-for="(item,idx) in dataList" :key="idx" @click="goDetail(item.id)")
        .project-cell__info
          p.title {{item.title}}
          p.desc
            | 联系人：{{item.name}}
            span.split | {{item.phone}}
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
          id: 1,
          title: '武汉昌龙星沙分公司武汉昌龙星沙分公司武汉昌龙星沙分公司',
          name: '曾经历',
          phone: '18258236786'
        }, {
          title: '武汉昌龙星沙分公司武汉昌龙星沙分公司武汉昌龙星沙分公司',
          name: '曾经历',
          phone: '18258236786'
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
      goDetail (id) {
        this.$router.push(`/common/depositoryDetail?id=$(id)`)
      }
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
