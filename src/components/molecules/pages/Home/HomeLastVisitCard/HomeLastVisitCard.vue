<template>
  <div class="home-last-visit-card">
    <div class="d-f ai-c jc-sb">
      <div>
        <div class="text-lg color-primary-secondary bold"> Вася Пупкин </div>
        <div class="text-md color-primary-secondary bold"> Программист </div>
        <div class="text-md mt-8">11:01</div>
      </div>

      <div class="home-last-visit-card__image-wrapper">
        <img class="home-last-visit-card__image" src="@/assets/images/static/profile.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-last-visit-card {
  width: 235px;
  min-width: 190px;
  border-radius: 20px;
  background-color: $color--white;
  padding: 16px 24px;

  &__image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
