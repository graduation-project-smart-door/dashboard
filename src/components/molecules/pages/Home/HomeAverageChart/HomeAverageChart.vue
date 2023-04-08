<template>
  <div class="home-average-chart">
    <bar-chart v-bind="barChartProps" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { BarChart, useBarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import { fillPlugin } from '@/utils/chart'

Chart.register(...registerables)

// type Props = {
//   data: unknown[]
// }

// const props = withDefaults(defineProps<Props>(), {
//   data: () => [],
// })

// const labels = computed(() => {
//   return props.data.map((user: any) => {
//     const fullName = 'Cool guy'
//
//     return `${fullName[0]} ${fullName[1][0]}.`
//   })
// })

const labels = ['Cool guy1', 'Cool guy2', 'Cool guy3', 'Cool guy4']

const chartData = reactive({
  labels: labels,
  datasets: [
    {
      // data: props.data.map((user: any) => {
      //   return Math.round(Date.now())
      // }),
      data: [...Array.from({ length: 5 }).map((_, index) => index)],
      backgroundColor: [
        '#2c80e0',
        '#3a9ef3',
        '#50A7FC',
        '#4FAFFC',
        '#4EB6FC',
        '#4DBFFD',
        '#4CC6FD',
        '#4ACEFD',
        '#49D6FD',
        '#48DDFE',
      ],
      barPercentage: 0.3,
      min: 0,
    },
  ],
})

const options = {
  plugins: {
    customCanvasBackgroundColor: {
      color: '#ffffff',
    },
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
  indexAxis: 'y',
  scales: {
    y: {
      grid: {
        drawTicks: false,
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 12,
        },
        padding: 14,
      },
    },
  },
}

const { barChartProps } = useBarChart({
  chartData: chartData,
  options,
  plugins: [fillPlugin],
})
</script>

<style lang="scss" scoped>
.home-average-chart {
  :deep(#bar-chart) {
    border-radius: 20px;
  }
}
</style>
