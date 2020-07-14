import { getListDate } from '../src';

describe('getListDate', () => {
	test('should return the correct array', () => {
		let data: string[] = getListDate('2020-07-01', '2020-07-05');
		let result = [
			'2020-07-01',
			'2020-07-02',
			'2020-07-03',
			'2020-07-04',
			'2020-07-05'
		];
		expect(data).toEqual(result);
	});
});
