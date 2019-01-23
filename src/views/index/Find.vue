<template>
    <div class="box">
        <top-menu></top-menu>
    </div>
</template>

<script>
import TopMenu from '../../components/find/TopMenu'
export default {
    components:{
        TopMenu
    }

}
</script>

<style lang='scss' scoped>
    @import '../../style/common';
    .box{
        background-color: #f5f5f5;
        
    }

</style>
