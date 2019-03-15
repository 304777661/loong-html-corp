<template lang="pug">
  div.OfficeAddBuy
    van-cell-group
      van-cell(title="采购订单" value="中联重科")
      van-cell(title="购货方" value="泰科电子")
      van-cell(title="供货方" value="泰科电子")
      van-cell(title="创建日期" value="2019-01-01 12：:00")
      van-cell(title="商品")
      van-card(price="2.00" title="商品标题" :thumb="imgUrl" currency="单价")
        div.desc(slot="desc")
          span 料号：282-1
          van-icon(name="friends-o") 销售员123
        div.tags(slot="tags")
          div
            van-tag(plain type="primary") 202-1
            | &nbsp;
            van-tag(plain type="danger") 发动机
          div
            van-stepper(v-model="stepperVal" :integer="true" min="0")
        div.footer(slot="footer")
          span 物理位置：
          span.position 物理位置物理位置物理位置物理位置物理位置物理位置物理位置物理位置物理位置物理位置物理位置
          van-icon(name="edit")
    my-button(:content="'保存'" @btnClick="goOtherPage")
</template>

<script>
  import PopupPicker from '@components/PopupPicker'
  export default {
    name: 'OrderStorage',
    components: {
      PopupPicker
    },
    data () {
      return {
        goodsDateText: '请选择',
        payTypeText: '请选择',
        ticketTypeText: '请选择',
        imgUrl: require('../../../../public/goods-img.png'),
        stepperVal: 0,
        orderData: {
          buyPeople: '张三'
        },
        columns: []
      }
    },
    methods: {
      pickerDepository (id) {
        // this.$router.push(`/common/DepositoryList?black=1&id=${id}`)
        return false
      },
      goOtherPage (id) {
        // this.$router.push(`office/OfficeBuyList`)
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
  /deep/.footer
    @include hor-start-center
  .redColor
    color: red
  .position
    display: inline-block
    width: 250px
    @include text-overflow
</style>
