<script setup>
defineProps({
    bg: {
        type: String,
        default: "bg-gray-100",
    },
});
</script>

<template>
    <div class="px-2 py-2 bg-black rounded-xl shadow-md relative text-center border-solid border-2 border-green-800">
        <slot> </slot>
    </div>
</template>
