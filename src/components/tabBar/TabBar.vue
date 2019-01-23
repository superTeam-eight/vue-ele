<template>
    <div class="nav">
        <router-link to="/home">
            <i class="cubeic-home"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/find">
            <i class="cubeic-search"></i>
            <span>发现</span>
        </router-link>
        <router-link to="/order">
            <i class="cubeic-message"></i>
            <span>订单</span>
        </router-link>
        <router-link to="/profile">
            <i class="cubeic-person"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return{}
        }
    }
</script>

<style scoped lang='scss'>
    @import '../../style/common';
    .nav{
        width: 100%;
        height: 100px;
        position: fixed;
        bottom:0;
        left: 0;
        border-top:1px solid #e9e9e9;
        background-color: #fff;
        display: flex;
        .active{
                color: $themeColor;
                i,span{
                    color: $themeColor;
                }
            }
        a{
            display: block;
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i{  
                display: flex;
                color: $fontColor;
                font-size: 50px;
            }
            span{
                display: flex;
                color: $fontColor;
                font-size: 24px;
            }
        }
    }
</style>