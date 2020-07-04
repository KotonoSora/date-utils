import { Moment } from 'moment';
import { START_DATE_ACTION } from './constants';
interface IProps {
    initDate: Moment;
    monthStartDate: number;
    monthStartDateAction: START_DATE_ACTION;
    holidayData: string[];
}
export default function getKeyMonth(props: IProps): string;
export {};
