import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [ // 二级路由的配置
      {
        path: 'deviceC',
        component: () => import('../views/home/deviceC')
      },
      {
        path: 'monitor',
        component: () => import('../views/home/monitor')
      }
    ]
  },
  { // 默认路由的设置
    path: '/login',
    name: 'login',
    component: login
  },
  { // 默认路由的设置
    path: '/',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
