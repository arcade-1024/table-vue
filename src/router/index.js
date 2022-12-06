import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import SettingView from "../views/SettingView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/home",
			name: "home",
			component: HomeView,
		},
		{
			path: "/user",
			name: "user",
			component: UserView,
		},
		{
			path: "/settings",
			name: "settings",
			component: SettingView,
		},
		{
			path: "/",
			redirect: "/home",
		},
	],
});

export default router;
