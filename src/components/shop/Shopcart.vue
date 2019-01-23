<template>
  <footer>
    <div class="tips">满35减7元，满45减12元，满60减18元</div>
    <div class="cart">
      <div class="cart-icon"></div>
      <div class="cart-info">
        <p>未选购商品</p>
        <p>另需配送费4元</p>
      </div>
      <div class="cart-count">
        ￥20起送
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../style/common.scss';
  footer {
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: 100%;
    .tips {
      height: 39px;
      border-top: 1px solid #f9e8a3;
      background: #fffad6;
      color: $titleColor;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
    }
    .cart {
      width: 100%;
      height: 96px;
      background: rgba(61,61,63,.9);
      display: flex;
      align-items: center;
      .cart-icon {
        width: 158px;
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
    }
  }
</style>
