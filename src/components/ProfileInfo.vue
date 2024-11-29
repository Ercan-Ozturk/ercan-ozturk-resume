<script setup>
import InfoCard from "./InfoCard.vue";
</script>
<template>
  <div class="flex flex-col">
    <div class="rows-3">
      <div class="flex px-5 justify-center items-center object-scale-down">
        <img
          alt=" Ercan Ozturk"
          class="image rounded-xl shadow-xl"
          src="@/assets/ercanozturk.jpg"
          width="256 md:400 lg:500"
          height="256 md:400 lg:500"
        />
      </div>
      <div class="mx-5 rounded bg-green-800 shadow-xl">
        <div class="font-mono text-xl mb-2 text-center text-slate-50">
          Ercan Öztürk
        </div>
      </div>
      <div class="flex justify-center items-center">
        <i class="mx-4 pi pi-envelope" style="color: green"></i>
        <h5 class="text-slate-50 text-base font-mono">
          ercanozturk222@gmail.com
        </h5>
      </div>
      <div class="flex justify-center items-center">
        <a href="https://github.com/Ercan-Ozturk">
          <img src="\src\assets\github_logo.png" height="60" width="60" />
        </a>
      </div>
    </div>
    <nav class="flex flex-row justify-evenly gap-4 items-center px-6">
      <RouterLink to="/" class="w-1/3 items-center">
        <button
          class="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 p-2 rounded-md w-full text-black"
        >
          Home
        </button>
      </RouterLink>
      <RouterLink to="/about" class="w-1/3 items-center">
        <button
          class="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 p-2 rounded-md w-full text-black"
        >
          Skills
        </button>
      </RouterLink>

      <RouterLink to="/resume" class="w-1/3 items-center">
        <button
          class="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 p-2 rounded-md w-full text-black"
        >
          Resume
        </button>
      </RouterLink>
    </nav>
  </div>
</template>
