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
        <nav  v-show="!isFixed">
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
    <cube-popup type="my-popup" ref="myPopup" position="bottom" :mask-closable="true">
      <div class="ac-popup" v-if="shop.activities.length">
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
    <cube-popup type="my-popup" ref="myPopupD" :center="true" :mask-closable="true">
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

      </div>
    </cube-popup>
  </div>
</template>

<script>
import bus from '../bus'
import { mapState } from 'vuex'
import ShopHeader from '../components/shop/ShopHeader'
import Shopcart from '../components/shop/Shopcart'
import goods from '../../test.json'
export default {
  data() {
    return {
      isFixed: false,
      data:goods,
      current:goods[0].name,
      isTouch: true,
      shop: {
        name: "肯德基",
        address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
        id: 1,
        latitude: 31.38098,
        longitude: 121.50146,
        location: [
          121.50146,
          31.38098
        ],
        phone: "1232313124324",
        category: "快餐便当/简餐",
        supports: [
          {
            description: "已加入“外卖保”计划，食品安全有保障",
            icon_color: "999999",
            icon_name: "保",
            id: 7,
            name: "外卖保",
            _id: "591bec73c2bbc84a6328a1e5"
          },
          {
            description: "准时必达，超时秒赔",
            icon_color: "57A9FF",
            icon_name: "准",
            id: 9,
            name: "准时达",
            _id: "591bec73c2bbc84a6328a1e4"
          },
          {
            description: "该商家支持开发票，请在下单时填写好发票抬头",
            icon_color: "999999",
            icon_name: "票",
            id: 4,
            name: "开发票",
            _id: "591bec73c2bbc84a6328a1e3"
          }
        ],
        status: 0,
        recent_order_num: 615,
        rating_count: 389,
        rating: 1.6,
        promotion_info: "他依然有人有人有人有人有人",
        piecewise_agent_fee: {
          tips: "配送费约¥5"
        },
        opening_hours: [
          "8:30/20:30"
        ],
        license: {
          catering_service_license_image: "",
          business_license_image: ""
        },
        is_new: true,
        is_premium: true,
        image_path: "/img/shop/15c1513a00615.jpg",
        identification: {
          registered_number: "",
          registered_address: "",
          operation_period: "",
          licenses_scope: "",
          licenses_number: "",
          licenses_date: "",
          legal_person: "",
          identificate_date: null,
          identificate_agency: "",
          company_name: ""
        },
        float_minimum_order_amount: 20,
        float_delivery_fee: 5,
        distance: "19.5公里",
        order_lead_time: "40分钟",
        description: "好吃的",
        delivery_mode: {
          color: "57A9FF",
          id: 1,
          is_solid: true,
          text: "蜂鸟专送"
        },
        activities: [
          {
            icon_name: "减",
            name: "满减优惠",
            description: "满30减5，满60减8",
            icon_color: "f07373",
            id: 1,
            _id: "591bec73c2bbc84a6328a1e7"
          },
          {
            icon_name: "特",
            name: "优惠大酬宾",
            description: "是对冯绍峰的上市房地产",
            icon_color: "EDC123",
            id: 2,
            _id: "591bec73c2bbc84a6328a1e6"
          }
        ],
      }
    }
  },
  computed: {
    // ...mapState('shop',['shop'])
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
      this.$refs[p].show()
    },
    closePopup (p) {
      this.$refs[p].hide()
    },
    ccc () {
      console.log(111)
    },
    async getShopDetail() {
      // const id = this.$router.params.id
      const id = 1
      try {
        await this.$store.dispatch('shop/getShopDetail', id)
        console.log(this.shop)
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
  },
  mounted() {
    document.querySelector('.cube-scroll-content').className="cube-scroll-content topShow"
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
