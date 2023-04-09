<template>
  <div class="admins-listing">
    <admins-listing-table :users="usersData" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { usersData } from '@/pages/Users/users.constant'
import UserService from '@/services/UserService/UserService'
import { ApiUserType } from '@/types/user.type'

const users = ref<ApiUserType[]>([])

onMounted(() => {
  // getUsers()
})

const getUsers = async (): Promise<void> => {
  const [error, response] = await UserService.getAll()

  if (!error && response) {
    users.value = response
  }
}
</script>
