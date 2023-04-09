<template>
  <el-form
    ref="adminsCreateFormInstance"
    class="admins-create-form"
    :model="adminsCreateFormData"
    :rules="adminsCreateFormRules"
  >
    <el-form-item prop="firstName">
      <el-input v-model="adminsCreateFormData.firstName" placeholder="Имя" />
    </el-form-item>
    <el-form-item prop="lastName">
      <el-input v-model="adminsCreateFormData.lastName" placeholder="Фамилия" />
    </el-form-item>
    <el-form-item prop="patronymic">
      <el-input v-model="adminsCreateFormData.patronymic" placeholder="Отчество" />
    </el-form-item>
    <el-form-item prop="email">
      <el-input v-model="adminsCreateFormData.email" placeholder="Почта" data-testid="email" />
    </el-form-item>
    <el-form-item prop="phone">
      <el-input v-model="adminsCreateFormData.phone" placeholder="Телефон" />
    </el-form-item>
    <el-form-item prop="phone">
      <el-select v-model="adminsCreateFormData.role">
        <el-option v-for="role in roles" :key="role.value" :label="role.label" :value="role.label" />
      </el-select>
    </el-form-item>
    <el-form-item prop="personId">
      <el-upload ref="adminsCreateUploadInstance" :auto-upload="false" :limit="1" :on-exceed="handleExceed" action="">
        <el-button type="primary">Изображение</el-button>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" data-testid="submit" @click="handleAdminCreate">Создать</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { UserType } from '@/types/user.type'
import { ElMessage, FormInstance, FormRules, genFileId, UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import AdminsService from '@/services/AdminsService/AdminsService'
import { camelToSnake } from '@/utils/string'
import axios from 'axios'

const roles = [
  {
    label: 'Админ',
    value: 'admin',
  },
  {
    label: 'Суперадмин',
    value: 'superadmin',
  },
]

const adminsCreateFormInstance = ref<FormInstance>()
const adminsCreateUploadInstance = ref<UploadInstance>()

const adminsCreateFormData = reactive<UserType>({
  role: 'admin',
  firstName: '',
  lastName: '',
  patronymic: '',
  image: null,
  phone: '',
} as UserType)
const adminsCreateFormRules = reactive<FormRules>({
  email: [{ type: 'email', required: true, trigger: 'blur' }],
})

const handleExceed: UploadProps['onExceed'] = (files) => {
  adminsCreateUploadInstance.value?.clearFiles()

  const file = files[0] as UploadRawFile

  file.uid = genFileId()

  adminsCreateFormData.image = file

  adminsCreateUploadInstance.value?.handleStart(file)
}

const handleAdminCreate = async (): Promise<void> => {
  if (!adminsCreateFormInstance.value) return

  adminsCreateFormInstance.value?.validate(async (valid) => {
    if (valid) {
      const formData = new FormData()

      Object.entries(adminsCreateFormData).forEach(([key, value]) => {
        const _key = key as keyof typeof adminsCreateFormData
        const _value = value as keyof typeof adminsCreateFormData

        if (adminsCreateFormData[_key]) {
          formData.append(camelToSnake(key), _value)
        }
      })

      await axios.post('https://jsonplaceholder.typicode.com/users', formData)

      // const [error, response] = await AdminsService.create(formData)
      //
      // if (!error && response) {
      //   ElMessage({
      //     type: 'success',
      //     message: 'Cool',
      //   })
      // }
    }
  })
}
</script>

<style lang="scss" scoped>
.admins-create-form {
  border-radius: 15px;
  background-color: $color--white;
  padding: 15px;
  margin-top: 12px;
}
</style>
