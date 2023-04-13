<template>
  <el-row class="door-page" :gutter="12">
    <el-col :span="24" :md="12">
      <div class="door-page__content">
        <door-player class="w-100" />
      </div>
    </el-col>

    <el-col :span="24" :md="12" class="mt-24 mt-md-0">
      <div class="door-page__content">
        <door-player class="w-100" />
      </div>
    </el-col>

    <el-col :span="24" class="mt-12">
      <div class="door-page__content">
        <h3>Статистика</h3>

        <div class="mt-12">
          <div class="text-lg">
            Расстояние до объекта:

            <span class="text-md">8m</span>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { useScreen } from '@/hooks/useScreen'

const { isMobile } = useScreen()
</script>

<style lang="scss" scoped>
.door-page {
  &__content {
    border-radius: 15px;
    box-shadow: 0 5px 14px rgb(0 0 0 / 0.05);
    background-color: $color--white;
    padding: 15px;
  }
}
</style>
