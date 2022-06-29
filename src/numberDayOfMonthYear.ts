import isLeapYear from './isLeapYear';

function numberDayOfMonthYear(month: number, year: number) {
  if (month === 2) {
    if (isLeapYear(year)) return 29;
    return 28;
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30;

  return 31;
}

export default numberDayOfMonthYear;
