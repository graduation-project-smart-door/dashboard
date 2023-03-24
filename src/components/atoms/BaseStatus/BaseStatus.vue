<template>
  <div :class="statusClasses">
    {{ currentStatusText }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { StatusType } from '@/types/common.type'

type Props = {
  status: StatusType
}

const props = withDefaults(defineProps<Props>(), {
  status: 'default',
})

const statusText = {
  enter: 'Вошел',
  exit: 'Вышел',
  default: '',
}

const statusClasses = computed(() => ['base-status', `base-status--${props.status}`])
const currentStatusText = computed(() => statusText[props.status])
</script>

<style lang="scss" scoped>
.base-status {
  @include text-sm;

  width: fit-content;
  border-radius: 8px;
  padding: 4px 12px;

  &--enter {
    color: $color--white;
    background-color: $color--success;
  }

  &--exit {
    color: $color--white;
    background-color: $color--danger;
  }
}
</style>
