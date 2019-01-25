<template>
    <div>
        <div class="vip-header">
            <router-link to="/profile" class="user-header">
                <i class="cubeic-back"></i>
                <span class="center">会员中心</span>
            </router-link>
        </div>
        <div class="container">
            <div class="account">
                <span>为账户156666666666购买会员</span>
            </div>
            <div class="power">
                <span class="left">会员特权</span>
                <span class="right">
                    会员说明
                    <i class="cubeic-arrow"></i>
                </span>
            </div>
            <div class="reduce">
                <div class="money">
                    <img src="../../../../assets/logo.png" alt="">
                    <div>
                        <div class="title">
                            减免配送费
                        </div>
                        <p class="desc">
                            每月减免30单，每日可减免3单，每单最高减4元
                        </p>
                        <p class="desc">
                            蜂鸟专送专享
                        </p>
                    </div>
                </div>
                <div class="money">
                    <img src="../../../../assets/logo.png" alt="">
                    <div>
                        <div class="title">
                            减免配送费
                        </div>
                        <p class="desc">
                            每月减免30单，每日可减免3单，每单最高减4元
                        </p>
                        <p class="desc">
                            蜂鸟专送专享
                        </p>
                    </div>
                </div>
            </div>
            <div class="pass">
                <span>开通会员</span>
            </div>
            <div class="buy">
                <div>
                    <span>一个月</span>
                    <span class="price">¥20</span>
                </div>
                <cube-button :outline="true" class="vip-buy">购买</cube-button>
            </div>
            <div class="power">
                <span class="left">兑换会员</span>
                <span class="right">
                    使用卡号卡密
                    <i class="cubeic-arrow"></i>
                </span>
            </div>
            <div class="power">
                <span class="left">购买记录</span>
                <span class="right">
                    开发票
                    <i class="cubeic-arrow"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import '../../../../style/common.scss';

    .vip-header {
        width: 750px;
        box-sizing: border-box;
        padding: 30px;
        background: $themeColor;

        i {
            color: #fff;
        }

        .center {
            font-size: 42px;
            font-weight: bold;
            position: absolute;
            left: 50%;
            margin-left: -88px;
            color: #fff;
        }
    }
    .container {
        width: 750px;
        box-sizing: border-box;
        padding: 30px;
        .account {
            span {
                font-size: 30px;
            }
        }
        .power {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 0;
            .left {
                font-size: 30px;
                color: #666;
            }
            .right {
                font-size: 24px;
                color: #999;
            }
        }
        .money {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 0;
            img {
                width: 120px;
                height: 120px;
            }
            .title {
                font-size: 34px;
                color: #333;
                padding: 20px 0;
            }
            .desc {
                font-size: 18px;
                color: #999;
            }
        }
        .pass {
            padding: 50px 0;
            span {
                font-size: 36px;
            }
        }
        .buy {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                font-size: 30px;
            }
            .price {
                font-size: 34px;
                color: #f60;
            }
            .vip-buy {
                width: 20%;
                color: #f60;
                border-radius: 10px;
            }
        }
    }
</style>