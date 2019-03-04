<template>
  <div class="detail">
    <div class="detail-main">
      <div class="detail-main-header" v-if="article.title">
        <p class="detail-main-header__title">{{article.title}}</p>
        <div class="detail-main-header__tag" v-if="isActivity">
          <van-tag v-if="article.isParticipated === 'YES'" color="#24A197">已参与</van-tag>
          <van-tag v-else-if="article.isFinish === 'YES'" color="#9B9B9B" plain>已结束</van-tag>
          <van-tag v-else color="#24A197" plain>进行中</van-tag>
        </div>
        <div class="detail-main-header__tag" v-else-if="isAnonymous">
          <van-tag color="#24A197">匿名</van-tag>
        </div>
        <div v-else></div>
      </div>
      <div v-if="endTime || article.createdTime">
        <div v-if="endTime" class="detail-main-date">
          <span>结束时间：{{endTime | ymdhm}}</span>
          <span>{{article.participationNum || '0'}}人已参与</span>
        </div>
        <div v-else class="detail-main-date">{{article.createdTime | ymd}}</div>
      </div>
      <div class="detail-main-content van-hairline--top" v-if="article.content" v-html="article.content"></div>
    </div>
    <div class="detail-attachment van-hairline--top"
         v-if="article && article.attachmentList && article.attachmentList.length>0">
      <div class="detail-attachment-divider"></div>
      <p class="detail-attachment__sticky van-hairline--bottom">附件</p>
      <div class="detail-attachment__item van-hairline--bottom"
           v-for="(file,index) in article.attachmentList" :key="index">
        <img class="detail-attachment__item__icon" :src="file.fileUrl | fileIcon"/>
        <span class="detail-attachment__item__name">{{file.fileName}}</span>
        <div class="detail-attachment__item__func" @click="handleDownloadClick(file)">下载</div>
      </div>
    </div>

    <van-actionsheet v-model="showActionSheet" :actions="actions"></van-actionsheet>
  </div>
</template>

<script>
  export default {
    name: 'NoticeDetail',
    props: {
      article: {
        Type: Object,
        default: {}
      },
      pictures: {
        Type: Array,
        default: () => []
      },
      endTime: {
        Type: String,
        default: null
      },
      isAnonymous: {
        Type: Boolean,
        default: false
      },
      isActivity: {
        Type: Boolean,
        default: false
      }
    },
    data () {
      return {
        curFile: null,
        showActionSheet: false,
        actions: [{
          name: '下载到手机',
          className: 'icon icon-download',
          callback: this.doDownload
        }],
      }
    },
    methods: {
      handleDownloadClick (file) {
        this.curFile = file
        this.showActionSheet = true
      },
      async doDownload () {
        if (!this.curFile) {
          this.$toast.fail('获取文件错误')
          this.showActionSheet = false
          return
        }
        // window.location.href = `${window.location.origin}${this.$config.apiPrefix}/oss/downloadFile.do?path=${this.curFile.fileUrl}`
        window.location.href = this.curFile.fileUrl
        this.showActionSheet = false
      },
    }
  }
</script>
<style lang="sass">
  .detail-main-content
    padding: 10px 14px
    img
      width: 100%
      max-width: 100%
      margin: 4px 0
    p
      line-height: 24px
    table
      border: 1px solid #cccccc
      margin: 6px 0
      tr
        padding: 8px
      td
        min-width: 30vw
        border: 1px solid #cccccc
        text-align: center
        padding: 8px
</style>
<style lang="sass" scoped>
  .detail
    margin-bottom: $default-gap
    overflow-x: scroll
    background: $white
    &::-webkit-scrollbar
      display: none
    &-main
      background: $white
      &-header
        display: flex
        flex-direction: row
        padding: 14px 14px 8px
        &__title
          flex: 1
          font-size: $font-large
          line-height: 24px
          font-weight: bold
        &__tag
          margin: 4px 0 0 2px
      &-date
        padding: 0 14px 8px
        font-size: 13px
        line-height: 18px
        color: #ccc
        @include hor-between-center
    &-attachment
      &-divider
        height: 10px
        background: #f8fafc
      &__sticky
        color: $dark-green
        font-size: 13px
        line-height: 18px
        padding: 6px 14px
      &__item
        height: 50px
        padding: 0 14px
        @include hor-start-center
        &__icon
          margin-left: 6px
          width: 21px
          height: 24px
        &__name
          font-size: 14px
          color: $black
          margin: 0 8px
          flex: 1
          line-height: 24px
          @include text-overflow
        &__func
          color: $dark-green
          font-size: 12px
          padding: 4px 8px
          line-height: 14px
          border-radius: 3px
          margin-right: 10px
          border: 1px solid $dark-green

</style>
