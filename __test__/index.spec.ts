import {getKeyMonth, getListDate, IKeymonth} from '../src/index';
import moment from 'moment';
import {START_DATE_ACTION} from '../src/constants';

describe('getKeyMonth', () => {
	test('should return the correct key month', () => {
		let data: IKeymonth = getKeyMonth({
			initDate: moment('2020-02-06'),
			monthStartDate: 10,
			monthStartDateAction: START_DATE_ACTION.NO_CHANGE,
			holidayData: [],
		});
		expect(data).toEqual({
			keyMonth: '2020-02-10-2020-03-09',
			firstDate: '2020-02-10',
			lastDate: '2020-03-09',
		});
	});
});

describe('getListDate', () => {
	test('should return the correct array', () => {
		let data: string[] = getListDate('2020-07-01', '2020-07-05');
		let result = ['2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05'];
		expect(data).toEqual(result);
	});
});
