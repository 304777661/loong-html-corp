<template lang="pug">
  div.OfficeAddBuy
    van-cell-group
      van-cell(title="采购订单状态" value="未通过")
      van-cell(title="采购单号" value="B20180923001")
      van-cell(title="购货方" value="武汉昌龙星沙分公司")
      van-cell(title="收货地址" is-link value="收货仓库选择" @click="pickerDepository")
      van-cell(title="供货方" value="泰科电子")
      van-cell(title="创建日期" value="2018-09-23 14：00")
      van-cell(title="商品")
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
      van-cell(title="合计" value="请选择" value-class="redColor")
        div(slot="") ￥1300
      van-cell(title="交货期限" is-link :value="goodsDateText" @click="pickerPop(payGoodsDate)" arrow-direction="down")
      van-cell(title="付款方式" is-link :value="payTypeText" @click="pickerPop(payType)" arrow-direction="down")
      van-cell(title="开票方式" is-link :value="ticketTypeText" @click="pickerPop(ticketType)" arrow-direction="down")
    my-button(:content="'生成采购订单'" @btnClick="goOtherPage")
    popup-picker(:columns="columns" :pickerShow="pickerShow" @selectVal="selectVal" @selectCancel="selectCancel" )
</template>

<script>
  import PopupPicker from '@components/PopupPicker'
  export default {
    name: 'OfficeAddBuy',
    components: {
      PopupPicker
    },
    data () {
      return {
        goodsDateText: '请选择',
        payTypeText: '请选择',
        ticketTypeText: '请选择',
        imgUrl: require('../../../public/goods-img.png'),
        stepperVal: 0,
        pickerShow: false,
        targetObj: null,
        orderData: {
          buyPeople: '张三'
        },
        payGoodsDate: [{
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
        payType: [{
          id: 1,
          text: '货到付款'
        }, {
          id: 1,
          text: '预付发货'
        }, {
          id: 1,
          text: '信用发货'
        }],
        ticketType: [{
          id: 2,
          text: '货到开票'
        }, {
          id: 2,
          text: '预付发票'
        }],
        columns: []
      }
    },
    methods: {
      pickerDepository (id) {
        this.$router.push(`/common/DepositoryList?black=1&id=${id}`)
      },
      pickerPop (arg) {
        this.columns = arg
        this.pickerShow = true
      },
      selectVal (arg) {
        if (arg.id === 0) {
          this.goodsDateText = arg.text
        }
        if (arg.id === 1) {
          this.payTypeText = arg.text
        }
        if (arg.id === 2) {
          this.ticketTypeText = arg.text
        }
        this.pickerShow = false
      },
      selectCancel () {
        this.pickerShow = false
        return false
      },
      goOtherPage (id) {
        this.$router.push(`office/OfficeBuyList`)
      }
    },
    created () {
      this.$eventBus.$on('pickerDepository', arg => {
        console.log(arg)
      })
    },
    mounted () {
    },
    beforeDestroy () {
      this.$eventBus.$off('pickerDepository')
    }
  }
</script>

<style scoped lang='sass'>
  .tags
    @include hor-between-center
    .desc
      @include hor-between-center
      /deep/ i:before
        vertical-align: -2px
    .redColor
      color: red
</style>
