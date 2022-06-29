# Date Utils

> A small tool calculator calendar in month

## Table of Contents

- [Installation](#installation)
- [Features](#features)
  - [Get Key Month](#get-key-month)
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
keyMonth(param);
```

Example:

```javascript
import keyMonth, {MonthlyStartDateAction} from "@kotonosora-tech/date-utils";

const holidays: string[] = [
    '2020-01-01',
    '2020-04-30',
    '2020-05-01',
    '2020-09-02',
]

const result = keyMonth(
    new Date(),
    1,
    MonthlyStartDateAction.NoChange,
    holidays
);

/**
result = {
    keyMonth: '2022-06-01-2022-06-30',
    fromDate: '2022-06-01',
    toDate: '2022-06-30'
}
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
