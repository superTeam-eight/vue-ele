<template>
    <div class="nav">
        <p @click="changeIndex(home)">
            <i class="cubeic-home" :class="index=='home'?'active':''"></i>
            <span :class="index=='home'?'active':''">首页</span>
        </p>
        <p @click="changeIndex(find)">
            <i class="cubeic-search" :class="index=='find'?'active':''"></i>
            <span :class="index=='find'?'active':''">发现</span>
        </p>
        <p @click="changeIndex(order)">
            <i class="cubeic-message" :class="index=='order'?'active':''"></i>
            <span :class="index=='order'?'active':''">订单</span>
        </p>
        <p @click="changeIndex(profile)">
            <i class="cubeic-person" :class="index=='profile'?'active':''"></i>
            <span :class="index=='profile'?'active':''">我的</span>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index:'home'
            }
        },
        methods:{
            changeIndex(data){
                this.index=data
            }
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
        p{
            .active{
                color: $themeColor;
            }
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