<template lang="pug">
  div
    div(@click="a") 123214131
    popup-picker(:columns="columns" :pickerShow="pickerShow" @selectVal="selectVal" @selectCancel="selectCancel" )
</template>

<script>
  import PopupPicker from '@components/PopupPicker'
  export default {
    name: 'OfficePickerBuy',
    components: {
      PopupPicker
    },
    data () {
      return {
        pickerShow: false,
        columns: [{
          id: 0,
          text: '全部商品'
        }, {
          id: 1,
          text: '我的商品'
        }, {
          id: 2,
          text: '我借的'
        }, {
          id: 3,
          text: '借我的'
        }]
      }
    },
    methods: {
      a () {
        this.pickerShow = true
      },
      selectVal (arg) {
          console.log(arg)
        this.pickerShow = false
      },
      selectCancel () {
        this.pickerShow = false
        return false
      }
    },
    created () {
    },
    mounted () {
    }
  }
</script>

<style scoped lang='sass'>

</style>
