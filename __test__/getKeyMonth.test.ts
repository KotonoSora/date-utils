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

export const runTestCase = (dayTest: string) => {
	advanceTo(moment.utc(dayTest).toDate());
	for (const action in START_DATE_ACTION) {
		if (Object.prototype.hasOwnProperty.call(START_DATE_ACTION, action)) {
			const monthStartDateAction: START_DATE_ACTION = START_DATE_ACTION[action];
			let itemSelected: string[] = Object.keys(
				resultTest['WITHOUT_HOLIDAY'][dayTest][monthStartDateAction]
			);
			const monthStartDate: number = parseInt(itemSelected[0]);
			const paramTest: IGetKeyMonth = {
				initDate: moment.utc().format('YYYY-MM-DD'),
				monthStartDate,
				monthStartDateAction,
				holidayData: holidays
			};
			describe(`getKeyMonth: ${paramTest.initDate}`, () => {
				runExpectTestCase(paramTest);
			});
		}
	}
};

// Object.keys(resultTest['WITHOUT_HOLIDAY']).forEach((dayTest: string) =>
// 	runTestCase(dayTest)
// );

runTestCase('2020-08-09');
