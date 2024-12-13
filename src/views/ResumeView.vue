<script setup lang="ts"></script>
<template>
  <div>
    <!-- <embed style="width: 100vw; height: 100%" :src="pdf" /> -->
    <iframe style="width: 100vw; height: 100%" :src="pdf"> </iframe>
  </div>
</template>

<script setup>
import pdf from "@/assets/ErcanOzturk_CV.pdf";
</script>
