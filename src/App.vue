<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex h-screen justify-center">
    <div class="flex flex-col md:flex-row items-center content  py-10 align-middle">
      <div class="rows-3">
        <div class="flex px-5 justify-center items-center object-scale-down">
          <img alt=" Ercan Ozturk" class="image rounded-xl" src="@/assets/ercanozturk.jpg" width="400" height="400" />
        </div>
        <div class="mx-5 rounded bg-green-800">
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
  </div>


</template>
