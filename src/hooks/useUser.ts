import { readonly, ref } from 'vue'
import { ApiUserType } from '@/types/user.type'

const isAuthorized = ref(false)
const userData = ref<ApiUserType>({} as ApiUserType)

export const useUser = () => {
  const setProfile = (profile: ApiUserType) => {
    userData.value = profile
  }

  const setAuthorized = (value: boolean) => {
    isAuthorized.value = value
  }

  return {
    isAuthorized: readonly(isAuthorized),
    user: readonly(userData),
    setAuthorized,
    setProfile,
  }
}
