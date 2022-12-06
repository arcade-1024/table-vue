<template>
	<div
		className="flex items-center w-full rounded-lg px-4 py-3 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900"
	>
		<div
			className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200"
		>
			<RouterLink :to="{ name: 'home' }">
				<p
					:class="
						pathName === 'home'
							? 'text-indigo-500 dark:text-indigo-300 cursor-pointer capitalize'
							: 'cursor-pointer capitalize'
					"
				>
					home
				</p>
			</RouterLink>
			<RouterLink :to="{ name: 'user' }">
				<p
					:class="
						pathName === 'user'
							? 'text-indigo-500 dark:text-indigo-300 cursor-pointer capitalize mx-4'
							: 'cursor-pointer capitalize mx-4'
					"
				>
					user
				</p>
			</RouterLink>
			<RouterLink :to="{ name: 'settings' }">
				<p
					:class="
						pathName === 'settings'
							? 'text-indigo-500 dark:text-indigo-300 cursor-pointer capitalize'
							: 'cursor-pointer capitalize'
					"
				>
					settings
				</p>
			</RouterLink>
		</div>
	</div>
	<div
		className="mt-8 mb-4 flex justify-center items-center  text-7xl font-extralight font-poppins capitalize dark:text-white text-gray-900"
	>
		<vue-feather
			v-if="pathName === 'home'"
			type="home"
			size="60"
			class="mr-4"
			strokeWidth="0.8"
		></vue-feather>
		<vue-feather
			v-if="pathName === 'user'"
			type="user"
			size="60"
			class="mr-4"
			strokeWidth="0.8"
		></vue-feather>
		<vue-feather
			v-if="pathName === 'settings'"
			type="settings"
			size="60"
			class="mr-4"
			strokeWidth="0.8"
		></vue-feather>
		<p>{{ pathName }}</p>
	</div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import VueFeather from "vue-feather";
const route = useRoute();
const router = useRouter();
const pathName = ref("");
pathName.value = router.currentRoute.value.path;
watchEffect(
	() => (pathName.value = router.currentRoute.value.path.split("/")[1])
);
</script>

<style lang="scss" scoped></style>
