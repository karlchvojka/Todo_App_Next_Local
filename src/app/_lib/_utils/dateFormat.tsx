// Library Imports
import dayjs from 'dayjs'

// Dayjs specific Imports
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import updateLocale from 'dayjs/plugin/updateLocale'

// Dayjs usage
dayjs.extend(updateLocale)
dayjs.updateLocale('en', { weekStart: 0 })
dayjs.locale('en')
dayjs.extend(utc)
dayjs.extend(timezone)

/**
 * getCurrentDate
 * @returns String of users current timezone
 */
const getCurrentDate = () => {
  return dayjs.tz.guess()
}

export { getCurrentDate }