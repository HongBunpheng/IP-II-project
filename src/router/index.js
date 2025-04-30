import { createRouter, createWebHistory } from 'vue-router'
import Province from '@/components/Province.vue'

const routes = [
  {
    path: '/province',
    name: 'Province',
    component: Province
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
