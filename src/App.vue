<script setup>
import { RouterLink, RouterView } from "vue-router";
import ProfileInfo from "./components/ProfileInfo.vue";
import InfoCard from "./components/InfoCard.vue";
</script>

<template>
  <div class="flex h-screen justify-center">
    <div
      class="flex flex-col md:flex-row items-center content mt-10 align-middle"
    >
      <div class="flex flex-col">
        <ProfileInfo />
        <nav class="flex flex-row justify-center gap-6 w-full px-6">
          <RouterLink to="/" class="w-1/2">
            <InfoCard> Home </InfoCard>
          </RouterLink>
          <RouterLink to="/about" class="w-1/2">
            <InfoCard> Skills </InfoCard>
          </RouterLink>
        </nav>
      </div>

      <div class="overflow-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>
