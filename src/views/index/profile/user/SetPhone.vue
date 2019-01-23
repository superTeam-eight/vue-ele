<template>
    <div>
        <div class="header">
            <router-link to="/info"><i class="cubeic-back"></i></router-link>
            <router-link to="/profile"><i class="cubeic-close"></i></router-link>
            <span>设置手机号</span>
        </div>
        <div class="phone">
            <span class="phone-num">手机号</span>
            <span class="phone-ipt">159****1564</span>
            <cube-button class="phone-btn">获取验证码</cube-button>
        </div>
        <div class="phone ident">
            <span class="phone-num">验证码</span>
            <cube-input class="phone-ipt ipt" v-model="value" :type="type"></cube-input>
        </div>
        <cube-button class="ident-btn" :class="{ active: !disabled }" :disabled="disabled">
            验证后绑定新的手机号
        </cube-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: '',
            type: 'number'
        }
    },
    computed: {
        disabled () {
            if ( 5 < this.value.length) {
                return false
            } else {
                return true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../../style/common.scss";
    .header {
        width: 750px;
        font-size: 40px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 20px;
        margin-bottom: 20px;
        i {
            padding: 0 10px;
        }
    }
    .phone {
        width: 100%;
        box-sizing: border-box;
        padding: 20px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .phone-num {
            width: 20%;
            font-size: 30px;
            color: #444;
        }
        .phone-ipt {
            width: 40%;
            font-size: 30px;
        }
        .phone-btn {
            width: 30%;
            border-radius: 10px;
            background: $themeColor;
        }
    }
    .ident {
        justify-content: flex-start;
        margin-bottom: 30px;
    }
    .ident-btn {
        width: 90%;
        height: 96px;
        margin: 0 auto;
        border-radius: 10px;
        font-size: 30px;
    }
    .active {
        background: yellowgreen;
    }
</style>
