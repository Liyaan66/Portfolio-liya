<template>
  <div class="min-h-screen bg-gradient-to-br from-[#dbeafe] via-[#f0f9ff] to-[#f5f3ff] text-gray-800">
    <!-- Hero Section -->
    <section class="min-h-screen flex flex-col justify-center items-center text-center 
           bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 
           text-white px-6 py-20 bg-[length:400%_400%] animate-gradient-xy">

      <!-- Profile Image -->
      <img src="../assets/profile/liya.png" alt="An Liya"
        class="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white mb-6 animate-fade-in-up" />

      <!-- Heading -->
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">Hello, I'm Liya</h1>

      <!-- Subheading -->
      <p class="text-xl md:text-2xl mb-6 animate-fade-in delay-300">
        Full Stack Developer · Problem Solver · Lifelong Learner
      </p>

      <!-- Bio -->
      <p class="max-w-2xl text-base md:text-lg text-white/90 leading-relaxed mb-6 animate-fade-in delay-500">
        Welcome to my portfolio! I'm a dedicated developer with a passion for building efficient and impactful web
        applications.
        I'm currently exploring opportunities where I can contribute and grow. Thank you for visiting!
      </p>

      <!-- Social Icons -->
      <div class="flex space-x-6 text-2xl mb-8 animate-fade-in delay-700">
        <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub"
          class="hover:text-white/70 transition">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn"
          class="hover:text-white/70 transition">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>

      <!-- Action Buttons -->
      <div class="flex space-x-4 animate-fade-in delay-[900ms]">
        <a href="/Liya An-Resume.pdf" download
          class="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Download CV
        </a>
        <a href="https://t.me/liya_dev" target="_blank"
          class="border-2 border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition">
          Chat on Telegram
        </a>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-indigo-700 mb-10">Featured Projects</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <PortfolioCard v-for="project in projects.slice(0, 2)" :key="project.id" :id="project.id"
            :title="project.title" :description="project.description" :image="project.image"
            @view-details="handleViewDetails" />
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-20 px-6 bg-gradient-to-r from-white via-sky-50 to-indigo-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8 text-indigo-700">Tech Stack</h2>
        <div class="flex flex-wrap justify-center gap-4 text-lg font-medium text-gray-700">
          <span class="bg-white px-4 py-2 rounded-full shadow">HTML</span>
          <span class="bg-white px-4 py-2 rounded-full shadow">CSS</span>
          <span class="bg-white px-4 py-2 rounded-full shadow">JavaScript</span>
          <span class="bg-white px-4 py-2 rounded-full shadow">Vue.js</span>
          <span class="bg-white px-4 py-2 rounded-full shadow">Tailwind</span>
          <span class="bg-white px-4 py-2 rounded-full shadow">PHP</span>
          <span class="bg-white px-4 py-2 rounded-full shadow">Laravel</span>
          <span class="bg-white px-4 py-2 rounded-full shadow">MySQL</span>
          <span class="bg-white px-4 py-2 rounded-full shadow">Git</span>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="bg-indigo-600 text-white py-20 px-6">
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-4">Let’s Connect</h2>
        <p class="text-lg mb-6">
          I'm available for freelance or full-time opportunities. Feel free to reach out!
        </p>
        <a href="https://t.me/liya_dev" target="_blank"
          class="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Message Me on Telegram
        </a>
      </div>
    </section>
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
])

function handleViewDetails(id) {
  alert(`You clicked on project ID: ${id}`)
}
</script>
