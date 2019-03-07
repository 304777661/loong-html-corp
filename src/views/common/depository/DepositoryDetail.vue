<template lang="pug">
  .supplierDetail
    .client
      .title
        span {{clientData.title}}
        span.edit(@click="edit" v-show="isEdit")
          i.van-icon.van-icon-edit &nbsp;
          | 编辑
      .line
      .table-cell
        span 联系人
        input(v-model="clientData.name" :disabled="isEdit" ref="input")
      .table-cell
        span 联系电话
        input(v-model="clientData.phone" :disabled="isEdit")
      .table-cell
        span 地址
        textarea(v-model="clientData.address" :disabled="isEdit")
      .table-cell
        span 归属公司
        input(v-model="clientData.returned" :disabled="isEdit")
    my-button(content="保存" @btnClick="btnClick" v-show="!isEdit")
</template>

<script>
  export default {
    name: 'SupplierDetail',
    data () {
      return {
        id: this.$route.query.id,
        activeNames: ['2'],
        collapseTitle: '展开',
        isEdit: true,
        clientData: {
          title: '武汉昌龙星沙分公司仓库',
          name: '毛静云',
          phone: '18273829182',
          address: '深圳市南山区粤海街道科技南十二路011号深圳市南山区粤海街道科技南十二路011号深圳市南山区粤海街道科技南十二路011号',
          returned: '武汉市昌龙电子电器有限公司'
        }
      }
    },
    methods: {
      goOtherPage (url) {
        this.$router.push(`${url}?id=` + this.id)
      },
      showHide () {},
      edit (e) {
        this.isEdit = false
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
        // e.currentTarget.style.display = 'none'
      },
      btnClick () {
        // await this.$api.teacher.addTeachGroupActivity(this.activity)
        this.$toast.success('保存成功')
        this.isEdit = true
      }
    },
    created () {

    },
    mounted () {
    }
  }
</script>

<style scoped lang='sass'>
  .client
    padding: 18px 18px 0 18px
    background-color: #F8FAFC
    .title
      font-size: 16px
      margin-bottom: 12px
      font-weight: 500
      display: flex
      justify-content: space-between
      span.edit
        color: #4A77AF
        font-size: 13px
    .line
      border: 1px solid rgba(238, 238, 238, 0.9)
    .table-cell
      font-size: 13px
      display: flex
      span:nth-child(1)
        padding: 9px 0
        display: inline-block
        width: 30%
        color: #9B9B9B
      textarea
        height: 100px
      input:nth-child(2), textarea
        padding: 9px 5px
        display: inline-block
        width: 70%
        color: #333333
        box-sizing: border-box
        background: transparent
        border: 1px solid transparent
        &:focus
          border: 1px solid #66afe9
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)
</style>
