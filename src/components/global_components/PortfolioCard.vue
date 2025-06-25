<template>
  <div class="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
    <img :src="image" :alt="title" class="w-full h-40 object-cover">
    <div class="p-4 space-y-2">
      <h3 class="text-xl font-semibold text-indigo-600">{{ title }}</h3>
      <p class="text-gray-600 text-sm">{{ description }}</p>
      <button
        @click="$emit('view-details', id)"
        class="mt-2 text-sm text-white bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-600 transition"
      >
        View Details
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  description: String,
  image: String,
})
</script>
