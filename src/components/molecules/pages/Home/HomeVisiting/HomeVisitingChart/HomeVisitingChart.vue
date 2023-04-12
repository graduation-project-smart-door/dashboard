<template>
  <line-chart v-bind="lineChartProps" class="home-visiting-chart" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Chart, registerables } from 'chart.js'
import { LineChart, useLineChart } from 'vue-chart-3'
import gradient from 'chartjs-plugin-gradient'
import { fillPlugin } from '@/utils/chart'
import { useScreen } from '@/hooks/useScreen'

Chart.register(...registerables, gradient)

type Props = {
  arrival: unknown[]
  leaving: unknown[]
}

const props = withDefaults(defineProps<Props>(), {
  arrival: () => [],
  leaving: () => [],
})

const { isMobile } = useScreen()

const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'].map((day) => {
  if (isMobile.value && day === 'Понедельник') {
    return 'Пн'
  }

  return day
})

const chartData = reactive({
  labels: daysOfWeek,
  datasets: [
    {
      label: 'Приходы и уходы',
      borderColor: '#596cff',
      borderWidth: 4,
      fill: true,
      tension: 0.4,
      cubicInterpolationMode: 'monotone',
      gradient: {
        backgroundColor: {
          axis: 'y',
          colors: {
            0: 'rgba(255, 255, 255, 0)',
            100: 'rgba(89, 108, 255, 0.2)',
          },
        },
      },
      data: [65, 59, 80, 81, 56, 55, 40],
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
  scales: {
    y: {
      grid: {
        display: true,
        borderDash: [8, 8],
        lineWidth: 2,
        color: function (context: any) {
          if (context.index === 5) {
            return 'transparent'
          } else if (context.tick.value > 0) {
            return '#dee2e6'
          }

          return '#dee2e6'
        },
        drawBorder: false,
      },
      ticks: {
        display: false,
        count: 6,
      },
      min: 0,
    },
    x: {
      ticks: {
        padding: isMobile.value ? 12 : 24,
        color: '#8392AB',
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
}

const { lineChartProps, lineChartRef } = useLineChart({
  chartData: chartData as any,
  options,
  plugins: [fillPlugin],
})
</script>

<style lang="scss" scoped>
.home-visiting-chart {
  height: 100%;

  :deep(#line-chart) {
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 14px rgb(0 0 0 / 0.05);
  }
}
</style>
