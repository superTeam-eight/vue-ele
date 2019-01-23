<template>
    <div>
        <div class="top">
            <router-link to="/home" class="cubeic-back"></router-link>
            <cube-input v-model="keyword"  class="input"></cube-input>
            <cube-button :inline='true' class="btn" @click="search">搜索</cube-button>
        </div>
        <div class="menu" v-if="bo">
            <p>热门搜索</p>
            <div>
                <span>胡辣汤</span>
            </div>
        </div>
        <div class="list" v-else>
            <search-list :shops='shops'></search-list>
        </div>
        
    </div>
</template>

<script>
import SearchList from '../../components/search/SearchList'
export default {
    data(){
        return{
            keyword:'',
            bo:true            
        }
    },
    methods:{
        search(){
            this.bo=false
            this.$store.dispatch('search/sousuo',this.keyword)
        }
    },
    computed:{
        shops(){
            console.log(this.$store.state.search.shops)
            return this.$store.state.search.shops
        }
    },
    components:{
        SearchList
    }
}
</script>

<style scoped lang='scss'>
    @import '../../style/common';
    div.top{
        display: flex;
        padding: 20px;
        justify-content: space-between;
        flex: 1;
        a{  
            display: block;
            font-size: 44px;
            color: $titleColor;
            margin-right: 20px;
            height: 100px;
            line-height: 100px;
        }
        .input{
            display: block;
            box-sizing: border-box;
            background: #f7f7f7;
            width: 70%;
            line-height: 80px;
            font-size: 28px;
        }
        .btn{
            display: block;
            width: 100px;
            background-color: #fff;
            color: $titleColor;
            font-size: 32px;
            font-weight: bolder;
        }
    }
    .menu{
        padding:20px;
        p{
            font-size: 32px;
            columns: $titleColor;
            font-weight: bolder;
        }
        div{
            padding: 20px;
            span{
                font-size: 28px;
                color: $fontColor;
                padding: 5px;
                margin:20px;
                border:1px solid $fontColor;
            }
        }
    }
</style>
