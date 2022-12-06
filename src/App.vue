<template>
	<div :class="userStore.darkMode ? 'dark' : ''">
		<div
			className=" flex flex-col h-screen items-center flex-1 lg:px-5 py-8 px-2 bg-gray-200 dark:bg-stone-900 font-sans"
		>
			<div className="sm:w-full max-w-screen-2xl flex flex-col ">
				<NavBar />
				<router-view v-slot="{ Component }">
					<component :is="Component" />
				</router-view>
			</div>
		</div>
	</div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { useUserStore } from "./stores/UserStore";
const userStore = useUserStore();
</script>

<style scoped></style>
