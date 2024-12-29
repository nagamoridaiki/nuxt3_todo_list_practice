<script setup lang="ts">
import TodoProvider from "./providers/TodoProvider.vue";
import "./style.css";
</script>

<template>
  <TodoProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </TodoProvider>
</template>
