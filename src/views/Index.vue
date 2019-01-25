<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// 底部的导航
import  TabBar from '../components/tabBar/TabBar';
export default {
  components:{
    TabBar
  }
}
</script>

<style>

</style>
