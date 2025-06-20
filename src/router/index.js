import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "@/views/AdminLayout.vue";
import Journal from "@/views/Journal.vue";
import About from "@/views/AboutUs.vue";
import CreatePost from "@/views/CreatePostView.vue";
import ReadFullPost from "@/views/ReadFullPost.vue";
import Game from "@/views/GamePage.vue";
import Explore from "@/views/Explore.vue";
import HotelSelect from "@/views/HotelSelect.vue";
import HotelPreview from "@/views/HotelPreview.vue";
import Profile from "@/views/Profile.vue";
import Budget from "@/views/Budget.vue";
import PostCard from "@/views/PostCard.vue";
import RestaurantSelect from '@/views/RestaurantSelect.vue'

const routes = [
  {
    path: "/admin",
    component: AdminLayout,
  },
  {
    path: "/journal",
    name: "Journal",
    component: Journal,
  },
  {
    path: "/create",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/journal/:id",
    name: "ReadFullPost",
    component: ReadFullPost,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: About,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },

  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/hotel-select",
    component: HotelSelect,
  },
  {
    path: "/hotel/:id",
    name: "HotelPreview",
    component: HotelPreview,
  },
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
  {
  path: '/restaurant-select',
  name: 'RestaurantSelect',
  component: () => import('@/views/RestaurantSelect.vue')
},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
