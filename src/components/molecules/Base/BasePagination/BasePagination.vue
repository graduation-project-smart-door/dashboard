<template>
  <div class="base-pagination">
    <div v-if="!isMobileOrTablet" class="text-md color-primary-secondary">
      {{ props.text }}
    </div>

    <el-pagination
      :current-page="props.page"
      :next-icon="buttonNextIcon"
      :pager-count="isMobileOrTablet ? 5 : 7"
      :page-count="props.pageCount"
      :page-size="props.limit"
      :prev-icon="buttonPrevIcon"
      :total="props.total"
      class="mt-12"
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import BaseIcon from '@/components/atoms/BaseIcon/BaseIcon.vue'
import { h, shallowRef } from 'vue'
import { useScreen } from '@/hooks/useScreen'

type Props = {
  total?: number
  page?: number
  limit?: number
  pageCount: number
  text: string
}

type Emits = {
  (e: 'change-page', page: number): void
}

const emits = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  page: 1,
  limit: 10,
  pageCount: 100,
  total: 1000,
})

const { isMobileOrTablet } = useScreen()

const buttonNextIcon = shallowRef({
  render() {
    return h(BaseIcon, {
      name: 'arrow',
      reverse: true,
    })
  },
})

const buttonPrevIcon = shallowRef({
  render() {
    return h(BaseIcon, {
      name: 'arrow',
    })
  },
})

const handleCurrentChange = (currentPage: number): void => {
  emits('change-page', currentPage)
}
</script>

<style lang="scss" scoped>
.base-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include responsive(xs) {
    justify-content: center;
  }
}
</style>
