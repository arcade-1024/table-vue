<template>
	<div
		className="mx-auto text-center w-1/3 text-gray-500 dark:text-gray-300 font-poppins font-light leading-7"
	>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
		quis nostrud exercitation ullamco.
	</div>

	<UserSearch />

	<div
		className="px-6 py-6 mb-4	bg-white dark:bg-stone-600 rounded-lg		shadow-md		flex	items-center		w-full justify-between	mt-4"
	>
		<div className="flex-1">
			<div className="flex items-center">
				<div className="text-lg font-semibold text-gray-700 dark:text-white">
					Dark Mode
				</div>
			</div>
			<p
				className="text-md font-medium text-gray-500 dark:text-gray-300 flex items-center "
			>
				Use the switch to enable or disable dark mode
			</p>
		</div>
		<ToggleButton
			buttonId="darkModeSwitch"
			:defaultButtonState="userStore.darkMode"
			@toggleDarkMode="userStore.toggleDarkMode"
		/>
	</div>
</template>

<script setup>
import ToggleButton from "../components/ToggleButton.vue";
import { useUserStore } from "../stores/UserStore";
import UserSearch from "../components/UserSearch.vue";

const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
