<template>
  <div class="base-sidebar-mobile">
    <!--    TODO: После перехода по страницам не закрывается popover-->
    <nav class="base-sidebar-mobile__content">
      <ul class="d-f ai-c jc-sb">
        <li>
          <el-popover
            :show-arrow="false"
            :width="120"
            placement="top"
            popper-class="base-sidebar-mobile__popper"
            trigger="click"
          >
            <template #reference>
              <base-icon name="pages" class="icon-24" />
            </template>
            <ul>
              <li>
                <router-link :to="{ name: ROUTE_NAMES.UsersPage }"> Пользователи </router-link>
              </li>
              <li>
                <router-link :to="{ name: ROUTE_NAMES.EventsPage }"> Действия </router-link>
              </li>
              <li>
                <router-link :to="{ name: ROUTE_NAMES.EmployeePage, params: { id: '1' } }"> Работник </router-link>
              </li>
            </ul>
          </el-popover>
        </li>

        <li>
          <el-popover
            :show-arrow="false"
            :width="100"
            placement="top"
            popper-class="base-sidebar-mobile__popper"
            trigger="click"
          >
            <template #reference>
              <base-icon name="microcontroller" class="icon-24" />
            </template>
            <ul>
              <li>
                <router-link :to="{ name: ROUTE_NAMES.ControllerPage }"> Статистика </router-link>
              </li>
            </ul>
          </el-popover>
        </li>

        <li>
          <router-link :to="{ name: ROUTE_NAMES.HomePage }">
            <base-icon name="logo" class="icon-18" />
          </router-link>
        </li>

        <li>
          <el-popover
            :show-arrow="false"
            :width="100"
            placement="top"
            popper-class="base-sidebar-mobile__popper"
            trigger="click"
          >
            <template #reference>
              <base-icon name="door" class="icon-24" />
            </template>
            <ul>
              <li>
                <router-link :to="{ name: ROUTE_NAMES.DoorPage }"> Статистика двери </router-link>
              </li>
            </ul>
          </el-popover>
        </li>

        <li>
          <el-popover
            :show-arrow="false"
            :width="200"
            placement="top"
            popper-class="base-sidebar-mobile__popper"
            trigger="click"
          >
            <template #reference>
              <base-icon name="users" class="icon-24" />
            </template>
            <ul>
              <li>
                <router-link :to="{ name: ROUTE_NAMES.AdminsListingPage }"> Все администраторы </router-link>
              </li>
              <li>
                <router-link :to="{ name: ROUTE_NAMES.AdminsCreatePage }"> Создать администратора </router-link>
              </li>
            </ul>
          </el-popover>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ROUTE_NAMES } from '@/constants/routeNames'
</script>

<style lang="scss" scoped>
.base-sidebar-mobile {
  @include z-index(menu);

  left: 0;
  bottom: 0;
  width: 100%;
  position: fixed;
  box-shadow: 0 -1px 13px 0 rgb(94 114 228 / 0.2);
  background-color: $color--white;
  padding: 0 10px;

  &__content {
    padding: 8px 12px;
  }

  .base-icon {
    color: $color--primary-secondary;
  }
}
</style>
