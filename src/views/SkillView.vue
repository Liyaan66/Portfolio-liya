<template>
  <section class="py-20 px-6 bg-gradient-to-r from-white via-sky-50 to-indigo-50">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-indigo-700 mb-12">My Skills</h2>

      <!-- Frontend Skills -->
      <div class="mb-10">
        <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Frontend</h3>
        <div class="space-y-6">
          <SkillBar name="HTML" :level="95" color="bg-indigo-600" />
          <SkillBar name="CSS" :level="90" color="bg-purple-500" />
          <SkillBar name="JavaScript" :level="85" color="bg-yellow-400" />
          <SkillBar name="Vue.js" :level="80" color="bg-green-400" />
          <SkillBar name="Tailwind CSS" :level="85" color="bg-teal-400" />
        </div>
      </div>

      <!-- Backend Skills -->
      <div class="mb-10">
        <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Backend</h3>
        <div class="space-y-6">
          <SkillBar name="PHP" :level="80" color="bg-pink-500" />
          <SkillBar name="Laravel" :level="75" color="bg-red-400" />
          <SkillBar name="Node.js" :level="65" color="bg-lime-500" />
          <SkillBar name="MySQL" :level="70" color="bg-blue-400" />
        </div>
      </div>

      <!-- Tools -->
      <div>
        <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Tools</h3>
        <div class="space-y-6">
          <SkillBar name="Git & GitHub" :level="85" color="bg-gray-700" />
          <SkillBar name="Docker" :level="60" color="bg-cyan-600" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillBar from '@/components/SkillBar.vue'
</script>

