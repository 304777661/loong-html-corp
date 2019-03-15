<template lang="pug">
    .popup-picker
      van-popup(v-model="pickerShow" position="bottom" @click-overlay="onCancel" :close-on-click-overlay="false")
        van-picker(:columns="columns" v-if="pickerShow" show-toolbar @cancel="onCancel" @confirm="onConfirm")
</template>

<script>
  export default {
    name: 'PopupPicker',
    props: {
      pickerShow: {
        Type: Boolean,
        default: false
      },
      columns: {
        Type: Array,
        default: () => []
      }
    },
    methods: {
      onConfirm (value = '', index = 0) {
        this.$toast(`当前值：${value.text}, 当前索引：${index}`)
        this.$emit('selectVal', { text: value.text, index: index, id: value.id })
      },
      onCancel () {
        this.$emit('selectCancel')
      }
    }
  }
</script>

<style scoped>

</style>
