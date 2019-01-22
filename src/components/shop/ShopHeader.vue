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
      <cube-popup type="my-popup" ref="myPopup" position="bottom" :mask-closable="true">
        <div class="ac-popup">
          <h2>优惠活动</h2>
          <div class="ac-cont">
            <p v-for="item in shop.activities" :key="item.id" class="ac-list">
              <span class="ac-tag" :style="{'background' : '#' + item.icon_color}">{{item.icon_name | formatIconName}}</span>
              <span class="ac-desc">{{item.description}}</span>
            </p>
          </div>
          <i class="cubeic-close" @click="closePopup"></i>
        </div>
      </cube-popup>
      <cube-popup type="my-popup" ref="myPopupD" position="center" :mask-closable="true">
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
          <i class="cubeic-close" @click="closePopupD"></i>
        </div>
      </cube-popup>
    </header>
    
  </div>
</template>

<script>
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
      this.$refs.myPopup.show()
    },
    showPopupD () {
      this.$refs.myPopupD.show()
    },
    closePopup () {
      this.$refs.myPopup.hide()
    },
    closePopupD () {
      this.$refs.myPopupD.hide()
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

<style lang="scss" scoped>
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
    
  }
  
</style>
