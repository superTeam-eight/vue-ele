<template>
    <cube-slide :data='hometypes' class="tab" :loop='false' :autoPlay='false'>
        <cube-slide-item v-for='(item,index) in hometypes' :key="index" class="tabbox">
            <router-link to="/home" class="menulink" v-for="(link,i) in item" :key="i">
                <img :src="'https://fuss10.elemecdn.com'+link.image_url" alt="">
                <span>{{link.title}}</span>
            </router-link>
        </cube-slide-item>
    </cube-slide>
    
</template>

<script>
    export default {
        data() {
            return {
                menus: [{
                    name: 1
                }, {
                    name: 2
                }],
                list: [0, 0, 0, 0, 0, 0, 0, 0]

            }
        },
        created(){
            this.hometype();
        },
        computed:{
            hometypes(){
                return this.$store.state.home.types;
            }
        },
        methods:{
            async hometype(){
                try {
                    this.$store.dispatch('home/hometype')
                } catch (error) {
                    
                }
            }
        }

    }
</script>

<style scoped lang='scss'>
    @import '../../style/common';
    .tab {
        .tabbox {
            // background-color: red;
            display: flex;
            flex-wrap: wrap;
            .menulink {
                width: 25%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 25px;

                img {
                    width: 90px;
                    height: 90px;
                    // background-color: red;
                    display: block;
                }

                span {
                    display: block;
                    font-size: 24px;
                    color: $fontColor;
                    margin-top: 10px;
                }
            }
        }

    }
</style>