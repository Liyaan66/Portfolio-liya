<template>
  <div class="min-h-screen bg-gradient-to-br from-[#f0f9ff] via-white to-[#f5f3ff] text-gray-800">
    <!-- Hero Section -->
    <section class="min-h-[60vh] flex flex-col justify-center items-center text-center 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-6 py-20 
        bg-[length:400%_400%] animate-gradient-xy">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">About Me</h1>
      <p class="text-lg md:text-xl max-w-3xl animate-fade-in delay-300">
        Learn more about who I am, what I do, and the journey that brought me here.
      </p>
    </section>

    <!-- Profile & Bio Section -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img
          src="../assets/profile/disc.png"
          alt="An Liya"
          class="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-xl border-4 border-indigo-200"
        />

        <div class="max-w-2xl text-center md:text-left">
          <h2 class="text-3xl font-bold text-indigo-700 mb-4">Who Am I?</h2>
          <p class="text-gray-700 mb-3">
            I’m An Liya, a dedicated full-stack developer with a strong background in web development, currently studying web development at Passerelles numériques Cambodia (PNC).
          </p>
          <p class="text-gray-600">
            I’m not only a coder — I’m a problem solver, creative thinker, and team leader. Whether I’m leading as a club president or coordinating as a class monitor, I bring energy and clarity to every role.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills or Achievements -->
    <section class="py-20 px-6 bg-gradient-to-r from-[#f5f3ff] via-white to-[#e0f2fe]">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-indigo-700 mb-8">Highlights</h2>
        <div class="grid md:grid-cols-3 gap-8 text-left">
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">Web Development Student</h3>
            <p class="text-gray-600">Currently learning and building real-world applications using Laravel, Vue.js, and MySQL.</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">Club Leader</h3>
            <p class="text-gray-600">Organized team events, managed tech workshops, and built a strong developer community at school.</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2">Class Monitor</h3>
            <p class="text-gray-600">Led classroom communication and coordination between teachers and students for better teamwork.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-6 bg-indigo-600 text-white text-center">
      <h2 class="text-3xl font-bold mb-4">Interested in working together?</h2>
      <p class="text-lg mb-6">Let’s connect and build something great. Whether it's a freelance gig or a full-time role, I'm open to opportunities!</p>
      <RouterLink
        to="/contact"
        class="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
      >
        Contact Me
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
// Static content, no script needed
</script>

<style scoped>
@keyframes animate-gradient-xy {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
.animate-gradient-xy {
  animation: animate-gradient-xy 10s ease infinite;
}
</style>
