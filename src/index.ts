import moment, { Moment } from 'moment';

export enum MonthlyStartDateAction {
	NoChange = 'NoChange',
	Previous = 'Previous',
	NextWeek = 'NextWeek'
}

const DOME = 14;

interface IDuration {
	startDate: Moment;
	endDate: Moment;
}

export default function getKeyMonthFromToDate (
	initDate: Moment,
	monthStartDate = 1,
	monthStartDateAction = MonthlyStartDateAction.NoChange,
	holidayData: string[] = []
) {
	const duration = getDurationTimeMonthContainDate(
		initDate,
		monthStartDate,
		monthStartDateAction,
		holidayData
	);
	const fromDate: string = duration.startDate.format('YYYY-MM-DD');
	const toDate: string = duration.endDate.format('YYYY-MM-DD');
	const keyMonth: string = `${fromDate}-${toDate}`;
	return {
		keyMonth,
		fromDate,
		toDate
	};
}

function getDurationTimeMonthContainDate (
	date: Moment,
	startDate: number,
	cutoffDateSetting: MonthlyStartDateAction,
	holidayData: Array<string>
): IDuration {
	let month = date.get('month') + 1; // month return from 0 to 11
	let year = date.get('year'); //parseInt(date.format("YYYY"));
	let periodTime = getDurationTimeOfMonthAndYear(
		month,
		year,
		startDate,
		cutoffDateSetting,
		holidayData
	);
	if (date.isBefore(periodTime.startDate)) {
		let correctMonth = month == 1 ? 12 : month - 1;
		let correctYear = month == 1 ? year - 1 : year;
		return getDurationTimeOfMonthAndYear(
			correctMonth,
			correctYear,
			startDate,
			cutoffDateSetting,
			holidayData
		);
	} else if (date.isAfter(periodTime.endDate)) {
		let correctMonth = month == 12 ? 1 : month + 1;
		let correctYear = month == 12 ? year + 1 : year;
		return getDurationTimeOfMonthAndYear(
			correctMonth,
			correctYear,
			startDate,
			cutoffDateSetting,
			holidayData
		);
	} else {
		return periodTime;
	}
}

function getDurationTimeOfMonthAndYear (
	month: number,
	year: number,
	startDate: number,
	cutoffDateSetting: MonthlyStartDateAction,
	holidayData: Array<string>
): IDuration {
	let fromDay, fromMonth, fromYear; // start Date of this month
	let nextFromDay, nextFromMonth, nextFromYear; // start Date of next month. We use this date to define end date of this month

	if (startDate <= DOME) {
		fromDay = startDate;
		fromMonth = month;
		fromYear = year;

		nextFromDay = startDate;
		nextFromMonth = month + 1;
		nextFromYear = year;
		if (nextFromMonth > 12) {
			nextFromMonth = 1;
			nextFromYear++;
		}
	} else {
		fromDay = startDate;
		fromMonth = month - 1;
		fromYear = year;
		if (fromMonth == 0) {
			fromMonth = 12;
			fromYear--;
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
	let fromDateStr = `${fromYear}-${fromMonth}-${fromDay}`;
	let fromDate = moment(fromDateStr, 'YYYY-MM-DD');
	fromDate = startDateAvoidHolidayOfDate(
		fromDate,
		cutoffDateSetting,
		holidayData
	);

	// combine next startDate from day, month, year
	let nextFromDateStr = `${nextFromYear}-${nextFromMonth}-${nextFromDay} 23:59:59`;
	let nextFromDate = moment(nextFromDateStr, 'YYYY-MM-DD hh:mm:ss');
	nextFromDate = startDateAvoidHolidayOfDate(
		nextFromDate,
		cutoffDateSetting,
		holidayData
	);
	// end date of this month define by minus 1 of start date of next month
	let toDate = moment(nextFromDate).subtract(1, 'day');
	let duration = {
		startDate: fromDate,
		endDate: toDate
	};
	return duration;
}

function numberDayOfMonthYear (month: number, year: number) {
	if (month == 2) {
		if (isLeapYear(year)) return 29;
		else return 28;
	}
	if (month == 4 || month == 6 || month == 9 || month == 11) return 30;

	return 31;
}

function isLeapYear (year: number) {
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

function startDateAvoidHolidayOfDate (
	date: Moment,
	cutoffDateSetting: MonthlyStartDateAction,
	holidayData: Array<string>
): Moment {
	if (cutoffDateSetting === MonthlyStartDateAction.NoChange) {
		return date;
	}
	while (isHolidayDate(date, holidayData)) {
		if (cutoffDateSetting === MonthlyStartDateAction.Previous) {
			date = date.clone().subtract(1, 'day');
		} else if (cutoffDateSetting === MonthlyStartDateAction.NextWeek) {
			date = date.clone().add(1, 'day');
		}
	}
	return date;
}

function isHolidayDate (date: Moment, holidayData: Array<string>): boolean {
	let day = date.isoWeekday();
	if (day === 6 || day === 7) {
		return true;
	}
	return isHoliday(date, holidayData);
}

function isHoliday (date: Moment, holidayData: Array<string>): boolean {
	const dateStr = date.format('YYYY-MM-DD');
	if (holidayData.includes(dateStr)) {
		return true;
	}
	return false;
}
