<template>
	<div
		className="relative inline-block w-14 mr-2 align-middle   transition duration-200 ease-in "
	>
		<input
			type="checkbox"
			name="toggle"
			id="{{buttonId}}"
			className="toggleCheckbox hidden"
			:checked="!defaultButtonState"
			readonly="true"
			@click="$emit('toggleDarkMode')"
		/>
		<label
			htmlFor="{{buttonId}}"
			className="toggleLabel flex items-center overflow-hidden h-8 rounded-full dark:opacity-95 bg-gray-300 dark:bg-stone-800"
		>
			<vue-feather
				type="moon"
				v-if="!defaultButtonState"
				class="absolute left-1 text-white"
				size="18"
			/>
			<vue-feather
				type="sun"
				v-else
				class="absolute right-1.5 text-white"
				size="18"
			/>
			<div
				className="toggleSwitch absolute block w-5 h-5 rounded-full bg-white appearance-none  focus:ring-0 mx-1"
			></div>
		</label>
	</div>
</template>

<script setup>
import VueFeather from "vue-feather";

defineProps({
	buttonId: {
		type: String,
	},
	defaultButtonState: {
		type: Boolean,
	},
	darkMode: {
		type: Boolean,
	},
});
defineEmits(["toggleDarkMode"]);
</script>

<style scoped>
.toggleCheckbox:checked {
	@apply right-0 border-indigo-400;
	right: 0;
	border-color: #818cf8;
}
.toggleCheckbox:checked + .toggleLabel {
	@apply bg-indigo-400;
}
.toggleCheckbox:checked + .toggleLabel > .toggleSwitch {
	@apply right-0 border-indigo-400;
	right: 0;
}
.toggleCheckbox:disabled + .toggleLabel {
	@apply bg-gray-500;
}
</style>
