<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'

const chartCanvas = ref(null)
let chartInstance = null

const selectedMonth = ref('')
const bulanList = ref([])
const laporans = ref([])

async function fetchBulan() {
  bulanList.value = await $fetch('http://localhost:8000/api/laporan/bulan')
  if (bulanList.value.length > 0) {
    selectedMonth.value = bulanList.value[0].value // default bulan terbaru
    fetchData()
  }
}

async function fetchData() {
  const [tahun, bulan] = selectedMonth.value.split('-')

  // Ambil Statistik
  const statistik = await $fetch(`http://localhost:8000/api/laporan/statistik?bulan=${bulan}&tahun=${tahun}`)

  const labels = Object.keys(statistik)
  const values = Object.values(statistik)

  if (chartInstance) chartInstance.destroy()

  chartInstance = new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Jumlah Laporan',
        data: values,
        backgroundColor: ['#f87171', '#60a5fa', '#34d399']
      }]
    }
  })

  // Ambil Daftar Laporan
  laporans.value = await $fetch(`http://localhost:8000/api/laporan?bulan=${bulan}&tahun=${tahun}`)
}

onMounted(fetchBulan)
</script>
