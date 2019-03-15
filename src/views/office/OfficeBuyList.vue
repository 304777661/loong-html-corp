<template lang="pug">
  .OfficeBuyList
    search(placeholder="输入公司名称进行搜索" @search="onSearch")
    van-tabs(v-model="curTabIndex" :swipeable="swipeable" :line-width="18" @click="handleTabChanged")
      van-tab(v-for="item in tabs" :key="item.id")
        div(slot="title" ref="titelText") {{item.label}}
          van-icon(name="arrow-down")
    no-data(v-show="!loading")
    van-list(v-model="loading" :finished="finished" @load="onLoad")
      ul.wait-buy(v-for="(item, index) in dataList" :key="index")
        li
          span 采购单号：{{item.orderNumber}}
          span {{item.status}}
        li.list(v-for="(elem, index) in item.list" :key="index")
          img.goods-img(src="@img/goods-img.png")
          div
            p.title {{elem.title}}
            p.between
              span 应采购：{{elem.inBuy}}
              span 已采购：{{elem.yiBuy}}
            p 料号：{{elem.no}}
        li.end
          span 交货日期：{{item.deliveDate | ymd}}
          span
            van-icon(name="friends-o")
            | {{item.sellPerson}}
    my-button(:content="'新增采购订单'" @btnClick="goAddPage")
    popup-picker(:columns="columns" :pickerShow="pickerShow" @selectVal="selectVal" @selectCancel="selectCancel" )

</template>

<script>
  import PopupPicker from '@components/PopupPicker'
  export default {
    name: 'OfficeBuyList',
    components: {
      PopupPicker
    },
    data () {
      return {
        columns: [],
        pickerShow: false,
        swipeable: false,
        loading: false,
        finished: false,
        curTabIndex: 0,
        pickerTitle: '',
        tabs: [{
          id: 0,
          label: '订单状态'
        }, {
          id: 1,
          label: '入库状态'
        }, {
          id: 2,
          label: '开票状态'
        }, {
          id: 3,
          label: '付款状态'
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
          }],
          two: [{
            id: 1,
            text: '货到付款'
          }, {
            id: 1,
            text: '预付发货'
          }, {
            id: 1,
            text: '信用发货'
          }],
          three: [{
            id: 2,
            text: '222'
          }, {
            id: 2,
            text: '222'
          }, {
            id: 2,
            text: '222'
          }],
          four: [{
            id: 3,
            text: '33'
          }, {
            id: 3,
            text: '33'
          }, {
            id: 3,
            text: '333'
          }]
        },
        dataList: [{
          orderNumber: 'S20190101001',
          deliveDate: '2000-10-12 00:00:00',
          sellPerson: '张三',
          status: '进行中',
          list: [{
            title: '2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套',
            no: '282104-1',
            inBuy: '1000',
            yiBuy: '200'
          }, {
            title: '2P公端护套',
            no: '282104-1',
            inBuy: '12000',
            yiBuy: '2200'
          }]
        }, {
          orderNumber: 'S20190101001',
          deliveDate: '2000-10-12 00:00:00',
          sellPerson: '张三',
          status: '已入库',
          list: [{
            title: '2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套',
            no: '282104-1',
            inBuy: '1000',
            yiBuy: '200'
          }, {
            title: '2P公端护套',
            no: '282104-1',
            inBuy: '12000',
            yiBuy: '2200'
          }]
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
      async handleTabChanged (tabIndex, title) {
        // this.columns = arg
        this.pickerShow = true
        if (tabIndex === 0) {
          this.columns = this.myColumns.one
          this.pickerTitle = this.tabs[0].label
        }
        if (tabIndex === 1) {
          this.columns = this.myColumns.two
          this.pickerTitle = this.tabs[1].label
        }
        if (tabIndex === 2) {
          this.columns = this.myColumns.three
          this.pickerTitle = this.tabs[2].label
        }
        if (tabIndex === 3) {
          this.columns = this.myColumns.four
          this.pickerTitle = this.tabs[3].label
        }
        // await this.loadData()
      },
      selectCancel () {
        this.pickerShow = false
      },
      selectVal (arg) {
        console.log(arg)
        this.tabs[this.curTabIndex].label = arg.text
        this.pickerShow = false
      },
      goAddPage () {
        this.$router.push(`/office/OfficeAddBuy`)
      }
    },
    created () {
    },
    mounted () {
    }
  }
</script>

<style scoped lang='sass'>
  .OfficeBuyList
    /deep/ .van-tabs__line
      bottom: 22px
      background: #333333
      border-radius: 2px
    /deep/ .van-tab
      background-color: #F8FAFC
      color: #ccc
    /deep/ .van-icon-arrow-down
      vertical-align: text-top
      &--active
        color: #333333
    .wait-buy
      padding: 8px 12px
      background-color: #fff
      margin-bottom: 10px
      li:nth-of-type(1)
        background-color: #F8FAFC
        padding: 6px
        font-size: 12px
        border-radius: 3px
        @include hor-between-center
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
