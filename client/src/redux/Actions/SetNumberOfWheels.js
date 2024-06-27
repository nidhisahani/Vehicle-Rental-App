import {SET_NUMBER_OF_WHEEL} from './ActionType';

export const setNumberOfWheels=(wheels)=>{
    return{
        type:SET_NUMBER_OF_WHEEL,
        payload:wheels
    }
}