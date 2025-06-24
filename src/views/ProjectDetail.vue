<template>
  <div class="min-h-screen p-6 bg-gray-100">
    <div class="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
      <h1 class="text-2xl font-bold mb-4">Project ID: {{ id }}</h1>
      <p class="text-gray-600">Detailed content goes here...</p>
      <RouterLink to="/" class="text-blue-600 hover:underline mt-4 block">← Back to Home</RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({ id: String })
</script>
