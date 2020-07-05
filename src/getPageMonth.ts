import moment, {Moment} from 'moment';
import getListDate from './getListDate';
import {FIRST_DAY_OF_WEEK} from './constants';

export interface IPageMonth {
	firstDayOfWeek: FIRST_DAY_OF_WEEK;
	fromDate: string;
	toDate: string;
}

export function isGTE (a: Moment, b: Moment) {
	return b.diff(a, 'day') > -1;
}

export function isLTE (a: Moment, b: Moment) {
	return a.diff(b, 'day') > -1;
}

export default function getPageMonth (props: IPageMonth): string[] {
	let {firstDayOfWeek, fromDate, toDate} = props;

	firstDayOfWeek = firstDayOfWeek || 0;

	let listDate: string[] = getListDate(fromDate, toDate);
	let before: string[] = [];
	let after: string[] = [];

	const fdow = (7 + firstDayOfWeek) % 7 || 7;
	const ldow = (fdow + 6) % 7;

	const from = moment.utc(listDate[0]);
	const dayFrom = from.get('date');
	if (dayFrom !== fdow) {
		const addDate: number = -(dayFrom + 7 - fdow) % 7;

		from.add(addDate, 'day');
		console.log('dayFrom addDate', addDate, from.format('YYYY-MM-DD'));
	}

	const to = moment.utc(listDate[listDate.length - 1]);
	const dayTo = to.get('date');
	if (dayTo !== ldow) {
		const addDate: number = (ldow + 7 - dayTo) % 7;

		to.add(addDate, 'day');
		console.log('dayTo addDate', addDate, to.format('YYYY-MM-DD'));
	}

	if ((isLTE(from, moment.utc(listDate[0])), true)) {
		before = getListDate(from.format('YYYY-MM-DD'), listDate[0]);
	}
	if ((isGTE(to, moment.utc(listDate[listDate.length - 1])), true)) {
		after = getListDate(listDate[listDate.length - 1], to.format('YYYY-MM-DD'));
	}

	return before.concat(listDate.slice(1, listDate.length - 1), after);
}
