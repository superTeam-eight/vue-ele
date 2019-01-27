import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'


Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'home',
          component: () => import('../views/index/Home')
        },
        {
          path: 'find',
          component: () => import('../views/index/Find')
        },
        {
          path: 'order',
          component: () => import('../views/index/Order')
        },
        {
          path: 'profile',
          component: () => import('../views/index/Profile'),
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/Login')
    },
    {
      path: '/msite',
      component: () => import('../views/Msite'),
    },
    {
      path: '/demand/:id',
      component: () => import('../views/demand'),
    },
    {
      path: '/shop',
      component: () => import('../views/Shop')
    },
    {
      path: '/shoplist',
      component: () => ('../views/ShopList')
    },
    {
      // home页面搜索商品的页面
      path:'/search',
      component:() => import ('../views/search/Search')
    },
    {
      path: '/info',
      component: () => import('../views/index/profile/Info')
    },
    {
      path: '/setusername',
      component: () => import('../views/index/profile/user/SetUser.vue')
    },{
      path: '/setphone',
      component: () => import('../views/index/profile/user/SetPhone.vue')
    },
    {
      path: '/setpassword',
      component: () => import('../views/index/profile/user/SetPassword.vue')
    },
    {
      path: '/benefit',
      component: () => import('../views/index/profile/Benefit'),
      children: [
        {
          path: 'hongbao',
          component: () => import('../views/index/profile/benefit/HongBao.vue')
        },
        {
          path: 'coupon',
          component: () => import('../views/index/profile/benefit/Coupon.vue')
        }
      ]
    },
    {
      path: '/serve',
      component: () => import('../views/index/profile/serve/Server.vue')
    },
    {
      path: '/vipcenter',
      component: () => import('../views/index/profile/serve/VipCenter.vue')
    },
    {
      path: '/serverinfo',
      component: () => import('../views/index/profile/serve/ServerInfo.vue')
    },
    {
      path: '/myaddress',
      component: () => import('../views/index/profile/address/Add.vue')
    },
    {
      path: '/edit',
      component: () => import('../views/index/profile/address/Edit.vue')
      // component: () => import('../views/ShopList')
    }
  ],
  linkExactActiveClass: 'active'
})
