import { parse } from 'date-fns';

import {getPageMonth, FIRST_DAY_OF_WEEK, DATE_KEY_FORMAT} from '../dist';

describe('getPageMonth', () => {
    test('test case 2020-01-24 start date sunday', () => {
      const result = getPageMonth(
        FIRST_DAY_OF_WEEK.SUNDAY,
        parse('2020-01-01', DATE_KEY_FORMAT, new Date()),
        parse('2020-01-31', DATE_KEY_FORMAT, new Date()),
      );
      expect(result.keyMonth).toEqual('2019-12-29-2020-02-01');
    });
    test('test case 2020-01-24 start date monday', () => {
      const result = getPageMonth(
        FIRST_DAY_OF_WEEK.MONDAY,
        parse('2020-01-01', DATE_KEY_FORMAT, new Date()),
        parse('2020-01-31', DATE_KEY_FORMAT, new Date()),
      );
      expect(result.keyMonth).toEqual('2019-12-30-2020-02-02');
    });
    test('test case 2020-07-02 start date sunday', () => {
      const result = getPageMonth(
        FIRST_DAY_OF_WEEK.SUNDAY,
        parse('2022-07-01', DATE_KEY_FORMAT, new Date()),
        parse('2022-07-31', DATE_KEY_FORMAT, new Date()),
      );
      expect(result.keyMonth).toEqual('2022-06-26-2022-08-06');
    });
    test('test case 2020-07-02 start date monday', () => {
      const result = getPageMonth(
        FIRST_DAY_OF_WEEK.MONDAY,
        parse('2022-07-01', DATE_KEY_FORMAT, new Date()),
        parse('2022-07-31', DATE_KEY_FORMAT, new Date()),
      );
      expect(result.keyMonth).toEqual('2022-06-27-2022-07-31');
    });
});