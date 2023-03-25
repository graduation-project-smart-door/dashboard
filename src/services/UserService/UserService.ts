import { AxiosRequestConfig } from 'axios'
import { API_CONFIG, AxiosService } from '@/plugins/AxiosService/AxiosService'
import { UserType } from '@/types/user.type'

class UserService extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  create = async (data?: unknown) => {
    return this.axiosCall({
      method: 'post',
      url: '/',
      data: data,
    })
  }

  getAll = async () => {
    return this.axiosCall<UserType[]>({
      method: 'get',
      url: '/',
    })
  }
}

export default new UserService(API_CONFIG)
