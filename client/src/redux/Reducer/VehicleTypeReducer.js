import {SET_VEHICLE_TYPE} from '../Actions/ActionType';
import initialState from './initialState.json'

export const vehicleModelReducer=(state=initialState.vehicleType,action)=>{
    switch(action.type){
        case SET_VEHICLE_TYPE:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
    }
}