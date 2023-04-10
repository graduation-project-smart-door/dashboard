<template>
  <div class="employee-page">
    <div class="employee-card">
      <div class="d-f ai-c">
        <div class="employee-card__image-wrapper">
          <img class="employee-card__image" src="@/assets/images/static/profile.png" />
        </div>

        <div>
          <h5 class="color-default">Вася Пупкин</h5>
          <div class="text-lg color-primary-secondary mt-4">Программист</div>
        </div>
      </div>
    </div>

    <div class="mt-48 d-f">
      <div class="employee-information">
        <h6 class="color-default">Информация о профиле</h6>
        <div class="text-lg mt-24">
          Я крутой чел. Я работаю здесь на большие деньги. Мне их не хватает на пропитание. Купите хлеба. Я голодаю.
          Спасите. Меня держат в заложниках *подмигивает*.
          <br />
          Прошло столько лет в заточении. Они заставляют меня чистить лук, стрелять по лягушкам из космоса.
        </div>
        <div class="divider mt-24" />
        <div class="mt-24">
          <div class="text-md">ФИО: &nbsp; <span class="bold">Вася Пупкин Крутой</span></div>
        </div>
        <div class="mt-12">
          <div class="text-md">Телефон: &nbsp; <span class="bold">8 800 555 3535</span></div>
        </div>
        <div class="mt-12">
          <div class="text-md">Почта: &nbsp; <span class="bold">sample@gmail.com</span></div>
        </div>
        <div class="mt-12">
          <div class="text-md">Расположение: &nbsp; <span class="bold">Москва, ул. Сакамото, офис 13</span></div>
        </div>
      </div>

      <!--      <employee-chart :data="employeeData.statistic" />-->
      <employee-chart :data="[]" />
    </div>
    <employee-update v-if="user.role === 'admin' || user.role === 'superadmin'" class="mt-12" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'

import UserService from '@/services/UserService/UserService'
import { useRoute } from 'vue-router'
import { ApiUserType } from '@/types/user.type'

const route = useRoute()

const user = ref<Partial<ApiUserType>>({
  role: '',
})
const employeeData = ref<any>({} as any)

onMounted(() => {
  getEmployee()
})

const getEmployee = async (): Promise<void> => {
  const [error, response] = await UserService.getById(route.params.id as string)

  if (!error && response) {
    console.log('123')
  } else {
    ElMessage({
      type: 'error',
      message: 'Что-то пошло не так',
    })
  }
}
</script>

<style lang="scss" scoped>
.employee-page {
  margin-top: 155px;
}

.employee {
  &-card {
    border-radius: 15px;
    background-color: $color--white;
    padding: 24px;

    &__image {
      width: 100%;
      height: 100%;
      border-radius: 12px;
      object-fit: cover;

      &-wrapper {
        width: 74px;
        height: 74px;
        margin-right: 12px;
      }
    }
  }

  &-information {
    max-width: 500px;
    border-radius: 15px;
    background-color: $color--white;
    padding: 24px;
    margin-right: 30px;
  }
}
</style>
