import { subDays } from 'date-fns';

import { MonthlyStartDateAction, DOME } from './constants';
import { IDuration } from './types';
import numberDayOfMonthYear from './numberDayOfMonthYear';
import startDateAvoidHolidayOfDate from './startDateAvoidHolidayOfDate';

function getDurationTimeOfMonthAndYear(
  month: number,
  year: number,
  startDate: number,
  cutoffDateSetting: MonthlyStartDateAction,
  holidayData: Array<string>,
): IDuration {
  // start Date of this month
  let fromDay;
  let fromMonth;
  let fromYear;

  // start Date of next month. We use this date to define end date of this month
  let nextFromDay;
  let nextFromMonth;
  let nextFromYear;

  if (startDate <= DOME) {
    fromDay = startDate;
    fromMonth = month;
    fromYear = year;

    nextFromDay = startDate;
    nextFromMonth = month + 1;
    nextFromYear = year;
    if (nextFromMonth > 12) {
      nextFromMonth = 1;
      nextFromYear += 1;
    }
  } else {
    fromDay = startDate;
    fromMonth = month - 1;
    fromYear = year;
    if (fromMonth === 0) {
      fromMonth = 12;
      fromYear -= 1;
    }

    nextFromDay = startDate;
    nextFromMonth = month;
    nextFromYear = year;
    const maxDayOfFromMonth = numberDayOfMonthYear(fromMonth, fromYear);
    const maxDayOfNextMonth = numberDayOfMonthYear(nextFromMonth, fromYear);
    if (startDate > maxDayOfFromMonth) {
      fromDay = maxDayOfFromMonth;
    }
    if (startDate > maxDayOfNextMonth) {
      nextFromDay = maxDayOfNextMonth;
    }
    if (startDate > 31) {
      // if set start date is last day of previous month
      fromDay = maxDayOfFromMonth;
      nextFromDay = maxDayOfNextMonth;
    }
  }

  // combine fromDate from day, month, year
  let fromDate = new Date(fromYear, fromMonth, fromDay);
  fromDate = startDateAvoidHolidayOfDate(
    fromDate,
    cutoffDateSetting,
    holidayData,
  );

  // combine next startDate from day, month, year
  let nextFromDate = new Date(nextFromYear, nextFromMonth, nextFromDay, 23, 59, 59);
  nextFromDate = startDateAvoidHolidayOfDate(
    nextFromDate,
    cutoffDateSetting,
    holidayData,
  );
  // end date of this month define by minus 1 of start date of next month
  const toDate = subDays(nextFromDate, 1);
  const duration = {
    startDate: fromDate,
    endDate: toDate,
  };
  return duration;
}

export default getDurationTimeOfMonthAndYear;
