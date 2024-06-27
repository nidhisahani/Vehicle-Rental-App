import {SET_DATE_RANGE} from './ActionType';

export const setDateRange=(dateRange)=>{
    return{
        type:SET_DATE_RANGE,
        payload:dateRange
    }
}