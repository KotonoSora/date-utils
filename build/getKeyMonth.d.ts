import { Moment } from 'moment';
import { START_DATE_ACTION } from './constants';
interface IProps {
    initDate: Moment;
    monthStartDate: number;
    monthStartDateAction: START_DATE_ACTION;
    holidayData: string[];
}
export interface IKeymonth {
    keyMonth: string;
    firstDate: string;
    lastDate: string;
}
export default function getKeyMonth(props: IProps): IKeymonth;
export {};
