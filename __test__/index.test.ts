import moment from 'moment';
import getKeyMonthFromToDate, { MonthlyStartDateAction } from '../src';

const holidays: string[] = [
	'2020-01-01',
	'2020-04-30',
	'2020-05-01',
	'2020-09-02'
];

describe('getKeyMonthFromToDate', () => {
	test('test case 2020-01-24 start date 1 NoChange', () => {
		const result = getKeyMonthFromToDate(
			moment('2020-01-24'),
			1,
			MonthlyStartDateAction.NoChange,
			holidays
		);
		expect(result.keyMonth).toEqual('2020-01-01-2020-01-31');
	});
	test('test case 2020-01-24 start date 1 NextWeek', () => {
		const result = getKeyMonthFromToDate(
			moment('2020-01-24'),
			1,
			MonthlyStartDateAction.NextWeek,
			holidays
		);
		expect(result.keyMonth).toEqual('2020-01-02-2020-02-02');
	});
	test('test case 2020-01-24 start date 1 Previous', () => {
		const result = getKeyMonthFromToDate(
			moment('2020-01-24'),
			1,
			MonthlyStartDateAction.Previous,
			holidays
		);
		expect(result.keyMonth).toEqual('2019-12-31-2020-01-30');
	});
});
