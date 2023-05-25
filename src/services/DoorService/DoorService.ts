import { AxiosRequestConfig } from 'axios'
import { ApiDoorType } from '@/types/door.type'
import { API_CONTROLLER_CONFIG, AxiosService } from '@/plugins/AxiosService/AxiosService'

class DoorService extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  healthcheck = async () => {
    return await this.axiosCall<ApiDoorType>({
      method: 'get',
      url: '/door/healthcheck',
    })
  }

  open = async () => {
    return await this.axiosCall<ApiDoorType>({
      method: 'get',
      url: '/door/open',
    })
  }

  close = async () => {
    return await this.axiosCall<ApiDoorType>({
      method: 'get',
      url: '/door/close',
    })
  }

  calibrate = async () => {
    return await this.axiosCall<ApiDoorType>({
      method: 'get',
      url: '/door/calibrate',
    })
  }
}

export default new DoorService(API_CONTROLLER_CONFIG)
