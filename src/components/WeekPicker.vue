<template>
  <div class="week-picker">
    <div class="week-picker-top">
      <span class="month">{{curMonth}}月</span>
      <span class="day">{{curDate | formatTime}}</span>
    </div>
    <ul class="week-picker-lists">
      <li class="week-picker-lists__arrow week-picker-lists__arrow--prev"
          @click="doChangeWeek('prev')">
        <van-icon name="arrow"/>
      </li>
      <li class="week-picker-lists__item"
          v-for="(week, idx) in weekLists"
          :key="idx"
          @click="doChangeDay(idx)"
          :class="{'week-picker-lists__item--active': week.active}">
        <!--{{week.active}}-->
        <p>{{week.dayOfAMonth | dayNum2TwoNum}}</p>
        <p v-show="!week.active">{{week.dayOfAWeek | weekNum2Chinese}}</p>
      </li>
      <li class="week-picker-lists__arrow"
          @click="doChangeWeek('next')">
        <van-icon name="arrow"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import d from 'UTILS/date'

  export default {
    name: 'week-picker',
    computed: {
      curMonth () {
        return this.curDate.getMonth() + 1
      }
    },
    data () {
      let s = new Date()
      let date = new Date(s.getFullYear(), s.getMonth(), s.getDate())
      return {
        date,
        weekLists: d.generateWeekList(date),
        curDate: date,
        curIdx: s.getDay()
        // curIdx: null
      }
    },
    filters: {
      weekNum2Chinese (val) {
        switch (val) {
          case 0:
            return '日'
          case 1:
            return '一'
          case 2:
            return '二 '
          case 3:
            return '三'
          case 4:
            return '四'
          case 5:
            return '五'
          case 6:
            return '六'
        }
      },
      dayNum2TwoNum (val) {
        if (val > 0 && val < 10) return `0${val}`
        return val
      },
      formatTime (val) {
        let date = new Date()
        let todayTime = new Date(date.getFullYear(), date.getMonth(), date.getDate())
        let curTime = val.getTime()
        let oneDay = 1000 * 60 * 60 * 24

        let gap = curTime - todayTime
        if (gap === 0) return '今日'
        if (gap === oneDay) return '明日'
        if (gap === -oneDay) return '昨日'

        return val.Format('MM-dd')
      }
    },
    methods: {
      doChangeDay (curIdx) {
        let prevIdx = this.weekLists.findIndex(week => {
          return week.active
        })
        this.weekLists[prevIdx].active = false
        this.weekLists[curIdx].active = true
        this.curDate = this.weekLists[curIdx].date
        this.curIdx = curIdx
        this.$emit('changeDay', this.curDate)
        // this.$emit('update:date', curDate)
      },
      doChangeWeek (type) {
        let date = this.date
        let newDate = null
        if (type === 'prev') {
          newDate = new Date(date.setDate(date.getDate() - 7))
        } else {
          newDate = new Date(date.setDate(date.getDate() + 7))
        }
        let weekLists = d.generateWeekList(newDate)
        let prevIdx = weekLists.findIndex(week => {
          return week.active
        })
        weekLists[prevIdx].active = false
        weekLists[this.curIdx].active = true
        this.weekLists = weekLists
        this.curDate = newDate
        this.date = newDate
        this.$emit('changeWeek', this.weekLists, this.curIdx)
        // this.$emit('update:date', newDate)
      }
    }
  }
</script>

<style lang="sass">
  .week-picker
    position: relative
    background: #fff
    &-top
      height: 40px
      padding: 0 $default-gap
      color: $blue
      @include hor-between-center
      .month
        padding: 5px 15px
        border: 1px solid $blue
        border-radius: 18px
      .day
        font-size: $font-small
    &-lists
      padding: 5px 0
      @include hor-between-center
      text-align: center
      color: $blue
      &__item
        $w: 42px
        @include fixed-width($w)
        &--active
          @include circle($w)
          font-size: $font-large
          background: $blue
          color: #fff
          border: 5px solid #9cbcff
          @include hor-center-center
        p:nth-of-type(2)
          margin-top: 3px
      &__arrow
        @include fixed-width(24px)
        font-size: $font-large
        &--prev
          transform: rotate(180deg)
</style>
