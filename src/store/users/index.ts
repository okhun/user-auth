import { useGet } from "@/shared/fetch";
import { defineStore } from "pinia";
import { State } from "./types";

export const useUserStore = defineStore("userStore", {
  state: (): State => ({
    users: [],
    isLoading: true,
  }),
  actions: {
    getAllUsers(url: string) {
      this.isLoading = true;
      useGet(url)
        .then((data) => {
          this.users = data.users;
        })
        .finally(() => (this.isLoading = false));
    },
  },
});
