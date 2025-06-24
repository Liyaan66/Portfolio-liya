<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Header -->
    <header class="bg-white shadow-md p-6">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold">An Liya | Full Stack Developer</h1>
        <nav>
          <ul class="flex space-x-6 font-medium">
            <li><a href="#about" class="hover:text-blue-600">About</a></li>
            <li><a href="#portfolio" class="hover:text-blue-600">Portfolio</a></li>
            <li><a href="#contact" class="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="py-16 px-6 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">About Me</h2>
        <p class="text-gray-600 text-lg">
          I am a passionate full stack developer skilled in Vue.js, Laravel, Tailwind CSS, and MySQL. I build responsive web apps and enjoy solving real-world problems with clean, efficient code.
        </p>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">Portfolio</h2>
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
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 px-6 bg-white">
      <div class="max-w-xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form @submit.prevent="submitContactForm" class="space-y-4">
          <input v-model="form.name" type="text" placeholder="Your Name" required class="w-full p-3 border border-gray-300 rounded" />
          <input v-model="form.email" type="email" placeholder="Your Email" required class="w-full p-3 border border-gray-300 rounded" />
          <textarea v-model="form.message" rows="5" placeholder="Your Message" required class="w-full p-3 border border-gray-300 rounded"></textarea>
          <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center text-sm text-gray-500 py-4">
      © 2025 An Liya. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import PortfolioCard from '@/components/global_components/PortfolioCard.vue'
import { ref } from 'vue'

const projects = [
  {
    id: 1,
    title: 'POS System for Café',
    description: 'Built with Vue, Laravel, and MySQL for a local café.',
    image: 'https://source.unsplash.com/400x200/?cafe'
  },
  {
    id: 2,
    title: 'School Management Dashboard',
    description: 'Admin panel to manage students, grades, and schedules.',
    image: 'https://source.unsplash.com/400x200/?school'
  },
  {
    id: 3,
    title: 'Durian E-Commerce Website',
    description: 'A full e-commerce site for a durian farm in Cambodia.',
    image: 'https://source.unsplash.com/400x200/?durian'
  }
]

const form = ref({ name: '', email: '', message: '' })

function handleViewDetails(id) {
  alert(`You clicked on project ID: ${id}`)
}

function submitContactForm() {
  alert(`Thank you, ${form.value.name}! Your message has been sent.`)
  form.value = { name: '', email: '', message: '' }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
