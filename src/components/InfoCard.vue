<script setup>
defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
  pd: {
    type: String,
    default: "py-2",
  },
});
</script>

<template>
  <div
    class="p-2 bg-gradient-to-t from-gray-900 to-green-700 rounded-xl shadow-xl drop-shadow-xl relative text-center w-full"
  >
    <div class="text-slate-50 text-l font-mono antialiased">
      <slot> </slot>
    </div>
  </div>
</template>
