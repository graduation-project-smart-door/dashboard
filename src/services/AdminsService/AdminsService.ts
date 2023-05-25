import { AxiosRequestConfig } from 'axios'

import { API_CONFIG, AxiosService } from '@/plugins/AxiosService/AxiosService'

import { TableParamsType } from '@/types/common.type'

class AdminsService extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  create = async (data: FormData) => {
    return await this.axiosCall({
      method: 'post',
      url: '/admins',
      data,
    })
  }

  getAll = async (params?: Partial<TableParamsType>) => {
    return await this.axiosCall({
      method: 'get',
      url: '/admins',
      params,
    })
  }
}

export default new AdminsService(API_CONFIG)
