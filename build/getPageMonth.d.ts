import { Moment } from 'moment';
import { FIRST_DAY_OF_WEEK } from './constants';
export interface IPageMonth {
    firstDayOfWeek: FIRST_DAY_OF_WEEK;
    fromDate: string;
    toDate: string;
}
export declare function isGTE(a: Moment, b: Moment): boolean;
export declare function isLTE(a: Moment, b: Moment): boolean;
export default function getPageMonth(props: IPageMonth): string[];
