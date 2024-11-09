<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="md:flex flex-col  justify-center items-center h-screen w-screen">
    <div class="rows-3">
      <div class="flex justify-center items-center object-scale-down">
        <img alt=" Ercan Ozturk" class="image rounded-xl" src="@/assets/ercanozturk.jpg" width="400" height="400" />
      </div>
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
