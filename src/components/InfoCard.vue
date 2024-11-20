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
    class="content-center bg-gradient-to-t from-gray-900 to-green-700 rounded-lg shadow-lg drop-shadow-lg relative text-center"
  >
    <div class="text-slate-50 font-mono antialiased">
      <slot> </slot>
    </div>
  </div>
</template>
