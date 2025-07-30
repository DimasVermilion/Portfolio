<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Statistik Laporan</h2>

    <label class="block mb-2">Pilih Bulan:</label>
    <select v-model="selectedMonth" @change="fetchStatistik" class="mb-4 p-2 border rounded">
      <option v-for="bulan in bulanList" :key="bulan.value" :value="bulan.value">
        {{ bulan.label }}
      </option>
    </select>

    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'
import { format } from 'date-fns'

const chartCanvas = ref(null)
let chartInstance = null

const selectedMonth = ref('2025-07')

const bulanList = [
  { label: 'Juli 2025', value: '2025-07' },
  { label: 'Juni 2025', value: '2025-06' },
  { label: 'Mei 2025', value: '2025-05' },
]

async function fetchStatistik() {
  const data = await $fetch(`/stats/${selectedMonth.value}.json`)

  const labels = Object.keys(data)
  const values = Object.values(data)

  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Jumlah Laporan',
        data: values,
        backgroundColor: ['#f87171', '#60a5fa', '#34d399']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          precision: 0
        }
      }
    }
  })
}

onMounted(() => {
  fetchStatistik()
})
</script>
