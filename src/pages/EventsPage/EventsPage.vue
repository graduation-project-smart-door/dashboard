<template>
  <div class="events-page">
    <events-table :events="eventsData" />
  </div>
</template>

<script setup lang="ts">
import { eventsData } from '@/pages/EventsPage/event.constant'
</script>
