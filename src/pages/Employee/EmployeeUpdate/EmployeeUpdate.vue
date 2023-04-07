<template>
  <div class="employee-update">
    <h6 class="color-default">Обновление профиля</h6>

    <el-form class="mt-24">
      <el-form-item prop="phone">
        <el-input v-model="employeeUpdateForm.phone" placeholder="Введите телефон" />
      </el-form-item>
      <el-form-item prop="email">
        <el-input v-model="employeeUpdateForm.email" placeholder="Введите почту" />
      </el-form-item>
      <el-form-item prop="avatar">
        <el-upload v-model="employeeUpdateForm.avatar">
          <el-button type="primary">Обновить фотографию профия</el-button>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">Подтверить</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { EmployeeUpdateFormType } from '@/pages/Employee/EmployeeUpdate/EmployeeUpdate.type'
import { UploadUserFile } from 'element-plus'

const employeeUpdateForm = reactive<EmployeeUpdateFormType>({
  phone: '',
  avatar: {} as UploadUserFile,
  email: '',
})
</script>

<style lang="scss" scoped>
.employee-update {
  max-width: 500px;
  border-radius: 15px;
  background-color: $color--white;
  padding: 24px;
  margin-right: 30px;
}
</style>
