import { useGet } from "@/shared/fetch";
import { defineStore } from "pinia";
import { State } from "./types";

export const useUserStore = defineStore("userStore", {
  state: (): State => ({
    users: [],
    isLoading: true,
  }),
  actions: {
    getAllUsers() {
      this.isLoading = true;
      useGet()
        .then((data) => {
          this.users = data.users;
        })
        .finally(() => (this.isLoading = false));
    },
  },
});
