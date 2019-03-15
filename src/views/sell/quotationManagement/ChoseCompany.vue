<template>
    <div class="body">
      <search placeholder="输入公司名称进行搜索"></search>
      <div class="companyList">
        <p class="companyName">武汉昌龙星沙分公司</p>
        <P class="Manager">联系人 : 曾经理 | 18888888888</P>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ChoseCompany'
  }
</script>

<style scoped lang="sass">
  .body
    .companyList
      border: #BBBBBB solid 1px
      .companyName
        margin-top: 8px
        margin-left: 10px
        font-size: 13px
        font-weight: 700
        margin-bottom: 8px
      .Manager
        margin-left: 10px
        margin-bottom: 29px
        color: #828282
        font-size: 12px
</style>
