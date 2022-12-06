import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
	state: () => ({
		darkMode: false,
		searchField: "",
		userData: [
			{
				id: 1,
				name: "arcade",
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				tags: ["photography", "digital art", "ui/ux"],
			},
			{
				id: 2,
				name: "raijin",
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				tags: ["photography", "marketing", "storytelling"],
			},
			{
				id: 3,
				name: "blueyies",
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				tags: ["gaming", "storytelling"],
			},
		],
		filteredData: [],
	}),

	actions: {
		toggleDarkMode() {
			this.darkMode = !this.darkMode;
		},
		deleteUser(id) {
			this.userData = this.userData.filter((user) => user.id !== id);
		},
		search() {
			this.filteredData = this.userData.filter((user) =>
				user.name.toLowerCase().includes(this.searchField.toLowerCase())
			);
		},
	},
});
