<template>
<div>
  <cube-scroll-nav-panel
    v-for="item in data"
    :key="item.id"
    :label="item.name">
    <div class="foods-title">
      <span>{{item.name}}</span>
      <span>{{item.description}}</span>
    </div>
    <ul>
      <li v-for="food in item.foods" :key="food._id" class="food-detail">
        <img :src="'//elm.cangdu.org/img/'+food.image_path" alt="">
        <div class="food-desc">
          <p class="food-name">{{food.name}}</p>
          <p class="description">{{food.description}}</p>
          <p class="description">
            <span>月售{{food.month_sales}}</span>
            <span>好评率{{food.satisfy_rate}}%</span>
          </p>
          <p class="price">
            <span>￥</span>
            <span>{{food.specfoods[0].price}}</span>
          </p>
          <i class="cubeic-add add-button" v-if="!food.specifications[0]"></i>
          <span class="add-button" v-else @click="showSpec">选规格</span>
        </div>
      </li>
    </ul>
  </cube-scroll-nav-panel>
</div>
</template>

<script>
import goods from '../../../test.json'
import bus from '../../bus'

console.log(goods)

// import { mapState } from 'vuex'

export default {
  data () {
    return {
      data:goods
    }
  },
  computed: {
 
  },
  methods: {
    showSpec () {
      bus.$emit('shop:showPopup', 'myPopupS')
    }
  },
  components: {

  }
  
}
</script>

<style lang="scss">
@import '../../style/common.scss';

  .cube-scroll-nav-panel-title {
    display: none;
  }
  .cube-scroll-nav-bar-item {
    width: 124px;
    height: 28px;
    line-height: 28px;
    padding: 35px 15px;
    background: #f8f8f8;
    color: $titleColor;
    font-size: 24px;
  }
  .cube-scroll-nav-bar-item_active {
    color: $fontColor;
    background: #fff;
  }
  .foods-title {
    margin-left: 20px;
    height: 28px;
    line-height: 28px;
    padding: 15px 60px 15px 0;
    span:first-child {
      font-size: 24px;
      font-weight: 700;
      margin-right: 10px;
      color: $titleColor;
    }
    span:last-child {
      font-size: 20px;
      color: $fontColor;
      line-height: 20px;
    }
  }
  .food-detail {
    padding: 20px 0px 20px 20px;
    height: 190px;
    display: flex;
    img {
      width: 190px;
      height: 190px;
      margin-right: 20px;
    }
    .food-desc {
      color: $fontColor;
      font-size: 20px;
      position: relative;
      .add-button {
        position: absolute;
        right: 5px;
        bottom: 5px;
      }
      i.add-button {
        font-size: 50px;
        color: $themeColor;
      }
      span.add-button {
        font-size: 26px;
        color: #fff;
        background: $themeColor;
        padding: 5px 10px;
        border-radius: 9.3px;
      }
      .food-name {
        width: 300px;
        height: 36px;
        line-height: 36px;
        color: $titleColor;
        font-weight: 700;
        font-size: 30px;
      }
      .description {
        width: 320px;
        height: 24px;
        line-height: 24px;
        margin: 10px 0;
        span {
          margin-right: 16px;
        }
      }
      .price {
        color: rgb(255,83,97);
        margin-top: 40px;
        span:first-child {
          font-size: 28px;
          margin-right: 2px;
        }
        span:last-child {
          font-size: 36px;
        }
      }
    }
  }
  
</style>
