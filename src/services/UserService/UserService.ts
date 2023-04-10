import { AxiosRequestConfig } from 'axios'

import { API_CONFIG, AxiosService } from '@/plugins/AxiosService/AxiosService'

import { UserLoginType, ApiUserType } from '@/types/user.type'

class UserService extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  create = async (data?: unknown) => {
    return this.axiosCall({
      method: 'post',
      url: '/',
      data,
    })
  }

  login = async (data: UserLoginType) => {
    return this.axiosCall({
      method: 'post',
      url: '/login',
      data,
    })
  }

  getAll = async () => {
    return this.axiosCall<ApiUserType[]>({
      method: 'get',
      url: '/users',
    })
  }

  getById = async (id: string) => {
    return this.axiosCall<ApiUserType>({
      method: 'get',
      url: `/users/${id}`,
    })
  }

  getMe = async () => {
    return this.axiosCall<ApiUserType>({
      method: 'get',
      url: '/users/me',
    })
  }
}

export default new UserService(API_CONFIG)
