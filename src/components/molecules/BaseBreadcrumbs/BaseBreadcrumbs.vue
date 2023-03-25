<template>
  <div class="base-breadcrumbs">
    <div>
      <div class="breadcrumbs__pages">
        <ul class="base-breadcrumbs__menu">
          <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
            <router-link
              :class="['base-breadcrumbs__menu-link', { disabled: !breadcrumb.isLink }]"
              :to="breadcrumb.name"
            >
              {{ breadcrumb.title }}
            </router-link>
          </li>
        </ul>
      </div>

      <h6 v-if="lastBreadcrumb.name !== '/'" class="color-white">{{ lastBreadcrumb.title }}</h6>
    </div>

    <slot name="menu" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import { ROUTE_NAMES } from '@/constants/routeNames'

type BreadcrumbType = {
  title: string
  name: string
  isLink: boolean
}

const route = useRoute()

const breadcrumbs = ref<BreadcrumbType[]>([
  {
    name: ROUTE_NAMES.Home,
    title: '',
    isLink: true,
  },
])

const lastBreadcrumb = computed(() => breadcrumbs.value[breadcrumbs.value.length - 1])

watch(
  () => route.name,
  () => {
    breadcrumbs.value = route.meta.breadcrumb as BreadcrumbType[]
  }
)

onMounted(() => {
  breadcrumbs.value = route.meta.breadcrumb as BreadcrumbType[]
})
</script>

<style lang="scss" scoped>
.base-breadcrumbs {
  width: 100%;
  max-width: 250px;
  display: flex;
  justify-content: space-between;

  &__menu {
    display: flex;
    align-items: center;

    &-link {
      color: $color--white;
      transition: color 0.15s ease-in-out;

      &:hover {
        color: $color-gray-300;
      }
    }
  }
}
</style>
