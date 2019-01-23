<template>
    <div>
        <div class='topsearch'>
            <p class="address">
                <i class="cubeic-location"></i>
                <span>正在定位中……</span>
                <i class="cubeic-pulldown"></i>
            </p>
            <router-link to="/search" class="search">
                <i class="cubeic-search"></i>
                <span>搜索饿了么商家、商品名称</span>
            </router-link>
        </div>
        <!-- leibiao -->
        <slide-menu></slide-menu>
        <!-- 主页广告 -->
        <page-ad></page-ad>
        <!-- 轮播图 -->
        <banner-pic></banner-pic>
        <!-- 商铺列表 -->
        <shop-list></shop-list>
    </div>

</template>

<script>
    import slideMenu from '../../components/home/SlideMenu'
    import pageAd from '../../components/home/PageAd'
    import bannerPic from '../../components/home/BannerPic'
    import shopList from '../../components/home/ShopList'
    export default {
        components: {
            slideMenu,
            pageAd,
            bannerPic,
            shopList
        },
        created(){
            // 获取geohash
            if(this.$store.state.geohash){
                //state中有geohsah 设置localStorage,并且diapatch
                console.log(1)
                localStorage.setItem('geohsah',this.$route.query.geohash)
                this.$store.dispatch('home/getshopslist',this.$store.state.geohash)
            }else{
                console.log(2)
                if(localStorage.getItem('geohash')){
                    console.log(3)
                    // ￥route中没有geohash ，判断本地有没有，有没就把这个值赋予vuex
                    const geohash=localStorage.getItem('geohash');
                    this.$store.state.geohash=geohash;
                    console.log(geohash)
                    this.$store.dispatch('home/getshopslist',this.$store.state.geohash)
                    
                }else{
                    if(this.$route.query.geohash){
                         localStorage.setItem('geohash',this.$route.query.geohash)
                         this.$store.state.geohash=this.$route.query.geohash;
                         this.$store.dispatch('home/getshopslist',this.$store.state.geohash)
                    }else{
                        // 两个都没有则进行跳转
                        // this.$router.push('/') //此处写跳转到的地址页面
                    }
                    
                }
            }
            // console.log(this.$route.query.geohash)
            // this.$store.dispatch('home/getshopslist',this.$route.query.geohash)
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
            display: block;
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