import { createRouter, createWebHistory } from 'vue-router'
const Home  = () => import('../views/Home.vue')
const Type  = () => import('../views/Type.vue')
const Convert  = () => import('../views/Convert.vue')
const FAQ  = () => import('../views/FAQ.vue')
const About  = () => import('../views/About.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/image/:format',
    name: 'ImageFormat',
    component: Type
  },
  {
    path: '/image/:format/:format2',
    name: 'ImageConversion',
    component: Convert
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
