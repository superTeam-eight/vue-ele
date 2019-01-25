<template>
    <div>
        <div class="header">
            <router-link to="/info"><i class="cubeic-back"></i></router-link>
            <router-link to="/profile"><i class="cubeic-close"></i></router-link>
            <span>设置手机号</span>
        </div>
        <cube-validator class="file" :model="value1" :rules="rules" v-model="valid">
            <cube-input placeholder="旧密码" class="int" v-model="value1"></cube-input>
        </cube-validator>
        <cube-validator class="file" :model="value2" :rules="rules" v-model="valid">
            <cube-input placeholder="新密码" class="int" v-model="value2"></cube-input>
        </cube-validator>
        <cube-validator class="file" :model="value3" :rules="rules" v-model="valid">
            <cube-input placeholder="确认密码" class="int" v-model="value3"></cube-input>
        </cube-validator>
        <cube-button class="ident-btn" :class="{ active: !disabled }" :disabled="disabled">
            确认并保存
        </cube-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value1: '',
            value2: '',
            value3: '',
            text: '',
            valid: undefined,
            rules: {
                required: true,
                type: 'number',
                min: 6
            }
        }
    },
    computed: {
        disabled () {
            
        }
    }
}
</script>

<style lang="scss" scoped>
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
    .file {
        margin-bottom: 30px;
        height: 120px;
        .int {
            margin: 0 20px;
            width: 90%;
            height: 80px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            font-size: 30px;
            color: #666;
        }
        .cube-validator-msg {
            box-sizing: border-box;
            padding: 0 30px;
        }
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
