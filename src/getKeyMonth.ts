import moment, {Moment} from 'moment';
import {START_DATE_ACTION} from './constants';

interface IProps {
	initDate: Moment;
	monthStartDate: number;
	monthStartDateAction: START_DATE_ACTION;
	holidayData: string[];
}

export default function getKeyMonth (props: IProps): string {
	const firstDate = moment(props.initDate)
		.set('date', props.monthStartDate)
		.format('YYYY-MM-DD');
	const lastDate = moment(firstDate)
		.endOf('month')
		.format('YYYY-MM-DD');
	const keyMonth: string = firstDate + '-' + lastDate;
	return keyMonth;
}
