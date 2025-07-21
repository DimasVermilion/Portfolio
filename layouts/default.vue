<!-- layouts/default.vue -->
<template>
  <div>
    <Navbar />
    <main class="pt-20">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'


import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true
  })
})
</script>
