<template>
    <div class="box">
        <list v-if="logined"></list>
        <no-login v-else></no-login>
    </div>
</template>

<script>
import List from '../../components/order/List'
import NoLogin from '../../components/order/NoLogin'
export default {
    data(){
        return{
            logined:false
        }
    },
    components:{
        List,NoLogin
    }
}
</script>
<style lang="scss" scoped>
    @import  '../../style/common';
    .box{
        // background-color: #eee;
    }

</style>
