<template>
  <div>
    <header>
      <div class="hd">
        <div class="shop-img">
          <img src="" alt="">
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
      <p class="activity" @click="showPopup">
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
export default {
  data () {
    return {
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
        background: red;
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
