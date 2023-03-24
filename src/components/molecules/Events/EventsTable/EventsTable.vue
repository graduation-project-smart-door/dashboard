<template>
  <el-table class="events-table" :data="props.events">
    <el-table-column label="id">
      <template #default="{ row }">
        {{ row.id }}
      </template>
    </el-table-column>
    <el-table-column label="Имя">
      <template #default="{ row }">
        {{ row.first_name }}
      </template>
    </el-table-column>
    <el-table-column label="Фамилия">
      <template #default="{ row }">
        {{ row.last_name }}
      </template>
    </el-table-column>
    <el-table-column label="Статус">
      <template #default="{ row }">
        <base-status :status="row.status" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { EventType } from '@/types/event.type'

type Props = {
  events: EventType[]
}

const props = withDefaults(defineProps<Props>(), {
  events: () => [],
})
</script>
