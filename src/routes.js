import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/Home.vue'
import AboutPage from '@/pages/About.vue'
// eslint-disable-next-line no-unused-vars
import NotFoundPage from '@/pages/NotFound.vue'
// eslint-disable-next-line no-unused-vars
import Item from '@/pages/itemAlias.vue'
// eslint-disable-next-line no-unused-vars
import items from '@/seeders/items.js'

const routerHistory = createWebHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item
    },
    {
      path: '/:CatchAll(.*)*',
      name: '404',
      component: NotFoundPage
    }
    // {
    //   path: '/:notFound(.*)',
    //   name: '404',
    //   component: NotFoundPage
    // }
  ]
})

export default routers
