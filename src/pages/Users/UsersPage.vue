<template>
  <div class="users-page">
    <users-table :users="usersData" />

    <base-pagination
      text="Отображено 1 to 10 of 57 пользователей"
      :limit="tablePagination.limit"
      :page="tablePagination.page"
      :page-count="tablePagination.pageCount"
      :total="tablePagination.total"
      @change-page="changePage"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { usersData } from '@/pages/Users/users.constant'
import UserService from '@/services/UserService/UserService'
import { ApiUserType } from '@/types/user.type'
import BasePagination from '@/components/molecules/Base/BasePagination/BasePagination.vue'

const users = ref<ApiUserType[]>([])

const tablePagination = ref({
  limit: 10,
  page: 1,
  total: 100,
  pageCount: 100,
})

onMounted(() => {
  // getUsers()
})

const getUsers = async (): Promise<void> => {
  const [error, response] = await UserService.getAll({
    limit: tablePagination.value.limit,
    page: tablePagination.value.page,
  })

  if (!error && response) {
    users.value = response
  }
}

const changePage = async (page: number): Promise<void> => {
  tablePagination.value.page = page

  await getUsers()
}
</script>

<style lang="scss" scoped>
.users-page {
  border-radius: 20px;
  background-color: $color--white;
  padding: 15px;
}
</style>
