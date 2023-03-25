import { API_CONFIG, AxiosService } from '@/plugins/AxiosService/AxiosService'
import { AxiosRequestConfig } from 'axios'

class EventsService extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  getAll = () => {
    return this.axiosCall({
      method: 'get',
      url: '/actions',
    })
  }
}

export default new EventsService(API_CONFIG)
