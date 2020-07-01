import moment from "moment";
import XDate from "xdate";

export enum MonthlyStartDateAction {
  NoChange = "NoChange",
  Previous = "Previous",
  NextWeek = "NextWeek",
}

export enum weekdaysOrder {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
}
// 0: sunday, 1: monday, ...
export function getWeekdays(startDateOfWeek: number = 1) {
  let weekDaysNames = [
    weekdaysOrder.SUNDAY,
    weekdaysOrder.MONDAY,
    weekdaysOrder.TUESDAY,
    weekdaysOrder.WEDNESDAY,
    weekdaysOrder.THURSDAY,
    weekdaysOrder.FRIDAY,
    weekdaysOrder.SATURDAY,
  ];
  const dayShift = startDateOfWeek % 7;
  if (dayShift) {
    weekDaysNames = weekDaysNames
      .slice(dayShift)
      .concat(weekDaysNames.slice(0, dayShift));
  }
  return weekDaysNames;
}

/**
 *
 * @param containedDate the instance of moment
 * @returns An Object contain 2 instance of moment, startDate is start date of week, endDate is end date of week
 */
export function getWeekRange(containedDate: moment.Moment) {
  // change 'isoWeek' to 'week' if start week from sunday
  let startDate = containedDate.clone().startOf("isoWeek");
  let endDate = containedDate.clone().endOf("isoWeek");
  let range = {
    startDate,
    endDate,
  };
  return range;
}

/**
 *
 * @param containedDate the instance of moment
 * @returns An Object contain 2 instance of moment, startDate is start date of display calendar, endDate is end date of display calendar
 */

// return the display range date in calendar include day whose color are grayed
export function getRangeOfCalendar(containedDate: moment.Moment) {
  // get month range
  let monthRange = 1;
  //StartDate.getDurationTimeMonthContainDate(containedDate);
  // get range of first week
  let firstWeekOfMonthRange = 1;
  //getWeekRange(monthRange.startDate);
  // get range of last week
  let lastWeekOfMonthRange = 1;
  //getWeekRange(monthRange.endDate);

  // get first date of first week and last date of last week
  let startDate = 1;
  //firstWeekOfMonthRange.startDate;
  let endDate = 1;
  //lastWeekOfMonthRange.endDate;
  return {
    startDate,
    endDate,
  };
}

export function numberDayOfMonthYear(month: number, year: number) {
  if (month == 2) {
    if (isLeapYear(year)) return 29;
    else return 28;
  }
  if (month == 4 || month == 6 || month == 9 || month == 11) return 30;

  return 31;
}

export function isLeapYear(year: number) {
  var isLeapYear = false;
  if (year % 4 != 0) {
    isLeapYear = false;
  } else {
    if (year % 400 == 0) {
      isLeapYear = true;
    } else if (year % 100 == 0) {
      isLeapYear = false;
    } else {
      isLeapYear = true;
    }
  }

  return isLeapYear;
}

export function getStringFromDate(date?: moment.Moment, format?: string) {
  if (date == null || date == undefined) {
    return "";
  }

  if (format != "") {
    return date.format(format);
  }
  return date.format("YYYY-MM-DD HH:mm:ss");
}

/**
 * Copy function from qmk
 *
 * @since     MoneyReco ReactNative Beta 1
 */

export const SUNDAY = "SUNDAY";
export const MONDAY = "MONDAY";
export const TUESDAY = "TUESDAY";
export const WEDNESDAY = "WEDNESDAY";
export const THURSDAY = "THURSDAY";
export const FRIDAY = "FRIDAY";
export const SATURDAY = "SATURDAY";

export const dayOfWeekOrder = [
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
];

export function weekDayNames(firstDayOfWeek = 0) {
  let weekDaysNames = dayOfWeekOrder;
  const dayShift = firstDayOfWeek % 7;
  if (dayShift) {
    weekDaysNames = weekDaysNames
      .slice(dayShift)
      .concat(weekDaysNames.slice(0, dayShift));
  }
  return weekDaysNames;
}

export function getWeek(date: any, firstDayOfWeek = 1) {
  let xd = new XDate(date, true);
  firstDayOfWeek = firstDayOfWeek || 0;
  const fdow = (7 + firstDayOfWeek) % 7 || 7;
  const ldow = (fdow + 6) % 7;
  const from = xd.clone();
  if (from.getDay() !== fdow) {
    from.addDays(-(from.getDay() + 7 - fdow) % 7);
  }
  const to = xd.clone();
  const day = to.getDay();
  if (day !== ldow) {
    to.addDays((ldow + 7 - day) % 7);
  }
  return {
    from: from.toDate(),
    to: to.toDate(),
  };
}

function fromTo(a: any, b: any) {
  const days: Date[] = [];
  let from = +a,
    to = +b;
  for (; from <= to; from = new XDate(from, true).addDays(1).getTime()) {
    days.push(new XDate(from, true).toDate());
  }
  return days;
}

function xdFromTo(a: any, b: any) {
  const days: Date[] = [];
  let from = +a,
    to = +b;
  for (; from <= to; from = new XDate(from, true).addDays(1).getTime()) {
    days.push(new XDate(from, true).toDate());
  }
  return days;
}

export function isGTE(a: any, b: any) {
  return b.diffDays(a) > -1;
}

export function isLTE(a: any, b: any) {
  return a.diffDays(b) > -1;
}

export function week(date: any, firstDayOfWeek = 1) {
  let xd = new XDate(date, true);
  let before: Date[] = [];
  let after: Date[] = [];
  firstDayOfWeek = firstDayOfWeek || 0;
  const fdow = (7 + firstDayOfWeek) % 7 || 7;
  const ldow = (fdow + 6) % 7;
  const from = xd.clone();
  if (from.getDay() !== fdow) {
    from.addDays(-(from.getDay() + 7 - fdow) % 7);
  }
  const to = xd.clone();
  const day = to.getDay();
  if (day !== ldow) {
    to.addDays((ldow + 7 - day) % 7);
  }
  if (isLTE(from, xd)) {
    before = fromTo(from, xd);
  }
  if (isGTE(to, xd)) {
    after = fromTo(xd, to);
  }
  return before.concat(after.slice(1));
}

export function getDaysOfMonth(
  initDate: string,
  monthStartDate: number,
  monthStartDateAction: string,
  holidayData: string[] = []
) {
  // console.log('DateBar... getDaysOfMonth...');

  const { firstDay, lastDay } = setFirstAndLastDay(
    initDate,
    monthStartDate,
    monthStartDateAction,
    holidayData
  );
  return fromTo(firstDay, lastDay);
}

export function checkHoliday(date: XDate, holidayData: string[] = []) {
  //@ts-ignore
  return holidayData.includes(date.clone().toString("yyyy-MM-dd"));
}

export function getFirstDayOfMonth(
  date: XDate,
  monthStartDateAction: string = MonthlyStartDateAction.NoChange,
  holidayData: string[] = []
): XDate {
  if (MonthlyStartDateAction.Previous == monthStartDateAction) {
    if (checkHoliday(date, holidayData)) {
      return getFirstDayOfMonth(
        date.clone().addDays(-1),
        monthStartDateAction,
        holidayData
      );
    }
  }

  if (MonthlyStartDateAction.NextWeek == monthStartDateAction) {
    if (checkHoliday(date, holidayData)) {
      return getFirstDayOfMonth(
        date.clone().addDays(1),
        monthStartDateAction,
        holidayData
      );
    }
  }

  return date.clone();
}

export function checkFirstDay(
  firstDay: XDate,
  monthStartDateAction: string,
  holidayData: string[] = []
) {
  // check holiday
  firstDay = getFirstDayOfMonth(firstDay, monthStartDateAction, holidayData);
  // Previous
  if (MonthlyStartDateAction.Previous == monthStartDateAction) {
    if (6 == firstDay.getDay()) {
      //set to friday
      firstDay.addDays(-1);
    } else if (0 == firstDay.getDay()) {
      // set to firday
      firstDay.addDays(-2);
    }
  }
  // NextWeek
  if (MonthlyStartDateAction.NextWeek == monthStartDateAction) {
    if (6 == firstDay.getDay()) {
      // set to monday next week
      firstDay.addDays(2);
    } else if (0 == firstDay.getDay()) {
      // set to monday next week
      firstDay.addDays(1);
    }
  }
  return firstDay;
}

export function setFirstDay(
  initDate: string,
  monthStartDate: number,
  monthStartDateAction: string,
  holidayData: string[] = []
) {
  let xd: XDate = new XDate(initDate, true);
  let firstDay: XDate = xd.clone();
  if (monthStartDate >= 32) {
    //month start date is last day of month
    let timexd: string = xd.clone().toString("yyyy-MM-dd");
    let endOfBeforeMonth: string = moment(timexd)
      .add(-1, "month")
      .endOf("month")
      .format("YYYY-MM-DD");
    firstDay = new XDate(endOfBeforeMonth, true);
  } else {
    if (xd.getDate() < monthStartDate) {
      firstDay = firstDay.clone().addMonths(-1);
    }
    const maxDayOfFromMonth = numberDayOfMonthYear(
      firstDay.getMonth() + 1,
      firstDay.getFullYear()
    );
    if (monthStartDate >= maxDayOfFromMonth) {
      firstDay.setDate(maxDayOfFromMonth);
    } else {
      firstDay.setDate(monthStartDate);
    }
  }
  return checkFirstDay(firstDay, monthStartDateAction, holidayData);
}

export function setFirstAndLastDay(
  initDate: string,
  monthStartDate: number,
  monthStartDateAction: string,
  holidayData: string[] = []
) {
  const firstDay = setFirstDay(
    initDate,
    monthStartDate,
    monthStartDateAction,
    holidayData
  );
  const firstDayNextMonth = setFirstDay(
    firstDay.clone().addMonths(1).toString("yyyy-MM-dd"),
    monthStartDate,
    monthStartDateAction,
    holidayData
  );
  let lastDay = firstDayNextMonth.clone().addDays(-1);
  return { firstDay, lastDay };
}

export function firstDayOfMonthFromDate(date: any) {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0);
  return firstDay;
}

export function lastDayOfMonthFromDate(date: any) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const days = new Date(year, month + 1, 0).getDate();

  const lastDay = new Date(year, month, days, 0, 0, 0);
  return lastDay;
}

export function page(
  firstDayOfWeek = 1,
  fromDate: string,
  toDate: string
): Date[] {
  firstDayOfWeek = firstDayOfWeek || 0;
  // console.log('DateBar... page', firstDayOfWeek, fromDate, toDate);

  let days: Date[] = fromTo(new XDate(fromDate, true), new XDate(toDate, true));
  let before: Date[] = [];
  let after: Date[] = [];
  const fdow = (7 + firstDayOfWeek) % 7 || 7;
  const ldow = (fdow + 6) % 7;
  const from = new XDate(days[0], true);
  if (from.getDay() !== fdow) {
    from.addDays(-(from.getDay() + 7 - fdow) % 7);
  }
  const to = new XDate(days[days.length - 1], true);
  const day = to.getDay();
  if (day !== ldow) {
    to.addDays((ldow + 7 - day) % 7);
  }
  if ((isLTE(from, new XDate(days[0])), true)) {
    before = fromTo(from, days[0]);
  }
  if ((isGTE(to, new XDate(days[days.length - 1])), true)) {
    after = fromTo(days[days.length - 1], to);
  }
  return before.concat(days.slice(1, days.length - 1), after);
}

export function pageWeek(initDate: string, firstDayOfWeek = 1): Date[] {
  firstDayOfWeek = firstDayOfWeek || 0;
  let selectedDay: Date = new Date(initDate);
  let before: Date[] = [];
  let after: Date[] = [];
  const fdow = (7 + firstDayOfWeek) % 7 || 7;
  const ldow = (fdow + 6) % 7;
  const from = new XDate(selectedDay, true);
  if (from.getDay() !== fdow) {
    from.addDays(-(from.getDay() + 7 - fdow) % 7);
  }
  const to = new XDate(selectedDay, true);
  const day = to.getDay();
  if (day !== ldow) {
    to.addDays((ldow + 7 - day) % 7);
  }
  if (isLTE(from, new XDate(selectedDay, true))) {
    before = fromTo(from, selectedDay);
  }
  if (isGTE(to, new XDate(selectedDay, true))) {
    after = fromTo(selectedDay, to);
  }
  return before.concat(after.splice(1, after.length));
}

export function getKeyMonthFromToDate(
  initDate: string = new XDate().toString("yyyy-MM-dd"),
  monthStartDate = 1,
  monthStartDateAction = MonthlyStartDateAction.NoChange,
  holidayData: string[] = []
) {
  const { firstDay, lastDay } = setFirstAndLastDay(
    initDate,
    monthStartDate,
    monthStartDateAction,
    holidayData
  );
  const fromDate: string = firstDay.toString("yyyy-MM-dd");
  const toDate: string = lastDay.toString("yyyy-MM-dd");
  const keyMonth: string = `${fromDate}-${toDate}`;
  return {
    keyMonth,
    fromDate,
    toDate,
  };
}

export function parseDate(d: any) {
  if (!d) {
    return;
  } else if (d.timestamp) {
    // conventional data timestamp
    return new XDate(d.timestamp, true);
  } else if (d instanceof XDate) {
    // xdate
    return new XDate(d.toString("yyyy-MM-dd"), true);
  } else if (d.getTime) {
    // javascript date
    const dateString =
      d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    return new XDate(dateString, true);
  } else if (d.year) {
    const dateString = d.year + "-" + d.month + "-" + d.day;
    return new XDate(dateString, true);
  } else if (d) {
    // timestamp nuber or date formatted as string
    return new XDate(d, true);
  }
}

export function sameDate(a: any, b: any) {
  a = a instanceof Date ? new XDate(a, true) : a;
  b = b instanceof Date ? new XDate(b, true) : b;
  return (
    a instanceof XDate &&
    b instanceof XDate &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function sameMonth(a: any, b: any) {
  a = a instanceof Date ? new XDate(a, true) : a;
  b = b instanceof Date ? new XDate(b, true) : b;
  return (
    a instanceof XDate &&
    b instanceof XDate &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth()
  );
}

export function getWeekKey(date: any, firstDayOfWeek = 1) {
  let weekDays = getWeek(date, firstDayOfWeek);
  let fromWeek = new XDate(weekDays.from, true).toString("yyyy/MM/dd");
  let toWeek = new XDate(weekDays.to, true).toString("MM/dd");
  return `${fromWeek} - ${toWeek}`;
}

export function countDateOfMonth(year: any, month: any) {
  return new Date(year, month + 1, 0).getDate();
}

export function addDateNumberDate(date: any, numberAdd: any) {
  let dateNew = new Date(date);
  dateNew.setDate(dateNew.getDate() + numberAdd);
  return dateNew;
}

export function stringFromDateWithFormat(date: any, format: any) {
  return new XDate(date, true).toString(format);
}

export function getDaysFromDateToDate(dateFrom: any, dateTo: any) {
  var date: Date = new Date(dateFrom);
  var days: Date[] = [];
  while (date <= dateTo) {
    days.push(date);
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function parseToXDate(time: any) {
  if (typeof time === "string") {
    return new XDate(time, true);
  } else {
    return new XDate(time, true);
  }
}

export function parseToMoment(time: any) {
  if (typeof time === "string") {
    return moment(time);
  } else {
    return moment(time);
  }
}

export function inTimeFromToDate(
  day: string,
  fromDate: string,
  toDate: string
) {
  const xd = new XDate(day, true).getTime();
  const xdF = new XDate(fromDate, true).getTime();
  const xdT = new XDate(toDate, true).getTime();
  return xd >= xdF && xd <= xdT;
}
