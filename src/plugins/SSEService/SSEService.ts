export class SSEService {
  private sseInstance: any
  private message: string
  constructor(baseUrl: string) {
    this.sseInstance = new EventSource(baseUrl)

    this.message = ''
  }

  private setMessage = async (messageData: string) => {
    this.message = messageData
  }

  protected getMessage = async () => {
    let messageData

    this.sseInstance.addEventListener('message', ({ data }: any) => {
      messageData = data
    })

    // await this.getMessage()

    return messageData
  }
}
