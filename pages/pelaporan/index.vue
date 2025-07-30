<template>
  <div class="bg-gray-200 min-h-screen flex flex-col items-center">
    <!-- Judul -->
    <div class="bg-white rounded-full px-5 py-3 shadow-md mt-6">
      <h1 class="text-center font-bold text-lg">Pelaporan Kerusakan Fasilitas</h1>
    </div>

    <!-- Form -->
    <div class="bg-white rounded-xl p-5 shadow-lg w-11/12 max-w-md mt-6">
      <form @submit.prevent="kirimLaporan" class="space-y-4">
        <!-- Judul -->
        <div>
          <label class="block text-sm font-medium">Judul</label>
          <input
            v-model="form.judul"
            type="text"
            class="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <!-- Deskripsi -->
        <div>
          <label class="block text-sm font-medium">Deskripsi</label>
          <textarea
            v-model="form.deskripsi"
            class="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="3"
            required
          ></textarea>
        </div>

        <!-- Bukti -->
        <div>
          <label class="block text-sm font-medium">Bukti</label>
          <input
            type="file"
            @change="handleFile"
            class="border w-full p-2 rounded-md bg-white"
          />
        </div>

        <!-- Lokasi -->
        <div>
          <label class="block text-sm font-medium">Lokasi</label>
          <input
            v-model="form.lokasi"
            type="text"
            class="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="bg-green-400 text-black font-semibold w-full py-2 rounded-md hover:bg-green-500 transition"
        >
          Kirim Laporan
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  judul: '',
  deskripsi: '',
  bukti: null,
  lokasi: ''
})

const handleFile = (e) => {
  form.value.bukti = e.target.files[0]
}

const kirimLaporan = () => {
  console.log('Data laporan:', form.value)
  alert('Laporan berhasil dikirim!')
  // Nanti bisa diganti dengan API post ke Laravel backend
}
</script>
