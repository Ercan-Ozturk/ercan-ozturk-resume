<script setup>
import { RouterLink, RouterView } from "vue-router";
import ProfileInfo from "./components/ProfileInfo.vue";
import InfoCard from "./components/InfoCard.vue";
</script>

<template>
  <!-- <RouterView /> -->
  <div class="flex h-screen justify-center bg-slate-500 dark:bg-emerald-950">
    <RouterView />
  </div>
</template>
