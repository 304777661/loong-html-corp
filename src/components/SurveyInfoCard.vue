<template>
  <card class="survey-info-card">
    <div class="card-header"
         :class="{'card-header--gray': surveyInfo.isFinish === 'YES'}">
      <span class="card-header__title">{{surveyInfo.title}}</span>
      <span class="card-header__status">
          {{ surveyInfo.isFinish === 'YES' ? '已结束' : '进行中'}}
        </span>
    </div>
    <div class="card-footer">
      <span class="card-footer__time">{{surveyInfo.endDate | ymd}}</span>
      <span class="card-footer__name">{{surveyInfo.username}}</span>
      <span class="card-footer__count">{{surveyInfo.total}}人已参与</span>
    </div>
    <div class="card-body">
      <p> {{surveyInfo.content || '暂无说明'}}</p>
      <picture-map class="mt15" :pictures="surveyInfo.imageList"/>
    </div>
    <div class="card-footer">
      <span class="card-footer__time">结束时间: {{surveyInfo.endDate | ymdhm}}</span>
    </div>
    <div class="card-footer">
      <span class="card-footer__time">可见范围: {{surveyInfo.classList && surveyInfo.classList.join(', ')}}</span>
    </div>

  </card>
</template>

<script>
  export default {
    name: 'survey-info-card',
    data () {
      const id = this.$route.params.id || this.$route.params.surveyId
      return {
        id,
        surveyInfo: {}
      }
    },
    async created () {
      this.$api.teacher.getSurveyInfo(this.id).then(res => {
        this.surveyInfo = res
      })
    }
  }
</script>

<style lang="sass">
  .card
    overflow: hidden
    &.survey-info-card
      padding: 0
    &.survey-info-card &-header
      padding: 12px $default-gap
      color: #fff
      background: linear-gradient(36deg, #8081FF 0%, #23BAFF 100%)
      @include hor-start-center
      &--gray
        background: #ccc
      &__title
        font-size: $font-normal + 1px
        font-weight: bold
        flex: 4
        @include text-overflow
      &__status
        text-align: right
        font-size: $font-smaller
        white-space: nowrap
    &.survey-info-card &-body
      padding: $default-gap
      line-height: 1.2
      font-size: $font-normal - 1px
      border-bottom: 1.5px dashed $gray-light
    // padding: $default-gap
    &.survey-info-card &-footer
      padding: 10px $default-gap
      font-size: $font-small
      color: $gray
      border-bottom: 1.5px dashed $gray-light
      @include hor-start-center
      &:last-of-type
        border-bottom: none
      &__time
        flex: 1
        white-space: nowrap
      &__name
        flex: 1
        white-space: nowrap
      &__count
        flex: 2
        text-align: right
</style>
