<template>
    <div>
        <div class='topsearch'>
            <p class="address">
                <i class="cubeic-location"></i>
                <span>河南省电子商务产业园三号楼</span>
                <i class="cubeic-pulldown"></i>
            </p>
            <div class="search">
                <i class="cubeic-search"></i>
                <span>搜索饿了么商家、商品名称</span>
            </div>
        </div>
        <!-- leibiao -->
        <slide-menu></slide-menu>
        <!-- 主页广告 -->
        <page-ad></page-ad>
        <!-- 轮播图 -->
        <banner-pic></banner-pic>

    </div>

</template>

<script>
    import slideMenu from '../../components/home/slideMenu'
    import pageAd from '../../components/home/pageAd'
    import bannerPic from '../../components/home/bannerPic'
    export default {
        components:{
            slideMenu,
            pageAd,bannerPic
        }

    }
</script>

<style scoped lang='scss'>
   
    @import '../../style/common';

    .topsearch {
        box-sizing: border-box;
        width: 750px;
        height: 191px;
        background-color: $themeColor;
        padding: 20px 28px 0 28px;

        .address {
            i {
                color: #fff;
                font-size: 34px;
            }

            span {
                color: #fff;
                font-size: 34px;
                font-weight: bolder;
                display: inline-block;
                width: 340px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .search {
            height: 72px;
            background-color: #fff;
            border-radius: 3px;
            margin-top: 30px;
            text-align: center;

            // line-height: 72px;
            i,
            span {
                font-size: 26px;
                color: #999;
                padding: 0 10px;
            }
        }
    }

    
</style>