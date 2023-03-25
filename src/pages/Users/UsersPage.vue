<template>
  <div class="users-page">
    <users-table :users="usersData" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { usersData } from '@/pages/Users/users.constant'
import UserService from '@/services/UserService/UserService'
import { UserType } from '@/types/user.type'

const users = ref<UserType[]>([])

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
