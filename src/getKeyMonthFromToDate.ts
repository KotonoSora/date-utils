import { format } from 'date-fns';

import { DateKeyFormat, MonthlyStartDateAction } from './constants';
import { IKeymonth } from './types';
import getDurationTimeMonthContainDate from './getDurationTimeMonthContainDate';

function getKeyMonthFromToDate(
  initDate: Date,
  monthStartDate = 1,
  monthStartDateAction = MonthlyStartDateAction.NoChange,
  holidayData: string[] = [],
): IKeymonth {
  const duration = getDurationTimeMonthContainDate(
    initDate,
    monthStartDate,
    monthStartDateAction,
    holidayData,
  );
  const fromDate: string = format(duration.startDate, DateKeyFormat);
  const toDate: string = format(duration.endDate, DateKeyFormat);
  const keyMonth: string = `${fromDate}-${toDate}`;
  return {
    keyMonth,
    fromDate,
    toDate,
  };
}

export default getKeyMonthFromToDate;
