import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Chicken } from '@element-plus/icons-vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/index',
      redirect: '/home',
      component: () => import('../views/Index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/SystemView.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/User.vue')
        },
        {
          path: '/my',
          name: 'my',
          component: () => import('../views/My.vue')
        },
        {
          path: '/history',
          name: 'history',
          component: () => import('../views/History.vue')
        },
        {
          path: '/reserve',
          name: 'reserve',
          component: () => import('../views/Reserve.vue')
        },
        {
          path: '/reserve/meetingroomdetail',
          name: 'meetingroomdetail',
          component: () => import('../views/MeetingRoomDetail.vue')
        }
      ]
    }
  ]
})

export default router
