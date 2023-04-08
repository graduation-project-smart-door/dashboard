export const fillPlugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart: any, args: any, options: any) => {
    const { ctx } = chart

    ctx.save()

    ctx.globalCompositeOperation = 'destination-over'

    ctx.fillStyle = options.color || '#4ca2a2'

    ctx.fillRect(0, 0, chart.width, chart.height)

    ctx.restore()
  },
}
