<template>
  <el-table class="users-table" :data="props.users" @row-click="handleEmployeePageOpen">
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
    <el-table-column label="Отчетсво">
      <template #default="{ row }">
        {{ row.last_name }}
      </template>
    </el-table-column>
    <el-table-column label="Телефон">
      <template #default="{ row }">
        {{ row.phone }}
      </template>
    </el-table-column>
    <el-table-column label="Роль">
      <template #default="{ row }">
        {{ ROLES_MAP[row.role] }}
      </template>
    </el-table-column>
    <el-table-column label="Почта">
      <template #default="{ row }">
        {{ row.email }}
      </template>
    </el-table-column>
    <el-table-column label="Дата регистрации">
      <template #default="{ row }">
        {{ row.created_at }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

import { ROUTE_NAMES } from '@/constants/routeNames'
import { ROLES_MAP } from '@/constants'

import { ApiUserType } from '@/types/user.type'

type Props = {
  users: ApiUserType[]
}

const props = withDefaults(defineProps<Props>(), {
  users: () => [],
})

const router = useRouter()

const handleEmployeePageOpen = ({ id }: Pick<ApiUserType, 'id'>): void => {
  router.push({ name: ROUTE_NAMES.EmployeePage, params: { id } })
}
</script>
