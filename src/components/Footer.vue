<template>
  <footer class="bg-gradient-to-r from-teal-50 via-sky-50 to-violet-50 border-t border-gray-200 text-gray-700 py-10">
    <div class="max-w-7xl mx-auto px-6 grid gap-6 sm:grid-cols-3 items-center text-center sm:text-left">
      
      <!-- Branding -->
      <div>
        <h2 class="text-xl font-bold text-indigo-700">An Liya</h2>
        <p class="text-sm text-gray-600 mt-1">Full Stack Developer</p>
      </div>

      <!-- Navigation -->
      <div class="space-x-4">
        <RouterLink to="/" class="hover:text-indigo-700 transition">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-indigo-700 transition">About</RouterLink>
        <RouterLink to="/skill" class="hover:text-indigo-700 transition">Skills</RouterLink>
        <RouterLink to="/projects" class="hover:text-indigo-700 transition">Projects</RouterLink>
        <RouterLink to="/contact" class="hover:text-indigo-700 transition">Contact</RouterLink>
      </div>

      <!-- Copyright -->
      <div class="text-gray-500 sm:text-right text-sm">
        <p>© 2025 An Liya</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

