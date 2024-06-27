import { SAVE_BOOKING_DETAILS } from "./ActionType";

export const saveBookingDetails=(bookingDetails)=>{
    return {
        type:SAVE_BOOKING_DETAILS,
        payload:bookingDetails
    }
}