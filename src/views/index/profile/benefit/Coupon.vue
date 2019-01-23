<template>
    <div>
        <ul class="list">
            <li class="item">
                <img src="../../../../assets/logo.png" alt="">
                <div class="coupon-info">
                    <div class="title">品质联盟专享红包</div>
                    <ul>
                        <li>2019-01-27至2019-02-02</li>
                        <li>满35元可用</li>
                        <li>仅限品质联盟可用</li>
                        <li>仅限在线支付</li>
                        <li>仅限手机号为16666666666</li>
                    </ul>
                </div>
                <cube-button class="coupon-btn">进店使用</cube-button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .list {
        width: 750px;
        padding: 30px;
        box-sizing: border-box;
        .item {
            display: flex;
            justify-content: space-around;
            align-items: center;
            img {
                width: 120px;
                height: 120px;
            }
            .coupon-info {
                .title {
                    font-size: 34px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    color: #333;
                }
                ul {
                    li {
                        font-size: 20px;
                        color: #999;
                    }
                }
            }
            .coupon-btn {
                width: 20%;
            }
        }
    }
</style>
