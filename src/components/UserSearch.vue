<template>
	<div
		class="px-6 py-6 mb-4 bg-white dark:bg-stone-600 rounded-lg shadow-md flex items-center w-full justify-between mt-6"
	>
		<div class="flex-1">
			<div class="flex items-center">
				<h1 class="text-lg font-semibold text-gray-700 dark:text-white">
					Search
				</h1>
			</div>
			<p
				class="text-md font-medium text-gray-500 dark:text-gray-300 flex items-center"
			>
				Use the search bar to search users
			</p>
		</div>
		<form @submit.prevent="search">
			<input
				className="input-field w-96 disabled:opacity-50 px-4 py-3 text-sm
			border border-gray-400 rounded focus:outline-none focus:ring-2
			ring-indigo-500 dark:bg-stone-500 dark:text-white dark:border-transparent
			dark:placeholder-gray-300"
				placeholder="search"
				v-model="userStore.searchField"
			/>
		</form>
	</div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();
const router = useRouter();
const search = () => {
	router.push({ name: "user" });
};

watch(() => {
	userStore.search();
}, [userStore.searchField]);
</script>

<style scoped></style>
