<template>
    <div class="user">
        <router-link to="/profile" class="user-header">
            <i class="cubeic-back"></i>
            <span>账户信息</span>
        </router-link>
        <router-link to="" class="avatar">
            <span>头像</span>
            <div class="author">
                <img :src="'http://elm.cangdu.org/img/'+ userinfo.avatar " alt="">
                <i class="cubeic-arrow"></i>
            </div>
        </router-link>
        <router-link to="/setusername" class="avatar">
            <span>用户名</span>
            <div class="author">
                <span>{{userinfo.username}}</span>
                <i class="cubeic-arrow"></i>
            </div>
        </router-link>
        <div class="account">
            账号绑定
        </div>
        <router-link to="/setphone" class="avatar">
            <span>
                <i class="cubeic-mobile-phone"></i>
                手机
            </span>
            <div class="author">
                <span>{{phone}}</span>
                <i class="cubeic-arrow"></i>
            </div>
        </router-link>
        <div class="account">
            安全设置
        </div>
        <router-link to="/setpassword" class="avatar">
            <span>登录密码</span>
            <div class="author">
                <span class="setting">修改</span>
                <i class="cubeic-arrow"></i>
            </div>
        </router-link>
        <div class="quit">
            <span>退出登录</span>
        </div>
    </div>
</template>

<script>
import { userInfo } from "../../../service/getData.js"
export default {
    data () {
        return {
            userinfo: {},
            phone: ''
        }
    },
    methods: {
        async getData () {
            const data = await userInfo(this.$route.query.id)
            // console.log(data.data)
            this.userinfo = data.data
            const arr = this.userinfo.username.split('')
            for (let i = 0; i < arr.length; i++) {
                if ( 2 < i && i < 7) {
                    arr[i] = '*'
                }
            }
            this.phone = arr.join('')
        }
    },
    created () {
        this.getData()
    }
}
</script>

<style lang="scss" scoped>
@import "../../../style/common.scss";
    .user {
        width: 750px;
        background: #f5f5f5;
    }
    .user-header {
        display: flex;
        align-items: center;
        padding: 30px;
        border-bottom: 1px solid #eee;
        .cubeic-back {
            margin-right: 10px;
        }
        span {
            font-size: 42px;
        }
    }
    .avatar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 35px 20px;
        border-bottom: 1px solid #eee;
        span {
            font-size: 30px;
            font-weight: bold;
            color: #000;
        }
        .author {
            display: flex;
            align-items: center;
            img {
                width: 120px;
                height: 120px;
                border-radius: 50%;
            }
        }
        .cubeic-mobile-phone {
            color: $themeColor;
        }
        .setting {
            color: $themeColor;
        }
    }
    .account {
        font-size: 26px;
        background: #f5f5f5;
        padding: 30px;
        color: #666;
    }
    .quit {
        width: 750px;
        height: 100px;
        margin-top: 30px;
        text-align: center;
        line-height: 100px;
        color: red;
        font-size: 30px;
    }
</style>
