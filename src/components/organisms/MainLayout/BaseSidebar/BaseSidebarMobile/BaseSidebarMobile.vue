<template>
  <div class="base-sidebar-mobile">
    <nav class="base-sidebar-mobile__content">
      <ul class="d-f ai-c jc-sb">
        <li>
          <el-dropdown ref="pagesDropdownInstance" trigger="contextmenu" class="dropdown">
            <base-icon
              name="pages"
              class="icon-24"
              @click="handleDropdownVisibleToggle(true, 'pagesDropdownInstance')"
            />

            <template #dropdown>
              <ul>
                <li class="dropdown__item">
                  <router-link
                    :to="{ name: ROUTE_NAMES.UsersPage }"
                    @click="handleDropdownVisibleToggle(false, 'pagesDropdownInstance')"
                  >
                    Пользователи
                  </router-link>
                </li>
                <li class="dropdown__item">
                  <router-link
                    :to="{ name: ROUTE_NAMES.EventsPage }"
                    @click="handleDropdownVisibleToggle(false, 'pagesDropdownInstance')"
                  >
                    Действия
                  </router-link>
                </li>
                <li class="dropdown__item">
                  <router-link
                    :to="{ name: ROUTE_NAMES.EmployeePage, params: { id: '1' } }"
                    @click="handleDropdownVisibleToggle(false, 'pagesDropdownInstance')"
                  >
                    Работник
                  </router-link>
                </li>
              </ul>
            </template>
          </el-dropdown>
        </li>

        <li>
          <router-link :to="{ name: ROUTE_NAMES.HomePage }">
            <base-icon name="logo" class="icon-18" />
          </router-link>
        </li>

        <li>
          <el-dropdown ref="doorDropdownInstance" trigger="contextmenu" class="dropdown">
            <base-icon name="door" class="icon-24" @click="handleDropdownVisibleToggle(true, 'doorDropdownInstance')" />

            <template #dropdown>
              <ul>
                <li class="dropdown__item">
                  <router-link
                    :to="{ name: ROUTE_NAMES.DoorPage }"
                    @click="handleDropdownVisibleToggle(false, 'doorDropdownInstance')"
                  >
                    Управление дверью
                  </router-link>
                </li>
              </ul>
            </template>
          </el-dropdown>
        </li>

        <li>
          <el-dropdown ref="adminsDropdownInstance" trigger="contextmenu" class="dropdown">
            <base-icon
              name="users"
              class="icon-24"
              @click="handleDropdownVisibleToggle(true, 'adminsDropdownInstance')"
            />

            <template #dropdown>
              <ul>
                <li class="dropdown__item">
                  <router-link
                    :to="{ name: ROUTE_NAMES.AdminsListingPage }"
                    @click="handleDropdownVisibleToggle(false, 'adminsDropdownInstance')"
                  >
                    Все администраторы
                  </router-link>
                </li>
                <li class="dropdown__item">
                  <router-link
                    :to="{ name: ROUTE_NAMES.AdminsCreatePage }"
                    @click="handleDropdownVisibleToggle(false, 'adminsDropdownInstance')"
                  >
                    Создать администратора
                  </router-link>
                </li>
              </ul>
            </template>
          </el-dropdown>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { ElDropdown } from 'element-plus'

import { ROUTE_NAMES } from '@/constants/routeNames'

const pagesDropdownInstance = ref<typeof ElDropdown>()
const microcontrollerDropdownInstance = ref<typeof ElDropdown>()
const doorDropdownInstance = ref<typeof ElDropdown>()
const adminsDropdownInstance = ref<typeof ElDropdown>()

const handleDropdownVisibleToggle = (state: boolean, instance: string): void => {
  const instanceMap = {
    pagesDropdownInstance: pagesDropdownInstance.value,
    microcontrollerDropdownInstance: microcontrollerDropdownInstance.value,
    doorDropdownInstance: doorDropdownInstance.value,
    adminsDropdownInstance: adminsDropdownInstance.value,
  } as Record<string, typeof ElDropdown>

  const currentInstance = instanceMap[instance]

  if (!currentInstance) return

  state ? currentInstance.handleOpen() : currentInstance.handleClose()
}
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

.dropdown {
  &__item {
    padding: 8px 12px;
  }
}
</style>
