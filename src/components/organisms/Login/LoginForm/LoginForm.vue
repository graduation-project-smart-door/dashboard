<template>
  <el-form ref="loginFormInstance" class="login-form" :model="loginFormData" :rules="loginFormRules" @submit.prevent>
    <el-form-item prop="email">
      <el-input v-model="loginFormData.email" placeholder="Введите почту" />
    </el-form-item>

    <el-form-item prop="password">
      <el-input v-model="loginFormData.password" placeholder="Введите пароль" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="handleFormSubmit">Авторизация</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { UserLoginType } from '@/types/user.type'
import { FormInstance, FormRules } from 'element-plus'
import { commonRules } from '@/constants/formRules'
import UserService from '@/services/UserService/UserService'

const loginFormInstance = ref<FormInstance>()

const loginFormData = reactive<UserLoginType>({
  email: '',
  password: '',
})

const loginFormRules = reactive<FormRules>({
  email: [commonRules.required],
  password: [commonRules.required, commonRules.password],
})

const handleFormSubmit = async (): Promise<void> => {
  if (!loginFormInstance.value) return

  loginFormInstance.value?.validate(async (valid) => {
    if (valid) {
      const [error, response] = await UserService.login(loginFormData)

      if (!error && response) {
        console.log(response)
      }
    }
  })
}
</script>
