<template lang="pug">
  div.OfficeAddBuy
    van-cell-group
      van-card(title="商品标题" :thumb="imgUrl")
        div.desc(slot="desc")
          span 料号：282-1
          van-icon(name="friends-o") 销售员123
        div.tags(slot="tags")
          div 应发数量：1000
          div 实发数量：1000
        div.footer(slot="footer")
          span 物理位置：
          span.position 物理位置物理位置物理位置物理位置物理位置物理位置物理位置物理位置物理位置物理位置物理位置
          van-icon(name="edit")
      van-cell(title="现货" value="500件")
      van-cell(title="借货" value="500件")
      van-cell(title="期货" value="500件")
      van-cell
        van-stepper.stepper(v-model="stepperVal" :integer="true" min="0")
    my-button(:content="'确定出库'" @btnClick="goOtherPage")
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
  .stepper
    text-align: right
</style>
