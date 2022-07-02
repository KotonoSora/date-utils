import { startOfWeek, endOfWeek, format } from 'date-fns';
import { DATE_KEY_FORMAT, FIRST_DAY_OF_WEEK, DAY_OF_WEEK } from './constants';
import { IKeymonth } from './types';

function getPageMonth(
  firstDayOfWeek: DAY_OF_WEEK = FIRST_DAY_OF_WEEK.SUNDAY,
  startDate: Date,
  endDate: Date,
  formatDate: string = DATE_KEY_FORMAT,
): IKeymonth {
  const startOfPage: Date = startOfWeek(startDate, { weekStartsOn: firstDayOfWeek });
  const endOfPage: Date = endOfWeek(endDate, { weekStartsOn: firstDayOfWeek });

  const fromDate: string = format(startOfPage, formatDate);
  const toDate: string = format(endOfPage, formatDate);

  const keyMonth: string = `${fromDate}-${toDate}`;
  return {
    keyMonth,
    fromDate,
    toDate,
  };
}

export default getPageMonth;
