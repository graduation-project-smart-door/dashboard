import { AxiosRequestConfig } from 'axios'

import { API_CONFIG, AxiosService } from '@/plugins/AxiosService/AxiosService'

class AdminsService extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  create = async (data: FormData) => {
    return this.axiosCall({
      method: 'post',
      url: '/admins',
      data,
    })
  }
}

export default new AdminsService(API_CONFIG)
