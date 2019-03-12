<template lang="pug">
  div
    search(placeholder="搜索" @search="onSearch")
    my-tabs(:tabs="tabs" @tabChanged="handleTabChanged")
    .sort-handle
      span 应用行业&nbsp;&nbsp;
        img(src="@img/sort-img.png")
      span 类型&nbsp;&nbsp;
        img(src="@img/sort-img.png")
      span |&nbsp;&nbsp;筛选&nbsp;&nbsp;
        van-icon(name="bars" @click="")
    no-data(v-show="!loading")
    van-list(v-model="loading" :finished="finished" @load="onLoad")
      .borrow-list
        .goods(v-for="(item,idx) in dataList" :key="idx")
          goods-item(:item="item")
    my-button(:content="'新增商品'" @btnClick="goAddPage" v-show="btnShow==0||btnShow==1")
</template>

<script>
  import MyTabs from '@components/MyTabs'
  import GoodsItem from '@components/GoodsItem'
  import SectionPicker from '@components/SectionPicker'

  export default {
    name: 'ManageList',
    components: {
      MyTabs,
      GoodsItem,
      SectionPicker
    },
    data () {
      return {
        sectionContent: '',
        pageNo: 1,
        loading: false,
        finished: false,
        btnShow: 0,
        tabs: [{
          id: 0,
          label: '全部商品'
        }, {
          id: 1,
          label: '我的商品'
        }, {
          id: 2,
          label: '我借的'
        }, {
          id: 3,
          label: '借我的'
        }],
        dataList: [{
          title: '2P公端护套',
          status: '已同意',
          no: '282104-1',
          count: 1000,
          name: '张三',
          time: '2019-10-10'
        }, {
          title: '2P公端护套',
          status: '已同意',
          no: '282104-1',
          count: 1000,
          name: '张三',
          time: '2019-10-10'
        }, {
          title: '2P公端护套',
          status: '已同意',
          no: '282104-1',
          count: 1000,
          name: '张三',
          time: '2019-10-10'
        }]
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
      async handleTabChanged (tabIndex) {
        console.log(tabIndex)
        this.btnShow = tabIndex
        // this.updateSectionContent()
        await this.loadData()
      },
      goAddPage () {
        this.$router.push(`/`)
      }
    },
    created () {
    },
    mounted () {
    }
  }
</script>

<style scoped lang='sass'>
  .sort-handle
    font-size: 12px
    color: rgba(51,51,51,1)
    @include clearfix
    span
      float: left
      padding: 10px 15px
      img
        width: 8px
        vertical-align: top
    span:nth-child(1)
    span:nth-child(2)
    span:nth-child(3)
      i
        vertical-align: text-top
      float: right
      align-items: end

</style>
