<template>
    <div class="box">
        <div class="tiete">
            <h3>搜索地址</h3>
        </div>
        <div class="demandBox">
            <cube-input placeholder="请输入地址" v-model="city.keyword"></cube-input>
            <cube-button class="but" icon="cubeic-right" @click="getDemand">查找</cube-button>
        </div>
        <div class="likeBox">
            <div class="like" v-for="(arr,index) in arrs" :key="index">
                <h4>{{arr.name}}</h4>
                <p>{{arr.address}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                city: {
                    city_id: 1,
                    keyword: ''
                },
                arrs: []
            }
        },
        methods: {
            async getDemand() {
                await this.$store.dispatch('demand/demanda', this.city)
                this.arrs = this.$store.state.demand.demandx.data
                // console.log(this.$store.state.demand.demandx.data)
            },
            getId() {
                this.city.city_id = this.$route.params.id
            }
        },
        created() {
            this.getId();
        },
        computed: {

        }

    }
</script>

<style lang="scss" scoped>
    @import '../style/common';

    .box {
        .tiete {
            height: 88px;
            background-color: $themeColor;
            text-align: center;
            line-height: 88px;

            h3 {
                font-size: 40px;
                color: #fff;
            }
        }

        .demandBox {
            margin: 20px;

            .cube-input {

                height: 80px;
                font-size: 28px;
                padding: 0 30px;
            }

            .but {
                margin-top: 30px;
                height: 88px;
                background-color: $themeColor;
            }
        }

        .likeBox {
            padding-top: 30px;
            .like {
                padding: 30px;
                border-top: 1px solid #ccc;
                h4{
                    font-size: 36px;
                    color: $titleColor;
                }
                p{
                    margin-top: 20px;
                    font-size: 30px;
                    color: #ccc;
                }
            }
        }


    }
</style>