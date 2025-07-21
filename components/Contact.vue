<template>
  <section id="contact" class="py-16 bg-gray-50">
    <div class="max-w-3xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-blue-900 mb-6">Contact Me</h2>
      <p class="text-gray-700 mb-10">You can reach me via the following platforms:</p>

      <div class="flex justify-center flex-wrap gap-6">
        <a v-for="contact in contacts" :key="contact.id" :href="contact.Url" class="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition" target="_blank" rel="noopener noreferrer" >
          <img v-if="contact.Icon" :src="contact.Icon" alt="icon" class="w-6 h-6"/>
             <span class="text-base font-medium">{{ contact.Platform }}</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Footer Section -->
  <footer class="bg-blue-900 text-white py-6 mt-16">
    <div class="max-w-4xl mx-auto px-4 flex justify-center">
      <p class="text-sm text-center">&copy; {{ new Date().getFullYear() }} Dimas Vermilion. All rights reserved.</p>
    </div>
  </footer>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const contacts = ref([])
const apiUrl = 'http://localhost:1337'

onMounted(async () => {
  try {
    const res = await fetch(`${apiUrl}/api/contacts?populate=*`)
    const json = await res.json()

    if (!json.data || !Array.isArray(json.data)) {
      console.error('Data kosong atau salah format:', json)
      return
    }

   contacts.value = json.data.map(item => {
  const iconData = item.Icon
  const iconUrl = iconData?.formats?.thumbnail?.url || iconData?.url

  return {
    id: item.id,
    Platform: item.Platform,
    Url: item.Url,
    Icon: iconUrl ? apiUrl + iconUrl : null,
  }
})


  } catch (err) {
    console.error('Gagal mengambil kontak:', err)
  }
})

</script>
