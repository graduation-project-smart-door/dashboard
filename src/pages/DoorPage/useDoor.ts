import doorService from '@/services/DoorService/DoorService'
import { ElMessage } from 'element-plus'

export const useDoor = () => {
  const healthCheck = async () => {
    const [error, response] = await doorService.healthcheck()

    if (!error && response) {
      ElMessage.success(response.status)
    }
  }

  const open = async () => {
    const [error, response] = await doorService.open()

    if (!error && response) {
      ElMessage.success(response.status)
    }
  }

  const close = async () => {
    const [error, response] = await doorService.close()

    if (!error && response) {
      ElMessage.success(response.status)
    }
  }

  const calibrate = async () => {
    const [error, response] = await doorService.calibrate()

    if (!error && response) {
      ElMessage.success(response.status)
    }
  }

  return {
    healthCheck,
    open,
    close,
    calibrate,
  }
}
