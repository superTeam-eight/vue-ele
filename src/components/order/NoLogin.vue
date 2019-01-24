<template>
    <div class="box1">
        <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt="">
        <p>登录后就可产看订单</p>
        <button>登录</button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    @import '../../style/common';
    .box1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top:20%;
        img{
            display: block;
            width: 50%;            
        }
        p{
            font-size: 30px;
            height: 100px;
            line-height: 100px;
            color: $fontColor;
        }
        button{
            background-color: none;
            outline:none;
            font-size: 38px;
            color: #fff;
            background: #56d176;
            width: 50%;
            letter-spacing: 10px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            border: none;
            
        }
    }
</style>
