import moment, { Moment } from 'moment';
import { START_DATE_ACTION } from './constants';

export interface IGetKeyMonth {
	initDate: string;
	monthStartDate: number;
	monthStartDateAction: START_DATE_ACTION;
	holidayData: string[];
}

export interface IKeymonth {
	keyMonth: string;
	fromDate: string;
	toDate: string;
}

export default function getKeyMonth (props: IGetKeyMonth): IKeymonth {
	const initDate = moment.utc(props.initDate);
	let fromDate = initDate.clone();
	let toDate = initDate.clone();
	if (props.monthStartDate >= 32) {
		fromDate.add(-1, 'month').endOf('month');
		toDate = fromDate.clone().add(1, 'month');
	} else {
		if (initDate.clone().get('date') < props.monthStartDate) {
			fromDate.add(-1, 'month');
		}
		const maxDayOfMonth = fromDate
			.clone()
			.endOf('month')
			.get('date');
		if (props.monthStartDate > maxDayOfMonth) {
			fromDate.endOf('month');
			toDate = fromDate.clone().add(1, 'month');
		} else {
			fromDate.set('date', props.monthStartDate);
			toDate = fromDate
				.clone()
				.add(1, 'month')
				.add(-1, 'day');
		}
	}
	const currentfromDate = fromDate.clone().day();
	console.log('getKeyMonth... currentfromDate: ', currentfromDate);

	const nextfromDate = toDate
		.clone()
		.add(1, 'day')
		.day();
	console.log('getKeyMonth... nextfromDate: ', nextfromDate);
	switch (props.monthStartDateAction) {
		case START_DATE_ACTION.NO_CHANGE:
			break;
		case START_DATE_ACTION.PREVIOUS:
			// fromDate
			if (currentfromDate === 6) {
				fromDate = fromDate.clone().add(-1, 'day');
			}
			if (currentfromDate === 0) {
				fromDate = fromDate.clone().add(-2, 'day');
			}
			// last date
			if (nextfromDate === 6) {
				toDate = toDate.clone().add(-1, 'day');
			}
			if (nextfromDate === 0) {
				toDate = toDate.clone().add(-2, 'day');
			}
			break;
		case START_DATE_ACTION.NEXT_WEEK:
			// fromDate
			if (currentfromDate === 6) {
				fromDate = fromDate.clone().add(2, 'day');
			}
			if (currentfromDate === 0) {
				fromDate = fromDate.clone().add(1, 'day');
			}
			// last date
			if (nextfromDate === 6) {
				toDate = toDate.clone().add(2, 'day');
			}
			if (nextfromDate === 0) {
				toDate = toDate.clone().add(1, 'day');
			}
			break;
		default:
			break;
	}
	let keyMonth: string = fromDate.format('YYYY-MM-DD');
	keyMonth += '-';
	keyMonth += toDate.format('YYYY-MM-DD');
	return {
		keyMonth,
		fromDate: fromDate.format('YYYY-MM-DD'),
		toDate: toDate.format('YYYY-MM-DD')
	};
}
