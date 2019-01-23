<template>
    <div>
        <div class="serve-header">
            <router-link to="/profile">
                <i class="cubeic-back"></i>
            </router-link>
            <span>服务中心</span>
        </div>
        <div class="middle">
            <div>
                <i class="cubeic-like"></i>
                在线客服
            </div>
            <div>
                <i class="cubeic-phone"></i>
                在线客服
            </div>
        </div>
        <div class="problem">
            <div>热门问题</div>
            <ul class="list">
                <router-link :to="{ path: '/serverinfo', query: { index }}" tag="li" v-for="(item, index) in type" :key="index" class="item">
                    <span v-for="(t, index) in item" :key="index">
                        {{t}}
                    </span>
                    <i class="cubeic-arrow"></i>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import { server } from "../../../../service/getData.js"
export default {
    data () {   
        return {
            type: []
        }
    },
    methods: {
        async serve () {
            const res = await server()
            const obj = res.data
            const arr = []
            for (let i in obj) {
                const o = {};
                o[i] = obj[i];
                arr.push(o)
            }
            const a = arr.filter(type => {
                for (let x in type) {
                    const result = x.match(/Caption/)
                    return result
                }
            })
            this.type = a 
            const b = arr.filter(type => {
                for (let x in type) {
                    const results = x.match(/Content/)
                    return results
                }
            })
        }
    }, 
    created () {
        this.serve()
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../../style/common.scss";
    .serve-header {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 30px;
        background: $themeColor;
        i {
            color: #fff;
        }
        span {
            position: absolute;
            left: 50%;
            margin-left: -77px;
            font-size: 36px;
            font-weight: bold;
            color: #fff;
        }
    }
    .middle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
            width: 50%;
            height: 186px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            color: #666;
            i {
                font-size: 60px;
                margin-bottom: 20px;
            }
            .cubeic-like {
                color: rgb(241, 134, 12);
            }
            .cubeic-phone {
                color: yellowgreen;
            }
        }
    }
    .problem {
        padding: 30px;
        box-sizing: border-box;
        color: #666;
        font-size: 40px;
        div {
            margin-bottom: 20px;
        }
        .item {
            box-sizing: border-box;
            padding: 30px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                font-size: 28px;
            }
            i {
                color: #999;
            }
        }
    }
</style>
