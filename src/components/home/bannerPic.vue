<template>
    <cube-slide ref="slide" :data="list" class="box">
        <cube-slide-item v-for="(item, index) in list" :key="index" class="item">
            <router-link to="/home" class="linto">
                {{index}}
                <img src=""/>
            </router-link>
            
        </cube-slide-item>
    </cube-slide>
</template>

<script>
    export default {
        data(){
            return{
                list:[0,0,0,0,0]
            }
        }

    }
</script>

<style lang="scss" scoped>
    .box{
        box-sizing: border-box;
        margin: 20px;
       .item{
            .linto{
                width: 100%;
                height: 176px;
                background-color: green;
            }
        } 
    }

    
</style>