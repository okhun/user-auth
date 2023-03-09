import { getItem, removeItem, setItem } from "@/utils/functions";
import { defineStore } from "pinia";
import { Payload, State } from "./types";
import userData from "@/assets/users.json";
import router from "@/router";

export const useAuthStore = defineStore("authentication", {
  state: (): State => ({
    user: (getItem("user") ? JSON.parse(getItem("user")) : {}) as Record<
      string,
      any
    >,
    token: {
      access: getItem("Authorization") ? getItem("Authorization") : "",
    },
  }),
  getters: {
    isAuthenticated: (state) => !!state.token.access,
  },
  actions: {
    login(payload: Payload) {
      const user = userData.find(
        (el) =>
          el.password === payload.password && el.username === payload.username
      );
      if (user) {
        const { password, ...tempUser } = user;
        this.user = tempUser;
        this.token.access = user.token;
        setItem("Authorization", user.token);
        setItem("user", JSON.stringify(tempUser));
        router.push({ name: "home" });
      } else {
        alert("Password or Username is wrong");
      }
    },
    logout() {
      this.user = {};
      this.token.access = "";
      removeItem("Authorization");
      removeItem("user");
      router.push({ name: "login" });
    },
  },
});
