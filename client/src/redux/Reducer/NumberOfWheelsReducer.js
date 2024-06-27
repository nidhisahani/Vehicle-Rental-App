import {SET_NUMBER_OF_WHEEL} from '../Actions/ActionType';
import initialState from './initialState.json'

export const numberOfWheelsReducer=(state=initialState.numberOfWheels,action)=>{
    switch(action.type){
        case SET_NUMBER_OF_WHEEL:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
    }
}