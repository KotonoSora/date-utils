// const XDate = require('xdate');
// const DateUtils = require('./index');
// var fs = require('fs');
// const holidayData = [
//     "2019-07-15",
//     "2019-08-12",
//     "2019-09-16",
//     "2019-09-23",
//     "2019-10-14",
//     "2019-11-04",
//     "2019-11-23",
//     "2020-01-01",
//     "2020-01-13",
//     "2020-02-11",
//     "2020-02-23",
//     "2020-02-24",
//     "2020-03-20",
//     "2020-04-29",
//     "2020-05-03",
//     "2020-05-04",
//     "2020-05-05",
//     "2020-05-06",
//     "2020-07-23",
//     "2020-07-24",
//     "2020-08-10",
//     "2020-09-21",
//     "2020-09-22",
//     "2020-11-03",
//     "2020-11-23",
//     "2021-01-01",
//     "2021-01-11",
//     "2021-02-11",
//     "2021-02-23",
//     "2021-03-20",
//     "2021-04-29",
//     "2021-05-03",
//     "2021-05-04",
//     "2021-05-05",
// ];
// var monthlyStartDateAction = DateUtils.MonthlyStartDateAction.Previous;
// var dataLog = 'month,month_start_date,month_start_date_action,from_date,to_date\n';
// for (let monthlyStartDate = 1; monthlyStartDate <= 32; monthlyStartDate++) {
//     for (let month = 1; month <= 12; month++) {
//         var today = new XDate().setMonth(month -1).setFullYear(2020).setDate(1).toString('yyyy-MM-dd');
//         var result = DateUtils.getKeyMonthFromToDate(today, monthlyStartDate, monthlyStartDateAction, holidayData);
//         dataLog += month+', '+monthlyStartDate+', '+monthlyStartDateAction+', '+result.fromDate+', '+result.toDate+'\n';
//     }
// }
// fs.writeFile('resulttest2.csv', dataLog, function(err) {
//     if (err) console.log(err);
// })

import { sameMonth } from '../src/index'

test('is same month', () => {
  expect(sameMonth(new Date('2020-01-01'), new Date('2020-01-01'))).toBe(true)
})

test('not same month', () => {
  expect(sameMonth(new Date('2020-02-01'), new Date('2020-01-01'))).toBe(false)
})

import { sum } from '../src/index'

test('Sum 4 + 5 = 9', () => {
  expect(sum(4, 5)).toBe(9)
})
