import { START_DATE_ACTION } from './constants';
export interface IProps {
    initDate: string;
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
