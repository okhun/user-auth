import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "@/router";
import "./style.css";
import App from "./App.vue";
import DefaultLayout from "@/layout/default.vue";
import EmptyLayout from "@/layout/empty.vue";

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

export const app = createApp(App);
app.component("default", DefaultLayout);
app.component("empty", EmptyLayout);
app.use(router);
app.use(pinia);
app.mount("#app");
