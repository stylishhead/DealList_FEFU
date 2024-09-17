import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')            // Исправленный путь
const BrandDetail = () => import('../views/BrandDetail.vue')  // Исправленный путь
const NotFound = () => import('../views/NotFound.vue')    // Исправленный путь

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/brand/:brandName',
    name: 'BrandDetail',
    component: BrandDetail,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
