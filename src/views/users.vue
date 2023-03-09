<script setup lang="ts">
import { useUsers } from "@/composables/useUsers";
import UserCard from "@/components/UserCard.vue";

const { users, isLoading } = useUsers();
</script>

<template>
  <div class="min-h-[300px] mx-auto bg-white">
    <template v-if="!isLoading">
      <div
        v-if="users.length"
        class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
      >
        <template v-for="user in users" :key="user.id">
          <UserCard :user="user" />
        </template>
      </div>
      <div v-else class="flex justify-center">
        <p>Users list are empty</p>
      </div>
    </template>
    <div v-else class="flex justify-center">Loading...</div>
  </div>
</template>
