import { parse } from 'date-fns';

import {getKeyMonthFromToDate, DATE_KEY_FORMAT, MONTHLY_START_DATE_ACTION} from '../dist';

const holidays: string[] = [
  '2020-01-01',
  '2020-04-30',
  '2020-05-01',
  '2020-09-02',
];

describe('getKeyMonthFromToDate', () => {
  test('test case 2020-01-24 start date 1 NoChange', () => {
    const result = getKeyMonthFromToDate(
      parse('2020-01-24', DATE_KEY_FORMAT, new Date()),
      1,
      MONTHLY_START_DATE_ACTION.NO_CHANGE,
      holidays,
    );
    expect(result.keyMonth).toEqual('2020-01-01-2020-01-31');
  });
  test('test case 2020-01-24 start date 1 NextWeek', () => {
    const result = getKeyMonthFromToDate(
      parse('2020-01-24', DATE_KEY_FORMAT, new Date()),
      1,
      MONTHLY_START_DATE_ACTION.NEXT_WEEK,
      holidays,
    );
    expect(result.keyMonth).toEqual('2020-01-02-2020-02-02');
  });
  test('test case 2020-01-24 start date 1 Previous', () => {
    const result = getKeyMonthFromToDate(
      parse('2020-01-24', DATE_KEY_FORMAT, new Date()),
      1,
      MONTHLY_START_DATE_ACTION.PREVIOUS,
      holidays,
    );
    expect(result.keyMonth).toEqual('2019-12-31-2020-01-30');
  });
  test('test case 2022-06-29 start date 1 NoChange', () => {
    const result = getKeyMonthFromToDate(
      parse('2022-06-29', DATE_KEY_FORMAT, new Date()),
      1,
      MONTHLY_START_DATE_ACTION.NO_CHANGE,
      holidays,
    );
    expect(result.keyMonth).toEqual('2022-06-01-2022-06-30');
  });
  test('test case 2022-06-29 start date 1 NextWeek', () => {
    const result = getKeyMonthFromToDate(
      parse('2022-06-29', DATE_KEY_FORMAT, new Date()),
      1,
      MONTHLY_START_DATE_ACTION.NEXT_WEEK,
      holidays,
    );
    expect(result.keyMonth).toEqual('2022-06-01-2022-06-30');
  });
  test('test case 2022-06-29 start date 1 Previous', () => {
    const result = getKeyMonthFromToDate(
      parse('2022-06-29', DATE_KEY_FORMAT, new Date()),
      1,
      MONTHLY_START_DATE_ACTION.PREVIOUS,
      holidays,
    );
    expect(result.keyMonth).toEqual('2022-06-01-2022-06-30');
  });
  test('test case 2022-07-2 start date 10 NoChange', () => {
    const result = getKeyMonthFromToDate(
      parse('2022-07-02', DATE_KEY_FORMAT, new Date()),
      10,
      MONTHLY_START_DATE_ACTION.NO_CHANGE,
      holidays,
    );
    expect(result.keyMonth).toEqual('2022-07-10-2022-08-09');
  });
  test('test case 2022-07-2 start date 10 Nextweek', () => {
    const result = getKeyMonthFromToDate(
      parse('2022-07-02', DATE_KEY_FORMAT, new Date()),
      10,
      MONTHLY_START_DATE_ACTION.NEXT_WEEK,
      holidays,
    );
    expect(result.keyMonth).toEqual('2022-07-11-2022-08-09');
  });
  test('test case 2022-07-2 start date 10 Previous', () => {
    const result = getKeyMonthFromToDate(
      parse('2022-07-02', DATE_KEY_FORMAT, new Date()),
      10,
      MONTHLY_START_DATE_ACTION.PREVIOUS,
      holidays,
    );
    expect(result.keyMonth).toEqual('2022-07-08-2022-08-09');
  });
});
