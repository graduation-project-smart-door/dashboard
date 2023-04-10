<template>
  <el-form ref="loginFormInstance" class="login-form" :model="loginFormData" :rules="loginFormRules" @submit.prevent>
    <el-form-item prop="email">
      <el-input v-model="loginFormData.email" placeholder="Введите почту" />
    </el-form-item>

    <el-form-item prop="password">
      <el-input v-model="loginFormData.password" placeholder="Введите пароль" />
    </el-form-item>

    <el-form-item>
      <el-switch v-model="isRememberMe" class="login-form__switch" active-text="Запомнить меня" />
    </el-form-item>

    <el-form-item class="login-form__submit-button">
      <el-button type="primary" class="bold" data-testid="submit" @click="handleFormSubmit">Авторизация</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { UserLoginType } from '@/types/user.type'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { commonRules } from '@/constants/formRules'
import UserService from '@/services/UserService/UserService'
import { useUser } from '@/composables/useUser'
import { useRouter } from 'vue-router'
import { ROUTE_NAMES } from '@/constants/routeNames'
import Cookies from 'js-cookie'
import axios from 'axios'

const { setAuthorized, setProfile, isAuthorized } = useUser()
const router = useRouter()

const loginFormInstance = ref<FormInstance>()

const loginFormData = reactive<UserLoginType>({
  email: '',
  password: '',
})

const isRememberMe = ref(false)

const loginFormRules = reactive<FormRules>({
  email: [commonRules.required, commonRules.email],
  password: [commonRules.required],
})

onMounted(() => {
  getMe()
})

const getMe = async (): Promise<void> => {
  // const [error, response] = await UserService.getMe()
  await axios.get('https://jsonplaceholder.typicode.com/users/1')

  // if (!error && response) {
  //   setProfile(response)
  //
  //   setAuthorized(true)
  //
  //   await router.push({ name: ROUTE_NAMES.HomePage })
  // } else {
  //   setAuthorized(false)
  // }
}

const handleFormSubmit = async (): Promise<void> => {
  if (!loginFormInstance.value) return

  loginFormInstance.value?.validate(async (valid) => {
    if (valid) {
      const [error, response] = await UserService.login(loginFormData)

      if (!error && response) {
        Cookies.set('accessToken', response.access_token)

        Cookies.set('refreshToken', response.refresh_token)

        await getMe()

        if (isAuthorized) {
          await router.push({ name: ROUTE_NAMES.HomePage })
        } else {
          ElMessage({
            type: 'error',
            message: 'Что-то пошло не так',
          })
        }
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.login-form {
  &__submit-button {
    :deep(.el-form-item__content) {
      width: 100%;
      justify-content: center;

      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
