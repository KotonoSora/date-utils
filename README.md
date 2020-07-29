# Date Utils

> A small tool calculator calendar in month

## Table of Contents

- [Installation](#installation)
- [Features](#features)
  - [Get Key Month](#get-key-month)
  - [Get List Date](#get-list-date)
  - [Get Page Month](#get-page-month)
  - [Props](#Props)
- [License](#license)

## Installation

```shell
npm install @kotonosora-tech/date-utils
```

```shell
yarn add @kotonosora-tech/date-utils
```

## Features

### Get Key Month

> Return from date, to date available of month by select day, month start date, action change start date and holidays in a round year

```javascript
getKeyMonth(param: IGetKeyMonth): IKeymonth
```

Example:

```javascript
import moment from "moment";
import {
    getKeyMonth,
    IGetKeyMonth,
    START_DATE_ACTION,
    IKeymonth
} from "@kotonosora-tech/date-utils";

const holidays: string[] = [
    '2020-01-01',
    '2020-04-30',
    '2020-05-01',
    '2020-09-02',
]

const param: IGetKeyMonth = {
    initDate: moment.utc('2020-01-24').format('YYYY-MM-DD'),
    monthStartDate: 1,
    monthStartDateAction: START_DATE_ACTION.NO_CHANGE,
    holidayData: holidays
};

const result: IKeymonth = getKeyMonth(param);

/**
result = {
    keyMonth: '2020-01-01-2020-01-31',
    fromDate: '2020-01-01',
    toDate: '2020-01-31'
}
* /
```

### Get List Date

> Return list string format `YYYY-MM-DD` by from, to date

```javascript
getListDate(fromDate: string, toDate: string): string[]
```

Example:

```javascript
import {getListDate} from "@kotonosora-tech/date-utils";

const fromDate: string = '2020-07-01';
const toDate: string = '2020-07-05';

let result: string[] = getListDate(fromDate, toDate);

/**
result = [
    '2020-07-01',
    '2020-07-02',
    '2020-07-03',
    '2020-07-04',
    '2020-07-05'
];
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

let param: IPageMonth = {
    firstDayOfWeek: FIRST_DAY_OF_WEEK.MONDAY,
    fromDate: '2020-06-10',
    toDate: '2020-07-09'
};

let result: string[] = getPageMonth(param);

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
- Copyright (c) 2020 [Nguyễn Duy Thắng](https://kotonosora.dev 'My CV Online').
