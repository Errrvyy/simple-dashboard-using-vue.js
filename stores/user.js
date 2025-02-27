import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "Er Saddi",
    role: "Admin",
  }),
  actions: {
    updateName(newName) {
      this.name = newName;
    },
  },
});