import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/layouts/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '',
          name: 'base',
          component: () => import('../pages/layouts/base/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Customer Login',
      component: () => import('../pages/layouts/authentication/login/index.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
  ]
})

export default router
