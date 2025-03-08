import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import MainMenu from '../page/MainMenu.vue'
import ChatMenu from '../page/ChatMenu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: HomeView,
      redirect: {path: "/home"},
      children: [
        {
          path: '/home',
          name: 'home',
          component: MainMenu
        },
        {
          path: '/chat/:prompt',
          name: 'chat',
          component: ChatMenu,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
