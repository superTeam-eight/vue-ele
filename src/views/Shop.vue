<template>
  <div class="shop">
    <div v-if="!isSticky">
      <cube-scroll>
        <shop-header></shop-header>
        <nav :class="{'navFixed':isFixed}">
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
        <div @click="scrollTo" id="shop-main">
          <router-view></router-view>
        </div>
      </cube-scroll>
    </div>
    <div v-else>
      <shop-header></shop-header>
      <nav :class="{'navFixed':isFixed}">
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
      <div class="rw" id="shop-main" @click="scrollTo">
        <router-view></router-view>
      </div>
    </div>
    <shopcart></shopcart>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShopHeader from '../components/shop/ShopHeader'
import Shopcart from '../components/shop/Shopcart'
export default {
  data() {
    return {
      isFixed: false
    }
  },
  computed: {
    ...mapState('shop',['isSticky'])
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop)
      if (scrollTop >= 444) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    scrollTo () {
      console.log(1111);
      // document.body.scrollTop = 444;
      document.querySelector("#shop-main").scrollIntoView();
    }
  },
  components: {
    ShopHeader,
    Shopcart
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss">
@import '../style/common.scss';
  .sticky {
    position: absolute;
    // .rw {
    //   height: 100vh;
    // }
    // .p {
    //   position: absolute;
    //   height: 100vh;
    // }
  }
  .shop {
    height: 100vh;
  }
  .rw {
    height: calc(100vh - 217px);
    padding-bottom: 136px;
  }
  main {
    position: absolute;
    top: 525px;
    bottom: 136px;
    // height: calc(100vh - 661px);
  }
  .nav-fixed {
    position: fixed;
    top: -81px;
  }
  nav {
    width: 100%;
    display: flex;
    background: #fff;
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
