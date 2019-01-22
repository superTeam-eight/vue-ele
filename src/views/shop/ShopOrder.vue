<template>
  <cube-scroll-nav
  :side="true"
  :data="data"
  :current="current"
  @change="changeHandler"
  @sticky-change="stickyChangeHandler"
  :class="{'nav-top':isSticky}">
    <cube-scroll-nav-panel
      v-for="item in data"
      :key="item.id"
      :label="item.id">
      <ul>
        <li v-for="food in item.foods" :key="food._id">
          <div>
            <!-- <img :src="food.icon"> -->
            <p>{{food.name}}</p>
          </div>
        </li>
      </ul>
    </cube-scroll-nav-panel>
  </cube-scroll-nav>
</template>

<script>
import goods from '../../../test.json'
console.log(goods)

import { mapState } from 'vuex'

export default {
  data () {
    return {
      data:goods,
      current:goods[0].name
    }
  },
  computed: {
    ...mapState('shop', ['isSticky'])
  },
  methods: {
    changeHandler(label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler(current) {
      console.log('sticky-change', current)
    }
  }
}
</script>

<style>
  .nav-top {
    top: 131px;
  }
  .tli {
    height: 60px;
  }
</style>
