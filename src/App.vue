<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const layout = ref<string | unknown>();
watch(route, () => {
  const routeLayout = route.meta?.layout;
  layout.value = routeLayout;
});
</script>

<template>
  <component :is="layout" />
</template>
