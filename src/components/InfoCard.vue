<script setup>
defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>

<template>
  <div
    class="px-2 py-2 bg-gradient-to-t from-gray-900 to-green-700 rounded-xl shadow-xl drop-shadow-xl relative text-center"
  >
    <div class="text-slate-50">
      <slot> </slot>
    </div>
  </div>
</template>
