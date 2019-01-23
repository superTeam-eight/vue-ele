<template>
  <div class="profile">
      <router-link to="/info" class="profile-header" tag="div">
        <img src="../../assets/logo.png" alt="">  
        <div class="center">
          <div>
            <div>
            <span class="login">登录/注册</span>
            </div>
            <div class="login-bottom">
              <i class="cubeic-mobile-phone"></i>
              <span class="more">登录后享受更多特权</span>
            </div>
          </div>
          <i class="cubeic-arrow"></i>
        </div> 
      </router-link>
      <div class="middle">
        <router-link to="/benefit/hongbao" class="benefit bene">
          <i class="cubeic-red-packet"></i>
          <p class="text">红包</p>
        </router-link>
        <a href="https://activity.m.duiba.com.cn/chome/index?from=login&spm=14695.1.1.1" class="benefit">
          <i class="cubeic-safe-pay"></i>
          <p class="text">金币</p>
        </a>
      </div>
      <router-link to="" class="common">
        <i class="cubeic-location"></i>
        <div class="my-address">
          <span>我的地址</span>
          <i class="cubeic-arrow"></i>
        </div>
      </router-link>
      <a href="https://activity.m.duiba.com.cn/chome/index?from=login&spm=14695.1.1.1" class="common">
        <i class="cubeic-credit-card"></i>
        <div class="my-address">
          <span>金币商城</span>
          <i class="cubeic-arrow"></i>
        </div>
      </a>
      <router-link to="/vipcenter" class="common">
        <i class="cubeic-vip"></i>
        <div class="my-address">
          <span>会员中心</span>
          <i class="cubeic-arrow"></i>
        </div>
      </router-link>
      <router-link to="/serve" class="common">
        <i class="cubeic-message"></i>
        <div class="my-address">
          <span>服务中心</span>
          <i class="cubeic-arrow"></i>
        </div>
      </router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '../../style/common.scss';
  .profile {
    background: #f5f5f5;
  }
  .profile-header {
    width: 750px;
    height: 220px;
    display: flex;
    align-items: center;
    background: $themeColor;
    color: #fff;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: 0 30px;
    }
    .center {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .login {
        font-size: 45px;
        font-weight: bold;
      }
      .more {
        font-size: 30px;
      }
      .login-bottom {
        display: flex;
        align-items: center;
        padding-top: 20px;
      }
    }
  }
  .middle {
    display: flex;
    .bene {
      border-right: 1px solid #eee;
    }
    .benefit {
      width: 50%;
      height: 165px;
      border-bottom: 1px solid #eee;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .cubeic-safe-pay, .cubeic-red-packet{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 26px;
        color: #fff;
        border-radius: 50%;
      }
      .cubeic-red-packet {
         background: #ff5f3e;
      }
      .cubeic-safe-pay {
        background: #6ac20b;
      }
      .text{
        height: 30px;
        font-size: 26px;
        font-weight: bold;
        padding-top: 15px;
      }
    }
  }
  .common {
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding: 25px 25px 25px 30px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    .my-address {
      width: 100%;
      color: $titleColor;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 30px;
        margin-left: 20px;
      }
    }
    .cubeic-location, .cubeic-phone, .cubeic-message{
      color: $themeColor;
      font-size: 34px;
    }
    .cubeic-credit-card {
      color: yellowgreen;
      font-size: 34px;
    }
    .cubeic-vip{
      color: rgb(255, 198, 54);
      font-size: 34px;
    }
  }
</style>
