import dayjs, { Dayjs } from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(updateLocale)
dayjs.updateLocale('en', { weekStart: 0 })
dayjs.locale('en')
dayjs.extend(utc)
dayjs.extend(timezone)

const getCurrentDate = () => {
  return dayjs.tz.guess()
}

export { getCurrentDate }