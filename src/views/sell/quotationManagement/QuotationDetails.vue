<template>
    <div class="body">
      <!--上部分-->
      <div class="topBox" v-for="item in list1" :key="item" >
        <p class="num">{{item.name1}}</p>
        <p class="num1">{{item.name2}}</p>
      </div>

      <!--商品部分-->
      <div class="goodsBox" v-for="item in list2" :key="item">
        <div class="goodsDetail">
          <img class="pic" src="#">
          <div class="detail">
            <p class="word1">{{item.name1}}</p>
            <p class="word2">{{item.name2}}</p>
            <p class="word3">{{item.name3}}</p>
          </div>
        </div>

        <!--价格-->
        <div class="price">
          <p class="item">{{item.name4}}</p>
          <p class="price1">{{item.name5}}</p>
        </div>
    </div>
      <!--合计-->
      <div class="totalBox">
        <p class="total">合计:</p>
        <p class="totalPrice">¥ 7600.00</p>
      </div>
      <!--付款方式-->
      <div class="payWay" v-for="item in list3" :key="item">
        <p class="pay">{{item.name1}}</p>
        <p class="way">{{item.name2}}</p>
      </div>

      <div class="bottomBox">
        <div class="box1">
          <p class="order1">生成报价单图片</p>
        </div>
        <div class="box2">
          <p class="order2">生成销售订单</p>
        </div>
      </div>

    </div>

</template>

<script>
  export default {
    name: 'QuotationDetails',
    data () {
      return {
        list1: [
          { name1: '报价单号',
            name2: 'B20180923001'
          },
          { name1: '报价状态',
            name2: '待流转'
          },
          { name1: '购货方',
            name2: '中联重科'
          },
          { name1: '供货方',
            name2: '武汉昌龙星沙分公司'
          },
          { name1: '创建日期',
            name2: '2018-09-23 14：00'
          },
          { name1: '商品',
            name2: ''
          }
        ],
        list2: [
          {
            name1: '2P公端护套',
            name2: '料号：282104-1',
            name3: '销售数量：38',
            name4: '应用行业：发动机',
            name5: '单价：¥100.00'
          },
          {
            name1: '2P公端护套',
            name2: '料号：282104-1',
            name3: '销售数量：38',
            name4: '应用行业：发动机',
            name5: '单价：¥100.00'
          }
        ],
        list3: [
          {
            name1: '付款方式',
            name2: '款到发货'
          },
          {
            name1: '款到发货',
            name2: '款到开票'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
  .body
    .topBox
      border: #BBBBBB solid 1px
      display: flex
      justify-content: space-between
      .num
        margin-top: 12px
        margin-bottom: 12px
        margin-left: 10px
        font-size: 14px
        color: #101010
      .num1
        margin-right: 10px
        margin-bottom: 15px
        margin-top: 15px
        font-size: 14px
        color: #888888
    .goodsBox
      border: #BBBBBB solid 2px
      display: flex
      justify-content: space-between
      .goodsDetail
        display: flex
        justify-content: space-between
        .pic
          width: 60px
          height: 60px
          margin-top: 7px
          margin-bottom: 7px
          margin-left: 10px
        .detail
          margin-top: 11px
          margin-bottom: 9px
          margin-left: 14px
          .word1
            margin-bottom: 2px
            font-size: 14px
            color: #101010
            font-weight: 800
          .word2
            font-weight: 500
            margin-top: 5px
            font-size: 11px
          .word3
            font-weight: 500
            margin-top: 5px
            font-size: 11px
      .price
        margin-right: 33px
        margin-top: 33px
        .price1
          color: #FF9800
    .totalBox
      border: #BBBBBB solid 1px
      display: flex
      justify-content: space-between
      .total
        margin-left: 10px
        margin-top: 12px
        margin-bottom: 13px
        font-size: 14px
      .totalPrice
        font-size: 15px
        color: #FF9800
        margin-top: 12px
        margin-right: 11px
        font-weight: 700
    .payWay
      border: #BBBBBB solid 1px
      display: flex
      justify-content: space-between
      .pay
        margin-top: 12px
        margin-left: 10px
        margin-bottom: 12px
        font-size: 14px
      .way
        font-size: 14px
        margin-right: 19px
        margin-top: 12px
        margin-bottom: 12px
    .bottomBox
      width: 100%
      position: absolute
      bottom: 0
      background-color: #259B24
      text-align: center
      .box1
        border: #FFFFFF solid 1px
        .order1
          font-size: 14px
          color: #FFFFFF
          margin-bottom: 12px
          margin-top: 12px
      .box2
        .order2
          margin-bottom: 12px
          margin-top: 12px
          font-size: 14px
          color: #ffffff
</style>
