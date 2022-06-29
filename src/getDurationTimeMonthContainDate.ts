import {
  getMonth, getYear, isBefore, isAfter,
} from 'date-fns';

import { MonthlyStartDateAction } from './constants';
import { IDuration } from './types';
import getDurationTimeOfMonthAndYear from './getDurationTimeOfMonthAndYear';

function getDurationTimeMonthContainDate(
  date: Date,
  startDate: number,
  cutoffDateSetting: MonthlyStartDateAction,
  holidayData: Array<string>,
): IDuration {
  const month = getMonth(date) + 1; // month return from 0 to 11
  const year = getYear(date); // parseInt(date.format("YYYY"));
  const periodTime = getDurationTimeOfMonthAndYear(
    month,
    year,
    startDate,
    cutoffDateSetting,
    holidayData,
  );
  if (isBefore(date, periodTime.startDate)) {
    const correctMonth = month === 1 ? 12 : month - 1;
    const correctYear = month === 1 ? year - 1 : year;
    return getDurationTimeOfMonthAndYear(
      correctMonth,
      correctYear,
      startDate,
      cutoffDateSetting,
      holidayData,
    );
  }
  if (isAfter(date, periodTime.endDate)) {
    const correctMonth = month === 12 ? 1 : month + 1;
    const correctYear = month === 12 ? year + 1 : year;
    return getDurationTimeOfMonthAndYear(
      correctMonth,
      correctYear,
      startDate,
      cutoffDateSetting,
      holidayData,
    );
  }
  return periodTime;
}

export default getDurationTimeMonthContainDate;
