//ACTION TYPES
const FILTER_TOGGLE = "FILTER_TOGGLE"
const SELECT_CATEGORY = "SELECT_CATEGORY"

//ACTIONS
export const filterToggle = (param) => {
    return{
        type: FILTER_TOGGLE,
        payload: param
    }
}
export const selectCategory = (param) => {
    return{
        type: SELECT_CATEGORY,
        payload: param
    }
}

//INITIAL STATE
const initialState = {
    filter: false,
    selectedCategory: {}
}

export default function (state = initialState, action){
    switch (action.type){
        case FILTER_TOGGLE:
            return {
                ...state,
                filter: action.payload
            }
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }
        default: return state
    }
}
