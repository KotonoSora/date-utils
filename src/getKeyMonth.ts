import moment, {Moment} from 'moment';
import {START_DATE_ACTION} from './constants';

interface IProps {
	initDate: Moment;
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
	const firstDate = moment(props.initDate)
		.set('date', props.monthStartDate)
		.format('YYYY-MM-DD');
	const lastDate = moment(firstDate)
		.add(1, 'month')
		.add(-1, 'day')
		.format('YYYY-MM-DD');
	const keyMonth: string = firstDate + '-' + lastDate;
	return {keyMonth, firstDate, lastDate};
}
