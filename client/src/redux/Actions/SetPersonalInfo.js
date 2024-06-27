import {SET_PERSONAL_INFO} from './ActionType';


export const setPersonalInfo=(personalInfo)=>{
    return{
        type:SET_PERSONAL_INFO,
        payload:personalInfo
    }
}