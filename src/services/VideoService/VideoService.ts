import { API_CONFIG, AxiosService } from '@/plugins/AxiosService/AxiosService'
import { AxiosRequestConfig } from 'axios'

class VideoService extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  getAll = async () => {
    return await this.axiosCall<{ src: string }>({
      method: 'get',
      url: '/video',
    })
  }
}

export default new VideoService(API_CONFIG)
