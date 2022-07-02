import { format } from 'date-fns';

import { DATE_KEY_FORMAT } from './constants';

function isHoliday(date: Date, holidayData: Array<string>): boolean {
  const dateStr = format(date, DATE_KEY_FORMAT);
  if (holidayData.includes(dateStr)) {
    return true;
  }
  return false;
}

export default isHoliday;
