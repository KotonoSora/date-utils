<div align="center">
<h1>Date Utils</h1>

<p>
A small tool calculator calendar in month
</p>

[![version][version-badge]][package]
[![MIT License][license-badge]][license]

</div>

<hr />

<!-- ## Table of Contents -->
<details><summary>Table of Contents</summary><p>

- [Installation](#installation)
- [Features](#features)
  - [Get Key Month](#get-key-month)
  - [Get Page Month](#get-page-month)
  - [Props](#Props)
- [License](#license)
</p></details>

## Installation

```shell
npm install @kotonosora-tech/date-utils --save
# or with yarn
yarn add @kotonosora-tech/date-utils
```

## Features

### Get Key Month

> Return from date, to date available of month by select day, month start date, action change start date and holidays in a round year

```javascript
getKeyMonthFromToDate(param);
```

Example:

```javascript
import { getKeyMonthFromToDate, DateKeyFormat, MonthlyStartDateAction } from '@kotonosora-tech/date-utils';

const holidays: string[] = [
  '2020-01-01',
  '2020-04-30',
  '2020-05-01',
  '2020-09-02',
]

const result = getKeyMonthFromToDate(
  new Date(),
  1,
  MonthlyStartDateAction.NoChange,
  holidays
);

/**
{
  keyMonth: '2022-07-01-2022-07-31',
  fromDate: '2022-07-01',
  toDate: '2022-07-31'
}
* /
```

### Get Page Month

> Return list string format `YYYY-MM-DD` of page calendar by first day of week, from and to date

```javascript
getPageMonth(param: IPageMonth): string[]
```

Example:

```javascript
import {getPageMonth, FIRST_DAY_OF_WEEK} from "@kotonosora-tech/date-utils";

let result: string[] = getPageMonth(
  FIRST_DAY_OF_WEEK.MONDAY,
  new Date(2020, 6, 10),
  new Date(2020, 7, 5)
);

/**
result = [
  '2020-06-08',
  '2020-06-09',
  ...
  '2020-07-11',
  '2020-07-12'
];
* /
```

### Props

| Props                  | Options                                                   | Default | Description                                          |
| ---------------------- | --------------------------------------------------------- | ------- | ---------------------------------------------------- |
| `firstDayOfWeek`       | `FIRST_DAY_OF_WEEK`: `MONDAY`, `SUNDAY`                   | `NULL`  | Day start of week                                    |
| `fromDate`             | `string`                                                  | `NULL`  | Date start (format: `YYYY-MM-DD`)                    |
| `toDate`               | `string`                                                  | `NULL`  | Date end (format: `YYYY-MM-DD`)                      |
| `keyMonth`             | `string`                                                  | `NULL`  | `fromDate-toDate` (format: `YYYY-MM-DD-YYYY-MM-DD`)  |
| `initDate`             | `string`                                                  | `NULL`  | Current date or selected date (format: `YYYY-MM-DD`) |
| `holidayData`          | `string[]`                                                | `NULL`  | List holidays using (holiday format: `YYYY-MM-DD`)   |
| `monthStartDate`       | `number`                                                  | `NULL`  | Date in month from `1` to `31`, last day is `32`     |
| `monthStartDateAction` | `START_DATE_ACTION`: `NO_CHANGE`, `PREVIOUS`, `NEXT_WEEK` | `NULL`  | Date in month from `1` to `31`, last day is `32`     |


## License

- **[MIT license](./LICENSE)**
- Copyright (c) 2017-2022 [Nguyễn Duy Thắng](https://kotonosora.dev 'My CV Online').
