<template>
    <div>
        <div class="head">
            <p class="active" @click="showSlect">综合排序 <i class="cubeic-pulldown"></i></p>
            <p @click="changeActivityType(5)">距离最近</p>
            <p>品质联盟</p>
            <p>筛选 <i class="cubeic-alert"></i></p>
            <div class="select" v-show="showSlectCon">
                <p @click="changeActivityType(1)">起送价</p>
                <p @click="changeActivityType(2)">配送速度</p>
                <p @click="changeActivityType(3)">评分</p>
                <p @click="changeActivityType(4)">智能排序</p>
                <p @click="changeActivityType(5)">距离最近</p>
                <p @click="changeActivityType(6)">销量最高</p>
            </div>
        </div>
        <div class="mainlist" v-for="(shop,index) in shops" :key="index">
            <div class="image">
                <router-link to="/home">
                    <img :src="'https://elm.cangdu.org/img/'+shop.image_path" alt="" >
                </router-link>
            </div>
            <div class="right">
                <router-link to="/home"  class="link">
                    <div class="first">
                        <p class="title">
                            {{shop.name}}
                        </p>
                        <p class="more"><i class="cubeic-more"></i></p>
                    </div>
                    <div class='second'>
                        <!-- 评分 -->
                        <p class="rate">
                            <cube-rate v-model="shop.rating" :disabled="true"></cube-rate> 
                            <span>{{shop.rating}}</span>
                        </p>
                        <!-- <p class="sendtype" v-if='shop.delivery_mode.text.length'>{{shop.delivery_mode.text}}</p> -->
                    </div>
                    <div class="third">
                        <p>
                            <span>￥{{shop.float_minimum_order_amount}}起送</span>
                            <span>|{{shop.piecewise_agent_fee.tips}}</span>
                        </p>
                        <p>
                            <span>{{shop.distance}}</span> 
                            <span>|{{shop.order_lead_time}}</span> 
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
    props:{
        shops:Array
    },
    data(){
        return {
            mini:true,
            showSlectCon:false,
            page:{
                order_by:''
            }
        }
    },
    methods:{
        changeAcitivety(){
            this.mini=!this.mini;
        },
        showSlect(){
            this.showSlectCon=!this.showSlectCon
        },
        changeActivityType(data){
            this.page.order_by=data;
            this.showSlectCon=false;
            this.$store.dispatch('home/changeActivityType',this.page)
            
        }
    },
    computed:{
        // shoplist(){
        //     this.shoplists=this.$store.state.home.shoplist
        // }
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
        position: relative;
        .select{
            position:absolute;
            top:69px;
            left:0;
            width: 100%;
            // height: 200px;
            background-color: #fff;
            z-index: 9999;
            margin-top: 20px;
            padding: 0 30px;
            p{
                font-size: 28px;
                color: $fontColor;
                height: 58px;
                line-height: 28px;
                text-align: left;
            }
        }
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
                    overflow: hidden;
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
