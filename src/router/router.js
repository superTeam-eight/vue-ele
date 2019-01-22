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
      component: () => import('../views/Login')
    },
    {
      path: '/msite',
      component: () => import('../views/Msite')
    },
    {
      path: '/shop',
      component: () => import('../views/Shop'),
      redirect: '/shop/shoporder',
      children: [
        {
          path: 'shoporder',
          component: () => import('../views/shop/ShopOrder')
        },
        {
          path: 'shoprate',
          component: () => import('../views/shop/ShopRate')
        },
        {
          path: 'shopdesc',
          component: () => import('../views/shop/ShopDesc')
        }
      ]
    },
    {
      path: '/shoplist',
      component: () => import('../views/ShopList')
    }
  ],
  linkActiveClass: 'active'
})
