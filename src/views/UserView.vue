<template>
	<div
		className="mx-auto text-center w-1/3 text-gray-500 dark:text-gray-300 font-poppins font-light leading-7"
	>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua.
	</div>
	<UserSearch />

	<div
		class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8 mt-4"
	>
		<UserCard
			v-for="user in userStore.filteredData"
			:key="user.id"
			:id="user.id"
			:cardTitle="user.name"
			:cardBody="user.desc"
			:tags="user.tags"
			@deleteUser="userStore.deleteUser"
		/>
	</div>
	<div
		v-if="userStore.filteredData.length === 0"
		class="h-96 flex flex-col items-center justify-center rounded-lg px-6 py-5 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900 mt-4"
	>
		<div class="text-3xl font-light mt-4 dark:text-white">No user found</div>
	</div>
</template>

<script setup>
import UserCard from "../components/UserCard.vue";
import { useUserStore } from "../stores/UserStore";
import UserSearch from "../components/UserSearch.vue";

const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
