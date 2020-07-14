import moment, { Moment } from 'moment';
import getListDate from './getListDate';
import { FIRST_DAY_OF_WEEK } from './constants';

export interface IPageMonth {
	firstDayOfWeek: FIRST_DAY_OF_WEEK;
	fromDate: string;
	toDate: string;
}

export default function getPageMonth (props: IPageMonth): string[] {
	let { firstDayOfWeek, fromDate, toDate } = props;
	let listDate: string[] = getListDate(fromDate, toDate);
	const from: Moment = moment.utc(listDate[0]);
	const to: Moment = moment.utc(listDate[listDate.length - 1]);
	switch (firstDayOfWeek) {
		case FIRST_DAY_OF_WEEK.MONDAY:
			from.startOf('isoWeek');
			to.endOf('isoWeek');
			break;
		case FIRST_DAY_OF_WEEK.SUNDAY:
			from.startOf('week');
			to.endOf('week');
			break;
		default:
			break;
	}
	return getListDate(from.format('YYYY-MM-DD'), to.format('YYYY-MM-DD'));
}
