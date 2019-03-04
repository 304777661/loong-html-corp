<template>
  <div>
    <div class="select" @click="show = true">
      <span class="select__label">{{label}}</span>
      <van-icon class="select__icon" name="arrow"/>
    </div>
    <van-popup v-model="show"
               position="bottom"
               :lazy-render="false"
               @click-overlay="resetPickerIndex">
      <van-picker ref="picker"
                  show-toolbar
                  :columns="columns"
                  value-key="label"
                  :loading="loading"
                  @cancel="onCancel"
                  @confirm="onConfirm"
                  @change="onChange"/>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'select-picker',
    props: {
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      type: String,
      showAll: Boolean,
      defaultIndex: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        show: false,
        curPick: null,
        curIdx: 0,
        itemHeight: 0,
        gradeList: null
      }
    },
    computed: {
      loading () {
        return !(this.columns && this.columns.length)
      },
      label () {
        return (this.curPick && this.curPick.label) || (this.columns.length && this.columns[this.defaultIndex].label) || '暂无数据'
      }
    },
    async created () {
      let value = null
      switch (this.type) {
        case 'grade':
          let gradeList = await this.$api.teacher.queryGradeList()
          gradeList.forEach(grade => {
            this.columns.push({
              label: grade.name,
              id: grade.id
            })
          })
          value = {
            label: gradeList[this.defaultIndex].name,
            id: gradeList[this.defaultIndex].id
          }
          break
        case 'class':
          let classList = await this.$api.teacher.queryTeachingClassList()
          classList.forEach(c => {
            this.columns.push({
              label: c.className,
              id: c.classId
            })
          })
          // if (classList.length) {
          value = {
            label: classList[this.defaultIndex].className,
            id: classList[this.defaultIndex].classId
          }
          // }
          break
        case 'course':
          let courseList = await this.$api.teacher.queryCourseInfoList()
          courseList.forEach(course => {
            this.columns.push({
              label: course.courseName,
              id: course.id
            })
          })
          value = {
            label: courseList[this.defaultIndex].courseName,
            id: courseList[this.defaultIndex].id
          }
          break
        default:
          value = this.columns[this.defaultIndex]
          console.log('value: ', value, 'columns: ', this.columns[this.defaultIndex])
          break
      }
      if (this.showAll) {
        let label = null
        switch (this.type) {
          case 'grade':
            label = '全部年级'
            break
          case 'class':
            label = '全部班级'
            break
          case 'course':
            label = '全部科目'
            break
        }
        this.columns.unshift({
          label,
          id: null
        })
        this.$emit('confirm', {label, id: null}, 0)
      } else {
        console.log('value', value)
        this.$emit('confirm', value, this.defaultIndex)
      }
    },
    watch: {
      show (newVal) {
        if (!newVal) return
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
        this.$refs.picker.setIndexes([this.curIdx])
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
