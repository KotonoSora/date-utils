import { format } from 'date-fns';

import { DATE_KEY_FORMAT, MONTHLY_START_DATE_ACTION } from './constants';
import { IKeymonth } from './types';
import getDurationTimeMonthContainDate from './getDurationTimeMonthContainDate';

function getKeyMonthFromToDate(
  initDate: Date,
  monthStartDate = 1,
  monthStartDateAction = MONTHLY_START_DATE_ACTION.NO_CHANGE,
  holidayData: string[] = [],
  formatDate: string = DATE_KEY_FORMAT,
): IKeymonth {
  const duration = getDurationTimeMonthContainDate(
    initDate,
    monthStartDate,
    monthStartDateAction,
    holidayData,
  );
  const fromDate: string = format(duration.startDate, formatDate);
  const toDate: string = format(duration.endDate, formatDate);
  const keyMonth: string = `${fromDate}-${toDate}`;
  return {
    keyMonth,
    fromDate,
    toDate,
  };
}

export default getKeyMonthFromToDate;
