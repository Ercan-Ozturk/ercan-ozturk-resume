<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="rows-2 items-center mx-10">
      <img alt=" Ercan Ozturk" class="image rounded-xl center p-2" src="@/assets/ercanozturk.jpg" width="500"
        height="500" />
      <div class="mx-2 rounded bg-green-800">
        <div class="font-bold text-xl mb-2 text-center">Ercan Öztürk</div>
      </div>
    </div>
    <div>
      <RouterView />
    </div>

  </div>
</template>
