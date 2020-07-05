import moment from 'moment';

export default function getMaxDay (date: string): number {
	const month: number = moment.utc(date).get('month');
	switch (month) {
		case 2:
			if (moment.utc(date).isLeapYear()) return 29;
			return 28;
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
		default:
			return 31;
	}
}
