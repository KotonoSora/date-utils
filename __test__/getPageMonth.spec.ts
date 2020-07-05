import {getPageMonth, IPageMonth, FIRST_DAY_OF_WEEK} from '../src/index';

describe('getPageMonth', () => {
	let param: IPageMonth = {
		firstDayOfWeek: FIRST_DAY_OF_WEEK.MONDAY,
		fromDate: '2020-06-10',
		toDate: '2020-07-09',
	};
	test('firstDayOfWeek MONDAY', () => {
		param.firstDayOfWeek = FIRST_DAY_OF_WEEK.MONDAY;
		const data = getPageMonth(param);
		expect(data[0]).toEqual('2020-06-08');
		expect(data[data.length - 1]).toEqual('2020-07-12');
	});
	test('firstDayOfWeek SUNDAY', () => {
		param.firstDayOfWeek = FIRST_DAY_OF_WEEK.SUNDAY;
		const data = getPageMonth(param);
		expect(data[0]).toEqual('2020-06-07');
		expect(data[data.length - 1]).toEqual('2020-07-11');
	});
});
