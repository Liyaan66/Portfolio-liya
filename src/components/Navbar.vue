<template>
  <header class="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-100 via-sky-50 to-violet-50 shadow z-50">
    <nav class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      <!-- Logo -->
      <h1 class="text-2xl font-bold text-indigo-700">An Liya</h1>

      <!-- Navigation Links -->
      <ul class="flex space-x-6 font-medium text-gray-700">
        <li>
          <RouterLink
            to="/"
            class="hover:text-indigo-600 transition"
            exact-active-class="text-indigo-700 font-bold underline"
            exact
          >Home</RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="hover:text-indigo-600 transition"
            active-class="text-indigo-700 font-bold underline"
          >About</RouterLink>
        </li>
        <li>
          <RouterLink
            to="/projects"
            class="hover:text-indigo-600 transition"
            active-class="text-indigo-700 font-bold underline"
          >Projects</RouterLink>
        </li>
        <li>
          <RouterLink
            to="/blog"
            class="hover:text-indigo-600 transition"
            active-class="text-indigo-700 font-bold underline"
          >Blog</RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="hover:text-indigo-600 transition"
            active-class="text-indigo-700 font-bold underline"
          >Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
