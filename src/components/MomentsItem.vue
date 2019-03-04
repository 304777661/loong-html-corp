<template>
  <div class="moments-item">
    <div class="moments-item__header">
      <img :src="moment.avatar | defaultAvatar" class="avatar">
      <div>
        <p class="name">{{moment.userName}}</p>
        <p class="post">职务名称/{{moment.position || '暂无职务'}}</p>
      </div>
    </div>
    <p class="moments-item__text">{{moment.content}}</p>
    <picture-map :pictures="moment.imageList"/>
    <p class="moments-item__time">{{moment.createdTime | ymdhm}}</p>

    <ul class="moments-item__footer">
      <li class="moments-item__li"
          @click="doCollection">
        <span class="icon icon-collection"
              :class="{active: moment.hadFavorite === 'YES'}"></span>
        <span>收藏</span>
      </li>
      <li class="moments-item__li"
          @click="goDetail(moment.id)">
        <span class="icon icon-comment"></span>
        <span>{{moment.commentTotal}}</span>
      </li>
      <li class="moments-item__li"
          @click="doLike">
        <span class="icon icon-thumb-up"
              :class="{active: moment.hadPraise === 'YES'}"></span>
        <span>{{moment.praiseTotal}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import PictureMap from 'COMPONENT/PictureMap'

  export default {
    props: {
      moment: Object
    },
    components: {
      PictureMap
    },
    methods: {
      async doCollection () {
        let query = {
          mienId: this.moment.id,
          commentType: 'FAVORITE'
        }
        if (this.moment.hadFavorite === 'YES') {
          this.$api.teacher.cancelMienComment(query)
        } else {
          this.$api.teacher.addMienComment(query)
        }
        this.moment.hadFavorite = this.moment.hadFavorite === 'YES' ? 'NO' : 'YES'
      },
      doLike () {
        let query = {
          mienId: this.moment.id,
          commentType: 'PRAISE'
        }
        if (this.moment.hadPraise === 'YES') {
          this.$api.teacher.cancelMienComment(query)
          this.moment.praiseTotal--
        } else {
          this.$api.teacher.addMienComment(query)
          this.moment.praiseTotal++
        }
        this.moment.hadPraise = this.moment.hadPraise === 'YES' ? 'NO' : 'YES'
      },
      goDetail (id) {
        this.$router.push(`/teacher/moments/${id}`)
      }
    }
  }
</script>

<style lang="sass">
  .moments-item
    padding: $default-gap $default-gap 0
    background: #fff
    border: 1px solid $gray-light
    border-left: none
    border-right: none
    &__header
      @include hor-start-center
      .avatar
        margin-right: 10px
        @include circle(45px)
      .name
        font-weight: bold
      .post
        margin-top: 8px
        font-size: $font-small
        color: $gray
    &__text
      margin: $default-gap - 2px auto
      line-height: 1.5
    &__time
      padding: 8px 0
      font-size: $font-small
      color: $gray
      border-bottom: 1px solid $gray-light
    &__footer
      height: 35px
      color: $gray
      font-size: $font-small
      @include hor-between-center
      .icon
        font-size: $font-normal
        margin-right: 10px
      .icon-collection.active
        color: $yellow
      .icon-thumb-up.active
        color: $red
    &__li
      @include hor-center-center
</style>
