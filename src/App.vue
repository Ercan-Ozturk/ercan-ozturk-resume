<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <div class="flex-col lg:flex items-center justify-center h-screen">
    <div class="rows-3 items-center mx-10">
      <img alt=" Ercan Ozturk" class="image rounded-xl center p-2" src="@/assets/ercanozturk.jpg" width="500"
        height="500" />
      <div class="mx-2 rounded bg-green-800">
        <div class="font-mono text-xl mb-2 text-center">Ercan Öztürk</div>
      </div>
      <div class="flex justify-center items-center">
        <i class="mx-4 pi pi-envelope" style="color: green"></i>
        <h5 class="text-white text-base font-mono">ercanozturk222@gmail.com</h5>
      </div>
      <div class="flex justify-center items-center">
        <a href="https://github.com/Ercan-Ozturk">
          <img src="./assets/github_logo.png" height="72" width="72">
        </a>
      </div>
    </div>
    <div>
      <RouterView />
    </div>

  </div>

</template>
