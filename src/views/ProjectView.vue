<template>
  <div class="min-h-screen bg-gradient-to-r from-teal-50 via-sky-50 to-violet-50 text-gray-800 pt-28 px-6 pb-20">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-indigo-700 mb-12">My Projects</h1>

      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <PortfolioCard v-for="project in projects" :key="project.id" :id="project.id" :title="project.title"
          :description="project.description" :image="project.image" @view-details="handleViewDetails" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PortfolioCard from '@/components/global_components/PortfolioCard.vue'
import { ref } from 'vue'
import liya from '../assets/profile/pos.png'


const projects = ref([
  {
    id: 1,
    title: 'POS System for Café',
    description: 'Inventory and sales system using Vue, Laravel, and MySQL.',
    image: liya,
  },
  {
    id: 2,
    title: 'School Dashboard',
    description: 'Admin dashboard to manage students, classes, and reports.',
    image: liya,
  },
  {
    id: 3,
    title: 'Durian Shop Website',
    description: 'E-commerce platform for selling durians online in Cambodia.',
    image: liya,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio made with Vue 3 and Tailwind CSS.',
    image: liya,
  },
  {
    id: 5,
    title: 'QR Attendance App',
    description: 'Mobile-friendly web app for scanning and logging attendance.',
    image: liya,
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Blog CMS built with Markdown and VuePress.',
    image: liya,
  },
])

function handleViewDetails(id) {
  alert(`Clicked project ID: ${id}`)
}
</script>
