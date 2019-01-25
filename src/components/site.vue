<template>
    <div class="box">
        <div class="tiete">
            <h3>选择收货地址</h3>
        </div>
        <div class='hodebox' v-if="guessCity && hotCities && cities">
            <div>
                <div class='telie'>
                    <span>当前定位城市:</span>
                    <span>定位不准时,请在城市列表选择</span>
                </div>
                <div class='telie' >
                    <router-link :to="'/demand/'+guessCity.id" class='dw'>{{guessCity.name}}</router-link>
                    <span class='zk'>〉</span>
                </div>
            </div>
            <div class='rmcs'>
                <div class='rm'>热门城市</div>
                <div class='rcsbox'>
                    <router-link :to="'/demand/'+city.id" class='rcs' v-for="city in hotCities" :key="city.id">{{city.name}}</router-link>
                </div>
            </div>
            <div class='cs' v-for="(item,index) in cities" :key="index">
                <span class='zm'>{{item[0]}}</span>
                <div class='csbox'>
                    <router-link class='csm' :to="'/demand/'+x.id" v-for="x in item[1]" :key="x.id" >{{x.name}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            async site() {
                await this.$store.dispatch('site/site');
                console.log(this.$store.state.site);

            },
            formatCities(cities) {
                const arr = []
                for (let key in cities) {
                    arr.push([key, cities[key]])
                }
                return arr.sort((a, b) => {
                    if (a[0] > b[0]) {
                        return 1
                    }

                    if (a[0] < b[0]) {
                        return -1
                    }
                })
            }
        },
        created() {
            this.site();
        },
        computed: {
            guessCity() {
                    return this.$store.state.site.guess.data
            },
            hotCities() {
                    return this.$store.state.site.hot.data
            },
            cities() {
                    return  this.formatCities(this.$store.state.site.group.data);
            }


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

        .hodebox {
            background-color: #eee;
            color: #666;
        }

        .telie {
            display: flex;
            padding: 20px;
            justify-content: space-between;
            align-items: center;
            font-size: 28px;
            border-bottom: 2px solid #ddd;
            background-color: #fff;
        }

        .dw {
            font-size: 32px;
            color: #3190e8;
        }

        .zk {
            font-weight: 600;
        }

        .rmcs,
        .cs {
            margin-top: 30px;
            font-size: 28px;
            background-color: #fff;
            border-top: 2px solid #ddd;
        }

        .rm,
        .zm {
            padding: 10px 20px;
            border-bottom: 1px solid #ddd;
        }

        .rcsbox,
        .csbox {
            display: flex;
            flex-wrap: wrap;
        }

        .rcs,
        .csm {
            box-sizing: border-box;
            width: 25%;
            text-align: center;
            padding: 0 10px;
            height: 86px;
            line-height: 86px;
            color: #3190e8;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .zm {
            border: none;
        }

        .csbox {
            margin-top: 15px;
            border-top: 1px solid #ddd;
        }

        .csm {
            color: #666;
            border-top: none;
            border-bottom: 1px solid #ddd;
        }


    }
</style>