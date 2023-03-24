<template>
  <doughnut :data="chartData" :options="options" />
</template>

<script lang="ts" setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { chartData, options } from '@/components/molecules/Home/HomeWeekChart/homeWeekChart.constant'

ChartJS.register(ArcElement, Tooltip, Legend)
</script>
