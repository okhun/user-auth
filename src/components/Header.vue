<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
import BaseButton from "@/components/BaseButton.vue";
import { Can } from "@/utils/can";
const store = useAuthStore();
const { logout } = store;
</script>

<template>
  <div class="sticky top-0 z-50 bg-white">
    <div
      class="flex justify-between items-center border-b border-dark-lighter p-3 md:p-4 lg:px-6"
    >
      <ul class="flex items-center gap-4">
        <router-link :to="{ name: 'home' }" class="text-lg font-bold"
          ><li>Home</li></router-link
        >
        <router-link
          :to="{ name: 'catalogs' }"
          class="text-lg font-bold"
          v-if="Can('catalogs')"
          ><li>Catalogs</li></router-link
        >
        <router-link
          :to="{ name: 'users' }"
          class="text-lg font-bold"
          v-if="Can('users')"
          ><li>Users</li></router-link
        >
      </ul>
      <div class="flex items-center gap-3 md:gap-4 xl:gap-8">
        <BaseButton class="px-4" @click="logout">Logout</BaseButton>
      </div>
    </div>
  </div>
</template>
