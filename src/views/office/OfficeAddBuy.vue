<template lang="pug">
  div.OfficeAddBuy
    van-cell-group
      van-cell(title="购货方" value="中联重科")
      van-cell(title="收货地址" is-link value="收货仓库选择" @click="pickerDepository")
      van-cell(title="供货方" is-link value="泰科电子")
      van-cell(title="商品" is-link value="请选择")
      van-card(:num="stepperVal" price="2.00" title="商品标题" :thumb="imgUrl" currency="单价")
        div.desc(slot="desc")
          span 料号：282-1
          van-icon(name="friends-o") 销售员123
        div.tags(slot="tags")
          div
            van-tag(plain type="primary") 202-1
            | &nbsp;
            van-tag(plain type="danger") 发动机
          div
            van-stepper(v-model="stepperVal" integer="true" min="0")
      van-cell(title="合计" value="请选择" value-class="redColor")
        div(slot="") ￥1300
      van-cell(title="交货期限" is-link value="请选择" @click="pickerPop")
      van-cell(title="付款方式" is-link value="请选择")
      van-cell(title="开票方式" is-link value="请选择")
    van-popup(v-model="pickerShow" position="bottom" @open="pickerShow=true" @close="pickerShow=false" @click-overlay="pickerShow=false")
      van-picker(:columns="columns" v-if="pickerShow" show-toolbar @cancel="onCancel" @confirm="onConfirm")
    my-button(:content="生成采购订单" @btnClick="goOtherPage")
</template>

<script>

  export default {
    name: 'OfficeAddBuy',
    components: {},
    data () {
      return {
        imgUrl: require('../../../public/goods-img.png'),
        stepperVal: 0,
        popShow: false,
        pickerShow: false,
        orderData: {
          buyPeople: '张三'
        },
        columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
      }
    },
    methods: {
      pickerDepository (id) {
        this.$router.push(`/common/DepositoryList?black=1&id=${id}`)
      },
      pickerPop () {
        this.pickerShow = true
      },
      onConfirm (value, index) {
        this.$toast(`当前值：${value}, 当前索引：${index}`)
        this.pickerShow = false
      },
      onCancel () {
        this.$toast('取消')
        this.pickerShow = false
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
