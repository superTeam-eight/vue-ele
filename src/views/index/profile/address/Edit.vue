<template>
    <div>
        <div class="edit-top">
            <router-link to="/myaddress">
                <i class="cubeic-back"></i>  
            </router-link>
            <span>地址的修改</span>
        </div>
        <div class="item">
            <div class="form">
                <div class="label-wrap">
                    联系人
                </div>
                <div>
                    <div class="input-wrap">
                        <cube-input placeholder="姓名"></cube-input>
                        <cube-radio-group v-model="selected" :options="options" :horizontal="true" class="ipt"/>
                    </div>
                </div>
            </div>
            <div class="common">
                <div class="label-wrap">
                    电话
                </div>
                <div>
                    <div class="input-wrap">
                        <cube-input placeholder="手机号码"></cube-input>
                    </div>
                </div>
            </div>
            <div class="common">
                <div class="label-wrap">
                    地址
                </div>
                <div>
                    <div class="input-wrap">
                        <cube-input placeholder="小区/写字楼/学校等"></cube-input>
                    </div>
                </div>
            </div>
            <div class="common">
                <div class="label-wrap">
                    门牌号
                </div>
                <div>
                    <div class="input-wrap">
                        <cube-input placeholder="10号楼5层楼501室"></cube-input>
                    </div>
                </div>
            </div>
            <div class="common">
                <div class="label-wrap">
                    标签
                </div>
                <div>
                    <div class="input-wrap">
                        <cube-radio-group v-model="selected3" :options="options3" :horizontal="true"  class="ipt"/>
                    </div>
                </div>
            </div>
            <cube-button class="item-btn">确定</cube-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: '先生',
            options: ['先生', '女士'],
            selected3: '家',
            options3: [
                {
                    label: '家',
                    value: '家'
                },
                {
                    label: '学校',
                    value: '学校'
                },
                {
                    label: '公司',
                    value: '公司'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import "../../../../style/common.scss";
    .edit-top {
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
    .item {
        .form {
            display: flex;
            align-items: center;
            padding: 30px;
        }
        .common {
            display: flex;
            padding: 30px;
            align-items: center;
            .cube-radio-input {
                width: 70px;
                height: 20px;
            }
        }
        .label-wrap {
            width: 100px;
            line-height: 50px;
            font-size: 30px;
            padding: 0 20px;
        }
        .ipt {
            font-size: 30px;
        }
        .cube-radio-label {
            width: 100px;
        }
        .item-btn {
            width: 90%;
            margin: 0 auto;
            height: 100px;
            font-size: 36px;
            border-radius: 10px;
            background: yellowgreen;
        }
    }
</style>
