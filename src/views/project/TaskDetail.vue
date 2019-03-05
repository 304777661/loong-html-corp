<template lang="pug">
  .task-detail
    title-line(:title="taskTitle")
    van-cell-group
      van-field(label="负责人" v-model="chief" placeholder="请输入" input-align="right" clearable)
      van-cell(title="截止时间" v-model="deadTime" input-align="right" is-link @click="doPick")
      van-cell(title="任务进度")
      van-field(v-model="content"  type="textarea" placeholder="在此输入任务进度" rows="5" autosize)
    my-button(content="保存" @click="doSave")
    van-popup(v-model="showTimePicker" position="bottom" lazy-render)
      van-datetime-picker(v-model="currentDate" type="date" @confirm="onTimeConfirm")
</template>

<script>
  import TitleLine from '@components/TitleLine'
  import MyButton from '@components/MyButton'

  export default {
    name: 'TaskDetail',
    components: {
      TitleLine,
      MyButton
    },
    data () {
      return {
        taskTitle: '节点信息1',
        chief: '张三',
        content: '',
        deadTime: '',
        showTimePicker: false,
        currentDate: null
      }
    },
    methods: {
      doSave () {},
      doPick () {
        this.showTimePicker = true
      },
      onTimeConfirm (val) {
        this.deadTime = val
        this.showTimePicker = false
      }
    }
  }
</script>

<style scoped lang='sass'>
</style>
