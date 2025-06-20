import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
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
import Auth from "@/components/Auth.vue";
import AdminLayout from "@/views/AdminLayout.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/auth", name: "Auth", component: Auth },
  { path: "/journal", name: "Journal", component: Journal },
  { path: "/journal/:id", name: "ReadFullPost", component: ReadFullPost },
  { path: "/about", name: "AboutUs", component: About },
  { path: "/create", name: "CreatePost", component: CreatePost },
  { path: "/game", name: "Game", component: Game },
  { path: "/explore", name: "Explore", component: Explore },
  { path: "/hotel-select", name: "HotelSelect", component: HotelSelect },
  { path: "/hotel/:id", name: "HotelPreview", component: HotelPreview },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/budget", name: "Budget", component: Budget },
  { path: "/postCard", name: "PostCard", component: PostCard },

  // Admin can stay separate if you want no header on it
  { path: "/admin", component: AdminLayout }
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
