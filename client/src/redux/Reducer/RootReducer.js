import { combineReducers } from "redux";
import {bookingDetailsReducer} from './BookingDetailsReducer'
import { dateRangeReducer } from "./DateRangeReducer";
import { personalInfoReducer } from "./PersonalInfoReducer";
import { vehicleModelReducer } from "./VehicalModelReducer";
import { numberOfWheelsReducer } from "./NumberOfWheelsReducer";

export const rootReducer=combineReducers({
    personalInfoReducer:personalInfoReducer,
    bookingDetailsReducer:bookingDetailsReducer,
    dateRangeReducer:dateRangeReducer,
    vehicleModelReducer:vehicleModelReducer,
    numberOfWheelsReducer:numberOfWheelsReducer
})