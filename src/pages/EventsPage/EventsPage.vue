<template>
  <div class="events-page">
    <events-table :events="eventsData" />

    <base-pagination
      text="Отображено 1 to 10 of 57 действий"
      :limit="tablePagination.limit"
      :page="tablePagination.page"
      :page-count="tablePagination.pageCount"
      :total="tablePagination.total"
      @change-page="changePage"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { eventsData } from '@/pages/EventsPage/event.constant'
import EventsService from '@/services/EventsService/EventsService'
import { EventType } from '@/types/event.type'
import EventsServiceSse from '@/services/EventsService/EventsService.sse'

const events = ref<EventType[]>([])

const tablePagination = ref({
  limit: 10,
  page: 1,
  total: 100,
  pageCount: 100,
})

onMounted(() => {
  // getEvents()
})

const getEvents = async (): Promise<void> => {
  const [error, response] = await EventsService.getAll()

  if (!error && response) {
    events.value = response
  }
}

const changePage = async (page: number): Promise<void> => {
  tablePagination.value.page = page

  await getEvents()
}
</script>

<style lang="scss" scoped>
.events-page {
  border-radius: 20px;
  background-color: $color--white;
  padding: 15px;
}
</style>
