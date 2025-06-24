<template>
  <div class="bg-white rounded-2xl shadow p-5 hover:shadow-xl transition-all duration-300">
    <img :src="image" alt="Project" class="rounded-xl h-40 w-full object-cover mb-4" />
    <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
    <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
    <button
      @click="$emit('view-details', id)"
      class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      View More
    </button>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  description: String,
  image: String
})

defineEmits(['view-details'])
</script>
