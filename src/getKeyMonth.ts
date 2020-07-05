import moment from 'moment';
import {START_DATE_ACTION} from './constants';
import getMaxDay from './getMaxDay';

export interface IProps {
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

export default function getKeyMonth (props: IProps): IKeymonth {
	const initDate = moment.utc(props.initDate);
	let firstDate = initDate.clone();
	let lastDate = initDate.clone();
	if (props.monthStartDate >= 32) {
		firstDate.add(-1, 'month').endOf('month');
		lastDate = firstDate.clone().add(1, 'month');
	} else {
		if (initDate.get('date') < props.monthStartDate) {
			firstDate.add(-1, 'month');
		}
		const maxDayOfMonth = getMaxDay(initDate.format('YYYY-MM-DD'));
		if (props.monthStartDate > maxDayOfMonth) {
			firstDate.set('date', maxDayOfMonth);
			lastDate = firstDate.clone().add(1, 'month');
		} else {
			firstDate.set('date', props.monthStartDate);
			lastDate = firstDate
				.clone()
				.add(1, 'month')
				.add(-1, 'day');
		}
	}
	const keyMonth: string = firstDate.format('YYYY-MM-DD') + '-' + lastDate.format('YYYY-MM-DD');
	return {keyMonth, firstDate: firstDate.format('YYYY-MM-DD'), lastDate: lastDate.format('YYYY-MM-DD')};
}
