<template>
  <el-table class="events-table" :data="props.events" @row-click="handleEmployeePageOpen">
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
    <el-table-column label="Время">
      <template #default="{ row }">
        {{ row.time }}
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
import { useRouter } from 'vue-router'

import { EventType } from '@/types/event.type'
import { ApiUserType } from '@/types/user.type'
import { ROUTE_NAMES } from '@/constants/routeNames'

type Props = {
  events: EventType[]
}

const props = withDefaults(defineProps<Props>(), {
  events: () => [],
})

const router = useRouter()

const handleEmployeePageOpen = ({ id }: Pick<ApiUserType, 'id'>): void => {
  router.push({ name: ROUTE_NAMES.EmployeePage, params: { id } })
}
</script>
