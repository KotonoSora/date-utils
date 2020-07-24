import { getKeyMonth, START_DATE_ACTION, IGetKeyMonth } from '../src';
import { advanceTo, clear } from 'jest-date-mock';
import moment from 'moment';

beforeAll(() => {
	clear();
});

describe('getKeyMonth', () => {
	advanceTo(moment.utc('2020-07-01').toDate());
	for (const key in START_DATE_ACTION) {
		if (Object.prototype.hasOwnProperty.call(START_DATE_ACTION, key)) {
			const monthStartDateAction = START_DATE_ACTION[key];
			const param: IGetKeyMonth = {
				initDate: moment.utc().format('YYYY-MM-DD'),
				monthStartDate: 1,
				monthStartDateAction,
				holidayData: []
			};
			for (let startDate = 1; startDate <= 32; startDate++) {
				const paramTest = { ...param, monthStartDate: startDate };
				switch (monthStartDateAction) {
					case START_DATE_ACTION.NO_CHANGE:
						switch (startDate) {
							case 1:
								test(`should be return true with param: ${param.initDate} ${param.monthStartDate} ${param.monthStartDateAction}`, () => {
									expect(getKeyMonth(paramTest)).toEqual({
										keyMonth: '2020-07-01-2020-07-31',
										firstDate: '2020-07-01',
										lastDate: '2020-07-31'
									});
								});
								break;
							default:
								break;
						}
						break;
					case START_DATE_ACTION.PREVIOUS:
						switch (startDate) {
							case 1:
								test(`should be return true with param: ${param.initDate} ${param.monthStartDate} ${param.monthStartDateAction}`, () => {
									expect(getKeyMonth(paramTest)).toEqual({
										keyMonth: '2020-07-01-2020-07-30',
										firstDate: '2020-07-01',
										lastDate: '2020-07-30'
									});
								});
								break;
							default:
								break;
						}
						break;
					case START_DATE_ACTION.NEXT_WEEK:
						switch (startDate) {
							case 1:
								test(`should be return true with param: ${param.initDate} ${param.monthStartDate} ${param.monthStartDateAction}`, () => {
									expect(getKeyMonth(paramTest)).toEqual({
										keyMonth: '2020-07-01-2020-08-02',
										firstDate: '2020-07-01',
										lastDate: '2020-08-02'
									});
								});
								break;
							default:
								break;
						}
						break;
					default:
						break;
				}
			}
		}
	}
});
