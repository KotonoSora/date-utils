import { format } from 'date-fns';

import { DateKeyFormat } from './constants';

function isHoliday(date: Date, holidayData: Array<string>): boolean {
  const dateStr = format(date, DateKeyFormat);
  if (holidayData.includes(dateStr)) {
    return true;
  }
  return false;
}

export default isHoliday;
