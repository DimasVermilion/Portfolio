<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Header -->
    <header class="bg-gray-900 text-white flex items-center justify-between px-4 py-3">
      <div class="flex items-center space-x-1 text-xl font-bold">
        <span class="text-yellow-300">Yuk</span>
        <span class="text-white">LAPOR</span>
      </div>
      <div class="space-y-1 cursor-pointer">
        <div class="w-6 h-0.5 bg-white"></div>
        <div class="w-6 h-0.5 bg-white"></div>
        <div class="w-6 h-0.5 bg-white"></div>
      </div>
    </header>

    <!-- Riwayat Laporan -->
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-3">Riwayat Laporan</h2>
      <div class="space-y-3">
        <div
          v-for="laporan in laporanList"
          :key="laporan.id"
          class="bg-white rounded-lg p-3 shadow flex justify-between items-start"
        >
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-gray-600">📌</span>
              <p class="font-medium text-gray-800">{{ laporan.judul }}</p>
            </div>
            <div class="flex items-center space-x-2 mt-1 text-sm text-gray-500">
              <span>📂 {{ laporan.kategori }}</span>
            </div>
            <p class="text-xs text-gray-400 mt-1">{{ laporan.tanggal }}</p>
          </div>
          <span
            class="text-xs font-semibold"
            :class="{
              'text-yellow-500': laporan.status === 'Diproses',
              'text-green-600': laporan.status === 'Selesai',
              'text-red-500': laporan.status === 'Ditolak'
            }"
          >
            {{ laporan.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Data dinamis (dummy dulu)
const laporanList = ref([
  {
    id: 1,
    judul: 'Fasilitas kursi rusak...',
    kategori: 'Fasilitas',
    status: 'Diproses',
    tanggal: '10/10/25'
  },
  {
    id: 2,
    judul: 'Lampu kelas mati...',
    kategori: 'Fasilitas',
    status: 'Selesai',
    tanggal: '11/10/25'
  }
])
</script>
