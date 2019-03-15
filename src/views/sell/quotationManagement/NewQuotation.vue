<template>
    <div class="body">
      <!--购货方-->
      <div class="buyerBox">
        <p class="buyer">购货方</p>
        <div class="companyBox">
          <p class="company">中联重科</p>
          <p class="pic"> > </p>
        </div>
      </div>
      <!--供货方-->
      <div class="giveBox">
        <p class="giver">供货方</p>
        <div class="selectBox">
          <p class="select">请选择</p>
          <p class="pic0"> > </p>
        </div>
      </div>
      <!--商品-->
      <div class="goodsBox">
        <p class="goods">商品</p>
        <div class="selectBox1">
          <p class="select1">请选择</p>
          <p class="pic1"> > </p>
        </div>
      </div>
      <!--商品选择-->
      <div class="goodsList" v-for="item in list1" :key="item">
        <div class="goodsShow">
          <img src="#"  class="goodsPic">
          <div class="detail">
            <p class="word1">{{item.name1}}</p>
            <p class="word2">{{item.name2}}</p>
            <p class="word3">{{item.name3}}</p>
            <div class="de1">
              <p class="word4">单价：</p>
              <div class="price">¥ :{{item.name4}}</div>
            </div>

          </div >
        </div>
        <div class="sales">
          <div class="salesBox">
            <p class="p1">{{item.name5}}</p>
            <div class="miniBox">
              <p class="p2">销售数量：</p>
              <div class="miniBox1">
                <img src="#" class="add" @click="js">
                <p class="num">{{item.name6}} </p>
                <img src="#" class="sub" @click="zj">
              </div>
            </div>
          </div>
          <p class="icon"> > </p>
        </div>

      </div>
      <!--合计-->
      <div class="total">
        <p class="totals">合计 :</p>
        <p class="money">¥ : {{totalPrice}}</p>
      </div>
      <!--付款方式-->
      <div class="payWays">
        <p class="pay">付款方式</p>
        <select class="ways">
          <option value ="v">款到发货</option>
          <option value ="s">月结客户</option>
          <option value="o">信用发货</option>
        </select>
      </div>
      <!--开票方式-->
      <div class="orderWays">
        <p class="order">付款方式</p>
        <select class="oWays">
          <option value ="v">款到开票</option>
          <option value ="s">月结开票</option>
          <option value="o">其他</option>
        </select>
      </div>

      <div class="bottomBar">
        <p class="create">生成报价</p>

      </div>
    </div>
</template>

<script>
  export default {
    name: 'NewQuotation',
    data () {
      return {
        list1: [{
          name1: '2P公端护套',
          name2: '料号：282104-1',
          name3: '我的库存：1000件',
          name4: 100,
          name5: '应用行业：发动机',
          name6: 0
        },
          {
            name1: '2P公端护套',
            name2: '料号：282104-1',
            name3: '我的库存：1000件',
            name4: '¥ 100000',
            name5: '应用行业：发动机',
            name6: 8
          }],
        totalPrice: 0
      }
    },
    methods: {
      zj () {
        this.list1[0].name6 = this.list1[0].name6 + 1
        this.totalPrice = this.list1[0].name6 * this.list1[0].name4
      },
      js () {
        this.list1[0].name6 = this.list1[0].name6 - 1
        this.totalPrice = this.list1[0].name6 * this.list1[0].name4
      }
    }
  }
</script>

<style scoped lang="sass">
  .body
    .buyerBox
      border: #BBBBBB solid 1px
      display: flex
      justify-content: space-between
      .buyer
        font-size: 14px
        margin-top: 12px
        margin-left: 10px
        margin-bottom: 16px
        font-weight: 700
      .companyBox
        color: #828282
        .company
          float: left
          margin-bottom: 16px
          margin-top: 12px
          margin-right: 13px
        .pic
          height: 20px
          width: 20px
          font-weight: 700
          margin-top: 12px
          margin-bottom: 16px
          float: right
    .giveBox
      border: #BBBBBB solid 1px
      display: flex
      justify-content: space-between
      .giver
        font-size: 14px
        margin-top: 12px
        margin-left: 10px
        margin-bottom: 16px
        font-weight: 700
      .selectBox
        color: #828282
        .select
          float: left
          margin-bottom: 16px
          margin-top: 12px
          margin-right: 13px
        .pic0
          height: 20px
          width: 20px
          font-weight: 700
          margin-top: 12px
          margin-bottom: 16px
          float: right
    .goodsBox
      border: #BBBBBB solid 1px
      display: flex
      justify-content: space-between
      .goods
        font-size: 14px
        margin-top: 12px
        margin-left: 10px
        margin-bottom: 16px
        font-weight: 700
      .selectBox1
        color: #828282
        .select1
          float: left
          margin-bottom: 16px
          margin-top: 12px
          margin-right: 13px
        .pic1
          height: 20px
          width: 20px
          font-weight: 700
          margin-top: 12px
          margin-bottom: 16px
          float: right
    .goodsList
      display: flex
      justify-content: space-between
      border:  #BBBBBB solid 1px
      .goodsShow
        display: flex
        justify-content: space-between
        .goodsPic
          margin-left: 10px
          margin-top: 7px
          margin-bottom: 23px
          height: 63px
          width: 60px
        .detail
          line-height: 110%
          margin-left: 14px
          margin-top: 12px
          margin-bottom: 9px
          .word1
            border-bottom: 2px
            font-size: 14px
            font-weight: 800
          .word2
            font-weight: 500
            font-size: 11px
          .word3
            font-weight: 500
            font-size: 11px
          .de1
            .word4
              font-weight: 500
              float: left
              font-size: 11px
            .price
              border:  #BBBBBB solid 1px
              float: right
              color: #FF9800
              font-size: 12px
      .sales
        margin-top: 35px
        display: flex
        justify-content: space-between
        .salesBox
          .p1
            margin-right: 36px
            font-size: 5px
            font-weight: 500
          .miniBox
            margin-right: 36px

            .p2
              float: left
              font-size: 11px
              font-weight: 500
            .miniBox1
              display: flex
              float: right
              flex-direction: row
              .add
                width: 18px
                height: 18px
              .sub
                width: 18px
                height: 18px
        .icon
          color: #828282
          margin-right: 8px
    .total
      border: #BBBBBB solid 1px
      display: flex
      justify-content: space-between
      .totals
        margin-top: 12px
        margin-left: 10px
        margin-bottom: 13px
        font-weight: 600
        font-size: 14px
      .money
        color: #FF9800
        margin-top: 12px
        margin-right: 13px
        border-bottom: 13px
    .payWays
      display: flex
      justify-content: space-between
      border: #BBBBBB solid 1px
      .pay
        font-weight: 600
        font-size: 14px
        margin-left: 10px
        margin-top: 16px
        margin-bottom: 8px
      .ways
        color: #BBBBBB
        right: 4px
    .orderWays
      display: flex
      justify-content: space-between
      border: #BBBBBB solid 1px
      .order
        font-weight: 600
        font-size: 14px
        margin-left: 10px
        margin-top: 16px
        margin-bottom: 8px
      .oWays
        color: #BBBBBB
        right: 4px
    .bottomBar
      height: 37px
      width: 100%
      position: fixed
      bottom: 0
      background-color: #259B24
      text-align: center
      .create
        margin-bottom: 12px
        margin-top: 12px
        font-size: 14px
        color: white
</style>
