import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "@/views/AdminLayout.vue";
import Journal from '@/views/Journal.vue'
import About from '@/views/AboutUs.vue'
import CreatePost from '@/views/CreatePostView.vue'

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
    path: "/about",
    name: "AboutUs",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
