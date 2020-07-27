import moment from 'moment';
import { START_DATE_ACTION } from './constants';

export interface IGetKeyMonth {
	initDate: string;
	monthStartDate: number;
	monthStartDateAction: START_DATE_ACTION;
	holidayData: string[];
}

export interface IKeymonth {
	keyMonth: string;
	firstDate: string;
	lastDate: string;
}

export default function getKeyMonth(props: IGetKeyMonth): IKeymonth {
	const initDate = moment.utc(props.initDate);
	let firstDate = initDate.clone();
	let lastDate = initDate.clone();
	if (props.monthStartDate >= 32) {
		firstDate.add(-1, 'month').endOf('month');
		lastDate = firstDate.clone().add(1, 'month');
	} else {
		if (initDate.clone().get('date') < props.monthStartDate) {
			firstDate.add(-1, 'month');
		}
		const maxDayOfMonth = firstDate
			.clone()
			.endOf('month')
			.get('date');
		if (props.monthStartDate > maxDayOfMonth) {
			firstDate.endOf('month');
			lastDate = firstDate.clone().add(1, 'month');
		} else {
			firstDate.set('date', props.monthStartDate);
			lastDate = firstDate
				.clone()
				.add(1, 'month')
				.add(-1, 'day');
		}
	}
	switch (props.monthStartDateAction) {
		case START_DATE_ACTION.NO_CHANGE:
			break;
		case START_DATE_ACTION.PREVIOUS:
			if (lastDate.clone().add(1, 'day').day() === 6) {
				lastDate = lastDate.clone().add(-1, 'day');
			}
			if (lastDate.clone().add(1, 'day').day() === 0) {
				lastDate = lastDate.clone().add(-2, 'day');
			}
			break;
		case START_DATE_ACTION.NEXT_WEEK:
			if (lastDate.clone().add(1, 'day').day() === 6) {
				lastDate = lastDate.clone().add(2, 'day');
			}
			if (lastDate.clone().add(1, 'day').day() === 0) {
				lastDate = lastDate.clone().add(1, 'day');
			}
			break;
		default:
			break;
	}
	let keyMonth: string = firstDate.format('YYYY-MM-DD');
	keyMonth += '-';
	keyMonth += lastDate.format('YYYY-MM-DD');
	return {
		keyMonth,
		firstDate: firstDate.format('YYYY-MM-DD'),
		lastDate: lastDate.format('YYYY-MM-DD')
	};
}
