import { getKeyMonth, IKeymonth, START_DATE_ACTION } from '../src';

describe('getKeyMonth initDate 2020-07-01 NO_CHANGE', () => {
	let param = {
		initDate: '2020-07-01',
		monthStartDate: 1,
		monthStartDateAction: START_DATE_ACTION.NO_CHANGE,
		holidayData: []
	};
	test('monthStartDate 1', () => {
		param.monthStartDate = 1;
		let data: IKeymonth = getKeyMonth(param);
		expect(data).toEqual({
			keyMonth: '2020-07-01-2020-07-31',
			firstDate: '2020-07-01',
			lastDate: '2020-07-31'
		});
	});
	test('monthStartDate 2', () => {
		param.monthStartDate = 2;
		let data: IKeymonth = getKeyMonth(param);
		expect(data).toEqual({
			keyMonth: '2020-06-02-2020-07-01',
			firstDate: '2020-06-02',
			lastDate: '2020-07-01'
		});
	});
	test('monthStartDate 3', () => {
		param.monthStartDate = 3;
		let data: IKeymonth = getKeyMonth(param);
		expect(data).toEqual({
			keyMonth: '2020-06-03-2020-07-02',
			firstDate: '2020-06-03',
			lastDate: '2020-07-02'
		});
	});
	test('monthStartDate 10', () => {
		param.monthStartDate = 10;
		let data: IKeymonth = getKeyMonth(param);
		expect(data).toEqual({
			keyMonth: '2020-06-10-2020-07-09',
			firstDate: '2020-06-10',
			lastDate: '2020-07-09'
		});
	});
	test('monthStartDate 27', () => {
		param.monthStartDate = 27;
		let data: IKeymonth = getKeyMonth(param);
		expect(data).toEqual({
			keyMonth: '2020-06-27-2020-07-26',
			firstDate: '2020-06-27',
			lastDate: '2020-07-26'
		});
	});
	test('monthStartDate 28', () => {
		param.monthStartDate = 28;
		let data: IKeymonth = getKeyMonth(param);
		expect(data).toEqual({
			keyMonth: '2020-06-28-2020-07-27',
			firstDate: '2020-06-28',
			lastDate: '2020-07-27'
		});
	});
	test('monthStartDate 29', () => {
		param.monthStartDate = 29;
		let data: IKeymonth = getKeyMonth(param);
		expect(data).toEqual({
			keyMonth: '2020-06-29-2020-07-28',
			firstDate: '2020-06-29',
			lastDate: '2020-07-28'
		});
	});
	test('monthStartDate 30', () => {
		param.monthStartDate = 30;
		let data: IKeymonth = getKeyMonth(param);
		expect(data).toEqual({
			keyMonth: '2020-06-30-2020-07-29',
			firstDate: '2020-06-30',
			lastDate: '2020-07-29'
		});
	});
	test('monthStartDate 31', () => {
		param.monthStartDate = 31;
		let data: IKeymonth = getKeyMonth(param);
		expect(data).toEqual({
			keyMonth: '2020-06-30-2020-07-30',
			firstDate: '2020-06-30',
			lastDate: '2020-07-30'
		});
	});
	test('monthStartDate 32', () => {
		param.monthStartDate = 32;
		let data: IKeymonth = getKeyMonth(param);
		expect(data).toEqual({
			keyMonth: '2020-06-30-2020-07-30',
			firstDate: '2020-06-30',
			lastDate: '2020-07-30'
		});
	});
});
