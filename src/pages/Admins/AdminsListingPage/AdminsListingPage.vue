<template>
  <div class="admins-listing-page">
    <admins-listing-table :users="usersData" />

    <base-pagination
      text="Отображено 1 to 10 of 57 администраторов"
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

import AdminsService from '@/services/AdminsService/AdminsService'

import { ApiUserType } from '@/types/user.type'

const users = ref<ApiUserType[]>([])

const tablePagination = ref({
  limit: 10,
  page: 1,
  total: 100,
  pageCount: 100,
})

onMounted(() => {
  // getAdmins()
})

const getAdmins = async (): Promise<void> => {
  const [error, response] = await AdminsService.getAll()

  if (!error && response) {
    users.value = response
  }
}

const changePage = async (page: number): Promise<void> => {
  tablePagination.value.page = page

  await getAdmins()
}
</script>

<style lang="scss" scoped>
.admins-listing-page {
  border-radius: 20px;
  background-color: $color--white;
  padding: 15px;
}

.infinite-list {
  height: 300px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.infinite-list .infinite-list-item {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--el-color-primary);
  background: var(--el-color-primary-light-9);
  margin: 10px;
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
