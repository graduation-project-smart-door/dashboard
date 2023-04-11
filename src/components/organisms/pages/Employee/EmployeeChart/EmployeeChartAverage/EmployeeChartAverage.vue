<template>
  <radar-chart v-bind="radarChartProps" class="employee-chart-average" />
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from 'vue'
import { RadarChart, useRadarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

type Props = {
  data: unknown[]
}

const props = defineProps<Props>()

const averageData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 12))

const chartData = reactive({
  labels: ['24', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22'],
  datasets: [
    {
      backgroundColor: 'rgba(2, 148, 255, 0.25)',
      borderColor: '#0294FF',
      pointBackgroundColor: '#0294FF',
      borderWidth: 2,
      data: averageData,
    },
  ],
})

const calculateMaxScale = () => {
  let maxEmployeesCount = Math.max.apply(null, averageData) + 20

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
      display: false,
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
.employee-chart-average {
  max-height: 475px;

  :deep(#radar-chart) {
    width: 100% !important;
    height: 375px !important;
  }
}
</style>
