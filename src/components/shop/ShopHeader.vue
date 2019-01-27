<template>
  <div>
    <header v-if="shop">
      <div class="hd">
        <div class="shop-img">
          <img :src="'//elm.cangdu.org/img/'+shop.image_path" alt="">
        </div>
      </div>
      <p class="shop-name" @click="showPopupD">
        {{shop.name}}
        <i class="cubeic-arrow"></i>
      </p>
      <p class="shop-detail">
        <span>评价{{shop.rating}}</span>
        <span>月售{{shop.recent_order_num}}单</span>
        <span>{{shop.delivery_mode.text}}约{{shop.order_lead_time}}</span>
      </p>
      <p class="activity" @click="showPopup" v-if="shop.activities.length">
        <span class="ac-tag" :style="{'background' : '#' + shop.activities[0].icon_color}">{{shop.activities[0].icon_name | formatIconName}}</span>
        <span class="ac-desc">{{shop.activities[0].description}}</span>
        <span class="ac-num">{{shop.activities.length}}个优惠
          <i class="cubeic-pulldown"></i>
        </span>
      </p>
      <p class="notice">公告：欢迎光临，用餐高峰期请提前下单，谢谢。</p>
    </header>
  </div>
</template>

<script>
import bus from '../../bus'
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState('shop',['shop']),
  },
  methods: {
    showPopup () {
      bus.$emit('shop:showPopup', 'myPopup')
    },
    showPopupD () {
      bus.$emit('shop:showPopup', 'myPopupD')
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
  }
}
</script>

<style lang="scss">
@import '../../style/common.scss';
  header {
    .hd {
      width: 750px;
      height: 200px;
      background-image: url('../../assets/283549d417057f6829e829af1a2eapng.webp');
      background-size: 100% auto;
      padding-top: 80px;
      box-sizing: border-box;
      .shop-img {
        margin: 0 auto;
        width: 150px;
        height: 150px;
        img {
          width: 150px;
          height: 150px;
          border-radius: .8vw;
          box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, .2);
        }
      }
    }
    .shop-name {
      font-size: 40px;
      font-weight: 700;
      color: $titleColor;
      margin-top: 60px;
      text-align: center;
      i {
        font-size: 20px;
        vertical-align: middle;
      }
    }
    .shop-detail {
      font-size: 22px;
      color: $fontColor;
      margin-top: 20px;
      text-align: center;
      span {
        margin-right: 20px;
      }
    }
    .activity {
      font-size: 22px;
      color: $titleColor;
      width: 600px;
      margin: 0 auto;
      margin-top: 24px;
      display: flex;
      align-items: center;
      .ac-num {
        text-align: right;
        color: $fontColor;
        white-space: nowrap;
        i {
         font-size: 35px;
         vertical-align: middle;
         margin-left: -10px;
        }
      }
    }
    .notice {
      font-size: 22px;
      color: $fontColor;
      width: 600px;
      margin: 0 auto;
      margin-top: 24px;
    }  
  }
  
</style>
