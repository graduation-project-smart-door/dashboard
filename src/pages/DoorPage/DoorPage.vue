<template>
  <el-row class="door-page" :gutter="12">
    <!--    <el-col :span="24" :md="12">-->
    <!--      <div class="door-page__content">-->
    <!--        <door-player class="w-100" />-->
    <!--      </div>-->
    <!--    </el-col>-->

    <!--    <el-col :span="24" :md="12" class="mt-24 mt-md-0">-->
    <!--      <div class="door-page__content">-->
    <!--        <door-player class="w-100" />-->
    <!--      </div>-->
    <!--    </el-col>-->

    <el-col :span="24" class="mt-12">
      <div class="door-page__content">
        <h3>Управление дверью</h3>

        <div class="mt-12">
          <div class="door-page__content-buttons">
            <el-button type="info" class="door-page__interaction-button" @click="handleHealthCheck">
              <div class="content-buttons__left">
                <button-loader v-if="!statuses.healthcheck.loaded" />
                <base-icon v-else name="check-circle" class="icon-30 info-icon" />
              </div>
              <div class="content-buttons__right">
                <div> Проверка сервера </div>
                <div v-if="statuses.healthcheck.text" class="mt-8">
                  {{ statuses.healthcheck.text }}
                </div>
              </div>
            </el-button>
            <el-button type="primary" class="door-page__interaction-button" @click="handleCalibrate">
              <div class="content-buttons__left">
                <button-loader v-if="!statuses.calibrate.loaded" />
                <base-icon v-else name="check-circle" class="icon-30 info-icon" />
              </div>
              <div class="content-buttons__right">
                <div> Калибровка двери </div>
                <div v-if="statuses.calibrate" class="mt-8">
                  {{ statuses.calibrate.text }}
                </div>
              </div>
            </el-button>
            <el-button type="success" class="door-page__interaction-button" @click="handleOpen">
              <div class="content-buttons__left">
                <button-loader v-if="!statuses.open.loaded" />
                <base-icon v-else name="check-circle" class="icon-30 info-icon" />
              </div>
              <div class="content-buttons__right">
                <div> Аварийное открытие двери </div>
                <div v-if="statuses.open" class="mt-8">
                  {{ statuses.open.text }}
                </div>
              </div>
            </el-button>
            <el-button type="warning" class="door-page__interaction-button" @click="handleClose">
              <div class="content-buttons__left">
                <button-loader v-if="!statuses.close.loaded" />
                <base-icon v-else name="check-circle" class="icon-30 info-icon" />
              </div>
              <div class="content-buttons__right">
                <div> Аварийное закрытие двери </div>
                <div v-if="statuses.close" class="mt-8">
                  {{ statuses.close.text }}
                </div>
              </div>
            </el-button>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>

  <!-- <iframe src="http://127.0.0.1:5501/?webcam=2" width="100%" height="700px" /> -->
</template>

<script lang="ts" setup>
import { useScreen } from '@/hooks/useScreen'
import { useDoor } from '@/pages/DoorPage/useDoor'

const { isMobile } = useScreen()
const {
  close: handleClose,
  open: handleOpen,
  healthCheck: handleHealthCheck,
  calibrate: handleCalibrate,
  statuses,
} = useDoor()
</script>

<style lang="scss" scoped>
.door-page {
  &__content {
    border-radius: 15px;
    box-shadow: 0 5px 14px rgb(0 0 0 / 0.05);
    background-color: $color--white;
    padding: 15px;
  }

  &__content-buttons {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    @include responsive(sm, $breakpoints-only-max) {
      flex-direction: row;
      justify-content: left;
    }
    @include responsive(xs) {
      justify-content: center;
    }
  }

  &__interaction-button {
    display: flex;
    align-items: center;
    border-radius: 8px;

    :deep(span) {
      height: 100%;
      display: flex;
      justify-content: center;
    }
  }
}

.el-button--primary {
  height: 100px;
  position: relative;
  align-items: center;
  padding: 0;
}

.content-buttons {
  display: flex;
  align-items: center;

  &__left {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: #172b4d;
  }

  &__right {
    width: 200px;
    position: relative;
    align-content: center;
    justify-content: center;
    padding: 20px;
  }
}

.info-icon {
  margin: 0 20px;
}
</style>
