<template>
    <div class="box-top">
        <router-link tag="div" to='/find' class="left">
            <div class="title">
                <p class="tit">金币商城</p>
                <p class="desc">0元好物在这里</p>
            </div>
            <div class="img">
                <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"
                    alt="">
            </div>
        </router-link>
        <div class="right">
            <div class="top">
                <div class="title">
                    <p class="tit">推荐有奖</p>
                    <p class="desc">10元现金拿不停</p>
                </div>
                <div class="img">
                    <img src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/"
                        alt="">
                </div>
            </div>
            <div class="bottom">
                <div class="title">
                    <p class="tit">推荐有奖</p>
                    <p class="desc">10元现金拿不停</p>
                </div>
                <div class="img">
                    <img src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/"
                        alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang='scss'>
    @import '../../style/common';

    .box-top {
        height: 322px;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;

        .left {
            box-sizing: border-box;
            width: 50%;
            height: 100%;
            border-right: 1px solid #eee;
            padding: 20px;
            display: flex;
            justify-content: space-between;

            .title {

                .tit {
                    font-size: 32px;
                    color: #ff9900;
                    height: 50px;
                    line-height: 50px;
                }

                .desc {
                    font-size: 24px;
                    color: $fontColor;
                }
            }

            .img {
                align-self: flex-end;
                height: 150px;

                img {
                    width: 150px;
                    height: 150px;
                }
            }
        }

        .right {
            box-sizing: border-box;
            width: 50%;
            height: 100%;
            padding: 20px;

            .top {
                display: flex;
                height: 50%;
                justify-content: space-between;

                .title {
                    width: 70%;

                    .tit {
                        font-size: 32px;
                        color: #ff9900;
                        height: 50px;
                        line-height: 50px;
                    }

                    .desc {
                        font-size: 24px;
                        color: $fontColor;
                    }
                }

                .img {
                    width: 30%;
                    align-self: flex-end;

                    img {
                        width: 80px;
                        height: 80px;
                    }
                }
            }

            .bottom {
                display: flex;
                height: 50%;
                justify-content: space-between;

                .title {
                    width: 70%;

                    .tit {
                        font-size: 32px;
                        color: #ff9900;
                        height: 50px;
                        line-height: 50px;
                    }

                    .desc {
                        font-size: 24px;
                        color: $fontColor;
                    }
                }

                .img {
                    width: 30%;
                    align-self: flex-end;

                    img {
                        width: 80px;
                        height: 80px;
                    }
                }
            }
        }
    }
</style>