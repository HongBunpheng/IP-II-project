import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/views/AdminLayout.vue'

// import Province from '@/components/Province.vue'
// import ChooseTransport from '@/views/ChooseTransport.vue'
// import Landingpage from '@/views/Landingpage.vue'
import Landingpage from '@/views/LandingPage.vue'
// import CityDestination from '@/views/CityDestination.vue'
const routes = [
  {
    path: '/',
    name: 'Landingpage',
    component: Landingpage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
  },

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
// const activeIndex = ref(0)

export default router
