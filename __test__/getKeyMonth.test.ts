import { getKeyMonth, START_DATE_ACTION, IGetKeyMonth } from '../src';
import { advanceTo, clear } from 'jest-date-mock';
import moment from 'moment';
import { resultTest } from '../__mock__/DataMock';
import { holidays } from '../__mock__/HolidayMock';

beforeAll(() => {
	clear();
});

export const getResultTestCase = (paramTest: IGetKeyMonth) => {
	let resultTestCase: any = {};
	if (paramTest.holidayData.length > 0) {
		resultTestCase = resultTest['WITHOUT_HOLIDAY'];
	} else {
		resultTestCase = resultTest['WITHOUT_HOLIDAY'];
	}
	resultTestCase = resultTestCase[paramTest.initDate];
	resultTestCase = resultTestCase[paramTest.monthStartDateAction];
	resultTestCase = resultTestCase[paramTest.monthStartDate];
	return resultTestCase;
};

export const runExpectTestCase = (paramTest: IGetKeyMonth) => {
	test(`should be return true with param: ${paramTest.initDate} ${paramTest.monthStartDate} ${paramTest.monthStartDateAction}`, () => {
		expect(getKeyMonth(paramTest)).toEqual(getResultTestCase(paramTest));
	});
};

describe('getKeyMonth', () => {
	advanceTo(moment.utc('2020-07-01').toDate());
	for (const action in START_DATE_ACTION) {
		if (Object.prototype.hasOwnProperty.call(START_DATE_ACTION, action)) {
			const monthStartDateAction: START_DATE_ACTION = START_DATE_ACTION[action];
			const param: IGetKeyMonth = {
				initDate: moment.utc().format('YYYY-MM-DD'),
				monthStartDate: 1,
				monthStartDateAction,
				holidayData: holidays
			};
			for (let startDate: number = 1; startDate <= 1; startDate++) {
				const paramTest = { ...param, monthStartDate: startDate };
				runExpectTestCase(paramTest);
			}
		}
	}
});
