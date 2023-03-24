<template>
  <header class="base-header">
    <base-breadcrumbs class="base-header__breadcrumbs">
      <template #menu>
        <div class="base-header__breadcrumbs-menu"> menu </div>
      </template>
    </base-breadcrumbs>

    <div class="profile">
      <base-icon name="profile" class="icon-20" />
    </div>
  </header>
</template>

<script setup lang="ts">
import BaseBreadcrumbs from '@/components/molecules/BaseBreadcrumbs/BaseBreadcrumbs.vue'
</script>

<style lang="scss" scoped>
.base-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
