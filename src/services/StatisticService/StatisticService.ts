import { AxiosRequestConfig } from 'axios'

import { API_CONFIG, AxiosService } from '@/plugins/AxiosService/AxiosService'

import { DatesFilterType } from '@/types/statistic.type'

class StatisticService extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  getVisitingChart = async (data?: DatesFilterType) => {
    return await this.axiosCall({
      method: 'get',
      url: '/statistic',
      params: data,
    })
  }
}

export default new StatisticService(API_CONFIG)
