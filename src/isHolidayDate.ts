import { getDay } from 'date-fns';

import isHoliday from './isHoliday';

function isHolidayDate(date: Date, holidayData: Array<string>): boolean {
  const day = getDay(date);
  if (day === 0 || day === 6) {
    return true;
  }
  return isHoliday(date, holidayData);
}

export default isHolidayDate;
