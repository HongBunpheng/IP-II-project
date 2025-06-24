import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/views/MainLayout.vue";
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
import Auth from "@/components/Authenticationpage/Auth.vue";
import AdminLayout from "@/views/AdminLayout.vue";
import RestaurantSelect from "@/views/RestaurantSelect.vue";
import RestaurantPreview from "@/views/RestaurantPreview.vue";
import SpinWheel from "@/components/Gamepage/SpinWheel.vue";
import Aiming from "@/components/Gamepage/Aiming.vue";
import Transportation from "@/components/Explorepage/Transportation.vue";
import ChooseTransport from "@/views/ChooseTransport.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", name: "Home", component: HomeView },
      { path: "auth", name: "Auth", component: Auth },
      { path: "journal", name: "Journal", component: Journal },
      { path: "journal/:id", name: "ReadFullPost", component: ReadFullPost },
      { path: "about", name: "AboutUs", component: About },
      { path: "create", name: "CreatePost", component: CreatePost },
      { path: "game", name: "Game", component: Game },
      { path: "spin-wheel", name: "SpinWheel", component: SpinWheel },
      { path: "aiming", name: "Aiming", component: Aiming },
      { path: "explore", name: "Explore", component: Explore },
      { path: "hotel-select", name: "HotelSelect", component: HotelSelect },
      { path: "hotel/:id", name: "HotelPreview", component: HotelPreview },
      { path: "restaurant-select", component: RestaurantSelect },
      { path: "restaurant/:id", name: "RestaurantPreview", component: RestaurantPreview },
      { path: "profile", name: "Profile", component: Profile },
      { path: "budget", name: "Budget", component: Budget },
      { path: "transportation", name: "Transportation", component: Transportation },
      { path: "choose-transport", name: "ChooseTransport", component: ChooseTransport },
    ]
  },

  { path: "/admin", component: AdminLayout },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
