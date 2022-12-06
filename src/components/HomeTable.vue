<template>
	<table>
		<thead
			className="bg-indigo-50 text-gray-600 dark:bg-stone-800 dark:text-gray-50  w-full  block"
		>
			<tr
				className="w-full inline-flex text-sm font-semibold text-left uppercase"
			>
				<th className="w-full pl-6 py-3" key="header-1">API</th>
				<th className="w-full py-3 " key="header-2">Description</th>
				<th className="w-72 py-3" key="header-6">Link</th>
				<th className="w-full py-3" key="header-7">Category</th>
			</tr>
		</thead>
	</table>
	<FixedTable>
		<FixedTableRow v-for="item in data" :key="item.API">
			<FixedTableCell class="w-full py-6 pl-5">{{ item.API }}</FixedTableCell>
			<FixedTableCell class="w-full py-6 break-words">
				<div class="w-10/12">{{ item.Description }}</div>
			</FixedTableCell>
			<FixedTableCell class="w-72 py-6">
				<a
					:href="item.Link"
					target="_blank"
					class="flex items-center cursor-pointer hover:text-indigo-400 dark:hover:text-indigo-300"
				>
					link <vue-feather type="external-link" size="16" class="ml-2" />
				</a>
			</FixedTableCell>
			<FixedTableCell class="w-full py-6">{{ item.Category }}</FixedTableCell>
		</FixedTableRow>
	</FixedTable>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import FixedTable from "./Table/FixedTable.vue";
import FixedTableRow from "./Table/FixedTableRow.vue";
import VueFeather from "vue-feather";
import FixedTableCell from "./Table/FixedTableCell.vue";

const data = ref([]);
onMounted(async () => {
	try {
		const result = await axios(`https://api.publicapis.org/entries`);
		if (result) {
			data.value = result.data.entries;
		}
		console.log(result);
	} catch {
		console.log("Error fetching!");
	}
});
</script>

<style lang="scss" scoped></style>
