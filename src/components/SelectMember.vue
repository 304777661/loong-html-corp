<template>
  <div class="select-member">
    <div class="select-member-item" v-for="(member,index) in memberList" :key="'member' + index">
      <img :src="member.avatar | defaultAvatar">
      <p>{{member.name}}</p>
      <van-icon class="select-member-item-delete icon-size" v-if="canDelete" name="clear"
                @click="handleDeleteClick(index)">
      </van-icon>
    </div>
    <div class="select-member-item">
      <van-icon v-if="canAdd" name="add-o" class="icon-size-add" color="#ccc" @click="handleAddClick"></van-icon>
      <p>&nbsp;&nbsp;</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelectMember',
    props: {
      memberList: {
        Type: Array,
        default: () => []
      },
      canAdd: {
        Type: Boolean,
        default: false
      },
      canDelete: {
        Type: Boolean,
        default: false
      }
    },
    data () {
      return {}
    },
    methods: {
      handleAddClick () {
        this.$emit('addClick')
      },
      handleDeleteClick (index) {
        this.$dialog.confirm({
          title: `是否删除${this.memberList[index].name}？`
        }).then(() => {
          this.memberList.splice(index, 1)
        }, () => {
          console.log('用户取消')
        })
      }
    },
  }
</script>

<style scoped lang="sass">
  .select-member
    display: flex
    flex-direction: row
    flex-wrap: wrap
    padding: 6px
    background: $white
    .icon-size
      font-size: 15px
    .icon-size-add
      font-size: 40px
    &-item
      padding: 2px 10px 2px 8px
      position: relative
      width: 70px
      @include ver-center-center
      min-width: 0
      img
        @include circle(40px)
      p
        font-size: 12px
        text-align: center
        line-height: 18px
        margin-top: 4px
        @include text-overflow
      &-delete
        position: absolute
        right: 5px
        top: 2px
        color: $gray
    .van-icon
      margin-top: 2px

</style>
