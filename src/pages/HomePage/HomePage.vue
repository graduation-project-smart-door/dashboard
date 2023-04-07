<template>
  <div class="home-page">
    <div class="d-f ai-c jc-sb">
      <home-last-visit-card v-for="(_, index) in [...Array(6)].map((x) => 0)" :key="index" />
    </div>

    <el-row class="home-page__content-top">
      <el-col :md="16" class="home-page__visiting-chart-wrapper">
        <home-visiting-chart :arrival="[]" :leaving="[]" />
      </el-col>
      <el-col :md="8">
        <div class="home-page__image-wrapper">
          <div class="home-page__image" />
          <div class="home-page__image-content-wrapper">
            <div class="home-page__image-content">
              <h3>Не хочешь также ныть?</h3>
              <div class="text-lg">
                Получи диплом в <span class="bold">ВКИ</span>
                <br />
                и будешь счастлив!
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="home-page__content-bottom" align="middle">
      <el-col :xs="24" :sm="24" :lg="18">
        <el-row class="h-100 average-time">
          <el-col :span="24">
            <home-average-chart :data="[]" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="0" :sm="0" :lg="6">
        <div class="px-20">
          <div>
            <div>
              <span>Входов в день</span>
            </div>
            <div class="-value-">
              <!--              <icon-template name="in" :width="16" :height="16" />-->
              <!--              <span class="-h1-">{{ statistic.inputs }}</span>-->
              <h4>19647</h4>
            </div>
          </div>
          <div>
            <div>
              <span>Выходов в день</span>
            </div>
            <div class="-value-">
              <!--              <icon-template name="out" :width="16" :height="16" />-->
              <!--              <span class="-h1-">{{ statistic.outputs }}</span>-->
              <h4>19647</h4>
            </div>
          </div>
          <div>
            <div>
              <span>Среднее время</span>
            </div>
            <div>
              <!--  <span class="-h1-">
              {{ Math.round(statistic.average_time) > 0 ? Math.round(statistic.average_time) : 0 }} час.</span>-->
              <h4>182</h4>
            </div>
            <router-link :to="{ name: ROUTE_NAMES.EventsPage }"> См. всех </router-link>
          </div>
          <!--  <span v-if="statistic.number_in_office" class="note
          -note-nu- -light-gray-" style="margin-bottom: 20px">-->
          <!--          *Данные приведены за {{ moment(statistic.number_in_office.month,
           'YYYY-MM').locale('ru').format('MMMM')}}-->
          <!--          {{moment(statistic.number_in_office.month, 'YYYY-MM').format('YYYY')}}г-->
          <!--        </span>-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ROUTE_NAMES } from '@/constants/routeNames'
import HomeVisitingChart from '@/components/molecules/Home/HomeVisitingChart/HomeVisitingChart.vue'
</script>

<style lang="scss" scoped>
.home-page {
  &__image {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-image: linear-gradient(6deg, rgb(50 5 101 / 0.3) 0%, rgb(71 16 148 / 0.5) 30%, rgb(168 131 255) 100%),
      url('@/assets/images/static/home/image.jpg');

    &-wrapper {
      height: 100%;
      position: relative;
      border-radius: 20px;
      padding-left: 30px;
    }

    &-content {
      color: $color--white;

      &-wrapper {
        bottom: 0;
        position: absolute;
        padding: 30px;
      }
    }
  }

  &__content {
    &-top {
      height: 540px;
      margin-top: 30px;
    }

    &-bottom {
      box-shadow: 0 5px 14px rgb(0 0 0 / 0.05);
      margin-top: 24px;
    }
  }

  &__visiting-chart-wrapper {
    height: 100%;
  }
}
</style>
