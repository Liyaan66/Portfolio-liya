<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 px-6 py-20 max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-center text-indigo-700 mb-12">My Projects</h1>

    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <PortfolioCard
        v-for="project in projects"
        :key="project.id"
        :id="project.id"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        @view-details="handleViewDetails"
      />
    </div>
  </div>
</template>

<script setup>
import PortfolioCard from '@/components/global_components/PortfolioCard.vue'
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'POS System for Café',
    description: 'Inventory and sales system using Vue, Laravel, and MySQL.',
    image: 'https://source.unsplash.com/400x200/?coffee',
  },
  {
    id: 2,
    title: 'School Dashboard',
    description: 'Admin dashboard to manage students, classes, and reports.',
    image: 'https://source.unsplash.com/400x200/?school',
  },
  {
    id: 3,
    title: 'Durian Shop Website',
    description: 'E-commerce platform for selling durians online in Cambodia.',
    image: 'https://source.unsplash.com/400x200/?durian',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio made with Vue 3 and Tailwind CSS.',
    image: 'https://source.unsplash.com/400x200/?developer',
  },
  {
    id: 5,
    title: 'QR Attendance App',
    description: 'Mobile-friendly web app for scanning and logging attendance.',
    image: 'https://source.unsplash.com/400x200/?qr',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Blog CMS built with Markdown and VuePress.',
    image: 'https://source.unsplash.com/400x200/?blog',
  },
])

function handleViewDetails(id) {
  alert(`Clicked project ID: ${id}`)
}
</script>
