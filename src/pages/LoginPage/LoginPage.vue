<template>
  <el-row class="login-page" align="middle">
    <el-col :span="24" :md="14">
      <div class="login-page__content">
        <h3>Авторизация</h3>

        <div class="text-lg mt-8 color-primary-secondary">Введите почту и пароль для авторизации</div>

        <login-form class="mt-24" />
      </div>
    </el-col>

    <el-col :span="0" :md="10" class="h-100 w-100 py-md-16 mt-md-0 mt-24">
      <div class="login-page__background">
        <h4 class="px-40 ta-c">
          <span class="bold"> Выпускной проект</span>
          <br />
          на тему
          <br />
          РАЗРАБОТА ПРОГРАММНОЙ ЧАСТИ И ПОЛЬЗОВАТЕЛЬСКОГО ИНТЕРФЕЙСА ДЛЯ СИСТЕМЫ УПРАВЛЕНИЯ АВТОМАТИЧЕСКОЙ ДВЕРЬЮ С
          ПРИМЕНЕНИЕМ НЕЙРОННОЙ СЕТИ
        </h4>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  padding: 30px;

  &__content {
    width: 100%;
    max-width: 450px;
    border-radius: 10px;
    background-color: $color--white;
    padding: 24px;
    margin: 0 auto;

    @include responsive(md) {
      padding: 24px;
    }
  }

  &__background {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px 0 0 20px;
    color: $color--white;
    background-image: linear-gradient(
        6deg,
        rgb(50 5 101 / 0.3) 0%,
        rgb(71 16 148 / 0.5) 30%,
        rgb(168 131 255 / 0.7) 100%
      ),
      url('@/assets/images/static/login/background.jpg');
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;

    h4 {
      font-weight: 300;
    }
  }

  @include responsive(md) {
    padding: 0;
  }
}
</style>
