<template>
  <div v-if="blog" class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-blue-900 mb-4">{{ blog.Title }}</h1>

    <img
      v-if="blog.Images" :src="`${apiUrl}${blog.Images.formats?.medium?.url || blog.Images.url}`" alt="Blog image" class="rounded-lg w-full h-64 object-cover mb-6"/>

    <div class="text-gray-800 leading-relaxed" v-html="blog.Content.replace(/\n/g, '<br>')"></div>
  </div>

  <div v-else class="text-center py-12 text-gray-500"> Memuat Blog... </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const blog = ref(null)
const apiUrl = 'http://localhost:1337'
const route = useRoute()

onMounted(async () => {
  try {
    const res = await fetch(`${apiUrl}/api/blogs?filters[Slug][$eq]=${route.params.slug}&populate=*`)
    const data = await res.json()

    if (data.data && data.data.length > 0) {
      blog.value = {
        ...data.data[0],
      }
    } else {
      console.warn('Blog not found:', route.params.slug)
    }
  } catch (error) {
    console.error('Error fetching blog:', error)
  }
})
</script>
