<template>
  <div class="">
    <!-- Navbar -->
    <header class=" fixed w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <a href="/" class="text-lg font-bold text-blue-900">Dimas Vermilion</a>

      <!-- Hamburger (mobile) -->
      <button @click="menuOpen = !menuOpen" class="md:hidden">
        <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <!-- Menu items (desktop) -->
      <nav class="hidden md:flex space-x-6 text-sm text-gray-700">
        <a href="/#about" class="py-2 hover:text-blue-900">About</a>
        <a href="/#Projects" class="py-2 hover:text-blue-900">Project</a>
        <a href="/Blogs" class="py-2 hover:text-blue-900">Blog</a>
        <a href="/#contact" class="btn px-4 py-2 rounded hover:bg-yellow-500 bg-yellow-400 text-black font-semibold">
          Contact
        </a>
      </nav>
    </header>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden px-6 pb-4 space-y-3 text-sm text-gray-700 bg-white shadow">
      <a href="/#about" class="block hover:text-blue-900">About</a>
      <a href="/#Projects" class="block hover:text-blue-900">Project</a>
      <a href="/Blogs" class="block hover:text-blue-900">Blog</a>
      <a href="/#contact" class="inline-block mt-2 px-4 py-2 rounded hover:bg-yellow-500 bg-yellow-400 text-black font-semibold">
        Contact
      </a>
    </div>


    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  })
})
const menuOpen = ref(false)
</script>