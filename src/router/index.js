import { createRouter, createWebHistory } from 'vue-router'
import Province from '@/components/Province.vue'
import ChooseTransport from '@/views/ChooseTransport.vue'

const routes = [
  {
    path: '/province',
    name: 'Province',
    component: Province
  },
  {
    path: '/choose-transport',
    name: 'ChooseTransport',
    component: ChooseTransport
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
