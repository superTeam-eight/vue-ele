<template>
    <div>
        <div class="header">
            <router-link to="/profile"><i class="cubeic-back"></i></router-link>
            <span class="preferential">我的优惠</span>
            <span class="convert">兑换红包</span>
        </div>
        <div class="tab">
            <div class="tab-nav">
                <router-link to="/benefit/hongbao" tag="div" class="hot-shop">红包</router-link>
                <router-link to="/benefit/coupon" tag="div" class="hot-shop">店铺红包</router-link>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
     data () {
        return {
           
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../style/common.scss";
    .header {
        width: 750px;
        box-sizing: border-box;
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $themeColor;
        color: #fff;
        a {
            color: #fff;
        }
        .preferential {
            position: absolute;
            left: 50%;
            margin-left: -88px;
            font-size: 44px;
            font-weight: bold;
        }
        .convert {
            font-size: 28px;
        }
    }
    .tab {
        .tab-nav {
            display: flex;
            height: 80px;
            background: $themeColor;
            color: #fff;
            font-size: 30px;
            justify-content: space-around;
            align-items: center;
            div {
                padding-bottom: 5px;
                border-bottom: 3px solid transparent;
            }
            .active {
                border-bottom: 3px solid #fff;
            }
        }
    }
</style>
