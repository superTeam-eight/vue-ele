<template>
  <div>
    <cube-sticky :pos="scrollY" class="sticky" @change="isSticky">
      <cube-scroll  @scroll="scrollHandler" :scroll-events="['scroll']">
        <shop-header></shop-header>
        <cube-sticky-ele ele-key="1">
          <nav>
            <div>
              <router-link to="/shop/shoporder">点餐</router-link>
            </div>
            <div>
              <router-link to="/shop/shoprate">评价</router-link>
            </div>
            <div>
              <router-link to="/shop/shopdesc">商家</router-link>
            </div>
          </nav>
        </cube-sticky-ele>
        <div class="rw">
          <router-view></router-view>
        </div>
        
      </cube-scroll>
    </cube-sticky>
  </div>
</template>

<script>
import ShopHeader from '../components/shop/ShopHeader'
export default {
  data() {
    return {
      scrollY: 0
    }
  },
  methods: {
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    isSticky(x) {
      this.$store.commit('shop/SET_STICKY', Boolean(x))
    }
  },
  components: {
    ShopHeader
  }
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';
  .sticky {
    height: 100vh;
    .rw {
      height: 1000px;
    }
  }
  nav {
    margin-top: 20px;
    display: flex;
    div {
      flex: 1;
      height: 80px;
      border-bottom: 1px solid #ebebeb;
      text-align: center;
      line-height: 80px;
      font-size: 30px;
      color: $fontColor;
      a {
        height: 76px;
        display: inline-block;
        border-bottom: 4px solid transparent;
      }
      .active {
        color: $titleColor;
        font-weight: 700;
        border-bottom: 4px solid $themeColor;
      }
    }
  }
</style>
