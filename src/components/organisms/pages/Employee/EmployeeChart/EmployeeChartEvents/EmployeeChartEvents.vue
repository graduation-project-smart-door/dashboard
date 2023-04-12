<template>
  <line-chart v-bind="lineChartProps" class="employee-chart-events" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Chart, registerables } from 'chart.js'
import { LineChart, useLineChart } from 'vue-chart-3'
import 'chartjs-adapter-moment'
import moment from 'moment'
import { fillPlugin } from '@/utils/chart'

Chart.register(...registerables)

type Props = {
  arrival: unknown[]
  leaving: unknown[]
}

const props = withDefaults(defineProps<Props>(), {
  arrival: () => [],
  leaving: () => [],
})

const arrivalData = [
  {
    date: '2021-10-11',
    time: '10:33:00',
    direction: 'enter',
  },
  {
    date: '2021-10-12',
    time: '10:10:00',
    direction: 'enter',
  },
  {
    date: '2021-10-13',
    time: '11:30:11',
    direction: 'enter',
  },
  {
    date: '2021-10-14',
    time: '11:30:11',
    direction: 'enter',
  },
].map((value) => ({
  x: moment(value.date).format('YYYY.MM.DD'),
  y: moment(value.time, ['hh:mm:ss']).format('HH:mm'),
  type: value.direction,
}))

const leavingData = [
  {
    date: '2021-10-11',
    direction: 'exit',
    time: '19:33:00',
  },
  {
    date: '2021-10-12',
    time: '22:10:00',
    direction: 'exit',
  },
  {
    date: '2021-10-13',
    time: '18:30:11',
    direction: 'exit',
  },
  {
    date: '2021-10-14',
    time: '19:30:11',
    direction: 'enter',
  },
].map((value) => ({
  x: moment(value.date).format('YYYY.MM.DD'),
  y: moment(value.time, ['hh:mm:ss']).format('HH:mm'),
  type: value.direction,
}))

const chartData = reactive({
  datasets: [
    {
      label: 'Приходы',
      borderColor: '#5e72e4',
      pointBackgroundColor: '#0f2495',
      borderWidth: 2,
      fill: '+1',
      tension: 0.4,
      backgroundColor: 'rgba(94, 114, 228, 0.3)',
      cubicInterpolationMode: 'monotone',
      data: arrivalData,
    },
    {
      label: 'Уходы',
      backgroundColor: '#a73dff',
      borderColor: '#9315f8',
      borderWidth: 2,
      data: leavingData,
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
        label: (value: any) => value.formattedValue,
      },
    },
  },

  scales: {
    y: {
      reverse: true,
      ticks: {
        stepSize: 1,
        color: '#8392ab',
      },
      grid: {
        display: false,
      },
      type: 'time',
      time: {
        parser: 'HH.mm',
        unit: 'hour',
        tooltipFormat: 'HH:mm',
        displayFormats: {
          hour: 'HH',
        },
      },
      min: '00:00',
      max: '24:00',
    },
    x: {
      ticks: {
        color: '#8392ab',
      },
      type: 'time',
      time: {
        unit: 'day',
        unitStepSize: 1,
        displayFormats: {
          day: 'DD',
        },
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
.employee-chart-events {
  margin-top: 20px;

  :deep(#line-chart) {
    width: 100% !important;
    height: 300px !important;

    @include responsive(sm) {
      height: 375px !important;
    }
  }

  @include responsive(sm) {
    margin-top: 0;
  }
}
</style>
