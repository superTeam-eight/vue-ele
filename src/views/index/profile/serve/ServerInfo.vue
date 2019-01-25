<template>
    <div>
        <div class="serve-header">
            <router-link to="/serve">
                <i class="cubeic-back"></i>
            </router-link>
            <p v-for="(item, index) in title" :key="index">{{item}}</p>
        </div>
        <div v-for="(item, index) in info" :key="index" class="item">
            {{item}}
        </div>
    </div>
</template>

<script>
import { server } from "../../../../service/getData.js"
export default {
    data () {
        return {
            info: null,
            title: null
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
            this.title = a[this.$route.query.index]

            const b = arr.filter(type => {
                for (let x in type) {
                    const results = x.match(/Content/)
                    return results
                }
            })
            this.info = b[this.$route.query.index]
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
        p {
            width: 400px;
            position: absolute;
            left: 50%;
            margin-left: -200px;
            text-align: center;
            font-size: 36px;
            font-weight: bold;
            color: #fff;
        }
    }
    .item {
        padding: 30px;
        font-size: 36px;
        color: #666;
        box-sizing: border-box;
    }
</style>
