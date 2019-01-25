<template>
  <div class="shop">
    <nav class="navFixed" v-show="isFixed">
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
    <cube-scroll-nav
    v-if="data"
    :side="true"
    :data="data"
    :current="current"
    @sticky-change="stickyChangeHandler"
    ref="sc"
    :class="{'sticky-mt':isFixed}">
      <div slot="prepend" class="hd">
        <div @touchmove="handeltouch" class="toucharea" v-if="isTouch">
        </div>
        <shop-header></shop-header>
        <nav v-show="!isFixed">
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
      </div>
      <router-view tag="template"></router-view>
    </cube-scroll-nav>
    <shopcart></shopcart>
    <cube-popup v-if="shop && shop.activities.length" type="my-popup" ref="myPopup" position="bottom" :mask-closable="true">
      <div class="ac-popup">
        <h2>优惠活动</h2>
        <div class="ac-cont">
          <p v-for="item in shop.activities" :key="item.id" class="ac-list">
            <span class="ac-tag" :style="{'background' : '#' + item.icon_color}">{{item.icon_name | formatIconName}}</span>
            <span class="ac-desc">{{item.description}}</span>
          </p>
        </div>
        <i class="cubeic-close" @click="closePopup('myPopup')"></i>
      </div>
    </cube-popup>
    <cube-popup v-if="shop" type="my-popup" ref="myPopupD" :center="true" :mask-closable="true">
      <div class="div-popup">
        <h2>
          {{shop.name}}
        </h2>
        <table>
          <tr>
            <td>{{shop.rating}}</td>
            <td>{{shop.recent_order_num}}单</td>
            <td>{{shop.delivery_mode.text}}</td>
            <td>{{shop.piecewise_agent_fee.tips | formatFee}}元</td>
            <td>{{shop.distance}}</td>
          </tr>
          <tr>
            <td>评分</td>
            <td>月售</td>
            <td>{{shop.order_lead_time}}</td>
            <td>配送费</td>
            <td>距离</td>
          </tr>
        </table>
        <h2 class="notice-title">
          <span>公告</span>
        </h2>
        <div class="notice-cont">
          亲爱的用户请提前40分钟下单，并且把地址登记正确，详细，避免耽误您的用餐时间;如有发现有少餐；错餐；漏餐；请拨打86561615！我们会尽快的为大家解决；德克士感谢您一如既往的支持！
        </div>
        <i class="cubeic-close" @click="closePopup('myPopupD')"></i>
      </div>
    </cube-popup>
    <cube-popup type="my-popup" ref="myPopupS" position="bottom" :mask-closable="true">
      <div class="scale">
        <div class="scale-hd">
          <img :src="'//elm.cangdu.org/img/'+currentFood.image_path" alt="">
        </div>
      </div>
    </cube-popup>
  </div>
</template>

<script>
import bus from '../bus'
import { mapState } from 'vuex'
import ShopHeader from '../components/shop/ShopHeader'
import Shopcart from '../components/shop/Shopcart'
export default {
  data() {
    return {
      isFixed: false,
      isTouch: true,
      currentFood: null
    }
  },
  computed: {
    ...mapState('shop',['shop']),
    ...mapState('shop',{'data':'foods'}),
    current () {
      return this.data[0].name
    }
  },
  methods: {
    stickyChangeHandler(current) {
      this.isFixed = Boolean(current)
    },
    handeltouch() {
      this.isTouch = false
      document.querySelector('.cube-scroll-content').className="cube-scroll-content"
    },
    showPopup (p) {
      if (this.$refs[p]) {
        this.$refs[p].show()
      }
    },
    closePopup (p) {
      this.$refs[p].hide()
    },
    async getShopDetail () {
      // const id = this.$router.params.id
      const id = 1
      try {
        await this.$store.dispatch('shop/getShopDetail', id)
        console.log(this.shop)
      } catch (error) {
        
      }
    },
    async getShopFoods () {
      try {
        // const id = this.$router.params.id
        const id = 1
        await this.$store.dispatch('shop/getShopFoods', id)
        console.log(this.data)
      } catch (error) {
        
      }
    }
  },
  filters: {
    formatIconName (v) {
      switch (v) {
        case '减' : return '满减'
        case '特' : return '特价'
        case '新' : return '首单'
      }
    },
    formatFee (v) {
      return v.charAt(v.length - 1)
    }
  },
  components: {
    ShopHeader,
    Shopcart
  },
  created() {
    bus.$on('shop:showPopup', this.showPopup)
    this.getShopDetail()
    this.getShopFoods()
  }
}
</script>

<style lang="scss">
@import '../style/common.scss';
  .shop {
    height: 100vh;
  }
  .sticky-mt {
    margin-top: 81px;
  }
  .navFixed {
    position: absolute;
    top: 0px;
    z-index: 2;
  }
  .toucharea {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .topShow {
    transform: translateY(0px)!important;
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
  .ac-tag {
    width: 54px;
    height: 26px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 26px;
    border-radius: .266667vw;
    margin-right: 12px;
  }
  .ac-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 412px;
  }
  .ac-popup {
    padding: 40px 52px;
    background: #f5f5f5;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding-bottom: 100px;
    transition: height 2s;
    h2 {
      font-weight: 600;
      font-size: 34px;
      text-align: center;
      margin-bottom: 31px;
    }
    .ac-list {
      font-size: 22px;
      color: $titleColor;
      display: flex;
      align-items: center;
      margin-bottom: 31px;
      .ac-desc {
        white-space: normal;
        width: 700px;
      }
    }
    i {
      position: absolute;
      font-size: 48px;
      right: 20px;
      top: 20px;
      color: $fontColor;
    }
  }
  .div-popup {
    position: relative;
    width: 600px;
    padding: 53px 0px 56px;
    background: #fff;
    border-radius: 1.066667vw;
    text-align: center;
    h2 {
      color: $titleColor;
      font-size: 45px;
      font-weight: 700;
    }
    .notice-title {
      width: 152px;
      height: 28px;
      margin: 20px auto;
      background-image: linear-gradient(90deg,#fff,#333 50%,#fff);
      background-size: 100% 1px;
      background-position: 50%;
      background-repeat: no-repeat;
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      color: $fontColor;
      span {
        background: #fff;
        padding: 0 8px;
      }
    }
    .notice-cont {
      width: 500px;
      margin: 0 auto;
      font-size: 26px;
      line-height: 40px;
      text-align: left;
      color: $titleColor;
    }
    table {
      margin-top: 38px;
      width: 100%;
      td {
        height: 48px;
      }
      tr:first-child {
        font-size: 30px;
        font-weight: 600;
        color: $titleColor;
      }
      tr:last-child {
        font-size: 22px;
        font-weight: 400;
        color: $fontColor;
      }
    }
    i {
      position: absolute;
      bottom: -60px;
      color: $fontColor;
      border-radius: 50%;
      border: 1px solid $fontColor;
      font-size: 35px;
    }
  }
  .scale {
    width: 686px;
    height: 1036px;
    padding: 32px;
    background: #fff;
  }
</style>
