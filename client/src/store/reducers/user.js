
import axios from "axios";
import {setLoader} from "./loader";
import {apilogin} from "../../api/config";

// ACTION TYPES
const SET_USER = "SET_USER"
const SET_USER_TOKEN = "SET_USER_TOKEN"
const UNSET_USER = "UNSET_USER"

export const setUser = (user) => {
    return{
        type: SET_USER,
        payload: user,
    }
}

export const unsetUser = () => {
    return {
        type: UNSET_USER,
        payload: null,
    }
}

const initialState = {
    user: null,
    token: null,
}

export default function (state = initialState, action){

    switch (action.type){
        case SET_USER:
            return{
                ...state,
                user: action.payload,
                token: action.payload.token
            }
        case UNSET_USER:
            return {
                ...state,
                user: null,
                token: null,
            }

        default: return state
    }
}