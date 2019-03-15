<template lang="pug">
  div
    search(placeholder="输入商品名称、料号、销售订单号等进行搜索" @search="onSearch")
    my-tabs(:tabs="tabs" @tabChanged="handleTabChanged")
    no-data(v-show="!loading")
    van-list(v-model="loading" :finished="finished" @load="onLoad")
      van-checkbox-group(v-model="result")
        ul.wait-buy(v-for="(item, index) in dataList" :key="index")
            li 销售单号：{{item.orderNumber}}
              li.list(v-for="(elem, index) in item.list" :key="index")
                van-checkbox(:name="elem.no")
                img.goods-img(src="@img/goods-img.png")
                div
                  p.title {{elem.title}}
                  p.between
                    span 应采购：{{elem.inBuy}}
                    span 已采购：{{elem.yiBuy}}
                  p.between
                    span 料号：{{elem.no}}
                    span 单价：￥{{elem.price}}
                  p.stepper
                    van-stepper(v-model="elem.num" :integer="true" min="0" @change="stepperFun")
            li.end
              span 交货日期：{{item.deliveDate | ymd}}
              span
                van-icon(name="friends-o")
                | {{item.sellPerson}}
    van-goods-action
      van-goods-action-mini-btn(icon="cart-o" info="2" text="购物车" @click="onClickMiniBtn")
      van-goods-action-big-btn(text="￥100000")
      van-goods-action-big-btn(primary text="立即购买" @click="onClickBigBtn" to="/office/OfficeAddBuy")
</template>

<script>
  import MyTabs from '@components/MyTabs'

  export default {
    name: 'ManageList',
    components: {
      MyTabs
    },
    data () {
      return {
        result: [],
        checked: false,
        sectionContent: '',
        pageNo: 1,
        loading: false,
        finished: false,
        stepperVal: 0,
        btnShow: 0,
        tabs: [{
          id: 0,
          label: '全部订单'
        }, {
          id: 1,
          label: '销售订单'
        }, {
          id: 2,
          label: '备货订单'
        }],
        dataList: [{
          orderNumber: '销售单号：S20190101001',
          deliveDate: '2000-10-12 00:00:00',
          sellPerson: '张三',
          list: [{
            title: '2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套',
            no: '282104-111',
            inBuy: '1000',
            yiBuy: '200',
            price: '10',
            num: '0',
            onOff: false
          }, {
            title: '2P公端护套',
            no: '282104-112',
            inBuy: '12000',
            yiBuy: '2200',
            price: '10',
            num: '0',
            onOff: false
          }]
        }, {
          orderNumber: '销售单号：S20190101001',
          deliveDate: '2000-10-12 00:00:00',
          sellPerson: '张三',
          list: [{
            title: '2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套2P公端护套',
            no: '282104-121',
            inBuy: '1000',
            yiBuy: '200',
            price: '10',
            num: '0',
            onOff: false
          }, {
            title: '2P公端护套',
            no: '282104-122',
            inBuy: '12000',
            yiBuy: '2200',
            price: '10',
            num: '0',
            onOff: false
          }]
        }]
      }
    },
    methods: {
      onClickMiniBtn () {
        this.$toast('点击图标')
      },
      onClickBigBtn () {
        this.$toast('点击按钮')
      },
      checkboxFun (arg) {
        return arg.no
      },
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
      stepperFun () {
        console.log(this.dataList)
      }
    },
    watch: {
      result: {
        handler (val) {
          console.log(val, 123)
        },
        deep: true
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
        /*height: 90px*/
        background-color: #F8FAFC
        padding: 6px
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
          p.stepper
            display: flex
            .van-stepper
              text-align: right
</style>
