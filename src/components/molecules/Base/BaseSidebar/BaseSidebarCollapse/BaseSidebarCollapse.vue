<template>
  <el-collapse v-model="activeNames" class="base-sidebar-collapse">
    <el-collapse-item title="Страницы" name="1">
      <ul>
        <li class="base-sidebar-collapse__page">
          <router-link class="base-sidebar-collapse__link" :to="{ name: ROUTE_NAMES.UsersPage }">
            Все пользователи
          </router-link>
        </li>
        <li class="base-sidebar-collapse__page">
          <router-link class="base-sidebar-collapse__link" :to="{ name: ROUTE_NAMES.EventsPage }">
            Действия
          </router-link>
        </li>

        <li class="base-sidebar-collapse__page">
          <router-link
            class="base-sidebar-collapse__link"
            :to="{ name: ROUTE_NAMES.EmployeePage, params: { id: '1' } }"
          >
            Работник
          </router-link>
        </li>
      </ul>
    </el-collapse-item>

    <el-collapse-item title="Дверь" name="3">
      <ul>
        <li class="base-sidebar-collapse__page">
          <router-link class="base-sidebar-collapse__link" :to="{ name: ROUTE_NAMES.DoorPage }">
            Управление дверью
          </router-link>
        </li>
      </ul>
    </el-collapse-item>

    <el-collapse-item title="Администраторы" name="4">
      <ul>
        <li class="base-sidebar-collapse__page">
          <router-link class="base-sidebar-collapse__link" :to="{ name: ROUTE_NAMES.AdminsListingPage }">
            Все администраторы
          </router-link>
        </li>
        <li class="base-sidebar-collapse__page">
          <router-link class="base-sidebar-collapse__link" :to="{ name: ROUTE_NAMES.AdminsCreatePage }">
            Создать администратора
          </router-link>
        </li>
      </ul>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { ROUTE_NAMES } from '@/constants/routeNames'

const activeNames = ref([''])
</script>

<style lang="scss" scoped>
.base-sidebar-collapse {
  &__link {
    @include text-lg;

    width: 100%;
    display: block;
    color: $color--gray;

    &:hover {
      color: $color--gray-800;
    }
  }

  &__page {
    padding: 11px 0 11px 28px;
  }
}
</style>
