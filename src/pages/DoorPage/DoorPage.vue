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
            <el-button type="info" class="door-page__interaction-button">
              <div class="content-buttons__left">
                <base-icon name="check-circle" class="icon-30 info-icon" />
              </div>
              <div class="content-buttons__right">Проверка сервера</div>
            </el-button>
            <el-button type="primary" class="door-page__interaction-button">
              <div class="content-buttons__left">
                <base-icon name="check-circle" class="icon-30 info-icon" />
              </div>
              <div class="content-buttons__right">Калибровка двери</div>
            </el-button>
            <el-button type="success" class="door-page__interaction-button">
              <div class="content-buttons__left">
                <base-icon name="check-circle" class="icon-30 info-icon" />
              </div>
              <div class="content-buttons__right">Аварийное открытие двери</div>
            </el-button>
            <el-button type="warning" class="door-page__interaction-button">
              <div class="content-buttons__left">
                <base-icon name="check-circle" class="icon-30 info-icon" />
              </div>
              <div class="content-buttons__right">Аварийное закрытие двери</div>
            </el-button>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>

  <video src="http://localhost:8082/video" width="100%" height="700px" />
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

  &__content-buttons {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    @include responsive(sm, $breakpoints-only-max) {
      flex-direction: row;
      justify-content: left;
    }
    @include responsive(xs) {
      justify-content: left;
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
