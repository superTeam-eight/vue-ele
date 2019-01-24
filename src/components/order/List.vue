<template>
    <div class="list">
            <div class="top">
                <div class="left">
                    <img src="http://elm.cangdu.org/img/16836c78a1225354.jpg" alt="">
                </div>
                <div class="right">
                    <div class="first">
                        <div class="left">
                            <p class="title">米多面多(须水店)<i class="cubeic-arrow"></i> </p>
                            <p class="time">2019-01-12 18:13</p>
                        </div>
                        <div class="right">
                            订单已送达
                        </div>
                    </div>
                    <div class="second">
                        <p class="name">头豆牛肉拌饭+花花牛酸奶</p>
                        <p class="price">￥28.5</p>
                    </div>
                </div>
            </div>
            <div class="botton">
                <button>再来一单</button>
                <button>评价的金币</button>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import  '../../style/common';
    .list{
            background-color: #fff;
            padding: 20px 0 20px 20px;
            margin-top:20px;  
            .top{
                display: flex;
                border-bottom: 1px solid #ededed;
                .left{
                    margin-right: 20px;
                    img{
                        width: 64px;
                        height: 64px;
                    }
                }
                .right{
                    padding-right:20px; 
                    flex: 1;
                    .first{
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 1px solid #ededed;
                        .left{
                            .title{
                                font-size: 32px;
                                color:$titleColor;
                                height: 50px;
                                line-height: 50px;
                                font-weight: bold;
                                width: 320px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                            .time{
                                height: 50px;
                                line-height: 50px;
                                font-size: 24px;
                                color: $fontColor;
                            }
                        }
                        .right{
                            width:100%;
                            font-size: 26px;
                            color:$titleColor;
                            height: 50px;
                            line-height: 50px;
                            text-align: right;
                        }
                    }
                    .second{
                        display: flex;
                        justify-content: space-between;
                        padding-right: 20px;
                        .name{
                            font-size: 26px;
                            color: #656565;
                            width: 280px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            height: 80px;
                            line-height: 80px;
                        }
                        .price{
                            font-size: 28px;
                            color: $titleColor;
                            font-weight: bolder;
                            height: 80px;
                            line-height: 80px;
                        }
                    }
                }
            }  
            .botton{
                text-align: right;
                button{
                    font-size: 26px;
                    color: $themeColor;
                    padding: 10px;
                    border-radius: 10px;
                    border:2px solid $themeColor;
                    background-color: #fff;
                    outline: none;
                    margin:20px 20px 20px 0;
                }
            }
        }
</style>
