import getKeyMonth from '../src/getKeyMonth';
import moment from 'moment';
import {START_DATE_ACTION} from '../src/constants';

describe("getKeyMonth", () => {
	test('should return the correct key month', () => {
		let keymonth = getKeyMonth({
			initDate: moment('2020-02-06'),
			monthStartDate: 10,
			monthStartDateAction: START_DATE_ACTION.NO_CHANGE,
			holidayData: [],
		});
		expect(keymonth).toEqual('2020-02-10-2020-03-09');
	});
});
