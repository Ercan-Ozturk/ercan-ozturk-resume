<script setup lang="ts">
import ProfileInfo from "@/components/ProfileInfo.vue";
import SkillsGrid from "@/components/SkillsGrid.vue";
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center content mt-10 align-middle"
  >
    <ProfileInfo />
    <SkillsGrid />
  </div>
</template>
