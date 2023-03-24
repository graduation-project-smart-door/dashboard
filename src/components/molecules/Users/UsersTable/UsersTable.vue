<template>
  <el-table class="users-table" :data="props.users">
    <el-table-column label="id">
      <template #default="{ row }">
        {{ row.id }}
      </template>
    </el-table-column>
    <el-table-column label="First name">
      <template #default="{ row }">
        {{ row.first_name }}
      </template>
    </el-table-column>
    <el-table-column label="Last name">
      <template #default="{ row }">
        {{ row.last_name }}
      </template>
    </el-table-column>
    <el-table-column label="email">
      <template #default="{ row }">
        {{ row.email }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { UserType } from '@/types/user.type'

type Props = {
  users: UserType[]
}

const props = withDefaults(defineProps<Props>(), {
  users: () => [],
})
</script>
