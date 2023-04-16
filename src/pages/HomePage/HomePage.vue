<template>
  <div class="home-page">
    <div class="home-page__cards">
      <home-last-visit-card v-for="(_, index) in [...Array(5)].map((x) => 0)" :key="index" class="m-4" />
    </div>

    <transition-group tag="ul" name="fade" class="d-f ai-c">
      <div v-for="(card, index) in users" :key="index" class="card">{{ card.value }}</div>
    </transition-group>

    <el-row class="home-page__content-top">
      <el-col :md="16" class="home-page__visiting-chart-wrapper">
        <home-visiting-filters @change-filters="changeFilters" />

        <home-visiting-chart :arrival="[]" :leaving="[]" />
      </el-col>
      <el-col :span="0" :md="8">
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
      <el-col :span="24" :md="18">
        <el-row class="h-100 average-time">
          <el-col :span="24">
            <home-average-chart :data="[]" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="0" :sm="0" :md="6">
        <div class="px-20">
          <div>
            <div>
              <span class="bold">Входов в день</span>
            </div>
            <div>
              <!--              <icon-template name="in" :width="16" :height="16" />-->
              <!--              <span class="-h1-">{{ statistic.inputs }}</span>-->
              <h5 class="color-gray">19647</h5>
            </div>
          </div>
          <div class="mt-8">
            <div>
              <span class="bold">Выходов в день</span>
            </div>
            <div class="-value-">
              <!--              <icon-template name="out" :width="16" :height="16" />-->
              <!--              <span class="-h1-">{{ statistic.outputs }}</span>-->
              <h5 class="color-gray">19647</h5>
            </div>
          </div>
          <div class="mt-8">
            <div>
              <span class="bold">Среднее время</span>
            </div>
            <div>
              <!--  <span class="-h1-">
              {{ Math.round(statistic.average_time) > 0 ? Math.round(statistic.average_time) : 0 }} час.</span>-->
              <h5 class="color-gray">182</h5>
            </div>
            <router-link class="link my-8 d-b" :to="{ name: ROUTE_NAMES.EventsPage }"> См. всех </router-link>
          </div>
          <span> *Данные приведены за месяц </span>
          <!--          <span> *Данные приведены за {{ statistic.period }} </span>-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { ROUTE_NAMES } from '@/constants/routeNames'
import StatisticService from '@/services/StatisticService/StatisticService'
import EventsServiceSse from '@/services/EventsService/EventsService.sse'

import { DatesFilterType } from '@/types/statistic.type'

const users = ref<any>([])

onMounted(() => {
  // getSseEvents()
})

const changeFilters = async (dates: DatesFilterType): Promise<void> => {
  const [error, response] = await StatisticService.getVisitingChart(dates)

  if (!error && response) {
    console.log('success')
  }
}

// const getSseEvents = (): void => {
//   console.log(EventsServiceSse.getEvents())
// }

const getSseEvents = async (): Promise<void> => {
  const eventSource = new EventSource('/api/coins')

  eventSource.addEventListener('message', ({ data }) => {
    const _data = JSON.parse(data)

    users.value.push(_data)

    if (users.value >= 5) {
      users.value.shift()
    }
  })
}
</script>

<style lang="scss" scoped>
.home-page {
  &__cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    @include responsive(sm) {
      justify-content: space-between;
    }

    @include responsive(sm, $breakpoints-only-max) {
      display: none;
    }
  }

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
      margin-top: 30px;
    }

    &-bottom {
      border-radius: 20px;
      box-shadow: 0 5px 14px rgb(0 0 0 / 0.05);
      background-color: $color--white;
      padding: 15px;
      margin-top: 24px;
    }
  }

  &__visiting-chart-wrapper {
    height: 100%;
    border-radius: 20px;
    background-color: $color--white;
  }
}

.card {
  width: 250px;
  height: 250px;
  background-color: $color--primary-secondary;
  margin-right: 12px;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: scaleX(0.01) translate(30px, 0);
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}
</style>
