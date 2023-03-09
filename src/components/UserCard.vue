<script setup lang="ts">
defineProps<{
  user: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    image: string;
  };
}>();
</script>

<template>
  <div
    class="border bg-white hover:shadow-lg hover:scale-105 duration-200 rounded"
  >
    <img
      v-if="user.image"
      :src="user.image"
      :alt="user.firstName"
      class="w-full max-h-80"
    />
    <div class="p-4">
      <p>FirstName: {{ user?.firstName }}</p>
      <p>Email: {{ user?.email }}</p>
    </div>
  </div>
</template>
