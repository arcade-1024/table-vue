<template>
	<td :class="class">
		<slot />
	</td>
</template>

<script setup>
defineProps({
	class: {
		type: String,
	},
});
</script>

<style lang="scss" scoped></style>
