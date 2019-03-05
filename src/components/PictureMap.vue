<template lang="pug">
  ul.picture-map
    li.picture-map__li(v-for="(item, idx) in pictures" :key="idx" @click="doPreview(idx)")
      img.picture-map__image(:src="item")
      span.icon.icon-close(v-if="upload" @click.stop="doDelete(idx)")
    li.picture-map__li.picture-map__li--add(v-if="pictures && pictures.length < 9 && upload")
      input(type="file" id="file-input" accept="image/*" multiple hidden @change="inputChanged")
      label(for="file-input")
        img.icon-add(src="~@img/ic_grey_add.png")
    slot/
</template>

<script>
  import { ImagePreview } from 'vant'

  export default {
    name: 'picture-map',
    props: {
      upload: Boolean,
      pictures: {
        type: Array,
        default () {
          return []
        }
      }
    },
    model: {
      prop: 'pictures'
    },
    data () {
      return {}
    },
    methods: {
      doPreview (idx) {
        // if (this.upload) return
        ImagePreview(this.pictures, idx)
      },
      doDelete (idx) {
        this.pictures.splice(idx, 1)
      },
      async inputChanged (e) {
        if (e.target.files.length === 0) return
        let toast = this.$toast.loading({
          duration: 0,
          forbidClick: true,
          message: '文件上传中...'
        })
        let files = e.target.files
        // 所有的图片一起异步上传, 使用j变量来控制上传进度
        let j = 0
        let oldLength = this.pictures.length
        for (let i = 0; i < files.length; i++) {
          let formData = new FormData()
          const file = files[i]
          formData.append('file', file)
          this.$api.teacher.upload(formData).then(imgUrl => {
            // 使pictures这个数组里面的图片能保持上传的位置
            this.$set(this.pictures, oldLength + i, imgUrl)
            j++

            if (j === files.length) {
              toast.clear()
              // 防止选择同一图片后, change事件不触发
              document.getElementById('file-input').value = null
              this.$toast.success('文件上传成功')
            }
          })
        }
      }
    }
  }
</script>

<style lang="sass">
  .picture-map
    position: relative
    width: 100%
    background: #fff
    @include hor-start-center
    flex-wrap: wrap
    &__li
      $count: 3
      $gap: 1%
      $w: (100% - $gap * ($count - 1)) / $count
      position: relative
      flex: 1
      @include fixed-width($w)
      margin-right: $gap
      margin-top: $gap
      &:before
        content: ''
        display: inline-block
        background: #000
        width: 0
        padding-bottom: 100%
        vertical-align: middle
      &:nth-of-type(3n)
        margin-right: 0
      &:nth-of-type(-n + 3)
        margin-top: 0
      &--add
        text-align: center
        color: #ccc
        background: $body-background
        @include hor-center-center
    &__image
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
    .icon-close
      position: absolute
      margin: 0
      padding: 0
      display: block
      top: 0
      right: 0
      $h: 15px
      @include rect($h)
      line-height: $h
      text-align: center
      font-size: 10px
      color: #fff
      background: rgba(0, 0, 0, .4)
    .icon-add
      @include rect(40px)

</style>
