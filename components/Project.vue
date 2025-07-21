<template>
  <section id="Projects" class="bg-[#f5f2e8] py-10">
    <div class="max-w-7xl mx-auto px-4 scroll-smooth">
      <!-- Judul -->
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-blue-900">My Project</h2>
        <div class="w-24 h-1 bg-yellow-400 mt-2 mx-auto"></div>
      </div>

      <!-- Grid Card -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div v-for="project in projects" :key="project.id" class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
          <img :src="`${apiUrl}${project.Images.formats.medium.url}`"alt="project" class="w-full h-48 object-cover"/>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-blue-900">{{ project.Title }}</h3>
            <p class="text-sm text-gray-600 mt-2 ">{{ project.Content }}</p>
            <a :href="project.Url "target="_blank" class="text-blue-500 hover:underline mt-3 inline-block">Lihat Project</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const projects = ref([])
const apiUrl = 'http://localhost:1337'

onMounted(async () => {
  const res = await fetch(`${apiUrl}/api/projects?populate=Images`)
  const data = await res.json()
  projects.value = data.data.map((item) => item.attributes ?? item)
})
</script>