import {SET_DATE_RANGE} from '../Actions/ActionType';
import initialState from './initialState.json'

export const dateRangeReducer=(state=initialState.dateRange,action)=>{
    switch(action.type){
        case SET_DATE_RANGE:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
    }
}