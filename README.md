<div align="center">
<h1>Date Utils</h1>

<p>
A small tool calculator calendar in month
</p>

[package]: https://www.npmjs.com/package/@kotonosora-tech/date-utils
[version-badge]: https://img.shields.io/npm/v/@kotonosora-tech/date-utils
[license]: https://github.com/KotonoSora/date-utils/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/KotonoSora/date-utils?color=b

[![version][version-badge]][package]
[![MIT License][license-badge]][license]

</div>

<hr />

<details><summary>Table of Contents</summary><p>

- [Installation](#installation)
- [Features](#features)
  - [Get Key Month](#get-key-month)
  - [Get Page Month](#get-page-month)
- [Authors](#authors)
- [LICENSE](#license)
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

<details><summary>Example:</summary><p>

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
</p></details>

### Get Page Month

> Return list string format `YYYY-MM-DD` of page calendar by first day of week, from and to date

```javascript
getPageMonth(param: IPageMonth): string[]
```

<details><summary>Example:</summary><p>

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
</p></details>

## Authors
[Nguyễn Duy Thắng](https://kotonosora.dev)

## License
[MIT](LICENSE)
