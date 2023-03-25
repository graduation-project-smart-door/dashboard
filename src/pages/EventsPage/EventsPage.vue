<template>
  <div class="events-page">
    <events-table :events="eventsData" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { eventsData } from '@/pages/EventsPage/event.constant'
import EventsService from '@/services/EventsService/EventsService'
import { EventType } from '@/types/event.type'

const events = ref<EventType[]>([])

onMounted(() => {
  // getEvents()
})

const getEvents = async (): Promise<void> => {
  const [error, response] = await EventsService.getAll()

  if (!error && response) {
    events.value = response
  }
}
</script>
