import moment from "moment";
import XDate from "xdate";
export declare enum MonthlyStartDateAction {
    NoChange = "NoChange",
    Previous = "Previous",
    NextWeek = "NextWeek"
}
export declare enum weekdaysOrder {
    SUNDAY = "SUNDAY",
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY"
}
export declare function getWeekdays(startDateOfWeek?: number): weekdaysOrder[];
/**
 *
 * @param containedDate the instance of moment
 * @returns An Object contain 2 instance of moment, startDate is start date of week, endDate is end date of week
 */
/**
 *
 * @param containedDate the instance of moment
 * @returns An Object contain 2 instance of moment, startDate is start date of display calendar, endDate is end date of display calendar
 */
export declare function numberDayOfMonthYear(month: number, year: number): 29 | 28 | 30 | 31;
export declare function isLeapYear(year: number): boolean;
export declare function getStringFromDate(date?: moment.Moment, format?: string): string;
/**
 * Copy function from qmk
 *
 * @since     MoneyReco ReactNative Beta 1
 */
export declare const SUNDAY = "SUNDAY";
export declare const MONDAY = "MONDAY";
export declare const TUESDAY = "TUESDAY";
export declare const WEDNESDAY = "WEDNESDAY";
export declare const THURSDAY = "THURSDAY";
export declare const FRIDAY = "FRIDAY";
export declare const SATURDAY = "SATURDAY";
export declare const dayOfWeekOrder: string[];
export declare function weekDayNames(firstDayOfWeek?: number): string[];
export declare function getWeek(date: any, firstDayOfWeek?: number): {
    from: Date;
    to: Date;
};
export declare function isGTE(a: any, b: any): boolean;
export declare function isLTE(a: any, b: any): boolean;
export declare function week(date: any, firstDayOfWeek?: number): Date[];
export declare function getDaysOfMonth(initDate: string, monthStartDate: number, monthStartDateAction: string, holidayData?: string[]): Date[];
export declare function checkHoliday(date: XDate, holidayData?: string[]): boolean;
export declare function getFirstDayOfMonth(date: XDate, monthStartDateAction?: string, holidayData?: string[]): XDate;
export declare function checkFirstDay(firstDay: XDate, monthStartDateAction: string, holidayData?: string[]): XDate;
export declare function setFirstDay(initDate: string, monthStartDate: number, monthStartDateAction: string, holidayData?: string[]): XDate;
export declare function setFirstAndLastDay(initDate: string, monthStartDate: number, monthStartDateAction: string, holidayData?: string[]): {
    firstDay: XDate;
    lastDay: XDate;
};
export declare function firstDayOfMonthFromDate(date: any): Date;
export declare function lastDayOfMonthFromDate(date: any): Date;
export declare function page(firstDayOfWeek: number | undefined, fromDate: string, toDate: string): Date[];
export declare function pageWeek(initDate: string, firstDayOfWeek?: number): Date[];
export declare function getKeyMonthFromToDate(initDate?: string, monthStartDate?: number, monthStartDateAction?: MonthlyStartDateAction, holidayData?: string[]): {
    keyMonth: string;
    fromDate: string;
    toDate: string;
};
export declare function parseDate(d: any): XDate | undefined;
export declare function sameDate(a: any, b: any): boolean;
export declare function sameMonth(a: any, b: any): boolean;
export declare function getWeekKey(date: any, firstDayOfWeek?: number): string;
export declare function countDateOfMonth(year: any, month: any): number;
export declare function addDateNumberDate(date: any, numberAdd: any): Date;
export declare function stringFromDateWithFormat(date: any, format: any): string;
export declare function getDaysFromDateToDate(dateFrom: any, dateTo: any): Date[];
export declare function parseToXDate(time: any): XDate;
export declare function parseToMoment(time: any): moment.Moment;
export declare function inTimeFromToDate(day: string, fromDate: string, toDate: string): boolean;
export declare const sum: (a: number, b: number) => number;
