<template>
  <radar-chart v-bind="radarChartProps" class="employee-chart-events-count" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { RadarChart, useRadarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

type Props = {
  data: unknown[]
}

const props = defineProps<Props>()

const averageEnterData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100))
const averageExitData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100))

const chartData = reactive({
  labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  datasets: [
    {
      label: 'Приходы',
      backgroundColor: 'rgba(94, 114, 228, 0.3)',
      borderColor: 'rgba(94, 114, 228, 0.5)',
      pointBackgroundColor: 'rgba(94, 114, 228, 0.7)',
      borderWidth: 2,
      data: averageEnterData,
    },
    {
      label: 'Уходы',
      backgroundColor: 'rgba(121,51,241,0.38)',
      borderColor: 'rgba(143,94,228,0.5)',
      pointBackgroundColor: 'rgba(143,94,228,0.7)',
      borderWidth: 2,
      data: averageExitData,
    },
  ],
})

const calculateMaxScale = () => {
  let maxEmployeesCount = Math.max.apply(null, averageEnterData) + 20

  if (maxEmployeesCount % 10 !== 0) {
    maxEmployeesCount = maxEmployeesCount + 10 - (maxEmployeesCount % 10)
  }

  return maxEmployeesCount
}

const options = {
  plugins: {
    tooltip: {
      cornerRadius: 2,
      yAlign: 'top',
      xAlign: 'center',
      yPadding: 5,
      caretSize: 3,
      caretPadding: 6,
      displayColors: false,
      bodyFontSize: 10,
      callbacks: {
        title: () => '',
      },
    },
    legend: {
      display: true,
    },
  },
  scale: {
    min: 0,
    max: calculateMaxScale(),
  },
  scales: {
    r: {
      pointLabels: {
        color: '#9fa9ba',
        font: {
          size: 16,
        },
      },
      ticks: {
        stepSize: 20,
        color: '#c7ccd9',
        font: {
          size: 10,
        },
      },
    },
  },
}

const { radarChartProps, radarChartRef } = useRadarChart({
  chartData: chartData,
  options,
})
</script>

<style lang="scss" scoped>
.employee-chart-events-count {
  :deep(#radar-chart) {
    width: 100% !important;
    height: 300px !important;

    @include responsive(sm) {
      height: 375px !important;
    }
  }
}
</style>
