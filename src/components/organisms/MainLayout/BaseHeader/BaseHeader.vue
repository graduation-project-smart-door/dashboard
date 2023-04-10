<template>
  <header class="base-header">
    <base-breadcrumbs class="base-header__breadcrumbs" />

    <div v-if="isAuthorized"> Cool </div>

    <div class="profile">
      <base-icon name="profile" class="icon-20" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useUser } from '@/composables/useUser'

const { isAuthorized } = useUser()
</script>

<style lang="scss" scoped>
.base-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
