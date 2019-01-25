<template>
    <div>
        <div class="groom">
            <div class="left">
                <i class="cubeic-credit-card"></i>
                <span>推荐有奖</span>
            </div>
            <div class="right">
                <span>10元现金拿不停</span>
                <i class="cubeic-arrow"></i>
            </div>
        </div>
        <div class="center">
            <img src="../../../../assets/logo.png" alt="">
            <div class="no">没有红包</div>
            <div class="quicky">快去抢几个</div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .groom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        .left {
            font-size: 30px;
            .cubeic-credit-card{
                color: rgb(252, 123, 83);
            }
            span { 
                margin-left: 10px;
            }
            
        }
        .right {
            font-size: 20px;
        }
    }
    .center {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .no {
            font-size: 40px;
            color: #666;
            margin-bottom: 30px;
        }
        .quicky {
            font-size: 26px;
            color: #666;
        }
    }
</style>