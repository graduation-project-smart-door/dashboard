<template>
  <el-row class="home-visiting-filters">
    <el-col :md="6">
      <el-select v-model="selectedPeriod" class="mr-12" placeholder="Период">
        <el-option
          v-for="item in homeVisitingFiltersOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>

    <el-col :md="18">
      <el-date-picker
        v-model="selectedDatePeriod"
        type="daterange"
        start-placeholder="От"
        end-placeholder="До"
        :default-time="defaultDatePeriod"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
// eslint-disable-next-line max-len
import { homeVisitingFiltersOptions } from '@/components/molecules/pages/Home/HomeVisiting/HomeVisitingFilters/HomeVisitingFilters.constant'
import { DatesFilterType } from '@/types/statistic.type'
import moment from 'moment'

type Emits = {
  (e: 'change-filters', dates: DatesFilterType): void
}

const emits = defineEmits<Emits>()

const selectedPeriod = ref('week')
const defaultDatePeriod = ref<Date[]>([new Date(), new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)])

const selectedDatePeriod = ref(defaultDatePeriod.value)

const onFiltersChange = (): void => {
  const nowDate = new Date()

  switch (selectedPeriod.value) {
    case 'week':
      selectedDatePeriod.value = [nowDate, new Date(nowDate.getTime() - 7 * 24 * 60 * 60 * 1000)]

      break

    case 'month':
      selectedDatePeriod.value = [nowDate, new Date(nowDate.getTime() - 30 * 24 * 60 * 60 * 1000)]

      break

    case 'halfYear':
      selectedDatePeriod.value = [nowDate, new Date(nowDate.getTime() - 182 * 24 * 60 * 60 * 1000)]

      break

    case 'year':
      selectedDatePeriod.value = [nowDate, new Date(nowDate.getTime() - 364 * 24 * 60 * 60 * 1000)]

      break

    default: {
      selectedDatePeriod.value = [nowDate, nowDate]

      break
    }
  }

  emits('change-filters', {
    date_from: moment(selectedDatePeriod.value[0]).format('DD.MM.YYYY'),
    date_to: moment(selectedDatePeriod.value[1]).format('DD.MM.YYYY'),
  })
}

watch(
  () => selectedPeriod.value,
  () => {
    onFiltersChange()
  }
)

onMounted(() => {
  emits('change-filters', {
    date_from: moment(selectedDatePeriod.value[0]).format('DD.MM.YYYY'),
    date_to: moment(selectedDatePeriod.value[1]).format('DD.MM.YYYY'),
  })
})
</script>

<style lang="scss" scoped>
.home-visiting-filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
</style>
