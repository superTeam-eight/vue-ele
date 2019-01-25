<template>
    <div>
        <div class="address-top">
            <router-link to="/profile">
                <i class="cubeic-back"></i>  
            </router-link>
            <span>我的地址</span>
        </div>
        <ul class="content">
            <li>
                <div class="title">
                    <span class="name">哦哈呦</span>
                    <span class="sex">先生</span>
                    <span class="phone">165416541561</span>
                </div>
                <div class="info">
                    <span class="single">家</span>
                    <span class="address">拉卡年费你发那妇女肯德基妇女吧</span>
                    <span to="" class="edit">
                        <router-link to="/edit"><i class="cubeic-edit"></i></router-link>
                        <router-link to=""><i class="cubeic-close"></i></router-link>
                    </span>
                </div>
            </li>
        </ul>
        <router-link to="/edit" class="bottom">
            <i class="cubeic-add"></i>
            <span>新增收获地址</span>
        </router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../../style/common.scss";
    .address-top {
        box-sizing: border-box;
        padding: 30px;
        background: $themeColor;
        display: flex;
        align-items: center;
        i {
            color: #fff;
        }
        span {
            color: #fff;
            font-size: 36px;
            font-weight: bold;
            position: absolute;
            left: 50%;
            margin-left: -72px;
        }
    }
    .content {
        padding: 30px;
        box-sizing: border-box;
        .title {
            .name {
                font-size: 38px;
                font-weight: bold;
            }
            .sex {
                margin-left: 10px;
                font-size: 40px;
                color: #666;
            }
            .phone {
                font-size: 38px;
                color: #666;
            }
        }
        .info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            .single {
                display: block;
                width: 35px;
                height: 35px;
                text-align: center;
                line-height: 35px;
                font-size: 20px;
                border: 1px solid #ff5722;
                color: #ff5722;
            }
            .address {
                width: 80%;
                font-size: 28px;
                color: #666;
            }
            .edit {
                width: 10%;
            }
        }
    }
    .bottom {
        width: 100%;
        height: 140px;
        position: absolute;
        border-top: 1px solid #eee;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
            color: $themeColor;
        }
        span {
            color: $themeColor;
            font-size: 38px;
        }
    }
</style>
