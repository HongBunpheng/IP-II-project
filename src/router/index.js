import { createRouter, createWebHistory } from 'vue-router'

// import Province from '@/components/Province.vue'
// import ChooseTransport from '@/views/ChooseTransport.vue'
import LandingPage from '@/views/LandingPage.vue'
// import CityDestination from '@/views/CityDestination.vue'
const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
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
