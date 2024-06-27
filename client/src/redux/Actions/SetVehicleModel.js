import {SET_VEHICLE_MODEL} from './ActionType';

export const setVehicleModel=(model)=>{
    return {
        type:SET_VEHICLE_MODEL,
        payload:model
    }
}
