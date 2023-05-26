<template>
  <div class="button-loader"><div /><div /><div /><div /></div>
</template>

<style lang="scss" scoped>
.button-loader {
  width: 70px;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 30px;
    height: 30px;
    position: absolute;
    display: block;
    border-style: solid;
    border-width: 4px;
    border-color: $color--primary transparent transparent transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: button-loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    margin: 4px;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}

@keyframes button-loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
