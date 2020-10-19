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
getKeyMonthFromToDate(param);
```

Example:

```javascript
import moment from "moment";
import getKeyMonthFromToDate, {MonthlyStartDateAction} from "@kotonosora-tech/date-utils";

const holidays: string[] = [
    '2020-01-01',
    '2020-04-30',
    '2020-05-01',
    '2020-09-02',
]

const param = {
    initDate: moment('2020-01-24'),
    monthStartDate: 1,
    monthStartDateAction: MonthlyStartDateAction.NoChange,
    holidayData: holidays
};

const result = getKeyMonthFromToDate(param);

/**
result = {
    keyMonth: '2020-01-01-2020-01-31',
    fromDate: '2020-01-01',
    toDate: '2020-01-31'
}
* /
```

### Props

## License

- **[MIT license](./LICENSE)**
- Copyright (c) 2020 [Nguyễn Duy Thắng](https://kotonosora.dev 'My CV Online').
