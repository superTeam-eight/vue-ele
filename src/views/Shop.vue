<template>
  <div>
    <shop-header></shop-header>
    <router-view></router-view>
  </div>
</template>

<script>
import ShopHeader from '../components/shop/ShopHeader'
export default {
  components: {
    ShopHeader
  }
}
</script>

<style>

</style>
