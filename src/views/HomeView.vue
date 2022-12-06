<template>
	<div
		className="mx-auto text-center w-1/3 text-gray-500 dark:text-gray-300 font-poppins font-light leading-7"
	>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor.
	</div>
	<!-- <pre>{{ JSON.stringify(data,null,3) }}</pre> -->
	<UserSearch />

	<div
		class="flex flex-col rounded-lg pt-5 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900 mt-4"
	>
		<div class="flex flex-col flex-1 px-6 mb-4 justify-center">
			<div class="text-xl font-semibold text-gray-800 dark:text-gray-50">
				Table
			</div>
			<div class="text-sm font-medium text-gray-600 dark:text-gray-300">
				You can see all table data.
			</div>
		</div>
		<Suspense>
			<HomeTable />
			<template #fallback> loading </template>
		</Suspense>
	</div>
</template>
<script setup>
import HomeTable from "../components/HomeTable.vue";
import UserSearch from "../components/UserSearch.vue";
</script>
