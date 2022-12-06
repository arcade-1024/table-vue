<template>
	<div
		className="w-full overflow-hidden shadow-lg bg-white dark:bg-stone-600 rounded-lg relative"
	>
		<button
			class="absolute right-2 top-2 text-gray-600 dark:text-gray-300"
			@click="$emit('deleteUser', id)"
		>
			<vue-feather type="x" size="18" />
		</button>
		<div className="px-6 py-4">
			<h1 class="font-bold text-xl mb-2 dark:text-white">{{ cardTitle }}</h1>
			<p class="text-gray-700 text-base dark:text-gray-300">{{ cardBody }}</p>
		</div>
		<div class="px-6 pt-4 pb-2">
			<div
				class="inline-block bg-gray-200 dark:bg-stone-500 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
				v-for="tag in tags"
				:key="tag"
			>
				{{ tag }}
			</div>
		</div>
	</div>
</template>

<script setup>
import VueFeather from "vue-feather";
defineProps({
	id: {
		type: String,
	},
	cardTitle: {
		type: String,
	},
	cardBody: {
		type: String,
	},
	tags: {
		type: [String],
	},
});
defineEmits(["deleteUser"]);
</script>

<style lang="scss" scoped></style>
