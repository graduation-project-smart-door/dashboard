<template>
  <aside class="base-sidebar">
    <router-link class="d-f ai-c jc-c py-16" :to="{ name: ROUTE_NAMES.HomePage }">
      <base-icon name="logo" class="icon-32 mr-8" />
      <div class="text-lg bold">Dashboard</div>
    </router-link>

    <div class="divider px-28" />

    <base-sidebar-collapse />
  </aside>
</template>

<script setup lang="ts">
import { ROUTE_NAMES } from '@/constants/routeNames'
</script>

<style lang="scss" scoped>
.base-sidebar {
  width: 250px;
  min-width: 250px;
  border-radius: 12px;
  background-color: $color--white;
  padding: 8px;
  margin: 16px 30px 0 16px;
}
</style>
