<template>
  <div class="radio" @click="value = oldValue">
    {{oldValue}}
    <div class="radio-bg" :class="{'radio-bg--on': value === 'single'}"></div>
    <input type="radio"
           :name="name"
           id="single"
           :value="value"
           hidden
           v-model="value"/>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'radio',
    props: {
      name: String,
      value: String
    },
    model: {
      prop: 'value'
    },
    data () {
      let vm = this
      return {
        oldValue: vm.value
      }
    }
  }
</script>

<style lang="sass">

</style>
