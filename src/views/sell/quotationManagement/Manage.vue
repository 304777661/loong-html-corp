<template>
  <div class="body">
    <!--搜索框-->
    <search placeholder="输入单据编号,客户名称,商品名称进行搜索"></search>
    <!--分类选择-->
    <van-tabs class="tabs">
      <van-tab title="报价状态"></van-tab>
      <van-tab title="全部"></van-tab>
      <van-tab title="已出单"></van-tab>
      <van-tab title="待流转"></van-tab>
    </van-tabs>

    <!--主体内容-->
    <div class="bigBox" v-for="item in list" :key="item">
      <div class="container">
        <div class="content">
          <p class="odd">报价单号 :{{item.name1}}</p>
          <div class="box">
            <!--图片-->
            <img src="#" class="pic"/>
            <!--详情-->
            <div class="detail">
              <p class="name">商品名称：{{item.name2}}</p>
              <p class="name">料号：{{item.name3}}</p>
              <p class="name">数量：{{item.name4}}</p>
              <p class="name">交货期限：{{item.name5}}</p>
            </div>
          </div>
        </div>
        <!--状态-->
        <div class="state">{{item.name8}}</div>
      </div>
      <!--购买方和价钱-->
      <div class="buyer">
        <p class="company">购买方:{{item.name6}}</p>
        <p class="price">合计 ¥{{item.name7}}</p>
      </div>
    </div>

    <!--底部按钮-->
    <div class="btn1">
      <p class="button">新增报价</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Manage',
    data () {
      return {
        list: [
          {
            name1: 'WHCL-20190101001szyh',
            name2: '2P公端护套',
            name3: '282104-1',
            name4: '1000 件',
            name5: '2019-03-03',
            name6: '深圳市研慧科技有限公司',
            name7: '10000.00',
            name8: '待出单'
          },
          {
            name1: 'WHCL-20190101001szyh',
            name2: '2P公端护套',
            name3: '282104-1',
            name4: '1000 件',
            name5: '2019-03-03',
            name6: '深圳市研慧科技有限公司',
            name7: '90000.00',
            name8: '待流转'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="sass">

  .body
    .tabs
      border: #BBBBBB solid 1px
    .bigBox
      .container
        border: #BBBBBB solid 1px
        display: flex
        justify-content: space-between

        .content
          .odd
            margin-top: 8px
            margin-bottom: 7px
            font-size: 11px
            margin-left: 10px

          .box
            .pic
              margin-bottom: 8px
              display: block
              width: 60px
              height: 60px
              margin-left: 10px
              float: left

            .detail
              float: right
              margin-left: 18px

              .name
                font-weight: 500
                font-size: 11px
                margin: 3px

        .state
          font-size: 11px
          color: #259B24
          margin-right: 10px
          margin-top: 10px
          font-weight: 900

      .buyer
        margin-bottom: 12px
        border: #BBBBBB solid 1px
        display: flex
        justify-content: space-between

        .company
          margin-top: 9px
          margin-left: 10px
          margin-bottom: 2px
          font-size: 13px
          font-weight: 900

        .price
          font-weight: 500
          font-size: 13px
          color: #FF9800
          margin-top: 9px
          margin-bottom: 2px
          margin-right: 10px
    .btn1
      width: 100%
      position: absolute
      bottom: 0
      background-color: #259B24
      text-align: center
      .button
        margin-top: 10px
        margin-bottom: 10px
        font-size: 14px
        color: white

</style>
