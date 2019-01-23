<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    async test () {
      // await this.$store.dispatch('aTest')
      // console.log(2222)
    }
  },
  created () {
    // (async () => {
    //   await this.$store.dispatch('aTest')
    //   console.log(2222)
    // })()

    // this.$store.dispatch('aTest').then(res => {
    //   console.log(222)
    // })
    this.test()
  }
}
</script>

<style>

</style>
