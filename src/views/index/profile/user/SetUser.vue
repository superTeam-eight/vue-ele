<template>
    <div class="user">
        <div class="setuser-header">
            <router-link to="/info"><i class="cubeic-back"></i></router-link>
            <router-link to="/profile"><i class="cubeic-close"></i></router-link>
            <span>账户信息</span>
        </div>
        <div class="set-user">
            <cube-input class="ipt" v-model="value" type="text" placeholder="用户名" :maxlength="maxlength" :autofocus="autofocus">
            </cube-input>
            <p class="text">用户名只能修改一次(5-24个字)</p>
        </div>
        <cube-button :disabled="disabled" class="user-btn" :class="{ active : !disabled }">
            确认修改
        </cube-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: '',
            maxlength: 24,
            autofocus: true
        }
    },
    computed: {
        disabled () {
            if ( 4 < this.value.length && this.value.length < 24) {
                return false
            } else {
                return true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .user {
        width: 750px;
    }
    .setuser-header {
        display: flex;
        align-items: center;
        padding: 30px;
        font-size: 40px;
        margin-bottom: 30px;
        i {
            margin: 0 20px;
        }
    }
    .set-user {
        margin-left: 30px;
        margin-bottom: 30px;
        width: 75%;
        .ipt {
            margin-bottom: 20px;
            padding: 0 15px;
        }
        .text {
            margin-left: 10px;
            font-size: 26px;
            color: #666;
        }
    }
    .user-btn {
        width: 90%;
        height: 96px;
        font-size: 30px;
        border-radius: 10px;
        display: block;
        margin: 0 auto;
    }
    .active {
        background: yellowgreen;
    }
</style>
