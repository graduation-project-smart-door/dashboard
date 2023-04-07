<template>
  <div ref="player" style="width: 1000px; height: 600px" />
</template>

<script lang="ts" setup>
import Artplayer from 'artplayer'
import { nextTick, onMounted, ref } from 'vue'

const player = ref<HTMLDivElement>()

onMounted(() => {
  nextTick(() => {
    new Artplayer({
      container: player.value as HTMLDivElement,
      url: 'https://artplayer.org/assets/sample/video.mp4',
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
