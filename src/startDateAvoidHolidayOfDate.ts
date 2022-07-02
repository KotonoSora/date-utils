import { subDays, addDays } from 'date-fns';

import { MONTHLY_START_DATE_ACTION } from './constants';
import isHolidayOrWeekend from './isHolidayOrWeekend';

function startDateAvoidHolidayOfDate(
  date: Date,
  cutoffDateSetting: MONTHLY_START_DATE_ACTION,
  holidayData: Array<string>,
): Date {
  if (cutoffDateSetting === MONTHLY_START_DATE_ACTION.NO_CHANGE) {
    return date;
  }
  while (isHolidayOrWeekend(date, holidayData)) {
    if (cutoffDateSetting === MONTHLY_START_DATE_ACTION.PREVIOUS) {
      date = subDays(date, 1);
    } else if (cutoffDateSetting === MONTHLY_START_DATE_ACTION.NEXT_WEEK) {
      date = addDays(date, 1);
    }
  }
  return date;
}

export default startDateAvoidHolidayOfDate;
