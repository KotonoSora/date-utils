import { FIRST_DAY_OF_WEEK } from './constants';
export interface IPageMonth {
    firstDayOfWeek: FIRST_DAY_OF_WEEK;
    fromDate: string;
    toDate: string;
}
export default function getPageMonth(props: IPageMonth): string[];
