import moment, {Moment} from 'moment';

export default function getListDate (fromDate: string, toDate: string): Moment[] {
	const days: Moment[] = [];
	let from: Moment = moment.utc(fromDate);
	let to: Moment = moment.utc(toDate);
	for (; from <= to; from = moment.utc(from).add(1, 'days')) {
		days.push(from);
	}
	return days;
}
