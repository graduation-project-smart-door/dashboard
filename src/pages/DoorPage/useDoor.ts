import doorService from '@/services/DoorService/DoorService'
import { ElMessage } from 'element-plus'
import { reactive, readonly } from 'vue'

const statuses = reactive({
  healthcheck: {
    loaded: true,
    text: '',
  },
  open: {
    loaded: true,
    text: '',
  },
  close: {
    loaded: true,
    text: '',
  },
  calibrate: {
    loaded: true,
    text: '',
  },
})

const translatedStatus = {
  healthcheck: 'Дверь жива',
  open: 'Дверь открылась',
  close: 'Дверь закрылась',
  calibrate: 'Дверь откалибрована',
}

export const useDoor = () => {
  const healthCheck = async () => {
    statuses.healthcheck.loaded = false

    const [error, response] = await doorService.healthcheck()

    if (!error && response) {
      ElMessage.success(response.status)

      statuses.healthcheck.text = translatedStatus['healthcheck']
    }

    statuses.healthcheck.loaded = true
  }

  const open = async () => {
    statuses.open.loaded = false

    const [error, response] = await doorService.open()

    if (!error && response) {
      ElMessage.success(response.status)

      statuses.open.text = translatedStatus['open']
    }

    statuses.open.loaded = true
  }

  const close = async () => {
    statuses.close.loaded = false

    const [error, response] = await doorService.close()

    if (!error && response) {
      ElMessage.success(response.status)

      statuses.close.text = translatedStatus['close']
    }

    statuses.close.loaded = true
  }

  const calibrate = async () => {
    statuses.calibrate.loaded = false

    const [error, response] = await doorService.calibrate()

    if (!error && response) {
      ElMessage.success(response.status)

      statuses.calibrate.text = translatedStatus['calibrate']
    }

    statuses.calibrate.loaded = true
  }

  return {
    statuses: readonly(statuses),
    healthCheck,
    open,
    close,
    calibrate,
  }
}
