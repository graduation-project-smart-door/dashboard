import { AxiosRequestConfig } from 'axios'
import { ApiDoorType } from '@/types/door.type'
import { API_CONFIG, AxiosService } from '@/plugins/AxiosService/AxiosService'

class DoorService extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  getHealthcheck = async () => {
    return this.axiosCall<ApiDoorType[]>({
      method: 'get',
      url: '/door/healthcheck',
    })
  }
}

export default new DoorService(API_CONFIG)
