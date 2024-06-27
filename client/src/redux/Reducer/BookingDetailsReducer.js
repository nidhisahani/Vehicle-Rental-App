import {SAVE_BOOKING_DETAILS} from '../Actions/ActionType';
import initialState from './initialState.json'

export const bookingDetailsReducer=(state=initialState.bookingDetails,action)=>{
    switch(action.type){
        case SAVE_BOOKING_DETAILS:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
    }
}