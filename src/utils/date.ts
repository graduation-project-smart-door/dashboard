import moment from 'moment'

function format(date: string, defaultFormat = 'YYYY-MM-DD', resultFormat = 'DD.MM.YYYY'): string {
  return moment(date, defaultFormat).format(resultFormat)
}

export default format
