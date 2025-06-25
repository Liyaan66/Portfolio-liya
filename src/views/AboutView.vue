<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 px-6 py-20 max-w-5xl mx-auto">
    <h1 class="text-5xl font-bold mb-12 text-center text-indigo-600">About Me</h1>

    <div class="flex flex-col md:flex-row items-center gap-16">
      <!-- Profile Image -->
      <img
        src="https://i.pravatar.cc/320"
        alt="Profile Picture"
        class="w-64 h-64 rounded-full object-cover shadow-lg"
      />

      <!-- About Text + Skills -->
      <div class="flex-1">
        <p class="mb-6 text-lg leading-relaxed">
          Hello! I'm An Liya, a passionate full-stack developer with experience in building scalable, efficient, and user-friendly web applications.
          I specialize in Laravel, Vue.js, Tailwind CSS, and have a deep understanding of backend and frontend development.
          I love crafting clean code and intuitive interfaces that solve real-world problems.
        </p>

        <h2 class="text-2xl font-semibold mb-4 text-indigo-600">My Skills</h2>

        <div class="space-y-5">
          <SkillBar skill="HTML" level="95" />
          <SkillBar skill="CSS & Tailwind" level="90" />
          <SkillBar skill="JavaScript" level="85" />
          <SkillBar skill="Vue.js" level="80" />
          <SkillBar skill="PHP & Laravel" level="85" />
          <SkillBar skill="MySQL" level="80" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const SkillBar = {
  props: {
    skill: String,
    level: Number, // 0 to 100
  },
  template: `
    <div>
      <div class="flex justify-between mb-1">
        <span class="font-medium text-gray-700">{{ skill }}</span>
        <span class="font-medium text-gray-600">{{ level }}%</span>
      </div>
      <div class="w-full bg-gray-300 rounded-full h-4">
        <div
          class="bg-indigo-600 h-4 rounded-full transition-all duration-500"
          :style="{ width: level + '%' }"
        ></div>
      </div>
    </div>
  `,
}
</script>
