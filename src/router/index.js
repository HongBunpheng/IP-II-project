import { createRouter, createWebHistory } from 'vue-router'

import Profile from '../views/Profile.vue'
import Budget from '../views/Budget.vue'
// import CreatePost from '../views/CreatePost.vue'
import PostCard from '../views/PostCard.vue'


const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/budget',
    name: 'Budget',
    component: Budget
  },
  {
    path: '/postCard',
    name: 'PostCard',
    component: PostCard
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Keep this if you're using Vite
  routes
})

export default router
