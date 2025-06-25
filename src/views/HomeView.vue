<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Hero Section -->
    <section
      class="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4"
    >
      <h1 class="text-6xl font-extrabold mb-4">Hi, I'm An Liya</h1>
      <p class="text-2xl mb-6">Full Stack Developer | Problem Solver | Creative Thinker</p>
      <div class="flex space-x-4">
        <RouterLink
          to="/projects"
          class="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >View Projects</RouterLink
        >
        <RouterLink
          to="/contact"
          class="border-2 border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition"
          >Contact Me</RouterLink
        >
      </div>
    </section>

    <!-- Profile Section -->
    <section
      id="profile"
      class="max-w-4xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-10"
    >
      <!-- Profile Image -->
      <img
        src="../assets/profile/liya.png"
        alt="An Liya"
        class="w-48 h-48 rounded-full object-cover shadow-lg"
      />

      <!-- Profile Info -->
      <div class="max-w-xl text-center md:text-left">
        <h2 class="text-4xl font-bold mb-4 text-indigo-600">About Me</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          I’m a passionate full-stack developer with expertise in Laravel,
          Vue.js, and modern web technologies. I build scalable, performant
          applications that solve real problems and delight users.
        </p>
        <p class="text-gray-600 italic">
          When I’m not coding, you’ll find me exploring new tech, reading,
          or hiking in nature.
        </p>

        <!-- Social Links -->
        <div class="mt-6 flex justify-center md:justify-start space-x-6 text-indigo-600 text-2xl">
          <a href="https://github.com/yourusername" aria-label="GitHub" target="_blank" rel="noopener">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-7 h-7 hover:text-indigo-400 transition"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.205 11.42c.6.11.82-.26.82-.58v-2.16c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.3-1.74-1.3-1.74-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.75.4-1.27.73-1.56-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.45 11.45 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.6-2.8 5.62-5.48 5.92.42.36.8 1.07.8 2.16v3.2c0 .32.22.69.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
          </a>

          <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" target="_blank" rel="noopener">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-7 h-7 hover:text-indigo-400 transition"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.368-1.85 3.602 0 4.268 2.368 4.268 5.452v6.289zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.889 20.452H3.786V9h3.103v11.452zM22.225 0H1.771C.792 0 0 .78 0 1.746v20.507C0 23.218.792 24 1.771 24h20.451C23.206 24 24 23.218 24 22.253V1.746C24 .78 23.206 0 22.225 0z"
              />
            </svg>
          </a>

          <!-- Add more social icons if needed -->
        </div>
      </div>
    </section>

    <!-- Projects Preview -->
    <section id="projects" class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-10">Featured Projects</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 class="text-xl font-semibold mb-2">Inventory Management App</h3>
            <p class="text-gray-600">
              Laravel + Vue system to manage café stock and sales in real time.
            </p>
          </div>
          <div class="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 class="text-xl font-semibold mb-2">Student Timetable System</h3>
            <p class="text-gray-600">
              A PHP MVC app with validation and smart schedule builder features.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section id="skills" class="bg-gray-50 py-20 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">Tech Stack</h2>
        <div
          class="flex flex-wrap justify-center gap-4 text-lg font-medium text-gray-700"
        >
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
    <section
      id="contact"
      class="bg-indigo-600 text-white py-20 px-6"
    >
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-4">Let's Work Together!</h2>
        <p class="text-lg mb-6">
          Open for freelance or full-time roles. Let’s create something amazing.
        </p>
        <a
          href="mailto:you@example.com"
          class="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >Send Email</a
        >
      </div>
    </section>
  </div>
</template>

<script setup>
// No JS needed for this static profile section
</script>
