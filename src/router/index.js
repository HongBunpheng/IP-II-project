import { createRouter, createWebHistory } from 'vue-router'

// import Province from '@/components/Province.vue'
// import ChooseTransport from '@/views/ChooseTransport.vue'
import Landingpage from '@/views/Landingpage.vue'
// import CityDestination from '@/views/CityDestination.vue'
const routes = [
  {
    path: '/',
    name: 'Landingpage',
    component: Landingpage
  }
  // {
  //   path: '/province',
  //   name: 'Province',
  //   component: Province
  // },
  //  {
  //   path: '/',
  //   redirect: '/choose-transport'
  // },
  // {
  //   path: '/choose-transport',
  //   name: 'ChooseTransport',
  //   component: ChooseTransport
  // }
 
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
