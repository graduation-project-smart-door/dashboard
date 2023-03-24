<template>
  <div class="users-page">
    <users-table :users="usersData" />
  </div>
</template>

<script setup lang="ts">
import { usersData } from '@/pages/Users/users.constant'
</script>
