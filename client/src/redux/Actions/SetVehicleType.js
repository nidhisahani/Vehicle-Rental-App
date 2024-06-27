import {SET_VEHICLE_TYPE} from './ActionType';

export const setVehicleType=(vehicleType)=>{
    return{
        type:SET_VEHICLE_TYPE,
        payload:vehicleType
    }
}