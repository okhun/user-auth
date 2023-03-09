<script setup lang="ts">
defineProps<{
  catalog: {
    brand: string;
    category?: string;
    description?: string;
    discountedPrice?: number;
    id?: number;
    images?: string[];
    price?: number;
    rating?: number;
    stock?: number;
    thumbnail?: string;
    title?: string;
  };
}>();
</script>

<template>
  <div
    class="border bg-white hover:shadow-lg hover:scale-105 duration-200 rounded"
  >
    <img
      v-if="catalog.thumbnail"
      :src="catalog.thumbnail"
      :alt="catalog.title"
      class="w-full max-h-80"
    />
    <div class="p-4">
      <p>Brand: {{ catalog.brand }}</p>
      <p>{{ catalog?.description }}</p>
    </div>
  </div>
</template>
