<template>
  <div ref="player" class="door-player" />
</template>

<script lang="ts" setup>
import Artplayer from 'artplayer'
import { nextTick, onMounted, ref } from 'vue'

const player = ref<HTMLDivElement>()

onMounted(() => {
  nextTick(() => {
    new Artplayer({
      container: player.value as HTMLDivElement,
      url: 'http://127.0.0.1:8082/webcam',
      volume: 0.5,
      isLive: false,
      autoplay: false,
      whitelist: ['*'],
      theme: '#23ade5',
      lang: navigator.language.toLowerCase(),
      moreVideoAttr: {
        crossOrigin: 'anonymous',
      },
    })
  })
})

defineExpose({
  player,
})
</script>

<style lang="scss" scoped>
.door-player {
  height: 600px;
}
</style>
