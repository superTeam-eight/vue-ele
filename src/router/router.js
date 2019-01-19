import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'

Vue.use(Router)

export default new Router({
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
          children: [
            {
              path: 'address',
              component: () => import('../views/index/profile/Address')
            },
            {
              path: 'info',
              component: () => import('../views/index/profile/Info')
            },
            {
              path: 'benefit',
              component: () => import('../views/index/profile/Benefit')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: () => ('../views/Login')
    },
    {
      path: '/msite',
      component: () => ('../views/Msite')
    },
    {
      path: '/shop',
      component: () => ('../views/Shop')
    },
    {
      path: '/shoplist',
      component: () => ('../views/ShopList')
    }
  ]
})
