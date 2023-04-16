import { SSEService } from '@/plugins/SSEService/SSEService'

class EventsServiceSse extends SSEService {
  constructor(config: string) {
    super(config)
  }

  getEvents = async () => {
    return this.getMessage()
  }
}

export default new EventsServiceSse('/api/coins')
