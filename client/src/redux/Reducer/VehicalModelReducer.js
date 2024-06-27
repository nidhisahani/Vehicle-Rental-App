import {SET_VEHICLE_MODEL} from '../Actions/ActionType';
import initialState from './initialState.json'

export const vehicleModelReducer=(state=initialState.vehicleModel,action)=>{
    switch(action.type){
        case SET_VEHICLE_MODEL:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state
    }
}