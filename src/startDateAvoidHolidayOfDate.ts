import { subDays, addDays } from 'date-fns';

import { MonthlyStartDateAction } from './constants';
import isHolidayOrWeekend from './isHolidayDate';

function startDateAvoidHolidayOfDate(
  date: Date,
  cutoffDateSetting: MonthlyStartDateAction,
  holidayData: Array<string>,
): Date {
  if (cutoffDateSetting === MonthlyStartDateAction.NoChange) {
    return date;
  }
  while (isHolidayOrWeekend(date, holidayData)) {
    if (cutoffDateSetting === MonthlyStartDateAction.Previous) {
      date = subDays(date, 1);
    } else if (cutoffDateSetting === MonthlyStartDateAction.NextWeek) {
      date = addDays(date, 1);
    }
  }
  return date;
}

export default startDateAvoidHolidayOfDate;
