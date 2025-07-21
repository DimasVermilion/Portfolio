<template>
  <section id="Blogs" class="bg-[#f5f2e8] py-10" data-aos="fade-up">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Judul -->
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-blue-900">Blogs</h2>
        <div class="w-24 h-1 bg-yellow-400 mt-2 mx-auto"></div>
      </div>

      <!-- Grid Card -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div v-for="blog in blogs" :key="blog.id" class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
          <img :src="`${apiUrl}${blog.Images.formats.small.url}`"alt="blog" class="w-full h-48 object-cover"/>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-blue-900">{{ blog.Title }}</h3>
            <p class="text-sm text-gray-600 mt-2 line-clamp-3">{{ blog.Content }}</p>
             <nuxt-link :to="`/Blogs/${blog.Slug}`">
              <p class="text-blue-500 hover:underline mt-3 inline-block" >Lihat Selengkapnya</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const blogs = ref([])
const config = useRuntimeConfig()
const apiUrl = config.public.API_URL

onMounted(async () => {
  const res = await fetch(`${apiUrl}/api/blogs?populate=Images`)
  const data = await res.json()
  blogs.value = data.data.map((item) => item.attributes ?? item)
})
</script>
