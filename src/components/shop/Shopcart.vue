<template>
  <footer>
    <div class="tips">满35减7元，满45减12元，满60减18元</div>
    <div class="cart-cont" v-show="isShowCart">
      <div class="hd">
        <span>已选商品</span>
        <span @click="CLEART_CART($route.query.id);isShowCart = false">
          <i class="cubeic-delete"></i>
          清空
        </span>
      </div>
      <div class="item" v-for="food in carts" :key="food.id">
        <div class="text">
          <p class="name">{{food.name}}</p>
          <p v-if="food.specs!=='默认'" class="specs">{{food.specs}}</p>
        </div>
        <span class="price">
          <span>￥</span>
          <span>{{food.price * food.num}}</span>
        </span>
        <div class="btn-box">
          <i 
            class="cubeic-remove remove-button"
            @click="REMOVE_CART({shop_id:food.restaurant_id,category_id:food.category_id,item_id:food.item_id,food_id:food.food_id})"></i>
          <span class="num">{{food.num}}</span>
          <i class="cubeic-add add-button" @click="ADD_CART({shop_id:food.restaurant_id,category_id:food.category_id,item_id:food.item_id,food_id:food.food_id})"></i>
        </div>
      </div>
    </div>
    <div class="cart">
      <div class="cart-icon">
        <div :class="'ic-wrap ' + (carts.length?'active':'')" @click="isShowCart=!isShowCart">
          <i class="cubeic-mall"></i>
          <span class="t-num" v-if="totalN">{{totalN}}</span>
        </div>
      </div>
      <div class="cart-info">
        <p v-if="carts.length" class="tPrice">￥{{totalP}}</p>
        <p v-else>未选购商品</p>
        <p>另需配送费4元</p>
      </div>
      <div :class="'cart-count '+(totalP>=20?'count-active':'')">
        {{totalP | tPriceFormat}}
      </div>
    </div>
    <div class="mask" v-show="isShowCart" @click="isShowCart = false"></div>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data (){
    return {
      totalP: NaN,
      totalN: NaN,
      isShowCart: false
    }
  },
  computed: {
    carts() {
      const cartgoods = this.$store.state.shop.cartgoods
      const shop_id = this.$route.query.id
      let arr = []
      let p = 0
      let n = 0
      for(let x in cartgoods[shop_id]) {
        for(let y in cartgoods[shop_id][x]) {
          for(let z in cartgoods[shop_id][x][y]) {
            arr.push({...cartgoods[shop_id][x][y][z], restaurant_id: shop_id, category_id: x * 1, item_id: y * 1, food_id: z * 1})
            p += cartgoods[shop_id][x][y][z].price * cartgoods[shop_id][x][y][z].num
            n += cartgoods[shop_id][x][y][z].num
          }
        }
      }
      this.totalP = p
      this.totalN = n
      return arr
    }
  },
  methods: {
    ...mapMutations('shop', ['ADD_CART','REMOVE_CART','CLEART_CART'])
  },
  filters: {
    tPriceFormat (v) {
      if(v) {
        if(v >=20 ) {
          return '结算'
        } else {
          return '还差￥' + (20 - v) + '起送'
        }
      } else {
        return '20￥起送'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../style/common.scss';
  footer {
    position: fixed;
    bottom: 0;
    z-index: 5;
    width: 100%;
    .mask {
      width: 750px;
      height: 100vh;
      position: absolute;
      bottom: 0;
      z-index: -1;
      background: rgba(0, 0, 0, 0.3);
    }
    .tips {
      height: 39px;
      border-top: 1px solid #f9e8a3;
      background: #fffad6;
      color: $titleColor;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
      // z-index: 3;
    }
    .cart-cont {
      background: #fff;
      .hd {
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        height: 79px;
        line-height: 79px;
        font-size: 32px;
        background: #eceff1;
        color: $fontColor;
        border-bottom: 1px solid #ddd;
        span:last-child {
          font-size: 28px;
        }
      }
      .item {
        border-bottom: 1px solid #eee;
        width: 700px;
        height: 79px;
        padding: 15px 15px 15px 0;
        margin-left: 25px;
        display: flex;
        &:last-child {
          border-bottom: none;
        }
        .text {
          width: 350px;
          .name {
            font-size: 32px;
            color: $titleColor;
            margin-top: 25px;
          }
          .specs {
            font-size: 20px;
            color: $fontColor;
          }
        }
        .btn-box {
          // position: absolute;
          // right: 5px;
          // bottom: 5px;
          display: flex;
          align-items: center;
          i {
            font-size: 50px;
            color: $themeColor;
          }
          .disabled {
            color: lighten($themeColor, 20%)
          }
          span.add-button {
            font-size: 26px;
            color: #fff;
            background: $themeColor;
            padding: 5px 10px;
            border-radius: 9.3px;
          }
          .num {
            font-size: 28px;
            width: 52px;
            text-align: center;
            color: rgba(0, 0, 0, 0.87)
          }
        }
        .price {
          flex: 1;
          text-align: right;
          margin-right: 40px;
          color: rgb(255,83,97);
          line-height: 79px;
          span:first-child {
            font-size: 20px;
            margin-right: 2px;
          }
          span:last-child {
            font-size: 32px;
            font-weight: 700;
          }
        }
      }
    }
    .cart {
      width: 100%;
      height: 96px;
      background: rgba(61,61,63,.9);
      display: flex;
      align-items: center;
      .cart-icon {
        position: relative;
        width: 158px;
        .ic-wrap {
          width: 80px;
          height: 80px;
          position: absolute;
          top: -70px;
          left: 35px;
          background: #363636;
          color: #5e5e63;
          border-radius: 50%;
          border: 8px solid  rgb(61,61,63);
          display: flex;
          i {
            font-size: 50px;
            margin: auto;
          }
          .t-num {
            position: absolute;
            right: -5px;
            top: -15px;
            padding: 4px 10px;
            // width: 7px;
            // height: 12px;
            border-radius: 45%;
            background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
            color: #fff;
            font-size: 20px;
          }
        }
        .active {
          background: $themeColor;
          color: #fff;
        }
      }
      .cart-info {
        width: 382px;
        height: 66px;
        color: #999;
        p:first-child {
          height: 42px;
          color: #999;
          font-size: 25.2px;
          line-height: normal;
        }
        p:last-child {
          height: 24px;
          font-size: 20px;
          line-height: 24px;
        }
        p.tPrice {
          color: #fff;
          font-size: 36px;
        }
      }
      .cart-count {
        width: 210px;
        background: #535356;
        font-size: 30px;
        color: #fff;
        font-weight: 700;
        text-align: center;
        height: 96px;
        line-height: 96px;
      }
      .count-active {
        background: #38ca73;
      }
    }
  }
</style>
