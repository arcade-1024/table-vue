<template>
	<table class="table-fixed w-full">
		<tbody
			class="inline-block overflow-y-auto w-full min-h-[450px] max-h-[550px] scrollBarThin"
		>
			<slot />
		</tbody>
	</table>
</template>

<script setup></script>

<style scoped>
.scrollBarThin::-webkit-scrollbar-corner {
	background: #f0f0f0 !important;
}

.scrollBarThin::-webkit-scrollbar {
	width: 5px !important;
	height: 5px !important;
}
.scrollBarThin::-webkit-scrollbar-track {
	background: #f0f0f0 !important;
	border-radius: 20px;
}
.scrollBarThin::-webkit-scrollbar-thumb {
	background: #a6a6a6 !important;
	border-radius: 20px;
}
</style>
