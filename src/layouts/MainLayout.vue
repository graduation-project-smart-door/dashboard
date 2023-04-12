<template>
  <div class="main-layout">
    <base-sidebar v-if="!isMobile" />
    <base-sidebar-mobile v-else />

    <div :class="backgroundClasses" />

    <div class="main-layout__content-wrapper">
      <base-header />
      <div class="main-layout__content">
        <div class="main-layout__container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { ROUTE_NAMES } from '@/constants/routeNames'
import { useScreen } from '@/hooks/useScreen'

const route = useRoute()

const { isMobile } = useScreen()

const backgroundClasses = computed(() => ['bg', { 'with-image': route.name === ROUTE_NAMES.EmployeePage }])
</script>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  padding: 15px 15px 30px;

  &__content-wrapper {
    width: 100%;
    height: 100%;
    min-width: 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;

    @include responsive(xs) {
      height: calc(100% - 60px);
    }
  }

  &__content {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    padding: 0 0 30px;
    margin-top: 30px;

    @include responsive(sm) {
      padding: 0 20px;
    }

    @include responsive(md) {
      padding: 0 50px;
    }
  }

  &__container {
    width: 100%;
    height: fit-content;
    max-width: 100%;

    @include responsive(xs, $breakpoints-only-max) {
      max-width: 550px;
    }
  }
}

.bg {
  @include z-index(below);

  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  position: absolute;
  background-color: $color--primary;

  &.with-image {
    background-image: linear-gradient(6deg, rgb(50 5 101 / 0.3) 0%, rgb(71 16 148 / 0.5) 30%, rgb(168 131 255) 100%),
      url('@/assets/images/static/employee/bg.jpg');
    background-position: 50% 75%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
