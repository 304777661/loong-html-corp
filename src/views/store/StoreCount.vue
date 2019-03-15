<template lang="pug">
  div
    search(placeholder="输入商品名称、料号、销售订单号等进行搜索" @search="onSearch")
    van-tabs(v-model="curTabIndex" :swipeable="swipeable" :line-width="18" @click="handleTabChanged")
      van-tab(v-for="item in tabs" :key="item.id")
        div(slot="title" ref="titelText") {{item.label}}
          van-icon(name="arrow-down")
    no-data(v-show="!loading")
    van-list(v-model="loading" :finished="finished" @load="onLoad")
      ul.wait-buy(v-for="(item, index) in dataList" :key="index")
        li
        li.list
          img.goods-img(src="@img/goods-img.png")
          div
            p.title {{item.title}}
            p.between
              span 采购数量：{{item.inBuy}}
              span 入库数量：{{item.yiBuy}}
            p 料号：{{item.no}}
    popup-picker(:columns="columns" :pickerShow="pickerShow" @selectVal="selectVal" @selectCancel="selectCancel" )

</template>

<script>
  import PopupPicker from '@components/PopupPicker'

  export default {
    name: 'ManageList',
    components: {
      PopupPicker
    },
    data () {
      return {
        columns: [],
        swipeable: false,
        sectionContent: '',
        pickerShow: false,
        pickerTitle: '',
        curTabIndex: 0,
        pageNo: 1,
        loading: false,
        finished: false,
        btnShow: 0,
        tabs: [{
          id: 0,
          label: '采购订单'
        }],
        dataList: [{
          orderNumber: 'S20190101001',
          deliveDate: '泰科电子',
          sellPerson: '张三',
          title: '2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套',
          no: '282104-1',
          inBuy: '1000',
          yiBuy: '200'
        }, {
          orderNumber: 'S20190101001',
          deliveDate: '泰科电子',
          sellPerson: '张三',
          title: '2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套',
          no: '282104-1',
          inBuy: '1000',
          yiBuy: '200'
        }],
        myColumns: {
          one: [{
            id: 0,
            text: '全部商品'
          }, {
            id: 0,
            text: '我的商品'
          }, {
            id: 0,
            text: '我借的'
          }, {
            id: 0,
            text: '借我的'
          }]
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
      async handleTabChanged (tabIndex) {
        this.btnShow = tabIndex
        await this.loadData()
      },
      goAddPage () {
        this.$router.push(`/`)
      },
      selectCancel () {
        this.pickerShow = false
      },
      selectVal (arg) {
        console.log(arg)
        this.tabs[this.curTabIndex].label = arg.text
        this.pickerShow = false
      },
      async handleTabChanged (tabIndex, title) {
        // this.columns = arg
        this.pickerShow = true
        if (tabIndex === 0) {
          this.columns = this.myColumns.one
          this.pickerTitle = this.tabs[0].label
        }
      }
    },
    created () {
    },
    mounted () {
    }
  }
</script>

<style scoped lang='sass'>
  .van-list
    background: #F7F8FA
    color: rgba(155,155,155,1)
    .wait-buy
      padding: 8px 12px
      background-color: #fff
      margin-bottom: 10px
      li:nth-of-type(1)
        @include hor-between-center
        background-color: #F8FAFC
        padding: 6px
        font-size: 12px
        border-radius: 3px
      li.end
        @include hor-between-center
        border-top: 1px solid rgba(238, 238, 238, 0.9)
        padding: 6px 0
        i
          font-size: 16px
          vertical-align: middle
      li.list
        height: 90px
        @include hor-center-center
        img
          width: 67px
          height: 67px
          border-radius: 5px
        div
          flex-grow: 1
          padding: 0 13px
          p
            font-size: 12px
            padding: 5px 0
          p.title
            font-size: 16px
            color: #333
            width: 200px
            @include text-overflow
          p.between
            display: flex
            justify-content: space-between
</style>
