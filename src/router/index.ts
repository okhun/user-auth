import { useAuthStore } from "@/store/auth";
import { Can } from "@/utils/can";
import { storeToRefs } from "pinia";
import {
  type Router,
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

const routes: readonly RouteRecordRaw[] = [
  {
    path: "",

    redirect: { name: "home" },
  },
  {
    path: "/welcome",
    name: "home",
    meta: {
      layout: "default",
    },
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/users",
    name: "users",
    meta: {
      layout: "default",
    },
    component: () => import("@/views/users.vue"),
  },
  {
    path: "/catalogs",
    name: "catalogs",
    meta: {
      layout: "default",
    },
    component: () => import("@/views/catalogs.vue"),
  },
  {
    path: "/auth/login",
    name: "login",
    meta: {
      layout: "empty",
    },
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "error",
    meta: {
      layout: "empty",
    },
    component: () => import("@/views/error.vue"),
  },
];

export const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

router.beforeEach((to, _, next) => {
  const store = useAuthStore();
  const { isAuthenticated } = storeToRefs(store);
  const publicPages = ["/auth/login"];
  const isGuest = publicPages.includes(to.path);

  if (!isAuthenticated.value && isGuest) {
    next();
  } else if (!isAuthenticated.value && !isGuest) {
    next({ name: "login" });
  } else if (isAuthenticated.value && isGuest) {
    next({ name: "home" });
  } else if (isAuthenticated.value && !Can(to.name?.toString())) {
    next({ name: "home" });
  } else {
    next();
  }
});
