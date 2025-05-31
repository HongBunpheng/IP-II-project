import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
  ],
=======
import JournalPage from '../views/journalPage.vue'
import Profile from '../views/Profile.vue'
import ReadFullPost from '../views/ReadFullPost.vue'
import CreatePost from '../views/CreatePost.vue'


const routes = [

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
  ,
 {
    path: '/journalPage',
    name: 'journalPage',
    component: JournalPage
 
  },
   {
    path: '/ReadFullPost',
    name: 'ReadFullPost',
    component: ReadFullPost
 
  },
    {
    path: '/CreatePost',
    name: 'CreatePost',
    component: CreatePost
 
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
>>>>>>> Progress01
})

export default router
