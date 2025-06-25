<template>
  <footer class="bg-white border-t border-gray-200 py-10 text-center text-sm text-gray-600">
    <div class="max-w-7xl mx-auto px-6 grid gap-6 sm:grid-cols-3 items-center text-center sm:text-left">
      
      <!-- Left: Branding -->
      <div>
        <h2 class="text-xl font-bold text-indigo-600">An Liya</h2>
        <p class="text-sm text-gray-500 mt-1">Full Stack Developer</p>
      </div>

      <!-- Center: Navigation Links -->
      <div class="space-x-4">
        <RouterLink to="/" class="text-gray-600 hover:text-indigo-600 transition">Home</RouterLink>
        <RouterLink to="/about" class="text-gray-600 hover:text-indigo-600 transition">About</RouterLink>
        <RouterLink to="/projects" class="text-gray-600 hover:text-indigo-600 transition">Projects</RouterLink>
        <RouterLink to="/blog" class="text-gray-600 hover:text-indigo-600 transition">Blog</RouterLink>
        <RouterLink to="/contact" class="text-gray-600 hover:text-indigo-600 transition">Contact</RouterLink>
      </div>

      <!-- Right: Copyright -->
      <div class="text-gray-400 sm:text-right">
        <p>© 2025 An Liya</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
