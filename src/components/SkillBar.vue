<template>
  <div>
    <div class="flex justify-between mb-1">
      <span class="text-gray-700 font-medium">{{ name }}</span>
      <span class="text-gray-600">{{ level }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        class="h-4 rounded-full transition-all duration-700 ease-out"
        :class="color"
        :style="{ width: level + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  level: Number,
  color: String, // Tailwind color class like "bg-indigo-600"
});
</script>
