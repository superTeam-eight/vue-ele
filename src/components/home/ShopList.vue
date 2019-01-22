<template>
    <div>
        <div class="head">
            <p class="active">综合排序 <i class="cubeic-pulldown"></i></p>
            <p>距离最近</p>
            <p>品质联盟</p>
            <p>筛选 <i class="cubeic-alert"></i></p>
        </div>
        <div class="mainlist">
            <div class="image">
                <router-link to="/home">
                    <img src="" alt="" >
                </router-link>
            </div>
            <div class="right">
                <router-link to="/home"  class="link">
                    <div class="first">
                        <p class="title">
                            皇堡(p盘槐里店)
                        </p>
                        <p class="more"><i class="cubeic-more"></i></p>
                    </div>
                    <div class='second'>
                        <!-- 评分 -->
                        <p class="rate">
                            <cube-rate v-model="rate"></cube-rate> 
                            <span>5</span>
                        </p>
                        <p class="sendtype">蜂鸟专送</p>
                    </div>
                    <div class="third">
                        <p>
                            <span>$20起送</span>
                            <span>|免配送费</span>
                        </p>
                        <p>
                            <span>2.10km</span> 
                            <span>|42分钟</span> 
                        </p>
                    </div>
                    <div class="fourth">
                         <span>汉堡</span>
                         <span>品质联盟</span>
                    </div>
                    
                </router-link>
                <div class="activity" :class="{miniactivity:mini}">
                    <div class='first'>
                        <p>第一个活动</p>
                        <p @click='changeAcitivety'>4个活动 <i class="cubeic-pulldown"></i></p>
                    </div>
                    <p>第二个活动</p>
                    <p>第二个活动</p>
                    <p>第二个活动</p>
                    <p>第二个活动</p>
                    <p>第二个活动</p>
                    <p>第二个活动</p>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    data(){
        return {
            rate:4.7,
            mini:true
        }
    },
    methods:{
        changeAcitivety(){
            this.mini=!this.mini;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .head{
        box-sizing: border-box;
        display: flex;
        border-bottom:1px solid #ddd;
        // justify-content: space-between;
        // margin:20px;
        padding:20px;
        font-size: 28px;
        color:$fontColor;
        p{
            width: 25%;
            text-align: center;
        }
        .active{
            font-weight: bolder;
            color: $themeColor;
        }
    }
    .mainlist{
        display: flex;
        
        // justify-content: space-between;
        padding: 30px 20px;
        border-bottom:1px solid #ddd;
        .image{
            width: 130px;
            height: 130px;
            background-color: red;
            margin-right: 20px;
            img{
                width: 130px;
                height: 130px;
                background-color: red;
            }
        }
        .right{
            flex:1;
            .first{
                display: flex;
                justify-content: space-between;
                .title{
                    font-size: 30px;
                    color: $titleColor;
                    font-weight: bolder;
                }
            }
            .second{
                display: flex;
                justify-content: space-between;
                .rate{
                    font-size: 22px;
                    color: $fontColor;
                    line-height: 32px;
                    span{
                        font-size: 28px;
                        color: $fontColor;
                        font-weight: bolder;
                        padding: 0 10px;
                    }
                }
                .sendtype{
                    font-size: 22px;
                    color: #fff;
                    background-color: $themeColor;
                    border-radius: 5px;
                    line-height: 30px;
                }
            }
            .third{
                display: flex;
                justify-content: space-between;
                font-size: 22px;
                color: $fontColor;
                p{
                    height: 45px;
                    line-height: 45px;
                }
            }
            .fourth{
                border-bottom: 1px dotted #000;
                span{
                    font-size: 18px;
                    color: $fontColor;
                    padding: 10px 20px;
                    border:1px solid #999;
                    // border-radius: 5px;
                    margin-right:10px;
                }
            }
            .miniactivity{
                overflow: hidden;
                height: 80px;
            }
            .activity{
                margin-top:40px;
                .first{
                    display: flex;

                }
                p{
                    font-size: 20px;
                    color: $fontColor;
                    height: 40px;
                    line-height: 40px;
                }
            }
        }
    }

</style>
