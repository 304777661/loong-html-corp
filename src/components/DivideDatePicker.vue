<template>
  <div>
    <van-cell :title="title"
              is-link
              :value="label"
              @click="show = true" />
    <van-popup v-model="show"
               position="bottom"
               :lazy-render="false"
               @click-overlay="resetPickerIndex">
      <van-picker ref="picker"
                  show-toolbar
                  :columns="columns"
                  value-key="label"
                  @cancel="onCancel"
                  @confirm="onConfirm"
                  @change="onChange"/>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'divide-date-picker',
    props: {
      title: String
    },
    data () {
      let date = new Date()
      let curYear = date.getFullYear()
      let curMonth = date.getMonth() + 1
      // let curDayOfWeek = date.getDay()
      let curDayOfMonth = date.getDate()

      let newDate = new Date(`${curYear}-${curMonth}-${curDayOfMonth}`)
      let values = []
      for (let i = 0; i < 32; i++) {
        let afterDate = new Date(newDate)
        let y = new Date(afterDate.setDate(curDayOfMonth + i))
        values.push({
          label: i === 0 ? '今天' : i === 1 ? '明天' : i === 2 ? '后天' : y.Format('yyyy-MM-dd'),
          date: y
        })
      }
      return {
        show: false,
        value: '',
        columns: [{
          values,
          defaultIndex: 0
        }, {
          values: ['上午', '下午']
        }],
        curPick: null,
        curIdx: 0,
        itemHeight: 0
      }
    },
    computed: {
      label () {
        if (!this.curPick) return '请选择'
        return this.curPick[0].label + this.curPick[1]
      }
    },
    watch: {
      show () {
        if (this.itemHeight) return
        this.$nextTick(() => {
          this.itemHeight = this.$refs.picker.$el.children[0].clientHeight
        })
      }
    },
    methods: {
      onChange (picker, value, index) {
        this.$emit('change', picker, value, index)
      },
      onConfirm (value, index) {
        this.show = false
        this.curPick = value
        this.curIdx = index
        this.$emit('confirm', value, index)
      },
      onCancel () {
        this.show = false
        this.resetPickerIndex()
        this.$emit('cancel')
      },
      resetPickerIndex () {
        // this.$refs.picker.setIndexes([this.curIdx])
      }
    }
  }
</script>

<style lang="sass">
  .select
    $h: 30px
    min-width: 100px
    height: $h
    padding: 0 10px
    line-height: $h
    text-align: center
    color: $blue
    border: 1px solid $blue
    border-radius: $h / 2
    @include hor-between-center
    &__label
      @include text-overflow
      margin-right: 5px
    &__icon
      font-size: $font-small
      transform: rotate(90deg)
</style>
