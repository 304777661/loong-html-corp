<template lang="pug">
  .task-detail
    title-line(:title="taskTitle")
    van-cell-group
      van-field(label="负责人" v-model="chief" placeholder="请输入" input-align="right" clearable)
      van-cell(title="截止时间" v-model="deadTime" input-align="right" is-link @click="doPick")
      van-cell(title="任务进度")
      van-field(v-model="content"  type="textarea" placeholder="在此输入任务进度" rows="5" autosize)
    .picture-box
      picture-map(:pictures="images" upload)
    van-popup(v-model="showTimePicker" position="bottom" lazy-render)
      van-datetime-picker(v-model="currentDate" type="date" @confirm="onTimeConfirm")
    my-button(content="保存" @click="doSave")
</template>

<script>
  import TitleLine from '@components/TitleLine'
  import MyButton from '@components/MyButton'
  import PictureMap from '@components/PictureMap'

  export default {
    name: 'TaskDetail',
    components: {
      TitleLine,
      MyButton,
      PictureMap
    },
    data () {
      return {
        taskTitle: '节点信息1',
        chief: '张三',
        content: '',
        deadTime: '',
        showTimePicker: false,
        currentDate: null,
        images: []
      }
    },
    methods: {
      doSave () {
        // await this.$api.teacher.addTeachGroupActivity(this.activity)
        this.$toast.success('保存成功')
        this.$router.back()
      },
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
  .task-detail
    .picture-box
      background: white
      padding: 10px 14px
</style>
